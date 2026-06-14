import type { ContentLocaleId, SlideMessages } from './sdk.ts';

export function createSlideTranslator(
  allMessages: Record<ContentLocaleId, SlideMessages> | undefined,
  localeId: ContentLocaleId,
  primaryLocale: ContentLocaleId,
): (key: string) => string {
  if (!allMessages) return (key) => key;
  const primary = allMessages[primaryLocale] ?? {};
  const current = allMessages[localeId] ?? primary;
  return (key: string) => current[key] ?? primary[key] ?? key;
}
