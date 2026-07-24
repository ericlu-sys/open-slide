export type { ImagePlaceholderProps } from './app/components/image-placeholder.tsx';
export { ImagePlaceholder } from './app/components/image-placeholder.tsx';
export type { MorphElementProps } from './app/components/morph-element.tsx';
export { MorphElement } from './app/components/morph-element.tsx';
export type { ContentLocaleOption } from './app/lib/content-locale.ts';
export {
  getContentLocaleOptions,
  primaryContentLocaleId,
  resolveContentLocaleBundle,
} from './app/lib/content-locale.ts';
export { useSlideContentLocale } from './app/lib/content-locale-context.tsx';
export type {
  DesignFonts,
  DesignPalette,
  DesignSystem,
  DesignTypeScale,
} from './app/lib/design.ts';
export { cssVarsToString, defaultDesign, designToCssVars } from './app/lib/design.ts';
export { useSlidePageNumber } from './app/lib/page-context.tsx';
export type {
  ContentLocaleBundle,
  ContentLocaleId,
  Page,
  SlideMessages,
  SlideMeta,
  SlideModule,
} from './app/lib/sdk.ts';
export { CANVAS_HEIGHT, CANVAS_WIDTH } from './app/lib/sdk.ts';
export { createSlideTranslator } from './app/lib/slide-messages.ts';
export { SlideMessagesProvider, useSlideT } from './app/lib/slide-messages-context.tsx';
export type { StepProps, StepsProps } from './app/lib/step-context.tsx';
export { Step, Steps, useIsActivePage } from './app/lib/step-context.tsx';
export type {
  MorphTransition,
  SlideTransition,
  TransitionPhase,
} from './app/lib/transition.ts';
export type { OpenSlideConfig } from './config.ts';
export type { Locale, Plural } from './locale/types.ts';
