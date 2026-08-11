import wportLogo from '@assets/wport.png';
import { ImagePlaceholder, type Page, type SlideMeta } from '@open-slide/core';

export const meta: SlideMeta = {
  title: 'WPORT · 評點制度是什麼？（4:5 輪播）',
  createdAt: '2026-08-11T06:31:37.347Z',
};

/** 來源：IG @wport.me 2026-07-14 輪播貼文（4 張）。設計稿 1080×1350，縮至 864×1080 塞進畫布。 */
const W = 1080;
const H = 1350;
const SCALE = 1080 / H;

const c = {
  surround: '#CFE0DC',
  bg: '#F1F1F0',
  card: '#FAFAFA',
  ink: '#484848',
  body: '#4A4A4A',
  teal: '#74B8B0',
  tealHead: '#7FBDB4',
  cyan: '#10C2CC',
  mintDeep: '#CFE3E1',
  mint: '#DDE9E7',
  watermark: '#E5EDEB',
  sub: '#A0A0A0',
};

const FONT_DISPLAY = '"Huninn", "jf-openhuninn", "Noto Sans TC", "PingFang TC", sans-serif';
const FONT_BODY = '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif';

const SHARED_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Huninn&family=Noto+Sans+TC:wght@400;500;700;900&display=swap');
.wport-post { font-family: ${FONT_BODY}; -webkit-font-smoothing: antialiased; }
`;

const Styles = () => <style>{SHARED_CSS}</style>;

const fill = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: c.surround,
} as const;

const Frame = ({ slug, children }: { slug: string; children: React.ReactNode }) => (
  <div style={fill}>
    <Styles />
    <div
      className="wport-post cover"
      data-slug={slug}
      data-format="portrait-4x5"
      style={{ width: W * SCALE, height: H * SCALE, position: 'relative', overflow: 'hidden' }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: W,
          height: H,
          transformOrigin: '0 0',
          transform: `scale(${SCALE})`,
          background: c.bg,
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    </div>
  </div>
);

/** 背景那個巨大的圓體 W —— 純裝飾，用字符畫比拉圖檔省事。 */
const Watermark = ({ top, left, size }: { top: number; left: number; size: number }) => (
  <div
    aria-hidden
    style={{
      position: 'absolute',
      top,
      left,
      fontFamily: FONT_DISPLAY,
      fontSize: size,
      lineHeight: 0.8,
      color: c.watermark,
      userSelect: 'none',
    }}
  >
    w
  </div>
);

const Logo = ({ width, style }: { width: number; style?: React.CSSProperties }) => (
  <img
    src={wportLogo}
    alt="WPORT"
    style={{ position: 'absolute', width, filter: 'brightness(0) invert(1)', ...style }}
  />
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      top: 130,
      left: 120,
      right: 100,
      height: 90,
      background: c.teal,
      border: `3px solid ${c.ink}`,
      borderRadius: 46,
      boxShadow: `6px 7px 0 ${c.ink}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONT_DISPLAY,
      fontSize: 52,
      color: '#fff',
      letterSpacing: 4,
    }}
  >
    {children}
  </div>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      top: 290,
      left: 120,
      right: 100,
      bottom: 195,
      background: c.card,
      border: `3px solid ${c.ink}`,
      borderRadius: 46,
      boxShadow: `6px 7px 0 ${c.ink}`,
      padding: '48px 54px',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}
  >
    {children}
  </div>
);

const CardTitle = ({ children, size = 64 }: { children: React.ReactNode; size?: number }) => (
  <div
    style={{
      fontFamily: FONT_DISPLAY,
      fontSize: size,
      color: c.tealHead,
      textAlign: 'center',
      letterSpacing: 8,
    }}
  >
    {children}
  </div>
);

const Rule = ({ top = 34 }: { top?: number }) => (
  <div style={{ height: 2, background: c.ink, marginTop: top }} />
);

const Num = ({ n, size = 46 }: { n: number; size?: number }) => (
  <span
    style={{
      flex: `0 0 ${size}px`,
      width: size,
      height: size,
      borderRadius: '50%',
      background: c.cyan,
      color: '#fff',
      fontFamily: FONT_DISPLAY,
      fontSize: size * 0.56,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {n}
  </span>
);

/** 右下角托住白色 logo 的薄荷色塊 */
const LogoCorner = () => (
  <>
    <div
      aria-hidden
      style={{
        position: 'absolute',
        right: -70,
        bottom: -70,
        width: 450,
        height: 250,
        background: c.mint,
        borderTopLeftRadius: 210,
      }}
    />
    <Logo width={188} style={{ right: 78, bottom: 58 }} />
  </>
);

const Cover: Page = () => (
  <Frame slug="01-cover">
    <Watermark top={-176} left={268} size={660} />

    <div
      style={{
        position: 'absolute',
        top: 360,
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: c.ink,
          color: '#fff',
          fontFamily: FONT_DISPLAY,
          fontSize: 44,
          letterSpacing: 3,
          padding: '15px 38px',
          borderRadius: 18,
        }}
      >
        僑外生找工作！
      </div>
      <div
        style={{
          marginTop: 26,
          fontFamily: FONT_DISPLAY,
          fontSize: 124,
          lineHeight: 1.22,
          color: '#444',
          letterSpacing: 10,
          textAlign: 'center',
        }}
      >
        評點制度
        <br />
        是什麼？
      </div>
      <div
        style={{
          marginTop: 34,
          fontFamily: FONT_BODY,
          fontSize: 30,
          fontWeight: 700,
          color: c.sub,
          letterSpacing: 1,
        }}
      >
        What is the evaluation system?
      </div>
    </div>

    <div
      aria-hidden
      style={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: 560,
        height: 300,
        background: c.mint,
        borderTopRightRadius: 100,
      }}
    />
    <div
      aria-hidden
      style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 660,
        height: 232,
        background: c.mintDeep,
        borderTopLeftRadius: 100,
      }}
    />

    <div
      style={{
        position: 'absolute',
        left: 108,
        bottom: 196,
        fontFamily: FONT_DISPLAY,
        fontSize: 58,
        color: '#fff',
        letterSpacing: 4,
      }}
    >
      僑外生
    </div>
    <Logo width={232} style={{ left: 148, bottom: 84 }} />
    <div
      style={{
        position: 'absolute',
        right: 258,
        bottom: 128,
        fontFamily: FONT_DISPLAY,
        fontSize: 54,
        color: '#fff',
        letterSpacing: 4,
      }}
    >
      求職技巧
    </div>

    <ImagePlaceholder
      hint="履歷表插圖"
      width={182}
      height={232}
      style={{ position: 'absolute', left: 372, bottom: 76 }}
    />
    <ImagePlaceholder
      hint="WPORT 吉祥物（鳥）插圖"
      width={198}
      height={240}
      style={{ position: 'absolute', right: 18, bottom: 46 }}
    />
  </Frame>
);

