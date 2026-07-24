import ericJingli from '@assets/eric_精立數位.jpg';
import ericKainan from '@assets/eric_開南.jpg';
import wportSquare from '@assets/wport_方形logo.png';
import {
  type DesignSystem,
  ImagePlaceholder,
  type Page,
  type SlideMeta,
  useSlidePageNumber,
} from '@open-slide/core';

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
  bg: '#FFFFFF',
  ink: '#161A24',
  sub: '#5b6373',
  panel: '#F4F6FA',
  panel2: '#EAEEF5',
  line: '#E2E6EE',
  dark: '#10131C',
  ty: '#F0741B',
  tyBg: '#FDEBDC',
  hc: '#1F6FEB',
  hcBg: '#E3ECFD',
  hh: '#13A35A',
  hhBg: '#DCF3E7',
  ml: '#D81B72',
  mlBg: '#FBE0EC',
  grad: 'linear-gradient(90deg,#1F6FEB,#D81B72)',
  num: '"Space Grotesk", monospace',
};
const PAD_X = 100,
  PAD_TOP = 72,
  PAD_BOTTOM = 120;
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
  width: '100%',
  height: '100%',
  background: C.bg,
  color: C.ink,
  backgroundImage: dot(false),
  backgroundSize: '46px 46px',
  fontFamily: 'var(--osd-font-body)',
  position: 'relative',
  overflow: 'hidden',
  padding: `${PAD_TOP}px ${PAD_X}px ${PAD_BOTTOM}px`,
  display: 'flex',
  flexDirection: 'column',
} as const;

const Kicker = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 16,
      fontFamily: C.num,
      fontWeight: 600,
      fontSize: 23,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: C.sub,
    }}
  >
    <span style={{ width: 40, height: 4, borderRadius: 2, background: C.grad }} />
    {children}
  </div>
);
const Title = ({ children, size = 62 }: { children: React.ReactNode; size?: number }) => (
  <h2
    style={{
      fontSize: size,
      fontWeight: 900,
      lineHeight: 1.06,
      letterSpacing: '-.01em',
      margin: 0,
      color: C.ink,
    }}
  >
    {children}
  </h2>
);
// flex:1 region that fills all height between header and footer
const Fill = ({
  children,
  justify = 'center',
  gap = 26,
}: {
  children: React.ReactNode;
  justify?: string;
  gap?: number;
}) => (
  <div
    style={{
      flex: 1,
      minHeight: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: justify,
      gap,
    }}
  >
    {children}
  </div>
);
const Footer = ({ src }: { src?: React.ReactNode }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div style={{ position: 'absolute', left: PAD_X, right: PAD_X, bottom: 32, flex: 'none' }}>
      <div style={{ height: 1, background: C.line, marginBottom: 11 }} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 23,
          color: C.sub,
        }}
      >
        <span>議題一｜產業科技與青年職涯協作</span>
        <span style={{ fontFamily: C.num }}>
          {String(current).padStart(2, '0')}{' '}
          <i style={{ color: '#c2c9d6', fontStyle: 'normal' }}>
            / {String(total).padStart(2, '0')}
          </i>
        </span>
      </div>
      {src && <div style={{ fontSize: 19, color: '#9aa1b0', marginTop: 6 }}>資料來源：{src}</div>}
    </div>
  );
};
const Chip = ({ color, children }: { color: string; children: React.ReactNode }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: '8px 18px',
      borderRadius: 999,
      fontSize: 26,
      fontWeight: 700,
      color: '#fff',
      background: color,
    }}
  >
    {children}
  </span>
);
const Todo = () => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 21,
      fontWeight: 700,
      color: '#B26A00',
      background: '#FFF1D6',
      border: '1.5px solid #F4D58A',
      padding: '5px 14px',
      borderRadius: 999,
    }}
  >
    <span style={{ width: 8, height: 8, borderRadius: 999, background: '#B26A00' }} />
    待補充
  </span>
);

/* ─────────── 1 · 封面 ─────────── */
const Cover: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: C.dark,
      color: '#fff',
      backgroundImage: dot(true),
      backgroundSize: '46px 46px',
      position: 'relative',
      overflow: 'hidden',
      padding: `0 ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Style />
    <div
      style={{
        position: 'absolute',
        top: -160,
        right: -120,
        width: 680,
        height: 680,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(31,111,235,.30), transparent 60%)',
      }}
    />
    <div
      style={{
        position: 'absolute',
        bottom: -220,
        left: -120,
        width: 620,
        height: 620,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(216,27,114,.24), transparent 60%)',
      }}
    />
    <img
      src={wportSquare}
      alt="WPORT"
      style={{ width: 92, height: 92, objectFit: 'contain', marginBottom: 44 }}
    />
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 14,
        fontFamily: C.num,
        fontSize: 26,
        letterSpacing: '.18em',
        color: '#9fb4d8',
        marginBottom: 28,
      }}
    >
      <span style={{ width: 40, height: 4, borderRadius: 2, background: C.grad }} />
      桃竹竹苗青年論壇 · 議題一 · 分組討論底稿
    </div>
    <h1
      style={{
        fontSize: 102,
        fontWeight: 900,
        lineHeight: 1.08,
        margin: 0,
        letterSpacing: '-.02em',
      }}
    >
      產業科技趨勢與
      <br />
      青年職涯發展之<span style={{ color: '#7db0ff' }}>協作</span>
    </h1>
    <p style={{ fontSize: 38, color: '#c5cdda', marginTop: 36, maxWidth: 1480, lineHeight: 1.5 }}>
      四縣市人才培育、留才、創業與實習就業資源 — 從「各自為政」串成「同一條科技廊帶人才鏈」。
    </p>
    <div style={{ position: 'absolute', left: PAD_X, bottom: 64, fontSize: 26, color: '#8a93a6' }}>
      本組｜盧旭熙 · 鄧行甫　|　桃園 詹凡誼 · 新竹市 陳毅璇 · 新竹縣 沈慧虹 · 苗栗 簡賢文
    </div>
  </div>
);

/* ─────────── 2 · 速覽：金句 + 大矽谷錨點 ─────────── */
const Overview: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: C.dark,
      color: '#fff',
      backgroundImage: dot(true),
      backgroundSize: '46px 46px',
      position: 'relative',
      overflow: 'hidden',
      padding: `0 ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Style />
    <div
      style={{
        fontSize: 150,
        lineHeight: 0.5,
        color: '#3a4566',
        fontFamily: 'Georgia, serif',
        marginBottom: 20,
      }}
    >
      “
    </div>
    <h2 style={{ fontSize: 66, fontWeight: 800, lineHeight: 1.34, margin: 0, maxWidth: 1640 }}>
      桃竹竹苗是台灣科技產業核心，AI 與數位轉型重塑青年職涯；本議題要把四縣市的人才資源，
      從「各自為政」串成<span style={{ color: '#7db0ff' }}>同一條科技廊帶人才鏈</span>。
    </h2>
    <div
      style={{
        marginTop: 52,
        display: 'flex',
        gap: 22,
        alignItems: 'flex-start',
        background: 'rgba(255,255,255,.06)',
        border: '1px solid rgba(255,255,255,.12)',
        borderRadius: 18,
        padding: '30px 34px',
        maxWidth: 1640,
      }}
    >
      <span
        style={{
          fontFamily: C.num,
          fontWeight: 700,
          color: '#ff9ec4',
          fontSize: 26,
          whiteSpace: 'nowrap',
        }}
      >
        上位錨點
      </span>
      <span style={{ fontSize: 34, color: '#e6eaf2', lineHeight: 1.5 }}>
        四縣市已被綁進同一個國家級框架 — <b>桃竹苗大矽谷推動方案</b>（行政院／國發會）。
        跨縣市合作不是另起爐灶，而是把大矽谷的人才策略落到青年層級。
      </span>
    </div>
  </div>
);

