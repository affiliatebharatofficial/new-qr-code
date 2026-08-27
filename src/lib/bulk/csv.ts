import type { QRType } from '../qr/types';

export interface CsvRowData {
  rowNumber: number;
  name: string;
  type: QRType;
  payload: string;
  destination?: string;
  isValid: boolean;
  error?: string;
}

export interface CsvParseResult {
  totalRows: number;
  validRows: CsvRowData[];
  invalidRows: CsvRowData[];
  errors: { rowNumber: number; error: string; field?: string }[];
}

/**
 * Escapes values against formula injection (=, +, -, @) and CSV special characters.
 */
export function sanitizeCsvCell(val: any): string {
  if (val === null || val === undefined) return '';
  let str = String(val).trim();

  // Prevent spreadsheet formula injection
  if (/^[=+\-@\t\r]/.test(str)) {
    str = `'${str}`;
  }

  // Escape quotes
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    str = `"${str.replace(/"/g, '""')}"`;
  }

  return str;
}

/**
 * Parses raw CSV lines with support for quoted strings and commas.
 */
export function splitCsvLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let insideQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (insideQuotes && line[i + 1] === '"') {
        current += '"';
        i++; // skip escaped quote
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

/**
 * Parses and validates CSV for bulk QR code generation.
 */
export function parseBulkCsv(csvContent: string, isDynamic = false): CsvParseResult {
  const lines = csvContent.split(/\r?\n/).map((l) => l.trim()).filter((l) => l.length > 0);

  if (lines.length < 2) {
    return {
      totalRows: 0,
      validRows: [],
      invalidRows: [],
      errors: [{ rowNumber: 1, error: 'CSV file is empty or missing data rows.' }],
    };
  }

  // Parse header row
  const headerCols = splitCsvLine(lines[0]).map((h) => h.toLowerCase().replace(/[^a-z0-9_]/g, ''));
  const nameIdx = headerCols.findIndex((h) => h === 'name' || h === 'title' || h === 'label');
  const typeIdx = headerCols.findIndex((h) => h === 'type' || h === 'qr_type' || h === 'format');
  const dataIdx = headerCols.findIndex((h) => h === 'data' || h === 'payload' || h === 'destination' || h === 'url' || h === 'target');

  if (dataIdx === -1) {
    return {
      totalRows: 0,
      validRows: [],
      invalidRows: [],
      errors: [{ rowNumber: 1, error: 'Required column "data", "url", or "destination" is missing from CSV header.' }],
    };
  }

  const validRows: CsvRowData[] = [];
  const invalidRows: CsvRowData[] = [];
  const errors: { rowNumber: number; error: string; field?: string }[] = [];

  for (let i = 1; i < lines.length; i++) {
    const rowNumber = i + 1;
    const cols = splitCsvLine(lines[i]);

    if (cols.length === 1 && cols[0] === '') continue; // Skip blank lines

    const rawName = nameIdx !== -1 && cols[nameIdx] ? cols[nameIdx] : `QR Code ${rowNumber - 1}`;
    let rawType = (typeIdx !== -1 && cols[typeIdx] ? cols[typeIdx].toLowerCase() : 'url') as QRType;
    const rawData = cols[dataIdx] || '';

    // Validate type
    const supportedTypes: QRType[] = [
      'url', 'text', 'wifi', 'vcard', 'email', 'phone', 'sms', 'whatsapp', 'location', 'upi', 'social', 'app', 'event', 'review'
    ];
    if (!supportedTypes.includes(rawType)) {
      rawType = 'url'; // Default fallback
    }

    let errorMsg: string | undefined;

    if (!rawData || rawData.trim().length === 0) {
      errorMsg = 'Missing data payload or destination URL.';
    } else if (isDynamic) {
      if (!['url', 'social', 'location', 'whatsapp', 'review', 'app'].includes(rawType)) {
        errorMsg = `Dynamic QR is only supported for URL-based types (got "${rawType}").`;
      } else if (!/^https?:\/\//i.test(rawData.trim())) {
        errorMsg = 'Dynamic QR destination must be a valid http:// or https:// URL.';
      }
    }

    const rowObj: CsvRowData = {
      rowNumber,
      name: rawName.trim() || `QR_${rowNumber - 1}`,
      type: rawType,
      payload: rawData.trim(),
      destination: isDynamic ? rawData.trim() : undefined,
      isValid: !errorMsg,
      error: errorMsg,
    };

    if (errorMsg) {
      invalidRows.push(rowObj);
      errors.push({ rowNumber, error: errorMsg, field: 'data' });
    } else {
      validRows.push(rowObj);
    }
  }

  return {
    totalRows: validRows.length + invalidRows.length,
    validRows,
    invalidRows,
    errors,
  };
}

/**
 * Generates an error CSV string for download.
 */
export function generateErrorCsv(invalidRows: CsvRowData[]): string {
  const headers = ['row_number', 'name', 'type', 'data', 'error_reason'];
  const lines = [headers.join(',')];

  for (const r of invalidRows) {
    const row = [
      r.rowNumber,
      sanitizeCsvCell(r.name),
      sanitizeCsvCell(r.type),
      sanitizeCsvCell(r.destination || r.payload),
      sanitizeCsvCell(r.error || 'Validation error'),
    ];
    lines.push(row.join(','));
  }

  return lines.join('\n');
}

/**
 * Generates an export CSV from saved QR records.
 */
export function generateExportCsv(qrCodes: any[]): string {
  const headers = ['name', 'type', 'is_dynamic', 'payload', 'destination', 'short_code', 'scans_count', 'status', 'created_at'];
  const lines = [headers.join(',')];

  for (const qr of qrCodes) {
    const row = [
      sanitizeCsvCell(qr.name),
      sanitizeCsvCell(qr.type),
      qr.is_dynamic ? '1' : '0',
      sanitizeCsvCell(qr.payload),
      sanitizeCsvCell(qr.destination || ''),
      sanitizeCsvCell(qr.short_code || ''),
      qr.scans_count || 0,
      sanitizeCsvCell(qr.status || 'active'),
      new Date(qr.created_at).toISOString(),
    ];
    lines.push(row.join(','));
  }

  return lines.join('\n');
}

/**
 * Provides downloadable starter CSV templates.
 */
export function getSampleCsv(type: 'static_url' | 'dynamic_url' | 'wifi' | 'vcard'): string {
  switch (type) {
    case 'static_url':
      return `name,type,data\nCompany Website,URL,https://example.com\nTwitter Profile,URL,https://twitter.com/mybrand\nOnline Store,URL,https://store.example.com`;
    case 'dynamic_url':
      return `name,type,destination\nRestaurant Menu,URL,https://myrestaurant.com/menu\nSummer Campaign,URL,https://example.com/promo\nEvent Checkin,URL,https://event.com/welcome`;
    case 'wifi':
      return `name,type,data\nGuest WiFi,WIFI,WIFI:S:GuestNetwork;T:WPA;P:SecretPassword123;;\nOffice WiFi,WIFI,WIFI:S:OfficeNetwork;T:WPA;P:OfficeSecurePass;;`;
    case 'vcard':
      return `name,type,data\nJohn Doe Contact,VCARD,"BEGIN:VCARD\\nVERSION:3.0\\nN:Doe;John;;;\\nFN:John Doe\\nORG:Example Corp\\nTEL:+15551234567\\nEMAIL:john@example.com\\nEND:VCARD"`;
    default:
      return `name,type,data\nExample 1,URL,https://example.com\nExample 2,URL,https://example.org`;
  }
}
