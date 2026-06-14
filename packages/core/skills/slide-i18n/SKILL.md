---
name: slide-i18n
description: Add or update multilingual slide copy for an existing deck. Use when the user runs /slide-i18n, asks to translate a slide, add English/Japanese/Chinese variants, scaffold locale messages, or wire useSlideT() in slides/<id>/index.tsx. Do NOT use for framework UI locale (home/editor chrome) — only slide content under slides/.
disable-model-invocation: true
---

# Translate a slide (`/slide-i18n`)

This skill owns the **workflow** for slide **content** i18n. Technical canvas rules still live in **`slide-authoring`**.

Prefer **one shared page layout + locale messages** over duplicating whole `pages` arrays. Reserve `locales.<id>.pages` only when a translation truly needs a different layout.

## When to use

- User types `/slide-i18n` or asks to translate an existing slide.
- User ran `open-slide i18n <slide-id>` and needs the slide wired up.
- User wants English / 繁體中文 / 日本語 variants of the same deck.

## Step 1 — Identify the slide

- If the user names a slide id, use `slides/<id>/`.
- If they mean the current deck, consult **`current-slide`** first.
- If unclear, list `slides/` and ask.

## Step 2 — Scaffold messages (CLI)

From the workspace root (where `package.json` lives):

```bash
open-slide i18n <slide-id> --extract --locales en,ja
```

- `--extract` pulls visible JSX text from each `const Foo: Page = …` component into keys like `cover.text.0`.
- `--locales` adds target locale stubs marked `[TODO translate] …`.
- Creates or updates `slides/<id>/messages.ts`.

Adjust `--primary` when the deck's primary locale is not `zh-TW`.

## Step 3 — Export messages from the slide module

In `slides/<id>/index.tsx`, ensure:

```tsx
import { messages } from './messages.ts';

export { messages };
export const defaultLocale = 'zh-TW'; // or the primary id
export const localeLabels = {
  'zh-TW': '繁體中文',
  en: 'English',
  ja: '日本語',
};
```

`messages.ts` is the **only** extra file allowed beside `index.tsx` and `assets/` for i18n decks.

## Step 4 — Wire pages with `useSlideT()`

Import from `@open-slide/core`:

```tsx
import { useSlideT, type Page } from '@open-slide/core';

const Cover: Page = () => {
  const t = useSlideT();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1>{t('cover.text.0')}</h1>
      <p>{t('cover.text.1')}</p>
    </div>
  );
};
```

Rules:

- Keep **layout once** — replace hardcoded copy with `t('key')`.
- Reuse keys from `messages.ts`; do not invent parallel keys.
- Keys use dot paths: `<page-component-kebab>.text.<index>` from `--extract`, or semantic names you add manually (`cover.title`, `agenda.item.2`).
- Brand names, product names, or proper nouns may stay literal when they should not be translated — omit them from messages.

## Step 5 — Translate target locales

Edit `slides/<id>/messages.ts`:

- Fill each target locale object (`en`, `ja`, …).
- Remove `[TODO translate]` prefixes when done.
- Match tone and length to the layout; tweak copy if a language runs long.

Do **not** create `pages-en.tsx` unless a page needs a genuinely different structure.

## Step 6 — Speaker notes (optional)

Notes can stay a single `export const notes = […]` array aligned with `default` pages, or per-locale notes via `locales.<id>.notes` when needed.

## Step 7 — Verify

Tell the user:

- Open `/s/<slide-id>` in the editor.
- Use the **Languages** control in the toolbar (left of copy link) to switch locales.
- Present mode and presenter view follow the same content locale.

Run `open-slide sync:skills` if this skill is missing locally.

## Hard rules

- Only edit `slides/<id>/index.tsx`, `slides/<id>/messages.ts`, and `slides/<id>/assets/`.
- Do not touch `package.json`, `open-slide.config.ts`, or `packages/core/` unless the user explicitly asks for framework changes.
- Do not duplicate entire page components per locale when `useSlideT()` is enough.

## Escape hatch — layout differs by locale

When one language needs a different page structure:

```tsx
export const locales = {
  ja: {
    pages: [CoverJaOnly],
  },
};
```

Use sparingly. The editor page reorder only applies on the primary locale.
