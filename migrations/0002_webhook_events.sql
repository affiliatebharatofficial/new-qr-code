-- Migration: 0002_webhook_events.sql
-- Purpose: Webhook idempotency tracking to prevent duplicate subscription events

CREATE TABLE IF NOT EXISTS webhook_events (
  id TEXT PRIMARY KEY,
  provider TEXT NOT NULL,
  event_id TEXT UNIQUE NOT NULL,
  event_type TEXT NOT NULL,
  processed INTEGER DEFAULT 0,
  payload_summary TEXT,
  received_at INTEGER NOT NULL,
  processed_at INTEGER
);

CREATE INDEX IF NOT EXISTS idx_webhook_events_provider_event ON webhook_events(provider, event_id);
