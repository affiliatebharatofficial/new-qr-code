import { describe, it, expect } from 'vitest';
import { INDEXNOW_KEY, INDEXNOW_HOST, INDEXNOW_KEY_LOCATION } from '../src/lib/seo/indexnow';
import * as fs from 'fs';
import * as path from 'path';

describe('IndexNow Configuration & Key File Verification', () => {
  it('should have the correct IndexNow API key configured', () => {
    expect(INDEXNOW_KEY).toBe('e565b30e52084612bf099ab4c3a5ffb4');
    expect(INDEXNOW_HOST).toBe('freeqrcode-generator.com');
    expect(INDEXNOW_KEY_LOCATION).toBe('https://freeqrcode-generator.com/e565b30e52084612bf099ab4c3a5ffb4.txt');
  });

  it('should have the physical verification txt file in the public folder matching the API key', () => {
    const keyFilePath = path.resolve(__dirname, `../public/${INDEXNOW_KEY}.txt`);
    expect(fs.existsSync(keyFilePath)).toBe(true);
    const content = fs.readFileSync(keyFilePath, 'utf-8').trim();
    expect(content).toBe(INDEXNOW_KEY);
  });
});
