import { useCallback, useEffect, useRef, useState } from 'react';

export type NoteSaveStatus =
  | { kind: 'idle' }
  | { kind: 'saving' }
  | { kind: 'saved' }
  | { kind: 'error'; message: string };

const DEBOUNCE_MS = 600;

type Target = { slideId: string; index: number };

export function useNotes(slideId: string, index: number, initial: string | undefined) {
  const initialText = initial ?? '';
  const [value, setValueState] = useState(initialText);
  const [status, setStatus] = useState<NoteSaveStatus>({ kind: 'idle' });

  const lastSavedRef = useRef(initialText);
  const dirtyRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inflightRef = useRef<AbortController | null>(null);
  const targetRef = useRef<Target>({ slideId, index });

  const cancelTimer = useCallback(() => {
    if (timerRef.current != null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const persist = useCallback(async (target: Target, text: string) => {
    inflightRef.current?.abort();
    const ctl = new AbortController();
    inflightRef.current = ctl;
    setStatus({ kind: 'saving' });
    try {
      const res = await fetch('/__notes', {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ slideId: target.slideId, index: target.index, text }),
        signal: ctl.signal,
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error ?? `PUT /__notes → ${res.status}`);
      if (inflightRef.current !== ctl) return;
      lastSavedRef.current = text;
      dirtyRef.current = false;
      setStatus({ kind: 'saved' });
    } catch (err) {
      if ((err as { name?: string }).name === 'AbortError') return;
      setStatus({ kind: 'error', message: String((err as Error).message ?? err) });
    } finally {
      if (inflightRef.current === ctl) inflightRef.current = null;
    }
  }, []);

  const flush = useCallback(async () => {
    cancelTimer();
    if (!dirtyRef.current) return;
    const target = targetRef.current;
    await persist(target, value);
  }, [cancelTimer, persist, value]);

  // When the (slideId, index) target changes, flush pending edits for the
  // previous target before adopting the new initial text.
  useEffect(() => {
    const prev = targetRef.current;
    const targetChanged = prev.slideId !== slideId || prev.index !== index;
    if (targetChanged && dirtyRef.current) {
      cancelTimer();
      const pending = lastSavedRef.current === value ? null : value;
      if (pending !== null) void persist(prev, pending);
    }
    targetRef.current = { slideId, index };
    cancelTimer();
    setValueState(initialText);
    lastSavedRef.current = initialText;
    dirtyRef.current = false;
    setStatus({ kind: 'idle' });
  }, [slideId, index, initialText, persist, value, cancelTimer]);

  useEffect(() => {
    return () => {
      cancelTimer();
      inflightRef.current?.abort();
    };
  }, [cancelTimer]);

  const setValue = useCallback(
    (next: string) => {
      setValueState(next);
      dirtyRef.current = next !== lastSavedRef.current;
      cancelTimer();
      if (!dirtyRef.current) {
        setStatus({ kind: 'idle' });
        return;
      }
      const target = targetRef.current;
      timerRef.current = setTimeout(() => {
        timerRef.current = null;
        void persist(target, next);
      }, DEBOUNCE_MS);
    },
    [persist, cancelTimer],
  );

  return { value, setValue, status, flush };
}