const Threshold: Page = () => (
  <Frame slug="02-threshold">
    <Watermark top={200} left={-190} size={760} />
    <Pill>評點制度是什麼？</Pill>
    <Card>
      <CardTitle>70分是關鍵門檻</CardTitle>
      <Rule top={38} />
      <div
        style={{
          marginTop: 36,
          fontSize: 32,
          lineHeight: 1.72,
          color: c.body,
        }}
      >
        僑外生畢業後想留在台灣工作，
        <br />
        可以透過「評點制」申請工作許可。
        <br />
        它不是只看薪資，
        <br />
        而是依學歷、語言能力、工作經驗等條件綜合評分。
        <br />
        累計達 70 分，就有機會申請。
      </div>

      <div
        style={{
          marginTop: 42,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          fontFamily: FONT_DISPLAY,
          fontSize: 42,
          color: '#3F3F3F',
        }}
      >
        {['不只看薪資', '改看整體條件', '滿 70 分可申請'].map((label, i) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Num n={i + 1} size={42} />
            <span style={{ letterSpacing: 4 }}>{label}</span>
          </div>
        ))}
      </div>

      <ImagePlaceholder
        hint="評點表 70 分卡片插圖"
        width={228}
        height={268}
        style={{ position: 'absolute', right: 46, bottom: 44 }}
      />
    </Card>
    <LogoCorner />
  </Frame>
);

const SCORING_ITEMS = [
  '學歷',
  '薪資',
  '工作經驗',
  '職務資格',
  '華語能力',
  '其他語言能力',
  '政策配合',
  '在校表現',
];

const Scoring: Page = () => (
  <Frame slug="03-scoring">
    <Watermark top={200} left={-190} size={760} />
    <Pill>怎麼計分？</Pill>
    <Card>
      <CardTitle>8大評分項目</CardTitle>
      <Rule top={38} />

      <div
        style={{
          marginTop: 54,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(4, auto)',
          rowGap: 38,
          columnGap: 40,
          fontFamily: FONT_DISPLAY,
          fontSize: 44,
          color: '#3F3F3F',
        }}
      >
        {SCORING_ITEMS.map((label, i) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Num n={i + 1} size={44} />
            <span style={{ letterSpacing: 3 }}>{label}</span>
          </div>
        ))}
      </div>

      <div style={{ position: 'absolute', left: 54, bottom: 56, fontSize: 28, color: c.body }}>
        每項分數不同，累計達 <span style={{ color: c.cyan, fontWeight: 700 }}>70</span> 分即可申請。
      </div>

      <ImagePlaceholder
        hint="打勾清單 + 70+ 徽章插圖"
        width={206}
        height={180}
        style={{ position: 'absolute', right: 46, bottom: 40 }}
      />
    </Card>
    <LogoCorner />
  </Frame>
);

const NOTES = [
  {
    title: '由雇主提出申請',
    body: '評點制不是由學生自己送件，而是由雇主申請聘僱許可。',
  },
  {
    title: '文件要準備完整',
    body: '常見文件包含：申請書、評點表、護照或居留證、畢業證書、聘僱契約等。',
  },
  {
    title: '先確認是否達標',
    body: '送件前先確認分數是否達 70 分，工作內容也要符合專門性或技術性工作。',
  },
];

const BeforeApply: Page = () => (
  <Frame slug="04-before-apply">
    <Watermark top={200} left={-190} size={760} />
    <Pill>申請前要注意哪些？</Pill>

    <div
      style={{
        position: 'absolute',
        top: 290,
        left: 120,
        right: 100,
        bottom: 195,
        display: 'flex',
        flexDirection: 'column',
        gap: 42,
      }}
    >
      {NOTES.map((n) => (
        <div
          key={n.title}
          style={{
            flex: 1,
            background: c.card,
            border: `3px solid ${c.ink}`,
            borderRadius: 42,
            boxShadow: `6px 7px 0 ${c.ink}`,
            padding: '26px 46px',
            boxSizing: 'border-box',
          }}
        >
          <CardTitle size={54}>{n.title}</CardTitle>
          <Rule top={18} />
          <div style={{ marginTop: 18, fontSize: 32, lineHeight: 1.62, color: c.body }}>
            {n.body}
          </div>
        </div>
      ))}
    </div>

    <LogoCorner />
  </Frame>
);

export default [Cover, Threshold, Scoring, BeforeApply];
