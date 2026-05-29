---
name: WPORT Teal
description: Clean corporate light theme with WPORT teal accents and Arial typography.
mode: light
---

# WPORT Teal

## Palette

| Role             | Value        | Notes                                  |
| ---------------- | ------------ | -------------------------------------- |
| bg               | `#F2FCFB`    | page background                        |
| text             | `#5D5D5D`    | primary copy                           |
| accent           | `#56C7BB`    | callouts, eyebrow, key numbers         |
| muted            | `#9A9A9A`    | secondary copy, dividers               |
| surface          | `#FFFFFF`    | cards and content panels               |
| line             | `#D7D7D7`    | borders and separators                 |
| accent-soft      | `#D5F5F2`    | soft highlights and chips              |
| support-blue     | `#305AC1`    | optional secondary emphasis            |

## Typography

- Display font: `Arial, "Arial Rounded MT", sans-serif` — weight 800 for headlines.
- Body font: `Arial, "Arial Rounded MT", sans-serif` — weight 400–500.
- Type-scale overrides (only what differs from `slide-authoring` defaults):
  - Hero title: 160 px
  - Body text: 36 px

## Layout

- Content padding: 120 px from canvas edges (1920 x 1080).
- Alignment: left-aligned, single-column base layout.
- Grid notes: use 2-column splits only on content-heavy pages; keep section headers in a single column.

## Assets

Global logos live under `assets/` (import via `@assets/...`). Canonical paths for this theme:

| File | Import | Use |
| ---- | ------ | --- |
| Square mark (transparent) | `@assets/wport_方形logo.png` | Cover corner, favicon-style mark, small chrome |
| Horizontal logo | `@assets/wport.png` | Title row, footer brand strip |
| Chinese wordmark | `@assets/logo_chinese.svg` | Bilingual covers, closing slide |

```tsx
import wportSquare from '@assets/wport_方形logo.png';
import wportLogo from '@assets/wport.png';
import logoChinese from '@assets/logo_chinese.svg';
```

## Fixed components

These are paste-ready. Copy them verbatim into a slide that uses this theme.

### Title

```tsx
const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontSize: 160,
      fontWeight: 800,
      lineHeight: 1.06,
      letterSpacing: '-0.02em',
      margin: 0,
      color: '#5D5D5D',
      fontFamily: 'Arial, "Arial Rounded MT", sans-serif',
    }}
  >
    {children}
  </h1>
);
```

### Footer

Pull the page number from `useSlidePageNumber()` — never hardcode `pageNum` / `total` props.

```tsx
import { useSlidePageNumber } from '@open-slide/core';

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: 120,
        right: 120,
        bottom: 56,
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 22,
        color: '#9A9A9A',
        letterSpacing: '0.04em',
      }}
    >
      <span>WPORT DESIGN KIT</span>
      <span>{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
    </div>
  );
};
```

### Eyebrow / accents (optional)

```tsx
const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontSize: 24,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#56C7BB',
      fontWeight: 700,
      fontFamily: 'Arial, "Arial Rounded MT", sans-serif',
    }}
  >
    {children}
  </div>
);
```

## Motion

- Philosophy: subtle — keep transitions understated so business content remains primary.
- Reusable keyframes (paste-ready, optional):

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

## Aesthetic

A light corporate direction focused on clarity, trust, and consistency with WPORT product surfaces: soft teal accents, neutral gray typography, gentle borders, and minimal decoration. Keep visuals clean and operational; avoid neon hues, heavy gradients, and oversized ornamental effects.

## Example usage

```tsx
const Cover: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: '#F2FCFB',
      color: '#5D5D5D',
      padding: 120,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      fontFamily: 'Arial, "Arial Rounded MT", sans-serif',
      position: 'relative',
    }}
  >
    <Eyebrow>AI Teaching Portfolio</Eyebrow>
    <Title>Teaching AI with practical impact</Title>
    <p style={{ fontSize: 36, color: '#9A9A9A', maxWidth: 1180, marginTop: 28, lineHeight: 1.5 }}>
      Built on the WPORT Design Kit with reusable components, clear hierarchy, and concise storytelling.
    </p>
    <Footer />
  </div>
);
```
