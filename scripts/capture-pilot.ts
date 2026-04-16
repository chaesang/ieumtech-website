#!/usr/bin/env tsx
/**
 * Capture pilot-v2 pages (home, about, companies) at desktop + mobile.
 * Outputs to docs/screenshots/pilot-v2/
 */
import { chromium } from 'playwright';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const BASE = process.env.SITE ?? 'http://localhost:4321';
const OUT = path.resolve('docs/screenshots/pilot-v2');

const pages = [
  { name: 'home-ko', url: '/ko/' },
  { name: 'about-ko', url: '/ko/about/' },
  { name: 'companies-ko', url: '/ko/companies/' },
];

const viewports = [
  { label: 'desktop', width: 1440, height: 900 },
  { label: 'mobile', width: 390, height: 844 },
];

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  for (const vp of viewports) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
    const page = await ctx.newPage();
    for (const p of pages) {
      const outPath = path.join(OUT, `${p.name}--${vp.label}.png`);
      await page.goto(`${BASE}${p.url}`, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(800);
      await page.screenshot({ path: outPath, fullPage: true });
      console.log(`  ${p.name} (${vp.label})`);
    }
    await ctx.close();
  }
  await browser.close();
}
main().catch((e) => { console.error(e); process.exit(1); });
