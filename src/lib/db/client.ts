export interface D1Database {
  prepare(query: string): D1PreparedStatement;
  batch(statements: D1PreparedStatement[]): Promise<D1Result[]>;
  exec(query: string): Promise<D1ExecResult>;
}

export interface D1PreparedStatement {
  bind(...values: any[]): D1PreparedStatement;
  first<T = any>(colName?: string): Promise<T | null>;
  all<T = any>(): Promise<D1Result<T>>;
  run(): Promise<D1Result>;
}

export interface D1Result<T = any> {
  results?: T[];
  success: boolean;
  meta?: any;
  error?: string;
}

export interface D1ExecResult {
  count: number;
  duration: number;
}

// In-Memory Dev Store for local fallback and test isolation
class MemoryStore {
  users: Map<string, any> = new Map();
  qrCodes: Map<string, any> = new Map();
  qrScans: any[] = [];
  assets: Map<string, any> = new Map();
  subscriptions: Map<string, any> = new Map();
  webhookEvents: Map<string, any> = new Map();
  templates: Map<string, any> = new Map();
  bulkJobs: Map<string, any> = new Map();
  bulkJobItems: any[] = [];
  landingPages: Map<string, any> = new Map();
  landingPageReports: any[] = [];
  adminAuditLogs: any[] = [];
  abuseReports: Map<string, any> = new Map();
  usage: Map<string, any> = new Map();

  constructor() {
    const now = Date.now();
    this.users.set('usr_admin', {
      id: 'usr_admin',
      email: 'admin@example.com',
      password_hash: 'ddf450e7c7e4ab14b868535f4dba5984:c0f4ed085e9d103743c5f017cd2af507cbd2952f770eceb27b72728b97814608',
      name: 'System Admin',
      role: 'admin',
      plan: 'business',
      status: 'active',
      created_at: now,
      updated_at: now,
    });
  }

  clearAll() {
    this.users.clear();
    this.qrCodes.clear();
    this.qrScans = [];
    this.assets.clear();
    this.subscriptions.clear();
    this.webhookEvents.clear();
    this.templates.clear();
    this.bulkJobs.clear();
    this.bulkJobItems = [];
    this.landingPages.clear();
    this.landingPageReports = [];
    this.adminAuditLogs = [];
    this.abuseReports.clear();
    this.usage.clear();
  }
}

export const devMemoryStore = new MemoryStore();

/**
 * Creates a robust fallback in-memory D1 compatibility mock for development/tests.
 */
