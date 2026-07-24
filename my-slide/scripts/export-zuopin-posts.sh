#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   ./scripts/export-zuopin-posts.sh
#   ./scripts/export-zuopin-posts.sh ~/Desktop/作品介紹-輸出
#
# Requires: pnpm dev running at localhost:5173, pic_make's playwright install.

BASE_URL="${BASE_URL:-http://localhost:5173/s/zuopin-jieshao}"
OUTPUT_DIR="${1:-$HOME/Desktop/作品介紹-輸出}"
SCALE="${SCALE:-2}"
PIC_MAKE="${PIC_MAKE:-$HOME/Documents/Github/pic_make}"

mkdir -p "${OUTPUT_DIR}"

NODE_PATH="${PIC_MAKE}/node_modules" node -e '
const { chromium } = require("playwright");
const path = require("path");

(async () => {
  const baseUrl = process.argv[1];
  const outDir = process.argv[2];
  const scale = Number(process.argv[3]);
  const pages = Number(process.argv[4]);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: scale,
  });

  let count = 0;
  for (let p = 1; p <= pages; p++) {
    await page.goto(`${baseUrl}?p=${p}`, { waitUntil: "networkidle" });
    await page.waitForSelector(".cover img", { timeout: 30_000 });
    await page.keyboard.press("f");
    await page.waitForSelector(".cover", { timeout: 10_000 });
    await page.waitForTimeout(400);

    const cover = page.locator(".cover");
    const slug = (await cover.getAttribute("data-slug")) || `page-${p}`;
    const format = (await cover.getAttribute("data-format")) || "square";
    await cover.screenshot({
      path: path.join(outDir, `${slug}-${format}.png`),
    });
    count += 1;
    await page.keyboard.press("Escape");
    await page.waitForTimeout(200);
  }

  await browser.close();
  console.log(`Exported ${count} cover(s) to ${outDir}`);
})();
' "${BASE_URL}" "${OUTPUT_DIR}" "${SCALE}" 7
