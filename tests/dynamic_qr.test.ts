import { describe, it, expect } from 'vitest';
import { createMemoryD1 } from '../src/lib/db/client';

describe('Dynamic QR Code Operations & D1 Integration', () => {
  it('should store, retrieve, update, and delete dynamic QR codes in D1', async () => {
    const db = createMemoryD1();
    const qrId = 'qr_test_123';
    const userId = 'usr_test_user';
    const shortCode = 'abc123';
    const now = Date.now();

    // 1. Insert Dynamic QR
    await db.prepare(`
      INSERT INTO qr_codes (id, user_id, short_code, name, type, destination, payload, style_config, is_dynamic, status, scans_count, expires_at, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      qrId,
      userId,
      shortCode,
      'Test Campaign',
      'url',
      'https://example.com/initial',
      `https://qrcode.page/r/${shortCode}`,
      '{}',
      1,
      'active',
      0,
      null,
      now,
      now
    ).run();

    // 2. Fetch by short_code
    const fetched = await db.prepare('SELECT * FROM qr_codes WHERE short_code = ?').bind(shortCode).all();
    expect(fetched.results?.length).toBe(1);
    expect(fetched.results?.[0]?.destination).toBe('https://example.com/initial');
    expect(fetched.results?.[0]?.status).toBe('active');

    // 3. Update destination
    await db.prepare(`
      UPDATE qr_codes SET destination = ?, name = ?, status = ?, style_config = ?, expires_at = ?, updated_at = ?
      WHERE id = ?
    `).bind(
      'https://example.com/updated',
      'Updated Campaign',
      'paused',
      '{}',
      null,
      Date.now(),
      qrId
    ).run();

    const updated = await db.prepare('SELECT * FROM qr_codes WHERE id = ?').bind(qrId).all();
    expect(updated.results?.[0]?.destination).toBe('https://example.com/updated');
    expect(updated.results?.[0]?.status).toBe('paused');

    // 4. Log a scan
    await db.prepare(`
      INSERT INTO qr_scans (id, qr_id, scanned_at, country, region, city, device_type, browser, os, referrer, ip_hash)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind('scn_1', qrId, Date.now(), 'US', 'CA', 'San Francisco', 'mobile', 'Safari', 'iOS', 'Direct', 'hash123').run();

    const scans = await db.prepare('SELECT * FROM qr_scans WHERE qr_id = ?').bind(qrId).all();
    expect(scans.results?.length).toBe(1);

    // 5. Delete QR
    await db.prepare('DELETE FROM qr_codes WHERE id = ?').bind(qrId).run();
    const deleted = await db.prepare('SELECT * FROM qr_codes WHERE id = ?').bind(qrId).all();
    expect(deleted.results?.length).toBe(0);
  });
});
