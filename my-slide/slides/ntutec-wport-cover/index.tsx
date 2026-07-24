import { useSlideT, type Page, type SlideMeta } from '@open-slide/core';
import stickerNew from './assets/新創.png';
import stickerLine from './assets/線條skr蛙.png';
import stickerRacer from './assets/車手蛙.png';
import { messages } from './messages';

export const meta: SlideMeta = {
  title: '台大創創 · WPORT 活動封面（4:3）',
  createdAt: '2026-06-05T16:51:05.525Z',
};

/** Hypelink 活動封面建議尺寸 1200×900（4:3） */
const COVER_WIDTH = 1200;
const COVER_HEIGHT = 900;

export { messages };
export const defaultLocale = 'zh-TW';
export const localeLabels = {
  'zh-TW': '繁體中文',
  en: 'English',
  ja: '日本語',
};

type StylePreset = {
  bg1: string;
  bg2: string;
  bg3: string;
  accent1: string;
  accent2: string;
  textMain: string;
  textSub: string;
  badgeBg: string;
  badgeBorder: string;
  frameBorder: string;
  frameSurface: string;
};

type Job = {
  style: keyof typeof STYLE_PRESETS;
  subtitleKey: `banner.subtitle.${number}`;
  sticker: string;
};

const STYLE_PRESETS = {
  'spectrum-00-amber': {
    bg1: '#78350f',
    bg2: '#f59e0b',
    bg3: '#fcd34d',
    accent1: 'rgba(252, 211, 77, 0.36)',
    accent2: 'rgba(253, 186, 116, 0.32)',
    textMain: '#fff7ed',
    textSub: 'rgba(255, 247, 237, 0.88)',
    badgeBg: 'rgba(120, 53, 15, 0.44)',
    badgeBorder: 'rgba(255, 237, 213, 0.32)',
    frameBorder: 'rgba(255, 237, 213, 0.24)',
    frameSurface: 'linear-gradient(165deg, rgba(255, 244, 230, 0.1), rgba(120, 53, 15, 0.16))',
  },
  'spectrum-01-red': {
    bg1: '#7f1d1d',
    bg2: '#dc2626',
    bg3: '#fb7185',
    accent1: 'rgba(251, 113, 133, 0.36)',
    accent2: 'rgba(252, 165, 165, 0.32)',
    textMain: '#fff7ed',
    textSub: 'rgba(255, 247, 237, 0.88)',
    badgeBg: 'rgba(127, 29, 29, 0.44)',
    badgeBorder: 'rgba(255, 237, 213, 0.3)',
    frameBorder: 'rgba(255, 237, 213, 0.24)',
    frameSurface: 'linear-gradient(165deg, rgba(255, 244, 230, 0.1), rgba(127, 29, 29, 0.16))',
  },
  'spectrum-02-rose': {
    bg1: '#831843',
    bg2: '#e11d48',
    bg3: '#fb7185',
    accent1: 'rgba(251, 113, 133, 0.34)',
    accent2: 'rgba(244, 114, 182, 0.34)',
    textMain: '#fff7ed',
    textSub: 'rgba(255, 247, 237, 0.9)',
    badgeBg: 'rgba(131, 24, 67, 0.44)',
    badgeBorder: 'rgba(255, 237, 213, 0.32)',
    frameBorder: 'rgba(255, 237, 213, 0.25)',
    frameSurface: 'linear-gradient(165deg, rgba(255, 244, 230, 0.11), rgba(131, 24, 67, 0.16))',
  },
  'spectrum-03-fuchsia': {
    bg1: '#701a75',
    bg2: '#d946ef',
    bg3: '#f472b6',
    accent1: 'rgba(244, 114, 182, 0.34)',
    accent2: 'rgba(216, 180, 254, 0.34)',
    textMain: '#fff7ed',
    textSub: 'rgba(255, 247, 237, 0.9)',
    badgeBg: 'rgba(112, 26, 117, 0.45)',
    badgeBorder: 'rgba(255, 237, 213, 0.32)',
    frameBorder: 'rgba(255, 237, 213, 0.25)',
    frameSurface: 'linear-gradient(165deg, rgba(255, 244, 230, 0.12), rgba(112, 26, 117, 0.15))',
  },
  'spectrum-04-purple': {
    bg1: '#581c87',
    bg2: '#9333ea',
    bg3: '#c084fc',
    accent1: 'rgba(196, 132, 252, 0.34)',
    accent2: 'rgba(147, 51, 234, 0.34)',
    textMain: '#f8fafc',
    textSub: 'rgba(248, 250, 252, 0.88)',
    badgeBg: 'rgba(88, 28, 135, 0.45)',
    badgeBorder: 'rgba(224, 231, 255, 0.3)',
    frameBorder: 'rgba(224, 231, 255, 0.24)',
    frameSurface: 'linear-gradient(165deg, rgba(248, 250, 252, 0.12), rgba(88, 28, 135, 0.15))',
  },
  'spectrum-05-violet': {
    bg1: '#4c1d95',
    bg2: '#7c3aed',
    bg3: '#a78bfa',
    accent1: 'rgba(167, 139, 250, 0.34)',
    accent2: 'rgba(99, 102, 241, 0.34)',
    textMain: '#f8fafc',
    textSub: 'rgba(248, 250, 252, 0.88)',
    badgeBg: 'rgba(76, 29, 149, 0.45)',
    badgeBorder: 'rgba(224, 231, 255, 0.3)',
    frameBorder: 'rgba(224, 231, 255, 0.24)',
    frameSurface: 'linear-gradient(165deg, rgba(248, 250, 252, 0.12), rgba(76, 29, 149, 0.15))',
  },
  'spectrum-06-indigo': {
    bg1: '#312e81',
    bg2: '#4f46e5',
    bg3: '#818cf8',
    accent1: 'rgba(129, 140, 248, 0.34)',
    accent2: 'rgba(96, 165, 250, 0.3)',
    textMain: '#f8fafc',
    textSub: 'rgba(248, 250, 252, 0.88)',
    badgeBg: 'rgba(49, 46, 129, 0.45)',
    badgeBorder: 'rgba(224, 231, 255, 0.3)',
    frameBorder: 'rgba(224, 231, 255, 0.24)',
    frameSurface: 'linear-gradient(165deg, rgba(248, 250, 252, 0.12), rgba(49, 46, 129, 0.15))',
  },
  'spectrum-07-sky': {
    bg1: '#1e3a8a',
    bg2: '#2563eb',
    bg3: '#38bdf8',
    accent1: 'rgba(56, 189, 248, 0.34)',
    accent2: 'rgba(147, 197, 253, 0.3)',
    textMain: '#f8fafc',
    textSub: 'rgba(248, 250, 252, 0.9)',
    badgeBg: 'rgba(30, 58, 138, 0.45)',
    badgeBorder: 'rgba(219, 234, 254, 0.3)',
    frameBorder: 'rgba(219, 234, 254, 0.24)',
    frameSurface: 'linear-gradient(165deg, rgba(248, 250, 252, 0.12), rgba(30, 58, 138, 0.15))',
  },
  'spectrum-08-blue': {
    bg1: '#1e40af',
    bg2: '#0ea5e9',
    bg3: '#22d3ee',
    accent1: 'rgba(34, 211, 238, 0.3)',
    accent2: 'rgba(125, 211, 252, 0.3)',
    textMain: '#f8fafc',
    textSub: 'rgba(248, 250, 252, 0.9)',
    badgeBg: 'rgba(30, 64, 175, 0.45)',
    badgeBorder: 'rgba(224, 242, 254, 0.32)',
    frameBorder: 'rgba(224, 242, 254, 0.24)',
    frameSurface: 'linear-gradient(165deg, rgba(248, 250, 252, 0.11), rgba(30, 64, 175, 0.14))',
  },
  'spectrum-09-azure': {
    bg1: '#0c4a6e',
    bg2: '#0284c7',
    bg3: '#38bdf8',
    accent1: 'rgba(56, 189, 248, 0.3)',
    accent2: 'rgba(125, 211, 252, 0.3)',
    textMain: '#f8fafc',
    textSub: 'rgba(248, 250, 252, 0.9)',
    badgeBg: 'rgba(12, 74, 110, 0.45)',
    badgeBorder: 'rgba(224, 242, 254, 0.32)',
    frameBorder: 'rgba(224, 242, 254, 0.24)',
    frameSurface: 'linear-gradient(165deg, rgba(248, 250, 252, 0.11), rgba(12, 74, 110, 0.14))',
  },
} satisfies Record<string, StylePreset>;

