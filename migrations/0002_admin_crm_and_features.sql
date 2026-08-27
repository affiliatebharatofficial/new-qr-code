-- CRM Contacts Table
CREATE TABLE IF NOT EXISTS crm_contacts (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  status TEXT DEFAULT 'lead', -- 'lead' | 'trial' | 'active' | 'customer' | 'at_risk' | 'churned' | 'closed'
  plan TEXT DEFAULT 'free',
  source TEXT DEFAULT 'direct_signup',
  assigned_admin TEXT,
  next_follow_up INTEGER,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_crm_contacts_email ON crm_contacts(email);
CREATE INDEX IF NOT EXISTS idx_crm_contacts_status ON crm_contacts(status);
CREATE INDEX IF NOT EXISTS idx_crm_contacts_user_id ON crm_contacts(user_id);

-- CRM Notes Table
CREATE TABLE IF NOT EXISTS crm_notes (
  id TEXT PRIMARY KEY,
  contact_id TEXT NOT NULL,
  admin_id TEXT NOT NULL,
  admin_name TEXT,
  note TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  FOREIGN KEY (contact_id) REFERENCES crm_contacts(id) ON DELETE CASCADE,
  FOREIGN KEY (admin_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_crm_notes_contact_id ON crm_notes(contact_id);

-- CRM Tags Table
CREATE TABLE IF NOT EXISTS crm_tags (
  id TEXT PRIMARY KEY,
  contact_id TEXT NOT NULL,
  tag_name TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  FOREIGN KEY (contact_id) REFERENCES crm_contacts(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_crm_tags_contact_id ON crm_tags(contact_id);

-- System Error Logs Table
CREATE TABLE IF NOT EXISTS system_error_logs (
  id TEXT PRIMARY KEY,
  route TEXT NOT NULL,
  error_type TEXT NOT NULL,
  message TEXT NOT NULL,
  severity TEXT DEFAULT 'warning', -- 'info' | 'warning' | 'error' | 'critical'
  request_id TEXT,
  status TEXT DEFAULT 'open', -- 'open' | 'investigating' | 'resolved' | 'ignored'
  created_at INTEGER NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_system_error_logs_created_at ON system_error_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_system_error_logs_severity ON system_error_logs(severity);