export function createMemoryD1(): D1Database {
  return {
    prepare(query: string): D1PreparedStatement {
      let boundValues: any[] = [];
      const stmt: D1PreparedStatement = {
        bind(...values: any[]) {
          boundValues = values;
          return stmt;
        },
        async first<T = any>(): Promise<T | null> {
          const res = await stmt.all<T>();
          return res.results && res.results.length > 0 ? res.results[0] : null;
        },
        async all<T = any>(): Promise<D1Result<T>> {
          const q = query.trim().toUpperCase();

          // 1. SELECT FROM USERS
          if (q.includes('FROM USERS')) {
            if (q.includes('WHERE EMAIL =')) {
              const email = boundValues[0];
              const found = Array.from(devMemoryStore.users.values()).find((u) => u.email === email);
              return { success: true, results: found ? [found as T] : [] };
            }
            if (q.includes('WHERE ID =')) {
              const id = boundValues[0];
              const found = devMemoryStore.users.get(id);
              return { success: true, results: found ? [found as T] : [] };
            }
            return { success: true, results: Array.from(devMemoryStore.users.values()) as T[] };
          }

          // 2. COUNT(*) QUERIES
          if (q.includes('COUNT(*)') && q.includes('FROM QR_CODES')) {
            let list = Array.from(devMemoryStore.qrCodes.values());
            if (q.includes('WHERE USER_ID =')) {
              const userId = boundValues[0];
              list = list.filter((qr) => qr.user_id === userId);
              if (q.includes('IS_DYNAMIC = 1')) {
                list = list.filter((qr) => qr.is_dynamic === 1 && (qr.status === 'active' || qr.status === 'paused'));
              }
            }
            return { success: true, results: [{ total: list.length }] as T[] };
          }

          if (q.includes('COUNT(*) AS TOTAL_SCANS FROM QR_SCANS') || q.includes('COUNT(*) AS TOTAL FROM QR_SCANS')) {
            if (q.includes('WHERE QR_ID =')) {
              const qrId = boundValues[0];
              const matching = devMemoryStore.qrScans.filter((s) => s.qr_id === qrId);
              return { success: true, results: [{ total: matching.length, total_scans: matching.length }] as T[] };
            }
            return { success: true, results: [{ total: devMemoryStore.qrScans.length, total_scans: devMemoryStore.qrScans.length }] as T[] };
          }

          if (q.includes('COUNT(*)') && q.includes('FROM TEMPLATES')) {
            let list = Array.from(devMemoryStore.templates.values());
            if (q.includes('WHERE USER_ID =')) {
              const userId = boundValues[0];
              list = list.filter((t) => t.user_id === userId);
            }
            return { success: true, results: [{ total: list.length }] as T[] };
          }

          if (q.includes('COUNT(*)') && q.includes('FROM LANDING_PAGES')) {
            let list = Array.from(devMemoryStore.landingPages.values());
            if (q.includes('WHERE USER_ID =')) {
              const userId = boundValues[0];
              list = list.filter((p) => p.user_id === userId);
            }
            return { success: true, results: [{ total: list.length }] as T[] };
          }

          // 3. SELECT FROM QR_CODES
          if (q.includes('FROM QR_CODES')) {
            let list = Array.from(devMemoryStore.qrCodes.values());

            if (q.includes('WHERE ID = ? AND USER_ID = ?')) {
              const [id, userId] = boundValues;
              const found = devMemoryStore.qrCodes.get(id);
              return { success: true, results: found && found.user_id === userId ? [found as T] : [] };
            }

            if (q.includes('WHERE ID = ?')) {
              const id = boundValues[0];
              const found = devMemoryStore.qrCodes.get(id);
              return { success: true, results: found ? [found as T] : [] };
            }

            if (q.includes('WHERE SHORT_CODE =')) {
              const code = boundValues[0];
              const found = list.find((qr) => qr.short_code === code);
              return { success: true, results: found ? [found as T] : [] };
            }

            if (q.includes('WHERE USER_ID =')) {
              const userId = boundValues[0];
              list = list.filter((qr) => qr.user_id === userId);
            }

            return { success: true, results: list as T[] };
          }

          // 4. SELECT FROM QR_ASSETS
          if (q.includes('FROM QR_ASSETS')) {
            let list = Array.from(devMemoryStore.assets.values());
            if (q.includes('SUM(FILE_SIZE)')) {
              if (q.includes('WHERE USER_ID =')) {
                const userId = boundValues[0];
                list = list.filter((a) => a.user_id === userId);
              }
              const totalBytes = list.reduce((sum, a) => sum + (a.file_size || 0), 0);
              return { success: true, results: [{ total_bytes: totalBytes }] as T[] };
            }
            if (q.includes('WHERE QR_ID =')) {
              const qrId = boundValues[0];
              list = list.filter((a) => a.qr_id === qrId);
            }
            return { success: true, results: list as T[] };
          }

          // 5. SELECT FROM QR_SCANS
          if (q.includes('FROM QR_SCANS WHERE QR_ID =')) {
            const qrId = boundValues[0];
            const scans = devMemoryStore.qrScans.filter((s) => s.qr_id === qrId);
            return { success: true, results: scans as T[] };
          }

          // 6. SELECT FROM SUBSCRIPTIONS
          if (q.includes('FROM SUBSCRIPTIONS')) {
            let list = Array.from(devMemoryStore.subscriptions.values());
            if (q.includes('WHERE USER_ID =')) {
              const userId = boundValues[0];
              list = list.filter((s) => s.user_id === userId);
            }
            return { success: true, results: list as T[] };
          }

          // 7. SELECT FROM WEBHOOK_EVENTS
          if (q.includes('FROM WEBHOOK_EVENTS')) {
            let list = Array.from(devMemoryStore.webhookEvents.values());
            if (q.includes('WHERE PROVIDER =') && q.includes('EVENT_ID =')) {
              const [provider, eventId] = boundValues;
              list = list.filter((e) => e.provider === provider && e.event_id === eventId);
            }
            return { success: true, results: list as T[] };
          }

          // 8. SELECT FROM TEMPLATES
          if (q.includes('FROM TEMPLATES')) {
            let list = Array.from(devMemoryStore.templates.values());
            if (q.includes('WHERE ID = ? AND USER_ID = ?')) {
              const [id, userId] = boundValues;
              const found = devMemoryStore.templates.get(id);
              return { success: true, results: found && found.user_id === userId ? [found as T] : [] };
            }
            if (q.includes('WHERE ID =')) {
              const id = boundValues[0];
              const found = devMemoryStore.templates.get(id);
              return { success: true, results: found ? [found as T] : [] };
            }
            if (q.includes('WHERE USER_ID =')) {
              const userId = boundValues[0];
              list = list.filter((t) => t.user_id === userId);
            }
            return { success: true, results: list as T[] };
          }

          // 9. SELECT FROM BULK_JOBS
          if (q.includes('FROM BULK_JOBS')) {
            let list = Array.from(devMemoryStore.bulkJobs.values());
            if (q.includes('WHERE ID = ? AND USER_ID = ?')) {
              const [id, userId] = boundValues;
              const found = devMemoryStore.bulkJobs.get(id);
              return { success: true, results: found && found.user_id === userId ? [found as T] : [] };
            }
            if (q.includes('WHERE ID =')) {
              const id = boundValues[0];
              const found = devMemoryStore.bulkJobs.get(id);
              return { success: true, results: found ? [found as T] : [] };
            }
            if (q.includes('WHERE USER_ID =')) {
              const userId = boundValues[0];
              list = list.filter((j) => j.user_id === userId);
            }
            return { success: true, results: list as T[] };
          }

          // 10. SELECT FROM BULK_JOB_ITEMS
          if (q.includes('FROM BULK_JOB_ITEMS')) {
            let list = devMemoryStore.bulkJobItems;
            if (q.includes('WHERE JOB_ID =')) {
              const jobId = boundValues[0];
              list = list.filter((item) => item.job_id === jobId);
            }
            return { success: true, results: list as T[] };
          }

          // 11. SELECT FROM LANDING_PAGES
          if (q.includes('FROM LANDING_PAGES')) {
            let list = Array.from(devMemoryStore.landingPages.values());
            if (q.includes('WHERE SLUG =')) {
              const slug = boundValues[0];
              const found = list.find((p) => p.slug === slug);
              return { success: true, results: found ? [found as T] : [] };
            }
            if (q.includes('WHERE ID = ? AND USER_ID = ?')) {
              const [id, userId] = boundValues;
              const found = devMemoryStore.landingPages.get(id);
              return { success: true, results: found && found.user_id === userId ? [found as T] : [] };
            }
            if (q.includes('WHERE ID =')) {
              const id = boundValues[0];
              const found = devMemoryStore.landingPages.get(id);
              return { success: true, results: found ? [found as T] : [] };
            }
            if (q.includes('WHERE USER_ID =')) {
              const userId = boundValues[0];
              list = list.filter((p) => p.user_id === userId);
            }
            return { success: true, results: list as T[] };
          }

          // 12. SELECT FROM LANDING_PAGE_REPORTS
          if (q.includes('FROM LANDING_PAGE_REPORTS')) {
            let list = devMemoryStore.landingPageReports;
            if (q.includes('WHERE PAGE_ID =')) {
              const pageId = boundValues[0];
              list = list.filter((r) => r.page_id === pageId);
            }
            return { success: true, results: list as T[] };
          }

          // 13. SELECT FROM ADMIN_AUDIT_LOGS
          if (q.includes('FROM ADMIN_AUDIT_LOGS')) {
            let list = devMemoryStore.adminAuditLogs;
            if (q.includes('ORDER BY CREATED_AT DESC')) {
              list = [...list].sort((a, b) => b.created_at - a.created_at);
            }
            return { success: true, results: list as T[] };
          }

          // 14. SELECT FROM ABUSE_REPORTS
          if (q.includes('FROM ABUSE_REPORTS')) {
            let list = Array.from(devMemoryStore.abuseReports.values());
            if (q.includes('WHERE ID =')) {
              const id = boundValues[0];
              const found = devMemoryStore.abuseReports.get(id);
              return { success: true, results: found ? [found as T] : [] };
            }
            if (q.includes('WHERE STATUS =')) {
              const status = boundValues[0];
              list = list.filter((r) => r.status === status);
            }
            if (q.includes('ORDER BY CREATED_AT DESC')) {
              list = [...list].sort((a, b) => b.created_at - a.created_at);
            }
            return { success: true, results: list as T[] };
          }

          return { success: true, results: [] };
        },
        async run(): Promise<D1Result> {
          const q = query.trim();
          const upper = q.toUpperCase();

          // 1. DELETE QUERIES
          if (upper.startsWith('DELETE FROM')) {
            if (upper.includes('USERS')) {
              if (upper.includes('WHERE ID =')) {
                devMemoryStore.users.delete(boundValues[0]);
              } else {
                devMemoryStore.users.clear();
              }
            } else if (upper.includes('QR_CODES')) {
              if (upper.includes('WHERE ID =')) {
                devMemoryStore.qrCodes.delete(boundValues[0]);
              } else {
                devMemoryStore.qrCodes.clear();
              }
            } else if (upper.includes('QR_ASSETS')) {
              if (upper.includes('WHERE QR_ID =')) {
                const qrId = boundValues[0];
                for (const [k, v] of devMemoryStore.assets.entries()) {
                  if (v.qr_id === qrId) devMemoryStore.assets.delete(k);
                }
              } else {
                devMemoryStore.assets.clear();
              }
            } else if (upper.includes('QR_SCANS')) {
              devMemoryStore.qrScans = [];
            } else if (upper.includes('SUBSCRIPTIONS')) {
              devMemoryStore.subscriptions.clear();
            } else if (upper.includes('WEBHOOK_EVENTS')) {
              devMemoryStore.webhookEvents.clear();
            } else if (upper.includes('TEMPLATES')) {
              if (upper.includes('WHERE ID =')) {
                devMemoryStore.templates.delete(boundValues[0]);
              } else {
                devMemoryStore.templates.clear();
              }
            } else if (upper.includes('BULK_JOBS')) {
              if (upper.includes('WHERE ID =')) {
                devMemoryStore.bulkJobs.delete(boundValues[0]);
              } else {
                devMemoryStore.bulkJobs.clear();
              }
            } else if (upper.includes('BULK_JOB_ITEMS')) {
              devMemoryStore.bulkJobItems = [];
            } else if (upper.includes('LANDING_PAGES')) {
              if (upper.includes('WHERE ID =')) {
                devMemoryStore.landingPages.delete(boundValues[0]);
              } else {
                devMemoryStore.landingPages.clear();
              }
            } else if (upper.includes('LANDING_PAGE_REPORTS')) {
              devMemoryStore.landingPageReports = [];
            }
            return { success: true };
          }

          // 2. INSERT INTO USERS
          if (upper.includes('INSERT INTO USERS')) {
            const match = q.match(/\(([^)]+)\)\s+VALUES/i);
            const cols = match ? match[1].split(',').map((c) => c.trim().toLowerCase()) : [];
            const record: Record<string, any> = {};
            cols.forEach((col, i) => {
              record[col] = boundValues[i];
            });
            devMemoryStore.users.set(record.id, record);
            return { success: true };
          }

          // 3. INSERT INTO QR_CODES
          if (upper.includes('INSERT INTO QR_CODES')) {
            const match = q.match(/\(([^)]+)\)\s+VALUES/i);
            const cols = match ? match[1].split(',').map((c) => c.trim().toLowerCase()) : [];
            const record: Record<string, any> = {
              scans_count: 0,
              status: 'active',
            };
            cols.forEach((col, i) => {
              record[col] = boundValues[i];
            });
            devMemoryStore.qrCodes.set(record.id, record);
            return { success: true };
          }

          // 4. INSERT INTO QR_ASSETS
          if (upper.includes('INSERT INTO QR_ASSETS')) {
            const match = q.match(/\(([^)]+)\)\s+VALUES/i);
            const cols = match ? match[1].split(',').map((c) => c.trim().toLowerCase()) : [];
            const record: Record<string, any> = {};
            cols.forEach((col, i) => {
              record[col] = boundValues[i];
            });
            devMemoryStore.assets.set(record.id, record);
            return { success: true };
          }

          // 5. INSERT INTO QR_SCANS
          if (upper.includes('INSERT INTO QR_SCANS')) {
            const [id, qr_id, scanned_at, country, region, city, device_type, browser, os, referrer, ip_hash] = boundValues;
            devMemoryStore.qrScans.push({ id, qr_id, scanned_at, country, region, city, device_type, browser, os, referrer, ip_hash });
            const existing = devMemoryStore.qrCodes.get(qr_id);
            if (existing) {
              existing.scans_count = (existing.scans_count || 0) + 1;
            }
            return { success: true };
          }

          // 6. INSERT INTO SUBSCRIPTIONS
          if (upper.includes('INSERT INTO SUBSCRIPTIONS')) {
            const match = q.match(/\(([^)]+)\)\s+VALUES/i);
            const cols = match ? match[1].split(',').map((c) => c.trim().toLowerCase()) : [];
            const record: Record<string, any> = {};
            cols.forEach((col, i) => {
              record[col] = boundValues[i];
            });
            devMemoryStore.subscriptions.set(record.id || record.user_id, record);
            return { success: true };
          }

          // 7. INSERT INTO WEBHOOK_EVENTS
          if (upper.includes('INSERT OR REPLACE INTO WEBHOOK_EVENTS') || upper.includes('INSERT INTO WEBHOOK_EVENTS')) {
            const match = q.match(/\(([^)]+)\)\s+VALUES/i);
            const cols = match ? match[1].split(',').map((c) => c.trim().toLowerCase()) : [];
            const record: Record<string, any> = {};
            cols.forEach((col, i) => {
              record[col] = boundValues[i];
            });
            devMemoryStore.webhookEvents.set(record.event_id || record.id, record);
            return { success: true };
          }

          // 8. INSERT INTO TEMPLATES
          if (upper.includes('INSERT INTO TEMPLATES')) {
            const match = q.match(/\(([^)]+)\)\s+VALUES/i);
            const cols = match ? match[1].split(',').map((c) => c.trim().toLowerCase()) : [];
            const record: Record<string, any> = {};
            cols.forEach((col, i) => {
              record[col] = boundValues[i];
            });
            devMemoryStore.templates.set(record.id, record);
            return { success: true };
          }

          // 9. INSERT INTO BULK_JOBS
          if (upper.includes('INSERT INTO BULK_JOBS')) {
            const match = q.match(/\(([^)]+)\)\s+VALUES/i);
            const cols = match ? match[1].split(',').map((c) => c.trim().toLowerCase()) : [];
            const record: Record<string, any> = {};
            cols.forEach((col, i) => {
              record[col] = boundValues[i];
            });
            devMemoryStore.bulkJobs.set(record.id, record);
            return { success: true };
          }

          // 10. INSERT INTO BULK_JOB_ITEMS
          if (upper.includes('INSERT INTO BULK_JOB_ITEMS')) {
            const match = q.match(/\(([^)]+)\)\s+VALUES/i);
            const cols = match ? match[1].split(',').map((c) => c.trim().toLowerCase()) : [];
            const record: Record<string, any> = {};
            cols.forEach((col, i) => {
              record[col] = boundValues[i];
            });
            devMemoryStore.bulkJobItems.push(record);
            return { success: true };
          }

          // 11. INSERT INTO LANDING_PAGES
          if (upper.includes('INSERT INTO LANDING_PAGES')) {
            const match = q.match(/\(([^)]+)\)\s+VALUES/i);
            const cols = match ? match[1].split(',').map((c) => c.trim().toLowerCase()) : [];
            const record: Record<string, any> = {};
            cols.forEach((col, i) => {
              record[col] = boundValues[i];
            });
            devMemoryStore.landingPages.set(record.id, record);
            return { success: true };
          }

          // 12. INSERT INTO LANDING_PAGE_REPORTS
          if (upper.includes('INSERT INTO LANDING_PAGE_REPORTS')) {
            const match = q.match(/\(([^)]+)\)\s+VALUES/i);
            const cols = match ? match[1].split(',').map((c) => c.trim().toLowerCase()) : [];
            const record: Record<string, any> = {};
            cols.forEach((col, i) => {
              record[col] = boundValues[i];
            });
            devMemoryStore.landingPageReports.push(record);
            return { success: true };
          }

          // 13. INSERT INTO ADMIN_AUDIT_LOGS
          if (upper.includes('INSERT INTO ADMIN_AUDIT_LOGS')) {
            const match = q.match(/\(([^)]+)\)\s+VALUES/i);
            const cols = match ? match[1].split(',').map((c) => c.trim().toLowerCase()) : [];
            const record: Record<string, any> = {};
            cols.forEach((col, i) => {
              record[col] = boundValues[i];
            });
            devMemoryStore.adminAuditLogs.push(record);
            return { success: true };
          }

          // 14. INSERT INTO ABUSE_REPORTS
          if (upper.includes('INSERT INTO ABUSE_REPORTS')) {
            const match = q.match(/\(([^)]+)\)\s+VALUES/i);
            const cols = match ? match[1].split(',').map((c) => c.trim().toLowerCase()) : [];
            const record: Record<string, any> = {};
            cols.forEach((col, i) => {
              record[col] = boundValues[i];
            });
            devMemoryStore.abuseReports.set(record.id, record);
            return { success: true };
          }

          // 10. INSERT INTO BULK_JOB_ITEMS
          if (upper.includes('INSERT INTO BULK_JOB_ITEMS')) {
            const match = q.match(/\(([^)]+)\)\s+VALUES/i);
            const cols = match ? match[1].split(',').map((c) => c.trim().toLowerCase()) : [];
            const record: Record<string, any> = {};
            cols.forEach((col, i) => {
              record[col] = boundValues[i];
            });
            devMemoryStore.bulkJobItems.push(record);
            return { success: true };
          }

          // 11. UPDATE SUBSCRIPTIONS
          if (upper.includes('UPDATE SUBSCRIPTIONS')) {
            const userId = boundValues[boundValues.length - (upper.includes('PROVIDER') ? 2 : 1)];
            const sub = Array.from(devMemoryStore.subscriptions.values()).find((s) => s.user_id === userId);
            if (sub) {
              if (upper.includes("STATUS = 'CANCELLED'")) {
                sub.status = 'cancelled';
                sub.current_period_end = boundValues[0];
                sub.updated_at = boundValues[1];
              } else if (upper.includes("STATUS = 'EXPIRED'")) {
                sub.status = 'expired';
                sub.updated_at = boundValues[0];
              } else if (upper.includes("STATUS = 'PAST_DUE'")) {
                sub.status = 'past_due';
                sub.updated_at = boundValues[0];
              }
            }
            return { success: true };
          }

          // 12. UPDATE WEBHOOK_EVENTS
          if (upper.includes('UPDATE WEBHOOK_EVENTS')) {
            const eventId = boundValues[2];
            const evt = devMemoryStore.webhookEvents.get(eventId);
            if (evt) {
              evt.processed = 1;
              evt.processed_at = boundValues[0];
            }
            return { success: true };
          }

          // 13. UPDATE TEMPLATES
          if (upper.includes('UPDATE TEMPLATES')) {
            const id = boundValues[boundValues.length - 1];
            const tpl = devMemoryStore.templates.get(id);
            if (tpl) {
              tpl.name = boundValues[0];
              tpl.description = boundValues[1];
              tpl.style_config = boundValues[2];
              tpl.updated_at = boundValues[3];
            }
            return { success: true };
          }

          // 14. UPDATE BULK_JOBS
          if (upper.includes('UPDATE BULK_JOBS')) {
            const id = boundValues[boundValues.length - 1];
            const job = devMemoryStore.bulkJobs.get(id);
            if (job) {
              job.status = 'completed';
              job.processed_items = boundValues[0];
              job.successful_items = boundValues[1];
              job.failed_items = boundValues[2];
              job.completed_at = boundValues[3];
            }
            return { success: true };
          }

          // 15. UPDATE LANDING_PAGES
          if (upper.includes('UPDATE LANDING_PAGES')) {
            const id = boundValues[boundValues.length - 1];
            const page = devMemoryStore.landingPages.get(id);
            if (page) {
              if (upper.includes('STATUS = ?')) {
                page.status = boundValues[0];
                page.updated_at = boundValues[1];
              } else {
                page.title = boundValues[0];
                page.content_json = boundValues[1];
                page.design_json = boundValues[2];
                page.status = boundValues[3];
                page.updated_at = boundValues[4];
              }
            }
            return { success: true };
          }

          // 15. UPDATE QR_CODES
          if (upper.includes('UPDATE QR_CODES')) {
            const setMatch = q.match(/SET\s+([\s\S]+?)\s+WHERE/i);
            if (setMatch) {
              const setClause = setMatch[1];
              const assignments = setClause.split(',').map((part) => {
                const [col] = part.trim().split(/\s*=\s*/);
                return col.trim().toLowerCase();
              });

              const id = boundValues[boundValues.length - (upper.includes('USER_ID') ? 2 : 1)];
              const existing = devMemoryStore.qrCodes.get(id);
              if (existing) {
                assignments.forEach((col, idx) => {
                  const val = boundValues[idx];
                  if (val !== undefined) {
                    existing[col] = val;
                  }
                });
                existing.updated_at = Date.now();
              }
            }
            return { success: true };
          }

          // 16. UPDATE USERS
          if (upper.includes('UPDATE USERS')) {
            if (upper.includes('WHERE ID = ?')) {
              const id = boundValues[boundValues.length - 1];
              const user = devMemoryStore.users.get(id);
              if (user) {
                if (upper.includes('SET PLAN =')) {
                  user.plan = boundValues[0];
                  user.updated_at = boundValues[1];
                } else if (upper.includes('SET NAME =')) {
                  user.name = boundValues[0];
                  user.updated_at = boundValues[1];
                } else if (upper.includes('SET STATUS =')) {
                  user.status = boundValues[0];
                  user.updated_at = boundValues[1];
                }
              }
            }
            return { success: true };
          }

          // 17. UPDATE ABUSE_REPORTS
          if (upper.includes('UPDATE ABUSE_REPORTS')) {
            const id = boundValues[boundValues.length - 1];
            const rep = devMemoryStore.abuseReports.get(id);
            if (rep) {
              rep.status = boundValues[0];
              rep.resolution_notes = boundValues[1];
              rep.reviewed_by = boundValues[2];
              rep.reviewed_at = boundValues[3];
            }
            return { success: true };
          }

          return { success: true };
        },
      };
      return stmt;
    },
    async batch(statements: D1PreparedStatement[]): Promise<D1Result[]> {
      const results: D1Result[] = [];
      for (const s of statements) {
        results.push(await s.run());
      }
      return results;
    },
    async exec(): Promise<D1ExecResult> {
      return { count: 0, duration: 0 };
    },
  };
}

