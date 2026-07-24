import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';

export const design: DesignSystem = {
  palette: { bg: '#fafafa', text: '#1a1a1a', accent: '#666666' },
  fonts: {
    display: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif',
    body: '"PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif',
  },
  typeScale: { hero: 48, body: 32 },
  radius: 0,
};

const SQUARE = 1080;
const CAPTION_H = 140;

const fill = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as const;

const WorkPost = ({ src, author, title }: { src: string; author: string; title: string }) => (
  <div
    style={{
      width: SQUARE,
      height: SQUARE,
      display: 'flex',
      flexDirection: 'column',
      background: '#ffffff',
      boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.06)',
    }}
  >
    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 48,
      }}
    >
      <img
        src={src}
        alt={`${author} — ${title}`}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
    <div
      style={{
        height: CAPTION_H,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        borderTop: '1px solid #e8e8e8',
        padding: '0 48px',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 40,
          fontWeight: 600,
          color: 'var(--osd-text)',
          lineHeight: 1.2,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontFamily: 'var(--osd-font-body)',
          fontSize: 28,
          fontWeight: 400,
          color: 'var(--osd-accent)',
          lineHeight: 1.2,
        }}
      >
        {author}
      </div>
    </div>
  </div>
);

const inoueRonin = new URL('./assets/井上雄彥-浪人劍客.jpeg', import.meta.url).href;
const bauhausArch = new URL('./assets/包浩斯-建築.jpeg', import.meta.url).href;
const togashiSensui = new URL('./assets/富堅義博-仙水.jpeg', import.meta.url).href;
const ohtsuboVagabond = new URL('./assets/王欣太-達人傳.jpg', import.meta.url).href;
const picassoBull = new URL('./assets/畢卡索-公牛14號.jpeg', import.meta.url).href;
const yeHuji = new URL('./assets/葉羽桐-胡姬.jpg', import.meta.url).href;
const zhengXishi = new URL('./assets/鄭問：西施.png', import.meta.url).href;

const InoueRonin: Page = () => (
  <div style={fill}>
    <WorkPost src={inoueRonin} author="井上雄彥" title="浪人劍客" />
  </div>
);

const BauhausArch: Page = () => (
  <div style={fill}>
    <WorkPost src={bauhausArch} author="包浩斯" title="建築" />
  </div>
);

const TogashiSensui: Page = () => (
  <div style={fill}>
    <WorkPost src={togashiSensui} author="富堅義博" title="仙水" />
  </div>
);

const OhtsuboVagabond: Page = () => (
  <div style={fill}>
    <WorkPost src={ohtsuboVagabond} author="王欣太" title="達人傳" />
  </div>
);

const PicassoBull: Page = () => (
  <div style={fill}>
    <WorkPost src={picassoBull} author="畢卡索" title="公牛14號" />
  </div>
);

const YeHuji: Page = () => (
  <div style={fill}>
    <WorkPost src={yeHuji} author="葉羽桐" title="胡姬" />
  </div>
);

const ZhengXishi: Page = () => (
  <div style={fill}>
    <WorkPost src={zhengXishi} author="鄭問" title="西施" />
  </div>
);

export const meta: SlideMeta = {
  title: '作品介紹',
  createdAt: '2026-06-15T12:51:38.458Z',
};

export default [
  InoueRonin,
  BauhausArch,
  TogashiSensui,
  OhtsuboVagabond,
  PicassoBull,
  YeHuji,
  ZhengXishi,
] satisfies Page[];
