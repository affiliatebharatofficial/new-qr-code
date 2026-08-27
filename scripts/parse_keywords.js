import fs from 'node:fs';
import path from 'node:path';

const raw = fs.readFileSync('KeywordStats_8_27_2026.csv', 'utf-8');
const lines = raw.split('\n').filter((l) => l.trim().length > 0);
const list = [];

for (let i = 1; i < lines.length; i++) {
  const match = lines[i].match(/^"([^"]+)","([^"]+)","([^"]+)"/);
  if (match) {
    list.push({
      keyword: match[1],
      trends: match[2],
      impressions: parseInt(match[3].replace(/,/g, ''), 10) || 0,
    });
  }
}

const outDir = path.resolve('src/lib/seo');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'keywords.json'), JSON.stringify(list, null, 2));
console.log(`Successfully generated keywords.json with ${list.length} keywords.`);
