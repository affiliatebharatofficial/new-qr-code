import type { APIRoute } from 'astro';
import { getDb } from '../../../lib/db/client';
import { getCurrentUser } from '../../../lib/auth/jwt';
import { canUseBulkQr } from '../../../lib/billing/entitlements';
import { parseBulkCsv } from '../../../lib/bulk/csv';
import { jsonSuccess, jsonError } from '../../../lib/api/response';

function generateShortCode(): string {
  const chars = '23456789abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export const GET: APIRoute = async ({ request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) return jsonError('UNAUTHORIZED', 'Authentication required.', 401);

  const db = getDb(locals);
  const res = await db.prepare(
    'SELECT * FROM bulk_jobs WHERE user_id = ? ORDER BY created_at DESC LIMIT 50'
  ).bind(user.id).all();

  return jsonSuccess({ jobs: res.results || [] });
};

export const POST: APIRoute = async ({ request, locals }) => {
  const user = await getCurrentUser(request, locals);
  if (!user) return jsonError('UNAUTHORIZED', 'Please log in to generate QR codes in bulk.', 401);

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonError('INVALID_JSON', 'Malformed JSON payload.', 400);
  }

  const { jobName, csvData, rows: providedRows, isDynamic = false, styleConfig = {} } = body;

  let itemsToProcess = providedRows;
  if (!itemsToProcess && csvData) {
    const parseRes = parseBulkCsv(csvData, isDynamic);
    if (parseRes.validRows.length === 0) {
      return jsonError('CSV_ERROR', parseRes.errors[0]?.error || 'No valid rows found in CSV.', 400);
    }
    itemsToProcess = parseRes.validRows;
  }

  if (!Array.isArray(itemsToProcess) || itemsToProcess.length === 0) {
    return jsonError('VALIDATION_ERROR', 'No QR code items provided for generation.', 400);
  }

  // 1. Entitlement check for bulk quota
  const bulkCheck = await canUseBulkQr(user.id, itemsToProcess.length, locals);
  if (!bulkCheck.allowed) {
    return jsonError('PLAN_LIMIT_REACHED', bulkCheck.reason || 'Bulk QR creation limit reached.', 403);
  }

  const db = getDb(locals);
  const jobId = `job_${crypto.randomUUID()}`;
  const now = Date.now();
  const name = (jobName || `Bulk Batch - ${new Date().toLocaleDateString()}`).trim();

  // Create job record in bulk_jobs
  await db.prepare(`
    INSERT INTO bulk_jobs (
      id, user_id, total_count, processed_count, status, created_at, updated_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(
    jobId,
    user.id,
    itemsToProcess.length,
    0,
    'processing',
    now,
    now
  ).run();

  let successCount = 0;
  let failCount = 0;
  const host = request.headers.get('host') || 'freeqrcode-generator.com';
  const proto = request.headers.get('x-forwarded-proto') || 'https';
  const createdQrs: { id: string; name: string; payload: string; shortCode: string | null }[] = [];

  // Process rows
  for (let idx = 0; idx < itemsToProcess.length; idx++) {
    const item = itemsToProcess[idx];
    const rowNum = item.rowNumber || idx + 1;
    const itemName = (item.name || `QR Code ${rowNum}`).trim();
    const itemType = item.type || 'url';
    const itemTarget = item.payload || item.destination || item.data || '';

    try {
      const qrId = `qr_${crypto.randomUUID()}`;
      let shortCode: string | null = null;
      let finalPayload = itemTarget;
      let finalDest = item.destination || itemTarget;

      if (isDynamic) {
        shortCode = generateShortCode();
        finalPayload = `${proto}://${host}/r/${shortCode}`;
      }

      // Insert into qr_codes
      await db.prepare(`
        INSERT INTO qr_codes (
          id, user_id, short_code, name, type, destination, payload, style_config, is_dynamic, status, scans_count, created_at, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        qrId,
        user.id,
        shortCode,
        itemName,
        itemType,
        isDynamic ? finalDest : null,
        finalPayload,
        JSON.stringify(styleConfig),
        isDynamic ? 1 : 0,
        'active',
        0,
        now,
        now
      ).run();

      // Record job item in bulk_job_items
      await db.prepare(`
        INSERT INTO bulk_job_items (
          id, job_id, row_index, name, payload, qr_id, status, error, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        `bji_${crypto.randomUUID()}`,
        jobId,
        rowNum,
        itemName,
        finalPayload,
        qrId,
        'success',
        null,
        now
      ).run();

      createdQrs.push({
        id: qrId,
        name: itemName,
        payload: finalPayload,
        shortCode,
      });

      successCount++;
    } catch (err: any) {
      failCount++;
      await db.prepare(`
        INSERT INTO bulk_job_items (
          id, job_id, row_index, name, payload, qr_id, status, error, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        `bji_${crypto.randomUUID()}`,
        jobId,
        rowNum,
        itemName,
        itemTarget,
        null,
        'failed',
        err?.message || 'Database error during QR generation',
        now
      ).run();
    }
  }

  // Update job completion
  const completedAt = Date.now();
  await db.prepare(`
    UPDATE bulk_jobs SET
      status = 'completed',
      processed_count = ?,
      updated_at = ?
    WHERE id = ?
  `).bind(
    successCount,
    completedAt,
    jobId
  ).run();

  return jsonSuccess({
    message: 'Bulk generation completed successfully.',
    job: {
      id: jobId,
      name,
      totalItems: itemsToProcess.length,
      successfulItems: successCount,
      failedItems: failCount,
      status: 'completed',
      completedAt,
    },
    qrs: createdQrs,
  }, 201);
};
