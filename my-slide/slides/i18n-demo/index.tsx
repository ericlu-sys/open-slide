import { type Page, type SlideMeta, useSlideT } from '@open-slide/core';
import { messages } from './messages.ts';

const Cover: Page = () => {
  const t = useSlideT();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-[#0b1020] text-white">
      <p className="font-mono text-[18px] tracking-[0.2em] text-white/45 uppercase">
        {t('cover.eyebrow')}
      </p>
      <h1 className="font-heading text-[96px] font-semibold tracking-tight">{t('cover.title')}</h1>
      <p className="max-w-[900px] text-center text-[28px] leading-relaxed text-white/70">
        {t('cover.body')}
      </p>
    </div>
  );
};

export const meta: SlideMeta = {
  title: 'i18n demo',
  createdAt: '2026-06-11T00:00:00.000Z',
};

export const defaultLocale = 'en';

export const localeLabels = {
  en: 'English',
  'zh-TW': '繁體中文',
};

export { messages };

export default [Cover] satisfies Page[];

export const notes = ['Speaker notes follow the primary locale page order.'];
