import { type DesignSystem, type Page, type SlideMeta, useSlidePageNumber } from '@open-slide/core';
import wportSquare from '@assets/wport_方形logo.png';

export const design: DesignSystem = {
  palette: { bg: '#FFFFFF', text: '#161A24', accent: '#1F6FEB' },
  fonts: {
    display: '"Noto Sans TC", system-ui, sans-serif',
    body: '"Noto Sans TC", system-ui, sans-serif',
  },
  typeScale: { hero: 72, body: 34 },
  radius: 16,
};

/* ─────────── tokens（母版色票） ─────────── */
const C = {
  bg: '#FFFFFF', ink: '#161A24', sub: '#5b6373',
  panel: '#F4F6FA', panel2: '#EAEEF5', line: '#E2E6EE', dark: '#10131C',
  ty: '#F0741B', tyBg: '#FDEBDC', hc: '#1F6FEB', hcBg: '#E3ECFD',
  hh: '#13A35A', hhBg: '#DCF3E7', ml: '#D81B72', mlBg: '#FBE0EC',
  grad: 'linear-gradient(90deg,#1F6FEB,#D81B72)',
  num: '"Space Grotesk", monospace',
};
const PAD_X = 100, PAD_TOP = 72, PAD_BOTTOM = 120;
const dot = (light: boolean) =>
  `radial-gradient(circle, ${light ? 'rgba(255,255,255,0.05)' : 'rgba(22,26,36,0.04)'} 1.2px, transparent 1.2px)`;

