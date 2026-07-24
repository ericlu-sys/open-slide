---
name: caiceo-carousel
description: 把一段文字（blog / 長文 / 主題）做成「菜鳥CEO」品牌的 1:1 IG 輪播文圖，並產出四平台（Threads/IG/LinkedIn/FB)客製文案。Triggers on：做文圖、做輪播、菜鳥CEO carousel、caiceo 貼文、把這篇 blog 做成貼文、社群圖文。Do NOT use for 非菜鳥CEO 品牌的一般簡報（用 create-slide）。
---

# 菜鳥CEO 輪播文圖（caiceo-carousel）

把一篇 blog / 一段文字變成：**8-10 張 1:1 輪播 PNG ＋ 四平台文案**，並登錄到社群戰情室。

## Canonical template（唯一事實來源）

**`slides/caiceo-template/index.tsx`** — 活樣式庫，每頁展示一個模組。
瀏覽 `http://localhost:<port>/s/caiceo-template` 可看所有模組的長相。

做新文圖 = 複製整個檔案 → `slides/caiceo-<topic>/index.tsx` → **只改底部「頁面資料區」**（模組區不要動）。模板有更新時，同步回這份 template 檔，不要只改單篇。

## 版型鐵則（Eric 定案，違反 = 重做）

1. **1:1 正方形**（frame 1080×1080，剛好塞滿 open-slide 畫布，勿改比例）。
2. **每頁內容吃滿卡片高度，不留下方空白。** 文字類模組（paragraphs/defList/sections）已內建 `flex:1 + space-evenly`；如果某頁內容太少顯得空，就增加內容或換模組，不要留白。checklist 與 cta 的節奏是標竿。
3. 品牌色**只用**：藍 `#02528D`（外底/標籤/標題）、淺藍 tag `#C9DAE8`、內文 `#333`、白卡。取樣自 Eric 原始貼文，勿自創色。
4. 字體：標題/標籤/footer 用 Huninn（粉圓體，Google Fonts）；內文 Noto Sans TC。
5. 底部固定白字「菜鳥CEO」（Frame 已內建）。
6. cover 盡量放**真實照片**（blog cover 或活動照，下載到該 slide 的 `assets/`）；沒有照片才留佔位。
7. `meta.createdAt`：寫檔前跑 `node -e "console.log(new Date().toISOString())"` 貼結果。
8. 每頁 `data-slug` 用 `NN-名稱` 格式（`01-cover`、`02-...`），匯出檔名由此而來。

## 模組目錄（挑模組 → 填資料）

| module | 適合內容 | 建議數量 |
|---|---|---|
| `cover` | 開頭：標籤+eyebrow+大標（最後一行最大）+照片 | 每篇 1 張 |
| `paragraphs` | 痛點鋪陳、故事、觀點 | 2-3 段/頁 |
| `defList` | 名詞拆解、角色、對照 | 3-4 組/頁 |
| `sections` | 步驟教學、分類重點（指令用 `Code`） | 2-3 節/頁 |
| `checklist` | 條列重點、參數、檢查清單（虛線卡） | 3-4 卡/頁 |
| `pyramid` | 層級、優先順序 | 4-5 層 |
| `quadrant` | 定位圖、分類（x,y ∈ [-1,1]） | 4-6 點 |
| `cta` | 結尾：互動問題+追蹤 handle | 每篇 1 張 |

規劃原則：cover 開場 → 痛點/為什麼 → 乾貨主體（2-4 頁，模組交錯避免單調）→ 觀點/設計理念 → cta 收尾。單頁塞不下就拆頁，**不要縮字**。

## 匯出 PNG

```bash
# 先確認 dev server： cd my-slide && pnpm dev  （注意實際 port，5173 可能被佔改跳 5174）
SLIDE_ID=caiceo-<topic> BASE_URL=http://localhost:<port>/s/caiceo-<topic> PAGES=<張數> \
NODE_PATH="$(pwd)/node_modules" bash scripts/export-caiceo-posts.sh
```

輸出 2160×2160 PNG 到 `~/Documents/Github/Eric個人/social-war-room/public/carousel/caiceo-<topic>/`。
匯出後**逐張檢視**：斷行是否奇怪、內容有無溢出/被裁、下方有無留白。

## 四平台文案（同步產出）

一份核心訊息 → 各平台 adapter：

| 平台 | 語氣 | 結構 | Hashtag | 連結 | CTA |
|---|---|---|---|---|---|
| Threads | 口語、鉤子先行 | ~500字內 | 1-2 | 首則不放 | 「留言 +1」互動 |
| IG | 故事感、emoji | caption 尾放 tag 區 | 3-5 | link in bio | 「輪播看完 →」 |
| LinkedIn | 專業洞察 | 前兩行是鉤子 | 3-5 | 放留言區 | 「你怎麼看？」 |
| FB | 對話式 | 可長可短 | 0-2 | 內文直接放 | 分享/tag 朋友 |

## 登錄戰情室

在 `~/Documents/Github/Eric個人/social-war-room/src/mock/state.ts` 的 `batches` 加一筆
`ContentBatch`（kol=菜鳥CEO `enc-kol-1`、四平台文案、carousel 路徑陣列、status `ready`），
然後在 http://localhost:5178/#/batches 檢視並 commit 該 repo。
