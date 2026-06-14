import type { ComponentType } from 'react';
import type { DesignSystem } from './design.ts';
import type { SlideTransition } from './transition.ts';

export type Page = ComponentType & { transition?: SlideTransition };

export type SlideMeta = {
  title?: string;
  theme?: string;
  /** ISO 8601 timestamp. Set once at scaffold time; used to sort the slide list. */
  createdAt?: string;
};

export type ContentLocaleId = string;

export type ContentLocaleBundle = {
  pages: Page[];
  notes?: (string | undefined)[];
};

export type SlideMessages = Record<string, string>;

export type SlideModule = {
  default: Page[];
  meta?: SlideMeta;
  design?: DesignSystem;
  // Index-aligned with `default`.
  notes?: (string | undefined)[];
  transition?: SlideTransition;
  /** Locale id for `default`. Falls back to `"default"` when omitted. */
  defaultLocale?: ContentLocaleId;
  /** Additional locale variants keyed by locale id. */
  locales?: Record<ContentLocaleId, ContentLocaleBundle>;
  /** Display labels for the present-mode locale picker. */
  localeLabels?: Record<ContentLocaleId, string>;
  /** Per-locale copy keyed by dot paths (e.g. `cover.title`). */
  messages?: Record<ContentLocaleId, SlideMessages>;
};

export type FolderIcon = { type: 'emoji'; value: string } | { type: 'color'; value: string };

export type Folder = {
  id: string;
  name: string;
  icon: FolderIcon;
};

export type FoldersManifest = {
  folders: Folder[];
  assignments: Record<string, string>;
};

export const CANVAS_WIDTH = 1920;
export const CANVAS_HEIGHT = 1080;
