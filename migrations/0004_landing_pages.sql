-- Migration: 0004_landing_pages.sql
-- Purpose: Hosted QR Landing Pages for Business Cards, Menus, App Downloads, Social Profiles, Events, Reviews, Products

CREATE TABLE IF NOT EXISTS landing_pages (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  qr_id TEXT,
  type TEXT NOT NULL, -- 'business_card' | 'social_profile' | 'menu' | 'app_download' | 'review' | 'event' | 'product' | 'contact'
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  content_json TEXT NOT NULL, -- JSON string containing type-specific data
  design_json TEXT, -- JSON string for colors, theme, font, button styles
  status TEXT NOT NULL DEFAULT 'published', -- 'draft' | 'published' | 'unpublished'
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (qr_id) REFERENCES qr_codes(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_landing_pages_user_id ON landing_pages(user_id);
CREATE INDEX IF NOT EXISTS idx_landing_pages_slug ON landing_pages(slug);
CREATE INDEX IF NOT EXISTS idx_landing_pages_status ON landing_pages(status);
CREATE INDEX IF NOT EXISTS idx_landing_pages_created_at ON landing_pages(created_at);

-- Landing page abuse reports table
CREATE TABLE IF NOT EXISTS landing_page_reports (
  id TEXT PRIMARY KEY,
  page_id TEXT NOT NULL,
  reason TEXT NOT NULL,
  description TEXT,
  ip_hash TEXT,
  created_at INTEGER NOT NULL,
  FOREIGN KEY (page_id) REFERENCES landing_pages(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_landing_page_reports_page_id ON landing_page_reports(page_id);
