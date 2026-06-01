import { uploadWithAutoRename } from '@/lib/assets';

export function hasImageFile(e: { dataTransfer: DataTransfer | null }): boolean {
  const types = e.dataTransfer?.types;
  if (!types) return false;
  for (let i = 0; i < types.length; i++) {
    if (types[i] === 'Files') return true;
  }
  return false;
}

export function pickImageFile(files: FileList): File | null {
  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    if (f.type.startsWith('image/')) return f;
  }
  return null;
}

export function findImageDropTarget(from: Element | null): HTMLElement | null {
  if (!from || !(from instanceof HTMLElement)) return null;
  const img = from.closest('img[data-slide-loc]');
  if (img instanceof HTMLElement) return img;
  const placeholder = from.closest('[data-slide-placeholder][data-slide-loc]');
  if (placeholder instanceof HTMLElement) return placeholder;
  return null;
}

export function parseSlideLoc(loc: string | undefined): { line: number; column: number } | null {
  if (!loc) return null;
  const idx = loc.indexOf(':');
  if (idx <= 0) return null;
  const line = Number(loc.slice(0, idx));
  const column = Number(loc.slice(idx + 1));
  if (!Number.isFinite(line) || !Number.isFinite(column)) return null;
  return { line, column };
}

export async function replaceImageAtLoc(
  slideId: string,
  file: File,
  line: number,
  column: number,
): Promise<void> {
  const { ok, entry } = await uploadWithAutoRename(slideId, file);
  if (!ok || !entry) throw new Error('upload failed');
  const res = await fetch('/__edit', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      slideId,
      line,
      column,
      ops: [{ kind: 'replace-image', assetPath: `./assets/${entry.name}` }],
    }),
  });
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(body.error ?? `edit failed (${res.status})`);
  }
}
