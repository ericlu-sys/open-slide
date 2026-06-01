import { useLayoutEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import {
  findImageDropTarget,
  hasImageFile,
  parseSlideLoc,
  pickImageFile,
  replaceImageAtLoc,
} from '@/lib/slide-image-drop';
import { useLocale } from '@/lib/use-locale';

export function SlideImageDropLayer({ slideId }: { slideId: string }) {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [dropTarget, setDropTarget] = useState<HTMLElement | null>(null);
  const [overlayRect, setOverlayRect] = useState<DOMRect | null>(null);
  const dragDepth = useRef(0);
  const t = useLocale();

  useLayoutEffect(() => {
    if (!dropTarget || !dragActive) {
      setOverlayRect(null);
      return;
    }
    const update = () => setOverlayRect(dropTarget.getBoundingClientRect());
    update();
    window.addEventListener('scroll', update, true);
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update, true);
      window.removeEventListener('resize', update);
    };
  }, [dropTarget, dragActive]);

  const resolveTarget = (e: React.DragEvent) => {
    const under = document.elementFromPoint(e.clientX, e.clientY);
    return findImageDropTarget(under);
  };

  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 z-20"
        style={{ pointerEvents: dragActive ? 'auto' : 'none' }}
        onDragEnter={(e) => {
          if (uploading || !hasImageFile(e)) return;
          e.preventDefault();
          dragDepth.current += 1;
          setDragActive(true);
          setDropTarget(resolveTarget(e));
        }}
        onDragOver={(e) => {
          if (uploading || !hasImageFile(e)) return;
          e.preventDefault();
          e.dataTransfer.dropEffect = 'copy';
          setDropTarget(resolveTarget(e));
        }}
        onDragLeave={() => {
          dragDepth.current = Math.max(0, dragDepth.current - 1);
          if (dragDepth.current === 0) {
            setDragActive(false);
            setDropTarget(null);
          }
        }}
        onDrop={async (e) => {
          if (uploading || !hasImageFile(e)) return;
          e.preventDefault();
          dragDepth.current = 0;
          setDragActive(false);
          const target = resolveTarget(e) ?? dropTarget;
          setDropTarget(null);
          const file = pickImageFile(e.dataTransfer.files);
          if (!file || !target) return;
          const loc = parseSlideLoc(target.dataset.slideLoc);
          if (!loc) return;
          setUploading(true);
          try {
            await replaceImageAtLoc(slideId, file, loc.line, loc.column);
          } catch {
            toast.error(t.imagePlaceholder.uploadFailed);
          } finally {
            setUploading(false);
          }
        }}
      />
      {dragActive && overlayRect && (
        <div
          aria-hidden
          className="pointer-events-none fixed z-30 flex items-center justify-center rounded-xl border-2 border-dashed border-primary/70 bg-primary/10"
          style={{
            left: overlayRect.left,
            top: overlayRect.top,
            width: overlayRect.width,
            height: overlayRect.height,
          }}
        >
          <span className="rounded-md bg-background/95 px-2.5 py-1.5 text-xs font-semibold text-primary shadow-sm">
            {uploading ? t.imagePlaceholder.uploading : t.imagePlaceholder.dropOverlayReplace}
          </span>
        </div>
      )}
    </>
  );
}
