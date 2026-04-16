#!/usr/bin/env tsx
import { chromium } from 'playwright';
import * as path from 'node:path';

const OUT = path.resolve('docs/screenshots/design-preview.png');

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  await page.goto('http://localhost:4321/ko/design-preview/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: OUT, fullPage: true });
  console.log(`→ ${OUT}`);
  await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });
