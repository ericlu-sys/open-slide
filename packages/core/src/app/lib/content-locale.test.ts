import { describe, expect, it } from 'vitest';
import {
  getContentLocaleOptions,
  primaryContentLocaleId,
  resolveContentLocaleBundle,
} from './content-locale.ts';
import type { SlideModule } from './sdk.ts';

const Cover = () => null;
const CoverZh = () => null;

const slide: SlideModule = {
  default: [Cover],
  defaultLocale: 'en',
  notes: ['English notes'],
  locales: {
    'zh-TW': { pages: [CoverZh], notes: ['繁體備註'] },
  },
  localeLabels: {
    en: 'English',
    'zh-TW': '繁體中文',
  },
};

describe('content locale helpers', () => {
  it('lists the primary locale plus alternates', () => {
    expect(getContentLocaleOptions(slide)).toEqual([
      { id: 'en', label: 'English' },
      { id: 'zh-TW', label: '繁體中文' },
    ]);
  });

  it('resolves the primary bundle from default export', () => {
    expect(resolveContentLocaleBundle(slide, 'en')).toEqual({
      pages: [Cover],
      notes: ['English notes'],
    });
  });

  it('resolves alternate locale bundles', () => {
    expect(resolveContentLocaleBundle(slide, 'zh-TW')).toEqual({
      pages: [CoverZh],
      notes: ['繁體備註'],
    });
  });

  it('falls back to default when locale is unknown', () => {
    expect(primaryContentLocaleId({ default: [Cover] })).toBe('default');
    expect(resolveContentLocaleBundle({ default: [Cover] }, 'missing')).toEqual({
      pages: [Cover],
      notes: undefined,
    });
  });
});
