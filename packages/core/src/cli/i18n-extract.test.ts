import { describe, expect, it } from 'vitest';
import { getContentLocaleOptions } from '../app/lib/content-locale.ts';
import type { SlideModule } from '../app/lib/sdk.ts';
import { createSlideTranslator } from '../app/lib/slide-messages.ts';
import { extractSlideMessages, messagesToRecord } from './i18n-extract.ts';

describe('extractSlideMessages', () => {
  it('collects JSX text from Page components', () => {
    const source = `
      import type { Page } from '@open-slide/core';
      const Cover: Page = () => (
        <div>
          <h1>Hello</h1>
          <p>World</p>
        </div>
      );
      export default [Cover];
    `;
    const entries = extractSlideMessages(source);
    expect(messagesToRecord(entries)).toEqual({
      'cover.text.0': 'Hello',
      'cover.text.1': 'World',
    });
  });
});

describe('createSlideTranslator', () => {
  it('falls back to the primary locale for missing keys', () => {
    const t = createSlideTranslator(
      {
        en: { title: 'Hello' },
        'zh-TW': {},
      },
      'zh-TW',
      'en',
    );
    expect(t('title')).toBe('Hello');
  });
});

describe('getContentLocaleOptions with messages', () => {
  it('lists locales from messages without alternate pages', () => {
    const Cover = () => null;
    const slide: SlideModule = {
      default: [Cover],
      defaultLocale: 'zh-TW',
      messages: {
        'zh-TW': { title: '標題' },
        en: { title: 'Title' },
      },
      localeLabels: {
        'zh-TW': '繁體中文',
        en: 'English',
      },
    };
    expect(getContentLocaleOptions(slide)).toEqual([
      { id: 'zh-TW', label: '繁體中文' },
      { id: 'en', label: 'English' },
    ]);
  });
});
