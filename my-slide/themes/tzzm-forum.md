---
name: 桃竹竹苗論壇 Forum
description: 桃竹竹苗青年論壇母版 — 白底資料密集型政府簡報，四縣市色標、Noto Sans TC + Space Grotesk、kicker/chip/footer 元件。
mode: light
---

# 桃竹竹苗論壇 Forum

把 `桃竹竹苗青年論壇母版 (standalone).html` 的設計系統翻譯成 open-slide。資料密集型、白底、左對齊；封面與金句頁用深底。為 1920×1080 畫布設計。

## Palette

| Role        | Value     | Notes                         |
| ----------- | --------- | ----------------------------- |
| bg          | `#FFFFFF` | 內容頁底色（含 2% 點陣紋理）   |
| ink         | `#161A24` | 主文字（深藍黑）              |
| sub         | `#646C7E` | 次文字、說明                  |
| panel       | `#F4F6FA` | 卡片／面板底                  |
| panel2      | `#EAEEF5` | 較深面板                      |
| line        | `#E2E6EE` | 邊框、分隔線                  |
| dark        | `#10131C` | 封面／金句深底                |
| accent grad | `linear-gradient(90deg,#1F6FEB,#D81B72)` | kicker 線、強調 |

### 四縣市品牌色（純常數，超出 DesignSystem 形狀）

| 縣市   | 主色      | 淺底       |
| ------ | --------- | ---------- |
| 桃園   | `#F0741B` | `#FDEBDC`  |
| 新竹市 | `#1F6FEB` | `#E3ECFD`  |
| 新竹縣 | `#13A35A` | `#DCF3E7`  |
| 苗栗   | `#D81B72` | `#FBE0EC`  |

## Typography

- Display / body：`"Noto Sans TC", system-ui, sans-serif`（標題 weight 900，內文 400–500）。
- 數字 / kicker：`"Space Grotesk", monospace`。
- 透過 `<Style>` 注入 Google Fonts `@import`（標準 web API，非依賴）。
- 字級（px）：title 64 · subtitle 40 · body 32 · small 26 · tiny 24。

## Layout

- 邊距：`pad-x 96`、`pad-top 80`、`pad-bottom 118`（footer 留白）。
- 左對齊單欄為主；對照頁用 2–4 欄 grid。
- 垂直預算：1080 − 80 − 118 = **882px** 可用，每頁先算後寫。

## DesignSystem const（貼進每頁頂）

```tsx
export const design: DesignSystem = {
  palette: { bg: '#FFFFFF', text: '#161A24', accent: '#1F6FEB' },
  fonts: {
    display: '"Noto Sans TC", system-ui, sans-serif',
    body: '"Noto Sans TC", system-ui, sans-serif',
  },
  typeScale: { hero: 64, body: 32 },
  radius: 14,
};

// 超出 DesignSystem 形狀的值 → 純常數
const C = {
  bg: '#FFFFFF', ink: '#161A24', sub: '#646C7E',
  panel: '#F4F6FA', panel2: '#EAEEF5', line: '#E2E6EE', dark: '#10131C',
  ty: '#F0741B', tyBg: '#FDEBDC', hc: '#1F6FEB', hcBg: '#E3ECFD',
  hh: '#13A35A', hhBg: '#DCF3E7', ml: '#D81B72', mlBg: '#FBE0EC',
  grad: 'linear-gradient(90deg,#1F6FEB,#D81B72)',
  num: '"Space Grotesk", monospace',
};
const PAD_X = 96, PAD_TOP = 80, PAD_BOTTOM = 118;
```

## Fixed components（貼上即用）

### Style（字體 + 動畫 + 紋理）

```tsx
const Style = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&family=Space+Grotesk:wght@500;600;700&display=swap');
    @keyframes tzFadeUp { from { opacity:0; transform:translateY(14px) } to { opacity:1; transform:translateY(0) } }
    .tz-fadeup { animation: tzFadeUp .7s cubic-bezier(0.16,1,0.3,1) both; }
  `}</style>
);
const dot = (light: boolean) =>
  `radial-gradient(circle, ${light ? 'rgba(255,255,255,0.05)' : 'rgba(22,26,36,0.035)'} 1.1px, transparent 1.1px)`;
```

### Kicker（前綴漸層線 eyebrow）

```tsx
const Kicker = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 18,
    fontFamily: C.num, fontWeight: 600, fontSize: 20, letterSpacing: '.18em',
    textTransform: 'uppercase', color: C.sub }}>
    <span style={{ width: 34, height: 3, borderRadius: 2, background: C.grad }} />
    {children}
  </div>
);
```

### Title

```tsx
const Title = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.01em',
    margin: 0, color: C.ink }}>{children}</h2>
);
```

### Footer（分隔線 + tag + 頁碼 + 來源；頁碼絕不寫死）

```tsx
import { useSlidePageNumber } from '@open-slide/core';

