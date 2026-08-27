-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'user', -- 'user' | 'admin'
  plan TEXT DEFAULT 'free', -- 'free' | 'pro' | 'business'
  status TEXT DEFAULT 'active', -- 'active' | 'suspended' | 'deleted'
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON users(created_at);

-- QR Codes Table
CREATE TABLE IF NOT EXISTS qr_codes (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  short_code TEXT UNIQUE,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  destination TEXT,
  payload TEXT NOT NULL,
  style_config TEXT,
  is_dynamic INTEGER NOT NULL DEFAULT 0,
  status TEXT DEFAULT 'active', -- 'active' | 'paused' | 'expired' | 'deleted'
  scans_count INTEGER DEFAULT 0,
  expires_at INTEGER,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_qr_codes_user_id ON qr_codes(user_id);
CREATE INDEX IF NOT EXISTS idx_qr_codes_short_code ON qr_codes(short_code);
CREATE INDEX IF NOT EXISTS idx_qr_codes_created_at ON qr_codes(created_at);

-- QR Assets Table
CREATE TABLE IF NOT EXISTS qr_assets (
  id TEXT PRIMARY KEY,
  qr_id TEXT,
  user_id TEXT NOT NULL,
  r2_key TEXT NOT NULL,
  asset_type TEXT NOT NULL, -- 'logo' | 'export_png' | 'export_svg'
  mime_type TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  created_at INTEGER NOT NULL,
  FOREIGN KEY (qr_id) REFERENCES qr_codes(id) ON DELETE SET NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_qr_assets_user_id ON qr_assets(user_id);
CREATE INDEX IF NOT EXISTS idx_qr_assets_qr_id ON qr_assets(qr_id);

-- QR Scans Table
CREATE TABLE IF NOT EXISTS qr_scans (
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
  ip_hash TEXT,
  FOREIGN KEY (qr_id) REFERENCES qr_codes(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_qr_scans_qr_id ON qr_scans(qr_id);
CREATE INDEX IF NOT EXISTS idx_qr_scans_scanned_at ON qr_scans(scanned_at);
CREATE INDEX IF NOT EXISTS idx_qr_scans_composite ON qr_scans(qr_id, scanned_at);

-- Subscriptions Table
CREATE TABLE IF NOT EXISTS subscriptions (
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
  updated_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);

-- Usage Quotas Table
CREATE TABLE IF NOT EXISTS usage (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  metric TEXT NOT NULL,
  value INTEGER DEFAULT 0,
  period TEXT NOT NULL,
  updated_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_usage_user_period ON usage(user_id, period);
