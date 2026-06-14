import { createContext, type ReactNode, useContext, useMemo } from 'react';
import type { ContentLocaleId, SlideMessages } from './sdk.ts';
import { createSlideTranslator } from './slide-messages.ts';

const SlideMessagesContext = createContext<((key: string) => string) | null>(null);

export function SlideMessagesProvider({
  messages,
  locale,
  primaryLocale,
  children,
}: {
  messages?: Record<ContentLocaleId, SlideMessages>;
  locale: ContentLocaleId;
  primaryLocale: ContentLocaleId;
  children: ReactNode;
}) {
  const t = useMemo(
    () => createSlideTranslator(messages, locale, primaryLocale),
    [messages, locale, primaryLocale],
  );
  return <SlideMessagesContext.Provider value={t}>{children}</SlideMessagesContext.Provider>;
}

export function useSlideT(): (key: string) => string {
  const t = useContext(SlideMessagesContext);
  return t ?? ((key) => key);
}
