-- Migration: 0005_admin_and_audit.sql
-- Purpose: Admin Audit Logs and Abuse Moderation Queue

CREATE TABLE IF NOT EXISTS admin_audit_logs (
  id TEXT PRIMARY KEY,
  admin_user_id TEXT NOT NULL,
  action TEXT NOT NULL, -- 'user_disabled' | 'user_enabled' | 'qr_disabled' | 'qr_enabled' | 'landing_page_disabled' | 'landing_page_enabled' | 'report_resolved' | 'report_dismissed'
  resource_type TEXT NOT NULL, -- 'user' | 'qr_code' | 'landing_page' | 'abuse_report'
  resource_id TEXT NOT NULL,
  metadata TEXT, -- JSON string
  created_at INTEGER NOT NULL,
  FOREIGN KEY (admin_user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_admin_audit_logs_action ON admin_audit_logs(action);
CREATE INDEX IF NOT EXISTS idx_admin_audit_logs_created_at ON admin_audit_logs(created_at);

-- Enhanced Abuse Reports table
CREATE TABLE IF NOT EXISTS abuse_reports (
  id TEXT PRIMARY KEY,
  landing_page_id TEXT,
  qr_id TEXT,
  reason TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending' | 'reviewing' | 'resolved' | 'dismissed'
  ip_hash TEXT,
  reviewed_at INTEGER,
  reviewed_by TEXT,
  resolution_notes TEXT,
  created_at INTEGER NOT NULL,
  FOREIGN KEY (landing_page_id) REFERENCES landing_pages(id) ON DELETE SET NULL,
  FOREIGN KEY (qr_id) REFERENCES qr_codes(id) ON DELETE SET NULL,
  FOREIGN KEY (reviewed_by) REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_abuse_reports_status ON abuse_reports(status);
CREATE INDEX IF NOT EXISTS idx_abuse_reports_created_at ON abuse_reports(created_at);