const Style = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&family=Space+Grotesk:wght@500;600;700&display=swap');
    @keyframes tzFadeUp { from { opacity:0; transform:translateY(14px) } to { opacity:1; transform:translateY(0) } }
    .tz-fadeup { animation: tzFadeUp .7s cubic-bezier(0.16,1,0.3,1) both; }
  `}</style>
);

const fillLight = {
  width: '100%', height: '100%', background: C.bg, color: C.ink,
  backgroundImage: dot(false), backgroundSize: '46px 46px',
  fontFamily: 'var(--osd-font-body)', position: 'relative', overflow: 'hidden',
  padding: `${PAD_TOP}px ${PAD_X}px ${PAD_BOTTOM}px`,
  display: 'flex', flexDirection: 'column',
} as const;

const Kicker = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 16,
    fontFamily: C.num, fontWeight: 600, fontSize: 23, letterSpacing: '.16em', textTransform: 'uppercase', color: C.sub }}>
    <span style={{ width: 40, height: 4, borderRadius: 2, background: C.grad }} />{children}
  </div>
);
const Title = ({ children, size = 64 }: { children: React.ReactNode; size?: number }) => (
  <h2 style={{ fontSize: size, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-.01em', margin: 0, color: C.ink }}>{children}</h2>
);
const Fill = ({ children, justify = 'center', gap = 26 }:
  { children: React.ReactNode; justify?: string; gap?: number }) => (
  <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', justifyContent: justify, gap }}>{children}</div>
);
const Footer = ({ src = '桃竹竹苗青年論壇 · 議題一分組' }: { src?: string }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div style={{ position: 'absolute', left: PAD_X, right: PAD_X, bottom: 32, flex: 'none' }}>
      <div style={{ height: 1, background: C.line, marginBottom: 11 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 23, color: C.sub }}>
        <span>議題一｜產業科技與青年職涯協作</span>
        <span style={{ fontFamily: C.num }}>{String(current).padStart(2, '0')} <i style={{ color: '#c2c9d6', fontStyle: 'normal' }}>/ {String(total).padStart(2, '0')}</i></span>
      </div>
      <div style={{ fontSize: 19, color: '#9aa1b0', marginTop: 6 }}>{src}</div>
    </div>
  );
};

/* ─────────── 1 · 封面 ─────────── */
const Cover: Page = () => (
  <div style={{ width: '100%', height: '100%', background: C.dark, color: '#fff', backgroundImage: dot(true),
    backgroundSize: '46px 46px', position: 'relative', overflow: 'hidden', padding: `0 ${PAD_X}px`,
    display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Style />
    <div style={{ position: 'absolute', top: -160, right: -120, width: 680, height: 680, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(31,111,235,.30), transparent 60%)' }} />
    <div style={{ position: 'absolute', bottom: -220, left: -120, width: 620, height: 620, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(216,27,114,.24), transparent 60%)' }} />
    <img src={wportSquare} alt="WPORT" style={{ width: 92, height: 92, objectFit: 'contain', marginBottom: 44 }} />
    <div className="tz-fadeup" style={{ display: 'inline-flex', alignItems: 'center', gap: 14, fontFamily: C.num,
      fontSize: 26, letterSpacing: '.18em', color: '#9fb4d8', marginBottom: 28 }}>
      <span style={{ width: 40, height: 4, borderRadius: 2, background: C.grad }} />桃竹竹苗青年論壇 · 議題一 · 2 分鐘報告
    </div>
    <h1 className="tz-fadeup" style={{ fontSize: 96, fontWeight: 900, lineHeight: 1.1, margin: 0, letterSpacing: '-.02em' }}>
      把四縣市人才資源<br />串成<span style={{ color: '#7db0ff' }}>同一條科技廊帶人才鏈</span>
    </h1>
    <p className="tz-fadeup" style={{ fontSize: 38, color: '#c5cdda', marginTop: 34, maxWidth: 1480, lineHeight: 1.5 }}>
      產業科技趨勢與青年職涯發展之協作 — 從「各自為政」走向跨縣市協作。
    </p>
    <div style={{ position: 'absolute', left: PAD_X, bottom: 64, fontSize: 26, color: '#8a93a6' }}>
      本組｜盧旭熙、鄧行甫　·　桃園 詹凡誼 · 新竹市 陳毅璇 · 新竹縣 沈慧虹 · 苗栗 簡賢文
    </div>
  </div>
);

/* ─────────── 2 · 發現問題：共同困境 ─────────── */
const Problem = ({ color, title, body }: { color: string; title: string; body: React.ReactNode }) => (
  <div style={{ background: C.panel, borderRadius: 16, border: `1px solid ${C.line}`, borderLeft: `7px solid ${color}`,
    padding: '26px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <div style={{ fontSize: 36, fontWeight: 800, color: C.ink }}>{title}</div>
    <div style={{ fontSize: 28, color: C.sub, lineHeight: 1.45, marginTop: 10 }}>{body}</div>
  </div>
);
const Difficulties: Page = () => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <Kicker>STEP 1 · 發現問題</Kicker>
      <Title>四縣市，四個共同困境</Title>
    </div>
    <Fill gap={24}>
      <div style={{ flex: 'none', display: 'flex', alignItems: 'center', gap: 18,
        background: C.hcBg, border: `1px solid ${C.hc}33`, borderRadius: 14, padding: '20px 26px' }}>
        <span style={{ fontFamily: C.num, fontWeight: 700, color: C.hc, fontSize: 26, whiteSpace: 'nowrap' }}>上位錨點</span>
        <span style={{ fontSize: 28, color: C.ink, lineHeight: 1.4 }}>四縣市已同屬 <b>桃竹苗大矽谷推動方案</b>（行政院／國發會）— 合作不是另起爐灶，是把人才策略落到青年層級。</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 22, flex: 1 }}>
        <Problem color={C.ty} title="① 機關層級不對等"
          body={<>桃園設一級<b>青年事務局</b> ↔ 新竹縣<b>無青年專責一級單位</b>，合作對口不對等。</>} />
        <Problem color={C.hc} title="② 補助綁戶籍、不通用"
          body={<>安薪需設籍桃園、竹市青創貸需登記竹市 — 青年跨縣市流動就<b>接不上</b>。</>} />
        <Problem color={C.hh} title="③ 缺「跨域 × AI 應用人才」"
          body={<>半導體缺口 3.4 萬、供需比 0.2，但培訓供給仍<b>偏技術本位</b>。</>} />
        <Problem color={C.ml} title="④ 留才誘因不足、敘事分歧"
          body={<>竹科「留才」vs 苗栗「返鄉」各說各話；國際／僑外生缺<b>在地落點</b>。</>} />
      </div>
    </Fill>
    <Footer />
  </div>
);

/* ─────────── 3 · 具體方案 ─────────── */
const Plan = ({ no, color, title, body }: { no: string; color: string; title: string; body: React.ReactNode }) => (
  <div style={{ display: 'flex', gap: 22, alignItems: 'center', background: C.panel, borderRadius: 16,
    border: `1px solid ${C.line}`, padding: '24px 28px' }}>
    <div style={{ flex: 'none', width: 70, height: 70, borderRadius: 16, background: color, color: '#fff',
      fontFamily: C.num, fontWeight: 700, fontSize: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{no}</div>
    <div>
      <div style={{ fontSize: 34, fontWeight: 800, color: C.ink }}>{title}</div>
      <div style={{ fontSize: 27, color: C.sub, lineHeight: 1.4, marginTop: 6 }}>{body}</div>
    </div>
  </div>
);
const Proposal: Page = () => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <Kicker>STEP 2 · 具體方案</Kicker>
      <Title>四案，把人才鏈接起來</Title>
      <p style={{ fontSize: 28, color: C.sub, marginTop: 14 }}>
        以桃園「育成→青創基地→青年局→產學→企業」已走通的落地鏈為原型，放大成跨縣市版本。
      </p>
    </div>
    <Fill>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 22, flex: 1 }}>
        <Plan no="01" color={C.hc} title="青年 × AI 人才共享平台"
          body={<>四縣市補助／職缺／基地<b>一站可查</b>，半年試辦。</>} />
        <Plan no="02" color={C.ty} title="落地鏈常態化媒合"
          body={<>育成×青年局×大學產學×企業黑客松，四縣市<b>輪流主辦</b>。</>} />
        <Plan no="03" color={C.hh} title="實習與職缺跨縣市互通"
          body={<>學生實習、企業職缺<b>互推互認</b>，銜接桃竹苗分署。</>} />
        <Plan no="04" color={C.ml} title="AI 應用人才巡迴工作坊"
          body={<>以「跨域應用力」為題，四縣市<b>巡迴開課</b>。</>} />
      </div>
    </Fill>
    <Footer />
  </div>
);

/* ─────────── 4 · 第一步 + CTA ─────────── */
const FirstStep: Page = () => (
  <div style={{ width: '100%', height: '100%', background: C.dark, color: '#fff', backgroundImage: dot(true),
    backgroundSize: '46px 46px', position: 'relative', overflow: 'hidden', padding: `${PAD_TOP}px ${PAD_X}px ${PAD_BOTTOM}px`,
    display: 'flex', flexDirection: 'column' }}>
    <Style />
    <div style={{ flex: 'none' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, fontFamily: C.num, fontSize: 23,
        letterSpacing: '.16em', color: '#9fb4d8', marginBottom: 18 }}>
        <span style={{ width: 40, height: 4, borderRadius: 2, background: C.grad }} />STEP 3 · 第一步
      </div>
      <h2 style={{ fontSize: 70, fontWeight: 900, lineHeight: 1.06, margin: 0 }}>不必一步到位，先走出第一步</h2>
    </div>
    <Fill gap={30}>
      <div style={{ display: 'flex', gap: 28, flex: 1 }}>
        <div style={{ flex: 1, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 18,
          padding: '34px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: C.num, fontSize: 30, fontWeight: 700, color: '#7db0ff' }}>半年內</div>
          <ul style={{ fontSize: 33, lineHeight: 1.6, marginTop: 16, paddingLeft: 28, color: '#e6eaf2' }}>
            <li>共建青年資源資訊入口（最小可用版）</li>
            <li>辦 1 場跨縣市試辦媒合（複製桃園鏈）</li>
          </ul>
        </div>
        <div style={{ flex: 1, background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 18,
          padding: '34px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: C.num, fontSize: 30, fontWeight: 700, color: '#ff9ec4' }}>一年內</div>
          <ul style={{ fontSize: 33, lineHeight: 1.6, marginTop: 16, paddingLeft: 28, color: '#e6eaf2' }}>
            <li>巡迴常態化、建立定期交流機制</li>
            <li>四縣市青年單位簽<b>合作備忘錄（MOU）</b></li>
          </ul>
        </div>
      </div>
      <div style={{ flex: 'none', fontSize: 40, fontWeight: 800 }}>
        <span style={{ background: C.grad, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
          一條科技廊帶、一條人才鏈，四縣市一起做。
        </span>
      </div>
    </Fill>
    <div style={{ position: 'absolute', left: PAD_X, right: PAD_X, bottom: 40, fontSize: 22, color: '#8a93a6',
      borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: 14, display: 'flex', justifyContent: 'space-between' }}>
      <span>議題一｜產業科技與青年職涯協作</span><span>桃竹竹苗青年論壇</span>
    </div>
  </div>
);

export const meta: SlideMeta = {
  title: '議題一 · 2 分鐘提案報告',
  theme: 'tzzm-forum',
  createdAt: '2026-06-29T16:47:21.606Z',
};
export default [Cover, Difficulties, Proposal, FirstStep] satisfies Page[];