const jobs: Job[] = [
  { style: 'spectrum-00-amber', subtitleKey: 'banner.subtitle.1', sticker: stickerNew },
  { style: 'spectrum-01-red', subtitleKey: 'banner.subtitle.2', sticker: stickerRacer },
  { style: 'spectrum-02-rose', subtitleKey: 'banner.subtitle.3', sticker: stickerLine },
  { style: 'spectrum-03-fuchsia', subtitleKey: 'banner.subtitle.4', sticker: stickerNew },
  { style: 'spectrum-04-purple', subtitleKey: 'banner.subtitle.5', sticker: stickerRacer },
  { style: 'spectrum-05-violet', subtitleKey: 'banner.subtitle.6', sticker: stickerNew },
  { style: 'spectrum-06-indigo', subtitleKey: 'banner.subtitle.7', sticker: stickerLine },
  { style: 'spectrum-07-sky', subtitleKey: 'banner.subtitle.8', sticker: stickerRacer },
  { style: 'spectrum-08-blue', subtitleKey: 'banner.subtitle.9', sticker: stickerNew },
  { style: 'spectrum-09-azure', subtitleKey: 'banner.subtitle.10', sticker: stickerLine },
];

const stage: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#0b1020',
};

function WportCoverBanner({
  preset,
  topLabel,
  title,
  subtitle,
  sticker,
}: {
  preset: StylePreset;
  topLabel: string;
  title: string;
  subtitle: string;
  sticker: string;
}) {
  return (
    <div style={stage}>
      <div
        data-ntutec-cover
        style={{
          position: 'relative',
          width: COVER_WIDTH,
          height: COVER_HEIGHT,
          borderRadius: 40,
          overflow: 'hidden',
          fontFamily: '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif',
          color: preset.textMain,
          background: `
            radial-gradient(110% 80% at 0% 100%, ${preset.accent1}, transparent 60%),
            radial-gradient(100% 100% at 90% 0%, ${preset.accent2}, transparent 60%),
            linear-gradient(135deg, ${preset.bg1}, ${preset.bg2} 52%, ${preset.bg3})
          `,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            padding: '52px 64px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 16,
              borderRadius: 28,
              border: `1px solid ${preset.frameBorder}`,
              background: preset.frameSurface,
              backdropFilter: 'blur(2px)',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              alignSelf: 'flex-start',
              padding: '8px 16px',
              fontSize: 26,
              fontWeight: 700,
              borderRadius: 999,
              border: `1px solid ${preset.badgeBorder}`,
              background: preset.badgeBg,
              letterSpacing: '0.02em',
            }}
          >
            {topLabel}
          </div>
          <h1
            style={{
              position: 'relative',
              zIndex: 1,
              margin: 0,
              maxWidth: '68%',
              fontSize: 96,
              lineHeight: 1.1,
              fontWeight: 900,
              letterSpacing: '0.01em',
              textShadow: '0 8px 30px rgba(15, 23, 42, 0.4)',
              wordBreak: 'break-word',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              position: 'relative',
              zIndex: 1,
              margin: 0,
              maxWidth: '66%',
              fontSize: 42,
              lineHeight: 1.35,
              color: preset.textSub,
              fontWeight: 500,
              wordBreak: 'break-word',
            }}
          >
            {subtitle}
          </p>
          <img
            src={sticker}
            alt=""
            style={{
              position: 'absolute',
              right: 36,
              bottom: 32,
              width: 300,
              objectFit: 'contain',
              filter: 'drop-shadow(0 14px 24px rgba(2, 6, 23, 0.35))',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </div>
  );
}

function makeJobPage(job: Job): Page {
  const preset = STYLE_PRESETS[job.style];
  const PageComponent: Page = () => {
    const t = useSlideT();
    return (
      <WportCoverBanner
        preset={preset}
        topLabel={t('banner.top-label')}
        title={t('banner.title')}
        subtitle={t(job.subtitleKey)}
        sticker={job.sticker}
      />
    );
  };
  return PageComponent;
}

export default jobs.map(makeJobPage) satisfies Page[];