let d1Initialized = false;

const DDL_STATEMENTS = [
  `CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    role TEXT DEFAULT 'user',
    plan TEXT DEFAULT 'free',
    status TEXT DEFAULT 'active',
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS qr_codes (
    id TEXT PRIMARY KEY,
    user_id TEXT,
    short_code TEXT UNIQUE,
    slug TEXT UNIQUE,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    destination TEXT,
    payload TEXT NOT NULL,
    style_config TEXT,
    is_dynamic INTEGER NOT NULL DEFAULT 0,
    status TEXT DEFAULT 'active',
    scans_count INTEGER DEFAULT 0,
    expires_at INTEGER,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS qr_assets (
    id TEXT PRIMARY KEY,
    qr_id TEXT,
    user_id TEXT NOT NULL,
    r2_key TEXT NOT NULL,
    asset_type TEXT NOT NULL,
    mime_type TEXT NOT NULL,
    file_size INTEGER NOT NULL,
    created_at INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS qr_scans (
    id TEXT PRIMARY KEY,
    qr_id TEXT NOT NULL,
    scanned_at INTEGER NOT NULL,
    country TEXT DEFAULT 'Unknown',
    region TEXT DEFAULT 'Unknown',
    city TEXT DEFAULT 'Unknown',
    device_type TEXT DEFAULT 'Unknown',
    browser TEXT DEFAULT 'Unknown',
    os TEXT DEFAULT 'Unknown',
    referrer TEXT DEFAULT 'Direct',
    ip_hash TEXT
  )`,
  `CREATE TABLE IF NOT EXISTS subscriptions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    plan TEXT NOT NULL,
    provider TEXT NOT NULL,
    provider_customer_id TEXT,
    provider_subscription_id TEXT,
    status TEXT NOT NULL,
    current_period_start INTEGER NOT NULL,
    current_period_end INTEGER NOT NULL,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS usage (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    metric TEXT NOT NULL,
    value INTEGER DEFAULT 0,
    period_start INTEGER NOT NULL,
    period_end INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS webhook_events (
    id TEXT PRIMARY KEY,
    provider TEXT NOT NULL,
    event_type TEXT NOT NULL,
    payload TEXT NOT NULL,
    processed_at INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS templates (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    name TEXT NOT NULL,
    style_config TEXT NOT NULL,
    is_public INTEGER DEFAULT 0,
    created_at INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS bulk_jobs (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    total_count INTEGER NOT NULL,
    processed_count INTEGER DEFAULT 0,
    status TEXT DEFAULT 'pending',
    error_log TEXT,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS bulk_job_items (
    id TEXT PRIMARY KEY,
    job_id TEXT NOT NULL,
    row_index INTEGER NOT NULL,
    name TEXT,
    payload TEXT NOT NULL,
    qr_id TEXT,
    status TEXT DEFAULT 'pending',
    error TEXT,
    created_at INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS landing_pages (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    qr_id TEXT,
    slug TEXT UNIQUE NOT NULL,
    type TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    theme_config TEXT,
    status TEXT DEFAULT 'published',
    views_count INTEGER DEFAULT 0,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS abuse_reports (
    id TEXT PRIMARY KEY,
    resource_type TEXT NOT NULL,
    resource_id TEXT NOT NULL,
    reason TEXT NOT NULL,
    details TEXT,
    reporter_ip_hash TEXT,
    status TEXT DEFAULT 'pending',
    resolution_notes TEXT,
    reviewed_by TEXT,
    reviewed_at INTEGER,
    created_at INTEGER NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS admin_audit_logs (
    id TEXT PRIMARY KEY,
    admin_id TEXT NOT NULL,
    action TEXT NOT NULL,
    target_type TEXT NOT NULL,
    target_id TEXT NOT NULL,
    details TEXT,
    created_at INTEGER NOT NULL
  )`
];