/* ─────────── 3 · 本組名單 + 議題定位 ─────────── */
const RepCard = ({
  color,
  bg,
  county,
  name,
  role,
}: {
  color: string;
  bg: string;
  county: string;
  name: string;
  role: string;
}) => (
  <div
    style={{
      flex: 1,
      background: bg,
      borderRadius: 18,
      border: `1px solid ${color}33`,
      padding: '34px 30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <div
      style={{ fontSize: 24, fontWeight: 700, color, fontFamily: C.num, letterSpacing: '.04em' }}
    >
      {county}
    </div>
    <div style={{ fontSize: 50, fontWeight: 800, color: C.ink, marginTop: 10 }}>{name}</div>
    <div style={{ fontSize: 27, color: C.sub, marginTop: 6 }}>{role}</div>
  </div>
);
const Roster: Page = () => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <Kicker>本組成員 · 議題定位</Kicker>
      <Title>跨四縣市公部門對口，加上在地實踐者</Title>
    </div>
    <Fill gap={28}>
      <div style={{ display: 'flex', gap: 24, flex: 'none' }}>
        <RepCard color={C.ty} bg={C.tyBg} county="桃園市" name="詹凡誼" />
        <RepCard color={C.hc} bg={C.hcBg} county="新竹市" name="陳毅璇" />
        <RepCard color={C.hh} bg={C.hhBg} county="新竹縣" name="沈慧虹" />
        <RepCard color={C.ml} bg={C.mlBg} county="苗栗縣" name="簡賢文" />
      </div>
      <div
        style={{
          flex: 'none',
          background: C.panel,
          border: `1px solid ${C.line}`,
          borderRadius: 16,
          padding: '28px 32px',
        }}
      >
        <div style={{ fontSize: 30, color: C.ink, lineHeight: 1.5 }}>
          <b>召集／彙整｜</b>盧旭熙、鄧行甫　·　<b>協作｜</b>
          趙若芸、陳駿翔、蕭皓文、陳奕涵、陳建成、方笙瑋
        </div>
        <div style={{ fontSize: 26, color: C.sub, marginTop: 12, lineHeight: 1.5 }}>
          立場：主文中立（區域治理／公部門視角）；委員親身實踐案例與具體方案自然帶出在地實作經驗。
        </div>
      </div>
    </Fill>
    <Footer />
  </div>
);

/* ─────────── 4 · 大矽谷推動方案 ─────────── */
const StratRow = ({
  no,
  name,
  points,
  link,
  star,
}: {
  no: string;
  name: string;
  points: string;
  link: string;
  star?: boolean;
}) => (
  <div
    style={{
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '120px 1fr 420px',
      gap: 26,
      alignItems: 'center',
      background: star ? C.hcBg : C.panel,
      border: `1px solid ${star ? `${C.hc}55` : C.line}`,
      borderRadius: 14,
      padding: '0 30px',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span
        style={{ fontFamily: C.num, fontSize: 42, fontWeight: 700, color: star ? C.hc : '#b9c0cc' }}
      >
        {no}
      </span>
      {star && <span style={{ fontSize: 28 }}>⭐</span>}
    </div>
    <div>
      <div style={{ fontSize: 34, fontWeight: 800, color: C.ink }}>{name}</div>
      <div style={{ fontSize: 25, color: C.sub, marginTop: 5 }}>{points}</div>
    </div>
    <div style={{ fontSize: 26, color: star ? C.hc : C.sub, fontWeight: star ? 800 : 500 }}>
      {link}
    </div>
  </div>
);
const Megasilicon: Page = () => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <Kicker>區域上位框架 · 正當性錨點</Kicker>
      <Title>桃竹苗大矽谷推動方案</Title>
    </div>
    <Fill gap={16}>
      <StratRow
        no="一"
        name="前瞻技術驅動"
        points="晶片、生成式 AI、5G；開創生醫、低軌衛星、電動車"
        link="新興產業＝新職涯方向"
      />
      <StratRow
        no="二"
        name="深科技新創"
        points="國發基金＋創投投資；企業×新創；創業家赴海外培訓"
        link="青年創業與新創支持"
      />
      <StratRow
        no="三"
        name="人才培育與延攬"
        points="投資在地大學重點學院、增設產學專班、國際人力聯合服務及延攬中心"
        link="本議題核心：產學×留才×國際人才"
        star
      />
      <StratRow
        no="四"
        name="園區優化升級"
        points="參考竹科 X 基地、活化閒置空間、都市型科學園區"
        link="場域與就業載體"
      />
      <div style={{ flex: 'none', fontSize: 26, color: C.ink, lineHeight: 1.4 }}>
        策略三已把「產學專班 × 在地大學 × 國際人才延攬」寫成國家任務 — 但執行落到四縣市
        <b>各有量能落差</b>，正是本組切入點。
      </div>
    </Fill>
    <Footer src="國發會 / 行政院重要政策 — 桃竹苗大矽谷推動方案" />
  </div>
);

/* ─────────── 5 · 缺工 KPI ─────────── */
const Kpi = ({
  big,
  unit,
  label,
  note,
  color,
}: {
  big: string;
  unit?: string;
  label: string;
  note?: React.ReactNode;
  color: string;
}) => (
  <div
    style={{
      flex: 1,
      background: C.panel,
      border: `1px solid ${C.line}`,
      borderTop: `6px solid ${color}`,
      borderRadius: 18,
      padding: '48px 32px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <div style={{ fontFamily: C.num, fontWeight: 700, color, fontSize: 92, lineHeight: 1 }}>
      {big}
      {unit && <span style={{ fontSize: 44, marginLeft: 4 }}>{unit}</span>}
    </div>
    <div style={{ fontSize: 34, fontWeight: 700, color: C.ink, marginTop: 20 }}>{label}</div>
    {note && (
      <div style={{ fontSize: 23, color: C.sub, marginTop: 12, lineHeight: 1.4 }}>{note}</div>
    )}
  </div>
);
const DataShortage: Page = () => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <Kicker>背景數據 ① · AI／半導體缺工</Kicker>
      <Title>需求在擴大，缺口在拉開</Title>
    </div>
    <Fill gap={26}>
      <div style={{ display: 'flex', gap: 24, flex: 'none' }}>
        <Kpi
          color={C.hc}
          big="3–4千"
          label="AI 人才年新增需求"
          note="2025–2027 每年（國發會推估）"
        />
        <Kpi
          color={C.ty}
          big="56.1"
          unit="%"
          label="企業面臨 AI 人才不足"
          note="數位產業署人才需求推估"
        />
        <Kpi color={C.ml} big="3.4萬" label="半導體人才缺口" note="2025/05；104×工研院報告" />
        <Kpi color={C.hh} big="0.2" label="半導體供需比" note="每 5 個缺額僅 1 位求職者" />
      </div>
      <div
        style={{
          flex: 'none',
          background: C.panel2,
          borderRadius: 16,
          padding: '26px 30px',
          fontSize: 30,
          color: C.ink,
          lineHeight: 1.5,
        }}
      >
        最缺：生產製造／品管 1 萬、研發 9 千、操作／技術／維修 7 千；數位轉型／智慧機械年均新增需求{' '}
        <b>1.2–1.3 萬人</b>（占總就業 10.6%）。
      </div>
    </Fill>
    <Footer src="104×工研院《2025 半導體業人才報告書》、國發會／數位產業署人才需求推估" />
  </div>
);

/* ─────────── 6 · 全球展望 + 觀點 ─────────── */
const DataGlobal: Page = () => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <Kicker>背景數據 ② · 全球就業展望</Kicker>
      <Title>AI 同時創造與取代，關鍵是「會用 AI 創造價值」</Title>
    </div>
    <Fill gap={26}>
      <div style={{ display: 'flex', gap: 24, flex: 'none' }}>
        <Kpi color={C.hh} big="1,100萬" label="AI 預估新創造職缺" note="WEF《2025 就業未來報告》" />
        <Kpi color={C.ml} big="900萬" label="AI 預估取代職缺" note="淨增但結構重組" />
        <Kpi color={C.hc} big="86" unit="%" label="企業因 AI 轉型" note="2030 年；WEF" />
      </div>
      <div
        style={{
          flex: 'none',
          display: 'flex',
          gap: 20,
          alignItems: 'flex-start',
          background: C.hcBg,
          border: `1px solid ${C.hc}33`,
          borderRadius: 16,
          padding: '26px 30px',
        }}
      >
        <span
          style={{
            fontFamily: C.num,
            fontWeight: 700,
            color: C.hc,
            fontSize: 26,
            whiteSpace: 'nowrap',
          }}
        >
          議題切角
        </span>
        <span style={{ fontSize: 30, color: C.ink, lineHeight: 1.5 }}>
          缺的不只是工程師，而是<b>跨域 × AI 應用力</b>的人 — 最難招的是 AI 產品經理、AI
          顧問，能把技術「變成價值」。 培育斷點：讓非純理工背景的青年也能用 AI 創造價值。
        </span>
      </div>
    </Fill>
    <Footer src="WEF《2025 就業未來報告》、PwC 2025 全球 AI 職缺動態報告" />
  </div>
);

/* ─────────── 7 · 四縣市總覽對照 ⭐ ─────────── */
const CountyCol = ({
  color,
  name,
  rows,
}: {
  color: string;
  name: string;
  rows: [string, React.ReactNode][];
}) => (
  <div
    style={{
      flex: 1,
      height: '100%',
      background: C.panel,
      borderRadius: 14,
      overflow: 'hidden',
      border: `1px solid ${C.line}`,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{
        background: color,
        color: '#fff',
        fontWeight: 800,
        fontSize: 30,
        padding: '16px 18px',
        textAlign: 'center',
        flex: 'none',
      }}
    >
      {name}
    </div>
    <div
      style={{
        flex: 1,
        padding: '20px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      {rows.map(([k, v], i) => (
        <div key={i}>
          <div style={{ fontSize: 18, color: C.sub, fontFamily: C.num, letterSpacing: '.04em' }}>
            {k}
          </div>
          <div
            style={{ fontSize: 25, color: C.ink, lineHeight: 1.3, marginTop: 3, fontWeight: 500 }}
          >
            {v}
          </div>
        </div>
      ))}
    </div>
  </div>
);
const CompareAll: Page = () => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <Kicker>§3.0 四縣市政策現況 · 核心對照</Kicker>
      <Title>一眼看出落差：層級不對等、性格各異</Title>
    </div>
    <Fill>
      <div style={{ display: 'flex', gap: 18, flex: 1 }}>
        <CountyCol
          color={C.ty}
          name="桃園市"
          rows={[
            [
              '專責機關',
              <>
                <b>青年事務局（一級）</b>
              </>,
            ],
            ['旗艦方案', '青年安薪就業讚'],
            ['創業補助', '微型創業獎勵、青創資源網'],
            [
              '代表政績',
              <b key="ty-result" style={{ color: C.ty }}>
                安薪 94% 穩定就業、薪資 +18.2%
              </b>,
            ],
            ['政策性格', '在地就業＋創業＋青年參與'],
          ]}
        />
        <CountyCol
          color={C.hc}
          name="新竹市"
          rows={[
            [
              '專責機關',
              <>
                勞青處＋青年發展中心
                <br />
                （2025 成立）
              </>,
            ],
            ['旗艦方案', '就博會「畢業即就業」'],
            ['創業補助', '青創貸款利息補貼（利率上限 2.5%）'],
            [
              '代表政績',
              <b key="hc-result" style={{ color: C.hc }}>
                滿意度 76.4%；就博會 200+ 企業
              </b>,
            ],
            ['政策性格', '就業媒合＋創業金融＋新專責中心'],
          ]}
        />
        <CountyCol
          color={C.hh}
          name="新竹縣"
          rows={[
            [
              '專責機關',
              <>
                勞工處
                <br />
                <b>（無青年專責一級）</b>
              </>,
            ],
            ['旗艦方案', '數位創新青年培育就業'],
            ['創業補助', '圓夢貸款（最高 50 萬）'],
            ['代表政績', '青年計畫起步；銀髮媒合 70 人'],
            ['政策性格', '產業強、青年量能起步、偏銀髮'],
          ]}
        />
        <CountyCol
          color={C.ml}
          name="苗栗縣"
          rows={[
            ['專責機關', '勞青處-青年發展科'],
            ['旗艦方案', '留返鄉就業方案'],
            ['創業補助', '苗菁創生（補助 15 萬）'],
            ['代表政績', '苗菁創生 12 店家入選'],
            ['政策性格', '地方創生／青年返鄉'],
          ]}
        />
      </div>
    </Fill>
    <Footer src="各縣市政府青年／勞動單位官網（見附錄）" />
  </div>
);

/* ─────────── 8–11 · 各縣市深入 ─────────── */
const CountyDeep = ({
  color,
  bg,
  county,
  eyebrow,
  title,
  facts,
  kpiBig,
  kpiLabel,
  src,
}: {
  color: string;
  bg: string;
  county: string;
  eyebrow: string;
  title: string;
  facts: [string, React.ReactNode][];
  kpiBig: string;
  kpiLabel: React.ReactNode;
  src: React.ReactNode;
}): React.ReactElement => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
        <Chip color={color}>{county}</Chip>
        <span
          style={{
            fontFamily: C.num,
            fontSize: 21,
            letterSpacing: '.14em',
            color: C.sub,
            textTransform: 'uppercase',
          }}
        >
          {eyebrow}
        </span>
      </div>
      <Title>{title}</Title>
    </div>
    <Fill>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 28, flex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {facts.map(([k, v], i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: C.panel,
                border: `1px solid ${C.line}`,
                borderLeft: `6px solid ${color}`,
                borderRadius: 14,
                padding: '18px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 800, color }}>{k}</div>
              <div style={{ fontSize: 26, color: C.ink, lineHeight: 1.45, marginTop: 6 }}>{v}</div>
            </div>
          ))}
        </div>
        <div
          style={{
            background: bg,
            border: `1px solid ${color}33`,
            borderRadius: 18,
            padding: '36px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ fontSize: 24, color, fontWeight: 700, letterSpacing: '.06em' }}>
            代表政績
          </div>
          <div
            style={{
              fontFamily: C.num,
              fontWeight: 700,
              color: C.ink,
              fontSize: 76,
              lineHeight: 1.04,
              marginTop: 14,
            }}
          >
            {kpiBig}
          </div>
          <div style={{ fontSize: 28, color: C.ink, marginTop: 18, lineHeight: 1.45 }}>
            {kpiLabel}
          </div>
        </div>
      </div>
    </Fill>
    <Footer src={src} />
  </div>
);
const Taoyuan: Page = () =>
  CountyDeep({
    color: C.ty,
    bg: C.tyBg,
    county: '桃園市',
    eyebrow: '§3.1 · 制度優勢',
    title: '少數設一級青年專責機關的縣市',
    facts: [
      ['青年事務局（一級機關）', <>轄綜合規劃／職涯發展／公共參與科 — 合作對口層級最完整。</>],
      [
        '旗艦｜青年安薪就業讚',
        <>設籍桃園、未滿 30 歲；推介月薪 3 萬以上全時職缺，滿 3／6 個月領 9,000／12,000。</>,
      ],
      [
        '創業支持',
        <>
          創新創業資源網、<b>安東青創基地</b>、微型創業獎勵；青創貨櫃市集、星光創意聚落。
        </>,
      ],
    ],
    kpiBig: '94% · +18.2%',
    kpiLabel: <>參與者 6 個月仍穩定就業 94%；留任原單位平均薪資 +18.2%（111 年度調查）。</>,
    src: '桃園市青年事務局、勞動局、青年職涯網',
  });
const HsinchuCity: Page = () =>
  CountyDeep({
    color: C.hc,
    bg: C.hcBg,
    county: '新竹市',
    eyebrow: '§3.2 · 新成立專責中心',
    title: '就業媒合 × 創業金融 × 青年發展中心',
    facts: [
      [
        '勞青處＋青年發展中心',
        <>2025/01 正式營運（首任主任陳毅璇＝本組成員）；青年 16–40 歲占全市約 31%。</>,
      ],
      [
        '就業能量',
        <>
          就博會 200+ 企業、逾 1 萬職缺；現場徵才 36 家、逾 1,700 職缺；2026
          校園就博會主打「畢業即就業」。
        </>,
      ],
      [
        '青創貸款利息補貼',
        <>
          負責人 18–45 歲、登記於竹市；年利率上限 <b>2.5%</b>，最長補貼 2 年（受理至 115/11/30）。
        </>,
      ],
    ],
    kpiBig: '76.4%',
    kpiLabel: <>青年政策滿意度；2025 勞參率 59.5%（年增 0.2%）。</>,
    src: '新竹市青年發展中心、勞工處、中央社',
  });
const HsinchuCounty: Page = () =>
  CountyDeep({
    color: C.hh,
    bg: C.hhBg,
    county: '新竹縣',
    eyebrow: '§3.3 · 量能起步',
    title: '產業強，青年專責層級相對薄弱',
    facts: [
      ['勞工處（無一級青年專責）', <>本身即落差點；本組沈慧虹副處長可現場補充縣府最新青年規劃。</>],
      [
        '數位創新青年培育就業計畫',
        <>
          結合企業與大專院校，提供大三至研究所<b>實習平台</b>；新竹青創基地設於明新科大。
        </>,
      ],
      [
        '圓夢貸款計畫',
        <>
          與信保基金合作，最高 <b>50 萬</b>，協助有潛力但缺資金與擔保之中小企業。
        </>,
      ],
    ],
    kpiBig: '70 人',
    kpiLabel: <>銀髮據點媒合成功；施政偏中高齡 — 反而是跨縣市「借量能補位」之處。</>,
    src: '新竹縣政府勞工處',
  });
const Miaoli: Page = () =>
  CountyDeep({
    color: C.ml,
    bg: C.mlBg,
    county: '苗栗縣',
    eyebrow: '§3.4 · 差異化定位',
    title: '地方創生／青年返鄉的雙基地路徑',
    facts: [
      ['勞青處-青年發展科', <>明確青年專責科級單位。</>],
      [
        '雙創業基地',
        <>
          青年創業指揮部（講座／團練／貸款諮詢）＋<b>青創 3 號-海洋青年創業基地</b>
          （竹南，海洋文化觀光）。
        </>,
      ],
      ['苗菁創生輔導升級', <>個案補助 15 萬、總投入 150 萬、自籌 20%。</>],
    ],
    kpiBig: '12 家',
    kpiLabel: <>店家入選苗菁創生；重地方創生／返鄉（與議題三交集，差異化於竹科留才）。</>,
    src: '苗栗縣勞青處、新創圓夢網、客家電視',
  });

/* ─────────── 12 · 跨機關共用資源 ─────────── */
const ShareRow = ({ name, body }: { name: string; body: string }) => (
  <div
    style={{
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '440px 1fr',
      gap: 26,
      alignItems: 'center',
      background: C.panel,
      border: `1px solid ${C.line}`,
      borderRadius: 14,
      padding: '0 30px',
    }}
  >
    <div style={{ fontSize: 32, fontWeight: 800, color: C.ink }}>{name}</div>
    <div style={{ fontSize: 27, color: C.sub }}>{body}</div>
  </div>
);
const SharedRes: Page = () => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <Kicker>§3.5 · 四縣市皆可用（背景）</Kicker>
      <Title>跨機關共用資源 — 合作的現成底盤</Title>
    </div>
    <Fill gap={16}>
      <ShareRow
        name="勞動部桃竹苗分署"
        body="區域職前訓練、委外訓練、產業新尖兵計畫（青年×產業接軌）"
      />
      <ShareRow name="經濟部青創及啟動金貸款" body="全國性創業融資" />
      <ShareRow name="青年就業領航計畫" body="高中職畢業青年職場體驗與就業" />
      <ShareRow name="投資青年就業方案" body="行政院跨部會青年就業整合方案" />
      <div style={{ flex: 'none', fontSize: 28, color: C.ink }}>
        解讀：共用資源已存在，<b>缺的是把四縣市青年端「接上去」的共同入口與媒合機制</b>。
      </div>
    </Fill>
    <Footer src="勞動力發展署桃竹苗分署、行政院" />
  </div>
);

/* ─────────── 13 · 委員實證案例：桃園落地鏈 ─────────── */
const Stn = ({
  no,
  label,
  color = '#9aa1b0',
}: {
  no: string;
  label: React.ReactNode;
  color?: string;
}) => (
  <div
    style={{
      flex: 1,
      minWidth: 0,
      background: C.panel,
      border: `1px solid ${C.line}`,
      borderRadius: 12,
      padding: '14px 14px',
      textAlign: 'center',
    }}
  >
    <div style={{ fontFamily: C.num, fontWeight: 700, fontSize: 26, color }}>{no}</div>
    <div style={{ fontSize: 22, color: C.ink, lineHeight: 1.25, marginTop: 4 }}>{label}</div>
  </div>
);
const Arrow = () => (
  <div style={{ flex: 'none', color: '#c2c9d6', fontSize: 26, alignSelf: 'center' }}>→</div>
);
const PhotoCard = ({ src, cap }: { src: string; cap: string }) => (
  <div
    style={{
      flex: 1,
      borderRadius: 14,
      overflow: 'hidden',
      border: `1px solid ${C.line}`,
      background: '#000',
      position: 'relative',
    }}
  >
    <img
      src={src}
      alt={cap}
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
    />
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(transparent, rgba(0,0,0,.78))',
        color: '#fff',
        fontSize: 21,
        padding: '28px 16px 14px',
      }}
    >
      📷 {cap}
    </div>
  </div>
);
const Chain: Page = () => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <Kicker>§3.6 · 委員實證案例（以盧旭熙為例）</Kicker>
      <Title>一條桃園在地產學落地鏈 — 已被走通</Title>
    </div>
    <Fill gap={14}>
      <div style={{ flex: 'none', display: 'flex', gap: 10, alignItems: 'stretch' }}>
        <Stn no="1" label="大學育成中心" />
        <Arrow />
        <Stn no="2" label="安東青創基地" color={C.ty} />
        <Arrow />
        <Stn no="3" label="青年局引薦×開南產學" color={C.ty} />
        <Arrow />
        <Stn no="4" label="教學軟體公司×AI 應用" color={C.hc} />
      </div>
      <div style={{ flex: 'none', display: 'flex', gap: 10, alignItems: 'stretch' }}>
        <Stn no="5" label="開南 Intern ×2" color={C.hc} />
        <Arrow />
        <Stn no="6" label="教材→線下課程（開南）" color={C.hc} />
        <Arrow />
        <Stn no="7" label="桃園企業黑客松" color={C.ty} />
        <Arrow />
        <Stn no="8" label="爭取 IDE 免費 credit" />
      </div>
      <div style={{ flex: 1, minHeight: 0, display: 'flex', gap: 18 }}>
        <PhotoCard src={ericJingli} cap="精立數位 · n8n 企業內訓（站④ AI 應用）" />
        <PhotoCard src={ericKainan} cap="開南大學資管系授課（站⑤⑥ Intern／教學）" />
        <div style={{ flex: 1, position: 'relative' }}>
          <ImagePlaceholder hint="安東青創基地進駐現場（站②）" />
        </div>
        <div style={{ flex: 1, position: 'relative' }}>
          <ImagePlaceholder hint="桃園企業黑客松對接（站⑦）" />
        </div>
      </div>
      <div style={{ flex: 'none', fontSize: 26, color: C.ink, lineHeight: 1.45 }}>
        一次串起「育成→青創基地→青年局→產學→企業→工具商」，對接大矽谷策略三 — 可放大為
        <b>跨縣市版本</b>的縮小樣板。
      </div>
    </Fill>
    <Footer src="委員親身經驗（WPORT 教學案例）" />
  </div>
);

