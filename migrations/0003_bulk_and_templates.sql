-- Migration: 0003_bulk_and_templates.sql
-- Purpose: Support for Bulk QR generation jobs, job item logs, and user saved QR design templates

-- Templates Table
CREATE TABLE IF NOT EXISTS templates (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  style_config TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_templates_user_id ON templates(user_id);
CREATE INDEX IF NOT EXISTS idx_templates_created_at ON templates(created_at);

-- Bulk Jobs Table
CREATE TABLE IF NOT EXISTS bulk_jobs (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL, -- 'static' | 'dynamic'
  status TEXT NOT NULL DEFAULT 'queued', -- 'queued' | 'processing' | 'completed' | 'failed' | 'cancelled'
  total_items INTEGER NOT NULL DEFAULT 0,
  processed_items INTEGER NOT NULL DEFAULT 0,
  successful_items INTEGER NOT NULL DEFAULT 0,
  failed_items INTEGER NOT NULL DEFAULT 0,
  style_config TEXT,
  error_message TEXT,
  created_at INTEGER NOT NULL,
  started_at INTEGER,
  completed_at INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_bulk_jobs_user_id ON bulk_jobs(user_id);
CREATE INDEX IF NOT EXISTS idx_bulk_jobs_status ON bulk_jobs(status);
CREATE INDEX IF NOT EXISTS idx_bulk_jobs_created_at ON bulk_jobs(created_at);

-- Bulk Job Items Table
CREATE TABLE IF NOT EXISTS bulk_job_items (
  id TEXT PRIMARY KEY,
  job_id TEXT NOT NULL,
  row_number INTEGER NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  payload TEXT NOT NULL,
  destination TEXT,
  short_code TEXT,
  qr_id TEXT,
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending' | 'success' | 'failed'
  error TEXT,
  created_at INTEGER NOT NULL,
  FOREIGN KEY (job_id) REFERENCES bulk_jobs(id) ON DELETE CASCADE,
  FOREIGN KEY (qr_id) REFERENCES qr_codes(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_bulk_job_items_job_id ON bulk_job_items(job_id);
CREATE INDEX IF NOT EXISTS idx_bulk_job_items_status ON bulk_job_items(status);