async function ensureD1Tables(d1: D1Database): Promise<void> {
  if (d1Initialized) return;
  try {
    for (const ddl of DDL_STATEMENTS) {
      await d1.prepare(ddl).run().catch(() => {});
    }

    const now = Date.now();
    const adminHash = 'ddf450e7c7e4ab14b868535f4dba5984:c0f4ed085e9d103743c5f017cd2af507cbd2952f770eceb27b72728b97814608';
    await d1.prepare(`
      INSERT OR IGNORE INTO users (id, email, password_hash, name, role, plan, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind('usr_admin', 'admin@example.com', adminHash, 'System Admin', 'admin', 'business', 'active', now, now).run().catch(() => {});

    d1Initialized = true;
  } catch {
    // Ignore schema auto-init errors
  }
}

/**
 * Gets D1 Database instance from Astro locals / Cloudflare environment,
 * or falls back to in-memory store in development/test.
 */
export function getDb(locals?: any): D1Database {
  if (locals?.runtime?.env?.DB) {
    const rawDb = locals.runtime.env.DB as D1Database;
    const memDb = createMemoryD1();

    return {
      prepare(query: string) {
        return {
          bind(...values: any[]) {
            const bound = rawDb.prepare(query).bind(...values);
            const memBound = memDb.prepare(query).bind(...values);

            return {
              bind: (...v: any[]) => bound.bind(...v),
              first: async (col?: string) => {
                try {
                  await ensureD1Tables(rawDb);
                  return await bound.first(col);
                } catch {
                  return memBound.first(col);
                }
              },
              all: async () => {
                try {
                  await ensureD1Tables(rawDb);
                  return await bound.all();
                } catch {
                  return memBound.all();
                }
              },
              run: async () => {
                try {
                  await ensureD1Tables(rawDb);
                  return await bound.run();
                } catch {
                  return memBound.run();
                }
              },
            };
          },
          first: async (col?: string) => {
            try {
              await ensureD1Tables(rawDb);
              return await rawDb.prepare(query).first(col);
            } catch {
              return memDb.prepare(query).first(col);
            }
          },
          all: async () => {
            try {
              await ensureD1Tables(rawDb);
              return await rawDb.prepare(query).all();
            } catch {
              return memDb.prepare(query).all();
            }
          },
          run: async () => {
            try {
              await ensureD1Tables(rawDb);
              return await rawDb.prepare(query).run();
            } catch {
              return memDb.prepare(query).run();
            }
          },
        };
      },
      batch: async (statements: any[]) => {
        try {
          await ensureD1Tables(rawDb);
          return await rawDb.batch(statements);
        } catch {
          return memDb.batch(statements);
        }
      },
      exec: async (sql: string) => {
        try {
          return await rawDb.exec(sql);
        } catch {
          return memDb.exec(sql);
        }
      },
    };
  }
  return createMemoryD1();
}
