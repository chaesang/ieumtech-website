#!/usr/bin/env tsx
/**
 * One-time cleanup: Brunch articles imported with filename alts.
 *
 * Pattern in source .md (from Brunch HTML → turndown):
 *     ![some-file.jpg](/writing/<slug>/NN.jpg) caption text here
 * The text after the image, same line, is Brunch's caption — which is
 * what we actually want in `alt`.
 *
 * This script rewrites:
 *     ![some-file.jpg](/path/01.jpg) caption → ![caption](/path/01.jpg)
 * preserving the caption-after-image layout visually (the text is kept
 * as a paragraph following the image, so rendered output looks similar).
 *
 * If no caption is present, the filename-y alt is replaced with '' to
 * avoid screen readers reading "yanolja-similarweb dot jpg".
 */

import { promises as fs } from 'node:fs';
import * as path from 'node:path';

const ROOT = path.resolve('src/content/writing/ko');

const imageLine = /^(\s*)!\[([^\]]*)\]\(([^)]+)\)([ \t]+)([^\n]+?)[ \t]*$/;
const filenameAlt = /\.(jpg|jpeg|png|gif|webp)$/i;

async function processFile(file: string): Promise<{ changed: number }> {
  const content = await fs.readFile(file, 'utf8');
  const lines = content.split('\n');
  let changed = 0;
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(imageLine);
    if (!m) continue;
    const [, indent, altOrig, url, , caption] = m;
    const altLooksLikeFilename = filenameAlt.test(altOrig);
    if (!altLooksLikeFilename && altOrig.length > 0) continue; // alt already meaningful
    const newAlt = caption.trim();
    lines[i] = `${indent}![${newAlt}](${url})\n\n${indent}*${caption.trim()}*`;
    changed++;
  }
  // Also handle image lines with filename alt but no caption
  for (let i = 0; i < lines.length; i++) {
    const simple = lines[i].match(/^(\s*)!\[([^\]]*)\]\(([^)]+)\)\s*$/);
    if (!simple) continue;
    const [, indent, altOrig, url] = simple;
    if (!filenameAlt.test(altOrig)) continue;
    lines[i] = `${indent}![](${url})`;
    changed++;
  }
  if (changed > 0) {
    await fs.writeFile(file, lines.join('\n'));
  }
  return { changed };
}

async function main() {
  const files = (await fs.readdir(ROOT)).filter((f) => f.endsWith('.md'));
  let totalChanged = 0;
  let filesChanged = 0;
  for (const f of files) {
    const { changed } = await processFile(path.join(ROOT, f));
    if (changed > 0) {
      filesChanged++;
      totalChanged += changed;
    }
  }
  console.log(`${filesChanged} files touched, ${totalChanged} image lines rewritten`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