/* ─────────── 14 · A 成果收斂·四面向 ⭐ ─────────── */
const Quad = ({
  color,
  tag,
  title,
  children,
}: {
  color: string;
  tag: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div
    style={{
      background: C.panel,
      border: `1px solid ${C.line}`,
      borderTop: `6px solid ${color}`,
      borderRadius: 16,
      padding: '26px 30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ fontFamily: C.num, fontWeight: 700, color, fontSize: 24 }}>{tag}</span>
      <span style={{ fontSize: 33, fontWeight: 800, color: C.ink }}>{title}</span>
    </div>
    <div style={{ fontSize: 26, color: C.sub, lineHeight: 1.5, marginTop: 12 }}>{children}</div>
  </div>
);
const Inventory: Page = () => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <Kicker>大會格式 A · 成果收斂</Kicker>
      <Title>四面向盤點：現況、落差、借鏡、建議</Title>
    </div>
    <Fill>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: 22,
          flex: 1,
        }}
      >
        <Quad color={C.hc} tag="01" title="政策現況">
          桃園設一級青年事務局（安薪）；竹市 2025
          新設青年發展中心（就博會＋青創貸款）；竹縣勞工處無一級專責（圓夢貸款、偏銀髮）；苗栗青年發展科（雙創業基地、苗菁創生）。四縣皆綁進大矽谷框架。
        </Quad>
        <Quad color={C.ty} tag="02" title="問題與差異">
          機關層級不對等（桃園一級↔竹縣無專責）；補助多綁戶籍／設立地、跨縣市不通用；創業基地與職訓量能不均；無共同青年資源入口；竹科「留才」vs
          苗栗「返鄉」敘事分歧。
        </Quad>
        <Quad color={C.hh} tag="03" title="優化改善（值得借鏡）">
          桃園安薪「94% 穩定就業／薪資 +18.2%」＋安東落地鏈；竹市就博會「200+
          企業／萬筆職缺」、滿意度 76.4%；苗栗地方創生／海洋青創差異化路徑。
        </Quad>
        <Quad color={C.ml} tag="04" title="具體建議">
          共建青年×AI 人才共享平台（補助／職缺／基地一站查）；產學專班跨縣市互通；AI
          應用人才四縣市巡迴；對接大矽谷「國際人力延攬中心」聯合留才；半年試辦＋一年 MOU。
        </Quad>
      </div>
    </Fill>
    <Footer />
  </div>
);