const Footer = ({ src = '資料來源：見附錄' }: { src?: string }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div style={{ position: 'absolute', left: PAD_X, right: PAD_X, bottom: 34 }}>
      <div style={{ height: 1, background: C.line, marginBottom: 12 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 22, color: C.sub }}>
        <span>議題一｜產業科技與青年職涯協作</span>
        <span style={{ fontFamily: C.num }}>
          {String(current).padStart(2, '0')} <i style={{ color: C.line, fontStyle: 'normal' }}>/ {String(total).padStart(2, '0')}</i>
        </span>
      </div>
      <div style={{ fontSize: 18, color: '#9aa1b0', marginTop: 6 }}>{src}</div>
    </div>
  );
};
```

### Chip（縣市色徽章）

```tsx
const Chip = ({ color, no, children }: { color: string; no?: string; children: React.ReactNode }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '8px 16px',
    borderRadius: 999, fontSize: 24, fontWeight: 700, color: '#fff', background: color }}>
    {no && <i style={{ fontFamily: C.num, fontStyle: 'normal', opacity: .85 }}>{no}</i>}
    {children}
  </span>
);
```

### CountyCard（四縣市對照欄，色標頭）

```tsx
const CountyCard = ({ color, bg, name, rows }: {
  color: string; bg: string; name: string; rows: [string, React.ReactNode][];
}) => (
  <div style={{ flex: 1, background: C.panel, borderRadius: 14, overflow: 'hidden', border: `1px solid ${C.line}` }}>
    <div style={{ background: color, color: '#fff', fontWeight: 800, fontSize: 28, padding: '14px 20px' }}>{name}</div>
    <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      {rows.map(([k, v], i) => (
        <div key={i}>
          <div style={{ fontSize: 18, color: C.sub, fontFamily: C.num, letterSpacing: '.06em' }}>{k}</div>
          <div style={{ fontSize: 24, color: C.ink, lineHeight: 1.35, marginTop: 2 }}>{v}</div>
        </div>
      ))}
    </div>
  </div>
);
```
> 注意：CountyCard 為單一視覺模板，呼叫端請逐一寫 `<CountyCard … />`（四張），不要 `.map` 整組 — 符合 slide-authoring「重複視覺元件逐一實例化」規範。

### Placeholder（虛線斜紋圖位）/ TodoBadge / Source

```tsx
const Placeholder = ({ hint, icon = '🖼' }: { hint: string; icon?: string }) => (
  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', gap: 8, color: '#8b93a5',
    border: '2px dashed #C7CEDB', borderRadius: 14,
    background: 'repeating-linear-gradient(135deg,#EEF1F6,#EEF1F6 12px,#E6EAF1 12px,#E6EAF1 24px)' }}>
    <div style={{ fontSize: 42 }}>{icon}</div>
    <div style={{ fontSize: 22, textAlign: 'center' }}>{hint}</div>
  </div>
);

const TodoBadge = () => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 18, fontWeight: 700,
    color: '#B26A00', background: '#FFF1D6', border: '1.5px solid #F4D58A', padding: '4px 12px', borderRadius: 999 }}>
    <span style={{ width: 7, height: 7, borderRadius: 999, background: '#B26A00' }} />待補充
  </span>
);

const Source = ({ children }: { children: React.ReactNode }) => (
  <div style={{ fontSize: 18, color: '#9aa1b0' }}>資料來源：{children}</div>
);
```

### 深底 Cover/Quote wrapper

```tsx
const DarkPage = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: '100%', height: '100%', background: C.dark, color: '#fff',
    backgroundImage: dot(true), backgroundSize: '42px 42px', position: 'relative',
    padding: `${PAD_TOP}px ${PAD_X}px ${PAD_BOTTOM}px`, overflow: 'hidden' }}>
    <Style />{children}
  </div>
);
```

## Assets

WPORT 標誌（全域 `@assets/`）：`@assets/wport_方形logo.png`（封面角標）、`@assets/logo_chinese.svg`（中文字標）、`@assets/wport.png`（橫式）。
§3.6 桃園落地鏈真照：`@assets/eric_精立數位.jpg`（精立數位 n8n／AI 應用）、`@assets/eric_開南.jpg`（開南資管系授課／Intern）。其餘照片位用 `Placeholder` 或 `<ImagePlaceholder>`。

## Motion

克制：內容頁用 `tz-fadeup`（.7s）；頁切換可選 RISE（6px Y + opacity，140/200ms）。資料頁不堆動畫。

## Aesthetic

政府／區域治理場合的權威感：白底、深藍黑字、四縣市色僅用於標頭與 chip、漸層只出現在 kicker 細線與封面。乾淨、可讀、投影機友善；避免霓虹與大面積漸層。
</content>
