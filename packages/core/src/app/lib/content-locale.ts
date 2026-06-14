import type { ContentLocaleBundle, ContentLocaleId, Page, SlideModule } from './sdk.ts';

export type ContentLocaleOption = {
  id: ContentLocaleId;
  label: string;
};

export function primaryContentLocaleId(slide: SlideModule): ContentLocaleId {
  return slide.defaultLocale ?? 'default';
}

export function getContentLocaleOptions(slide: SlideModule): ContentLocaleOption[] {
  const extra = slide.locales;
  const messageLocales = slide.messages ? Object.keys(slide.messages) : [];
  const hasAlternates = (extra && Object.keys(extra).length > 0) || messageLocales.length > 0;
  if (!hasAlternates) return [];

  const primary = primaryContentLocaleId(slide);
  const labels = slide.localeLabels ?? {};
  const alternateIds = new Set([...Object.keys(extra ?? {}), ...messageLocales]);
  alternateIds.delete(primary);
  const ids = [primary, ...alternateIds];
  return ids.map((id) => ({ id, label: labels[id] ?? id }));
}

export function resolveContentLocaleBundle(
  slide: SlideModule,
  localeId: ContentLocaleId,
  primaryPages?: Page[],
): ContentLocaleBundle {
  const primary = primaryContentLocaleId(slide);
  if (localeId === primary) {
    return {
      pages: primaryPages ?? slide.default,
      notes: slide.notes,
    };
  }

  const bundle = slide.locales?.[localeId];
  if (bundle) return bundle;

  return {
    pages: primaryPages ?? slide.default,
    notes: slide.notes,
  };
}