/* ─────────── 15–20 · B 六段提案 ─────────── */
const SegHead = ({ no, title }: { no: string; title: string }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginTop: 2 }}>
    <span style={{ fontFamily: C.num, fontWeight: 700, fontSize: 44, color: C.hc }}>
      {no}
      <span style={{ color: '#c2c9d6' }}>/06</span>
    </span>
    <Title size={54}>{title}</Title>
  </div>
);
const ProbRow = ({ d, all, body }: { d: string; all: React.ReactNode; body: React.ReactNode }) => (
  <div
    style={{
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '1.1fr 180px 1.4fr',
      gap: 22,
      alignItems: 'center',
      background: C.panel,
      border: `1px solid ${C.line}`,
      borderRadius: 12,
      padding: '0 26px',
    }}
  >
    <div style={{ fontSize: 30, fontWeight: 700, color: C.ink }}>{d}</div>
    <div style={{ fontSize: 25, textAlign: 'center' }}>{all}</div>
    <div style={{ fontSize: 25, color: C.sub }}>{body}</div>
  </div>
);
const B1: Page = () => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <Kicker>大會格式 B · 跨縣市合作提案</Kicker>
      <SegHead no="01" title="發現問題（共同困境）" />
    </div>
    <Fill gap={16}>
      <ProbRow
        d="青年專責機關層級不對等"
        all={<span style={{ color: C.ty, fontWeight: 700 }}>部分</span>}
        body="桃園一級局 ↔ 新竹縣無專責，合作對口不對等"
      />
      <ProbRow
        d="青年政策資訊分散、難比較"
        all={<span style={{ color: C.hh, fontWeight: 700 }}>✅ 四縣皆有</span>}
        body="補助散落各局處，青年難一站查詢"
      />
      <ProbRow
        d="缺「跨域應用人才」非純工程師"
        all={<span style={{ color: C.hh, fontWeight: 700 }}>✅ 區域共通</span>}
        body="培訓供給仍偏技術本位"
      />
      <ProbRow
        d="青年／國際人才留在廊帶誘因不足"
        all={<span style={{ color: C.hh, fontWeight: 700 }}>✅ 區域共通</span>}
        body="對接大矽谷國際延攬，缺在地落點"
      />
    </Fill>
    <Footer />
  </div>
);
const Cause = ({ tag, color, body }: { tag: string; color: string; body: React.ReactNode }) => (
  <div
    style={{
      flex: 1,
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      background: C.panel,
      border: `1px solid ${C.line}`,
      borderLeft: `6px solid ${color}`,
      borderRadius: 12,
      padding: '0 28px',
    }}
  >
    <span style={{ fontSize: 30, fontWeight: 800, color, minWidth: 96 }}>{tag}</span>
    <span style={{ fontSize: 28, color: C.ink, lineHeight: 1.4 }}>{body}</span>
  </div>
);
const B2: Page = () => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <Kicker>大會格式 B · 跨縣市合作提案</Kicker>
      <SegHead no="02" title="問題原因" />
    </div>
    <Fill gap={14}>
      <Cause tag="制度" color={C.hc} body={<>青年專責機關落差，協作層級不一。</>} />
      <Cause
        tag="法規"
        color={C.ty}
        body={<>補助多綁戶籍、設立地，跨縣市不通用（桃園安薪需設籍、竹市青創貸需登記於竹市）。</>}
      />
      <Cause tag="資源" color={C.hh} body={<>創業基地與職訓量能不均（桃園密、新竹縣薄）。</>} />
      <Cause tag="資訊" color={C.ml} body={<>各自為政，無共同青年資源入口。</>} />
      <Cause
        tag="文化"
        color="#161A24"
        body={<>竹科「留才」vs 苗栗「返鄉」路徑分歧，缺整合敘事。</>}
      />
    </Fill>
    <Footer />
  </div>
);
const Opp = ({
  no,
  color,
  title,
  body,
}: {
  no: string;
  color: string;
  title: string;
  body: React.ReactNode;
}) => (
  <div
    style={{
      background: C.panel,
      border: `1px solid ${C.line}`,
      borderRadius: 16,
      padding: '28px 30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <span
        style={{
          width: 54,
          height: 54,
          borderRadius: 12,
          background: color,
          color: '#fff',
          fontFamily: C.num,
          fontWeight: 700,
          fontSize: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {no}
      </span>
      <span style={{ fontSize: 32, fontWeight: 800, color: C.ink }}>{title}</span>
    </div>
    <div style={{ fontSize: 27, color: C.sub, lineHeight: 1.45, marginTop: 14 }}>{body}</div>
  </div>
);
const B3: Page = () => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <Kicker>大會格式 B · 跨縣市合作提案</Kicker>
      <SegHead no="03" title="合作機會（一起做效果更好）" />
    </div>
    <Fill>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: 22,
          flex: 1,
        }}
      >
        <Opp
          no="1"
          color={C.hc}
          title="共同青年人才入口／資料盤"
          body="四縣市青年政策、補助、職缺一站可查。"
        />
        <Opp
          no="2"
          color={C.ty}
          title="產學專班 × 企業職缺共享"
          body="把大矽谷策略三的產學專班跨縣市互通。"
        />
        <Opp
          no="3"
          color={C.hh}
          title="AI 應用人才培訓巡迴"
          body="以「跨域 × AI 應用力」為主軸，四縣市輪辦。"
        />
        <Opp
          no="4"
          color={C.ml}
          title="國際／僑外生聯合留才"
          body="對接大矽谷「國際人力聯合服務及延攬中心」，補在地落點。"
        />
      </div>
    </Fill>
    <Footer />
  </div>
);
const PlanRow = ({
  name,
  how,
  who,
  when,
  color,
}: {
  name: React.ReactNode;
  how: string;
  who: string;
  when: string;
  color: string;
}) => (
  <div
    style={{
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '1.2fr 1.6fr 1.1fr 140px',
      gap: 18,
      alignItems: 'center',
      background: C.panel,
      border: `1px solid ${C.line}`,
      borderLeft: `6px solid ${color}`,
      borderRadius: 12,
      padding: '0 24px',
    }}
  >
    <div style={{ fontSize: 27, fontWeight: 800, color: C.ink }}>{name}</div>
    <div style={{ fontSize: 23, color: C.sub }}>{how}</div>
    <div style={{ fontSize: 23, color: C.sub }}>{who}</div>
    <div style={{ fontSize: 24, fontWeight: 700, color, textAlign: 'center', fontFamily: C.num }}>
      {when}
    </div>
  </div>
);
const B4: Page = () => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <Kicker>大會格式 B · 跨縣市合作提案</Kicker>
      <SegHead no="04" title="具體方案（推什麼／怎麼做／誰做／時程）" />
    </div>
    <Fill gap={14}>
      <div
        style={{
          flex: 'none',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1.6fr 1.1fr 140px',
          gap: 18,
          padding: '0 24px',
          fontSize: 20,
          color: C.sub,
          fontFamily: C.num,
          letterSpacing: '.04em',
        }}
      >
        <div>方案</div>
        <div>怎麼做</div>
        <div>主責／協力</div>
        <div style={{ textAlign: 'center' }}>時程</div>
      </div>
      <PlanRow
        color={C.hc}
        name="青年×AI 人才共享平台"
        how="整合四縣市補助／職缺／基地的資訊入口"
        who="桃園青年局發起＋三縣市"
        when="半年試辦"
      />
      <PlanRow
        color={C.ty}
        name="落地鏈常態化媒合"
        how="複製桃園走通的鏈，四縣市輪流主辦"
        who="青年單位＋在地大學＋企業"
        when="一年首輪"
      />
      <PlanRow
        color={C.hh}
        name="實習與職缺共用機制"
        how="實習與職缺跨縣市互推、補助互認"
        who="四縣市勞青＋桃竹苗分署"
        when="一年"
      />
      <PlanRow
        color={C.ml}
        name="AI 應用人才巡迴工作坊"
        how="以跨域應用為題，四縣市巡迴"
        who="青年單位＋民間夥伴"
        when="半年起跑"
      />
    </Fill>
    <Footer />
  </div>
);
const Outcome = ({ k, y05, y1 }: { k: string; y05: React.ReactNode; y1: React.ReactNode }) => (
  <div
    style={{
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr 1fr',
      gap: 18,
      alignItems: 'center',
      background: C.panel,
      border: `1px solid ${C.line}`,
      borderRadius: 12,
      padding: '0 28px',
    }}
  >
    <div style={{ fontSize: 30, fontWeight: 700, color: C.ink }}>{k}</div>
    <div style={{ fontSize: 27, color: C.sub }}>{y05}</div>
    <div style={{ fontSize: 27, color: C.ink, fontWeight: 600 }}>{y1}</div>
  </div>
);
const B5: Page = () => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <Kicker>大會格式 B · 跨縣市合作提案</Kicker>
      <SegHead no="05" title="預期成果（量化模板）" />
    </div>
    <Fill gap={14}>
      <div
        style={{
          flex: 'none',
          display: 'grid',
          gridTemplateColumns: '1.3fr 1fr 1fr',
          gap: 18,
          padding: '0 28px',
          fontSize: 21,
          color: C.sub,
          fontFamily: C.num,
          letterSpacing: '.04em',
        }}
      >
        <div>指標</div>
        <div>Y0.5 目標</div>
        <div>Y1 目標</div>
      </div>
      <Outcome k="青年受益人數" y05={<Todo />} y1={<Todo />} />
      <Outcome k="共同平台／入口" y05="上線試辦版" y1="正式版＋定期更新" />
      <Outcome k="跨縣市媒合場次" y05="1 場試辦" y1="四縣市各 1 場（巡迴）" />
      <Outcome k="政策合作／MOU" y05="籌備" y1="簽署跨縣市合作備忘錄" />
      <div style={{ flex: 'none', fontSize: 23, color: C.sub }}>
        ＊受益人數待四縣市議定後填入，現場不杜撰。
      </div>
    </Fill>
    <Footer />
  </div>
);
const B6: Page = () => (
  <div style={fillLight}>
    <Style />
    <div style={{ flex: 'none' }}>
      <Kicker>大會格式 B · 跨縣市合作提案</Kicker>
      <SegHead no="06" title="第一步（不必一步到位）" />
    </div>
    <Fill gap={24}>
      <div style={{ display: 'flex', gap: 24, flex: 1 }}>
        <div
          style={{
            flex: 1,
            background: C.hcBg,
            border: `1px solid ${C.hc}33`,
            borderRadius: 18,
            padding: '34px 34px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ fontFamily: C.num, fontWeight: 700, fontSize: 30, color: C.hc }}>
            半年內
          </div>
          <ul
            style={{ fontSize: 31, lineHeight: 1.6, marginTop: 16, paddingLeft: 28, color: C.ink }}
          >
            <li>共建青年資源資訊入口（最小可用版）</li>
            <li>辦 1 場跨縣市試辦媒合（複製桃園鏈）</li>
          </ul>
        </div>
        <div
          style={{
            flex: 1,
            background: C.mlBg,
            border: `1px solid ${C.ml}33`,
            borderRadius: 18,
            padding: '34px 34px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ fontFamily: C.num, fontWeight: 700, fontSize: 30, color: C.ml }}>
            一年內
          </div>
          <ul
            style={{ fontSize: 31, lineHeight: 1.6, marginTop: 16, paddingLeft: 28, color: C.ink }}
          >
            <li>巡迴常態化、建立定期交流機制</li>
            <li>四縣市青年單位簽合作備忘錄（MOU）</li>
          </ul>
        </div>
      </div>
      <div
        style={{
          flex: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          fontSize: 27,
          color: C.ink,
          lineHeight: 1.4,
        }}
      >
        <span style={{ fontFamily: C.num, color: C.sub, whiteSpace: 'nowrap' }}>可行性佐證</span>
        桃園已有「育成→青創基地→青年局→產學→企業→工具商」走通的實例（§3.6），跨縣市複製為可操作路徑而非空想。
      </div>
    </Fill>
    <Footer />
  </div>
);

/* ─────────── 21 · 結語 + 來源 ─────────── */
const Closing: Page = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      background: C.dark,
      color: '#fff',
      backgroundImage: dot(true),
      backgroundSize: '46px 46px',
      position: 'relative',
      overflow: 'hidden',
      padding: `0 ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Style />
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 14,
        fontFamily: C.num,
        fontSize: 24,
        letterSpacing: '.16em',
        color: '#9fb4d8',
        marginBottom: 20,
      }}
    >
      <span style={{ width: 40, height: 4, borderRadius: 2, background: C.grad }} />
      結語
    </div>
    <h2 style={{ fontSize: 76, fontWeight: 900, lineHeight: 1.1, margin: 0 }}>
      一條科技廊帶、一條人才鏈，
      <br />
      <span style={{ color: '#7db0ff' }}>四縣市一起做。</span>
    </h2>
    <p style={{ fontSize: 34, color: '#c5cdda', marginTop: 30, maxWidth: 1560, lineHeight: 1.55 }}>
      把大矽谷的人才策略落到青年層級：共同入口、產學互通、AI 巡迴、聯合留才 — 半年試辦、一年 MOU。
    </p>
    <div style={{ marginTop: 38, fontSize: 21, color: '#8a93a6', lineHeight: 1.7, maxWidth: 1680 }}>
      <b style={{ color: '#aab4c6' }}>主要資料來源：</b>
      國發會／行政院（桃竹苗大矽谷）·　104×工研院《2025 半導體業人才報告書》·　WEF《2025
      就業未來報告》·　PwC 2025 全球 AI 職缺報告 · 桃園市青年事務局 ·　新竹市青年發展中心
      ·　新竹縣勞工處 ·　苗栗縣勞青處 ·　勞動力發展署桃竹苗分署。完整連結見底稿附錄 §5。
    </div>
    <div
      style={{
        position: 'absolute',
        left: PAD_X,
        right: PAD_X,
        bottom: 40,
        fontSize: 22,
        color: '#8a93a6',
        borderTop: '1px solid rgba(255,255,255,.1)',
        paddingTop: 14,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <span>議題一｜產業科技與青年職涯協作</span>
      <span>桃竹竹苗青年論壇</span>
    </div>
  </div>
);

export const meta: SlideMeta = {
  title: '議題一 · 50 分鐘討論底稿',
  theme: 'tzzm-forum',
  createdAt: '2026-06-29T16:47:21.606Z',
};
export default [
  Cover,
  Overview,
  Roster,
  Megasilicon,
  DataShortage,
  DataGlobal,
  CompareAll,
  Taoyuan,
  HsinchuCity,
  HsinchuCounty,
  Miaoli,
  SharedRes,
  Chain,
  Inventory,
  B1,
  B2,
  B3,
  B4,
  B5,
  B6,
  Closing,
] satisfies Page[];
