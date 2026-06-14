import { useCallback, useSyncExternalStore } from 'react';
import type { ContentLocaleId } from './sdk.ts';

const STORAGE_PREFIX = 'open-slide:content-locale:';

function storageKey(slideId: string): string {
  return `${STORAGE_PREFIX}${slideId}`;
}

const slideLocales = new Map<string, ContentLocaleId>();
const listeners = new Map<string, Set<() => void>>();

function readStored(slideId: string, fallback: ContentLocaleId): ContentLocaleId {
  const cached = slideLocales.get(slideId);
  if (cached) return cached;
  try {
    const stored = localStorage.getItem(storageKey(slideId));
    if (stored) return stored;
  } catch {}
  return fallback;
}

function subscribe(slideId: string, listener: () => void): () => void {
  let set = listeners.get(slideId);
  if (!set) {
    set = new Set();
    listeners.set(slideId, set);
  }
  set.add(listener);
  return () => {
    set?.delete(listener);
    if (set?.size === 0) listeners.delete(slideId);
  };
}

function getSnapshot(slideId: string, primaryLocale: ContentLocaleId): ContentLocaleId {
  return readStored(slideId, primaryLocale);
}

function emit(slideId: string): void {
  for (const listener of listeners.get(slideId) ?? []) listener();
}

export function setContentLocaleForSlide(
  slideId: string,
  localeId: ContentLocaleId,
  allowed: ContentLocaleId[],
): void {
  if (!allowed.includes(localeId)) return;
  slideLocales.set(slideId, localeId);
  try {
    localStorage.setItem(storageKey(slideId), localeId);
  } catch {}
  emit(slideId);
}

export function useContentLocaleForSlide(
  slideId: string,
  localeIds: ContentLocaleId[],
  primaryLocale: ContentLocaleId,
): [ContentLocaleId, (id: ContentLocaleId) => void] {
  const locale = useSyncExternalStore(
    (listener) => subscribe(slideId, listener),
    () => getSnapshot(slideId, primaryLocale),
    () => getSnapshot(slideId, primaryLocale),
  );

  const effective = localeIds.length > 0 && !localeIds.includes(locale) ? primaryLocale : locale;

  const setLocale = useCallback(
    (id: ContentLocaleId) => setContentLocaleForSlide(slideId, id, localeIds),
    [slideId, localeIds],
  );

  return [effective, setLocale];
}
