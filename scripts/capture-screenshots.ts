#!/usr/bin/env tsx
/**
 * Capture full-page screenshots of key site pages for design review.
 * Outputs to docs/screenshots/ as desktop + mobile pairs.
 */

import { chromium } from 'playwright';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const BASE_URL = process.env.SITE ?? 'https://ieumtech.net';
const OUT_DIR = path.resolve('docs/screenshots');

const pages = [
  { name: '01-home-ko', url: '/ko/' },
  { name: '02-about-ko', url: '/ko/about/' },
  { name: '03-writing-list-ko', url: '/ko/writing/' },
  { name: '04-writing-series-svc-analysis-ko', url: '/ko/writing/series/svc-analysis/' },
  { name: '05-companies-list-ko', url: '/ko/companies/' },
  { name: '06-company-google-ko', url: '/ko/companies/google/' },
  { name: '07-company-ineeji-ko', url: '/ko/companies/ineeji/' },
  { name: '08-projects-list-ko', url: '/ko/projects/' },
  { name: '09-talks-list-ko', url: '/ko/talks/' },
  { name: '10-talk-okky-ko', url: '/ko/talks/okky-team-management/' },
  { name: '11-home-en', url: '/' },
  { name: '12-about-en', url: '/about/' },
];

const viewports = [
  { label: 'desktop', width: 1440, height: 900 },
  { label: 'mobile', width: 390, height: 844 },
];

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch({ headless: true });

  for (const vp of viewports) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await ctx.newPage();

    for (const p of pages) {
      const url = `${BASE_URL}${p.url}`;
      const outPath = path.join(OUT_DIR, `${p.name}--${vp.label}.png`);
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
        // Let lazy-loaded fonts/images settle
        await page.waitForTimeout(500);
        await page.screenshot({ path: outPath, fullPage: true });
        console.log(`  ${p.name} (${vp.label}) → ${outPath}`);
      } catch (err) {
        console.error(`  [${p.name} ${vp.label}] error:`, err);
      }
    }

    await ctx.close();
  }

  await browser.close();
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
