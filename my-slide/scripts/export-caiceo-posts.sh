#!/usr/bin/env bash
set -euo pipefail

# 匯出「菜鳥CEO · 社群健檢表」4:5 輪播 PNG。
# 需先啟動 open-slide dev：pnpm dev（預設 http://localhost:5173）。
# Playwright 已裝在本 repo 的 devDependencies。
#
# 用法：
#   ./scripts/export-caiceo-posts.sh
#   OUTPUT_DIR=~/Desktop/out ./scripts/export-caiceo-posts.sh

SLIDE_ID="${SLIDE_ID:-caiceo-community-checklist}"
BASE_URL="${BASE_URL:-http://localhost:5173/s/${SLIDE_ID}}"
OUTPUT_DIR="${OUTPUT_DIR:-$HOME/Documents/Github/Eric個人/social-war-room/public/carousel/${SLIDE_ID}}"
SCALE="${SCALE:-2}"
PAGES="${PAGES:-7}"

mkdir -p "${OUTPUT_DIR}"

node -e '
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
    await page.waitForSelector(".cover", { timeout: 30000 });
    await page.keyboard.press("f");           // 進 present 模式，隱藏編輯器介面
    await page.waitForTimeout(700);            // 等字型 + 版面穩定
    const cover = page.locator(".cover").first();
    const slug = (await cover.getAttribute("data-slug")) || `page-${p}`;
    await cover.screenshot({ path: path.join(outDir, `${slug}.png`) });
    count += 1;
    await page.keyboard.press("Escape");
    await page.waitForTimeout(200);
  }

  await browser.close();
  console.log(`Exported ${count} cover(s) → ${outDir}`);
})();
' "${BASE_URL}" "${OUTPUT_DIR}" "${SCALE}" "${PAGES}"
