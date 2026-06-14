import { createContext, type ReactNode, useContext } from 'react';
import type { ContentLocaleId } from './sdk.ts';

const ContentLocaleContext = createContext<ContentLocaleId>('default');

export function ContentLocaleProvider({
  locale,
  children,
}: {
  locale: ContentLocaleId;
  children: ReactNode;
}) {
  return <ContentLocaleContext.Provider value={locale}>{children}</ContentLocaleContext.Provider>;
}

export function useSlideContentLocale(): ContentLocaleId {
  return useContext(ContentLocaleContext);
}
