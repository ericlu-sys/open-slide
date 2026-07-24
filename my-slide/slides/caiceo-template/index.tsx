import type { Page, SlideMeta } from '@open-slide/core';

export const meta: SlideMeta = {
  title: '菜鳥CEO · 輪播模板（JSON 引擎）',
  createdAt: '2026-07-20T11:32:42.421Z',
};

/**
 * ★ 菜鳥CEO 輪播模板 — JSON 引擎（CANONICAL TEMPLATE）★
 * ─────────────────────────────────────────────
 * 「template 吃 JSON」：整份輪播 = 檔案底部的 `DECK` 純 JSON 資料。
 * 做新文圖：
 *   1. 複製本檔到 slides/caiceo-<topic>/index.tsx
 *   2. 從文章萃取重點 → 只重寫底部 DECK JSON（引擎區完全不動）
 *   3. meta.createdAt 用 `node -e "console.log(new Date().toISOString())"` 重新產生
 *   4. 照片丟進該 slide 的 assets/，JSON 用檔名引用（如 "photo": "cover.jpg"）
 * 完整流程與 JSON schema 見 .agents/skills/caiceo-carousel/SKILL.md
 *
 * 行內標記（所有文字欄位皆可用）：
 *   `code`  → 藍底等寬（指令）      **粗體** → 粗體
 *
 * 版型鐵則（Eric 定案）：1:1、品牌藍 #02528D、白大圓角卡、Huninn、
 * 每頁內容吃滿卡片高度不留下方空白（autolayout 由模組內建，JSON 不含任何尺寸）。
 */

/* ═══════════════════════ 引擎區（勿改）═══════════════════════ */

type CoverData = {
  module: 'cover';
  slug?: string;
  tag: string;
  eyebrow?: string;
  titleLines: string[];
  sub?: string;
  /** assets/ 內的檔名，例如 "cover.jpg" */
  photo?: string;
};
type ChecklistData = {
  module: 'checklist';
  slug?: string;
  tag: string;
  lead: string;
  items: { title: string; desc: string }[];
};
type DefListData = {
  module: 'defList';
  slug?: string;
  tag: string;
  lead?: string;
  items: { term: string; desc: string }[];
};
type SectionsData = {
  module: 'sections';
  slug?: string;
  tag: string;
  sections: { header: string; bullets: string[] }[];
};
type ParagraphsData = { module: 'paragraphs'; slug?: string; tag: string; paras: string[] };
type PyramidData = {
  module: 'pyramid';
  slug?: string;
  tag: string;
  paras: string[];
  /** 塔頂 → 塔底 */
  layers: string[];
};
type QuadrantData = {
  module: 'quadrant';
  slug?: string;
  tag: string;
  paras: string[];
  axes: { top: string; bottom: string; left: string; right: string };
  /** x,y ∈ [-1, 1] */
  points: { label: string; x: number; y: number }[];
};
type CtaData = {
  module: 'cta';
  slug?: string;
  tag: string;
  titleLines: string[];
  paras: string[];
  handle: string;
  handleSuffix?: string;
};

export type PageData =
  | CoverData
  | ChecklistData
  | DefListData
  | SectionsData
  | ParagraphsData
  | PyramidData
  | QuadrantData
  | CtaData;

export type Deck = { pages: PageData[] };

const SQUARE = 1080;

const c = {
  blue: '#02528D',
  card: '#ffffff',
  ink: '#333333',
  tagBg: '#C9DAE8',
  dash: '#7FA8C9',
  pyramid: ['#1B5E8E', '#2E729F', '#5B92B5', '#8FB4CC', '#BDD3E2'],
};

const FONT_DISPLAY = '"Huninn", "jf-openhuninn", "Noto Sans TC", "PingFang TC", sans-serif';
const FONT_BODY = '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif';
const FONT_MONO = '"JetBrains Mono", "SFMono-Regular", Menlo, monospace';

const SHARED_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Huninn&family=Noto+Sans+TC:wght@400;500;700;900&display=swap');
.caiceo-cover { font-family: ${FONT_BODY}; -webkit-font-smoothing: antialiased; }
`;

const Styles = () => <style>{SHARED_CSS}</style>;

/** JSON 內用檔名引用 assets/ 圖片 */
const asset = (name: string) => new URL(`./assets/${name}`, import.meta.url).href;

/** 行內標記：`code` → Code、**bold** → <b> */
const rich = (text: string): React.ReactNode[] =>
  text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((seg, i) => {
    if (seg.startsWith('`') && seg.endsWith('`')) return <Code key={i}>{seg.slice(1, -1)}</Code>;
    if (seg.startsWith('**') && seg.endsWith('**')) return <b key={i}>{seg.slice(2, -2)}</b>;
    return seg;
  });

const fill = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#03426f',
} as const;

const Frame = ({ slug, children }: { slug: string; children: React.ReactNode }) => (
  <div
    className="caiceo-cover cover"
    data-slug={slug}
    data-format="square"
    style={{
      width: SQUARE,
      height: SQUARE,
      position: 'relative',
      overflow: 'hidden',
      background: c.blue,
      boxSizing: 'border-box',
      padding: '64px 56px 118px',
    }}
  >
    <div
      style={{
        width: '100%',
        height: '100%',
        background: c.card,
        borderRadius: 44,
        boxSizing: 'border-box',
        padding: '58px 60px',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 34,
        textAlign: 'center',
        fontFamily: FONT_DISPLAY,
        fontSize: 40,
        fontWeight: 700,
        color: '#fff',
        letterSpacing: 6,
      }}
    >
      菜鳥CEO
    </div>
  </div>
);

const Label = ({ children, arrows = true }: { children: React.ReactNode; arrows?: boolean }) => (
  <div style={{ marginBottom: 30 }}>
    <span
      style={{
        display: 'inline-block',
        background: c.blue,
        color: '#fff',
        fontFamily: FONT_DISPLAY,
        fontSize: 40,
        fontWeight: 700,
        letterSpacing: 4,
        padding: '14px 30px',
        borderRadius: 14,
      }}
    >
      {children}
      {arrows ? <span style={{ marginLeft: 16, letterSpacing: 0 }}>▶▶</span> : null}
    </span>
  </div>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      display: 'inline-block',
      background: c.tagBg,
      color: c.ink,
      fontFamily: FONT_DISPLAY,
      fontSize: 30,
      fontWeight: 700,
      letterSpacing: 2,
      padding: '6px 18px',
      borderRadius: 6,
      whiteSpace: 'nowrap',
    }}
  >
    {children}
  </span>
);

const Code = ({ children }: { children: React.ReactNode }) => (
  <span
    style={{
      fontFamily: FONT_MONO,
      background: '#EAF1F7',
      color: c.blue,
      fontSize: 26,
      fontWeight: 700,
      padding: '4px 12px',
      borderRadius: 8,
      letterSpacing: 0,
    }}
  >
    {children}
  </span>
);

const bodyStyle = {
  fontSize: 32,
  fontWeight: 500,
  color: c.ink,
  lineHeight: 1.65,
  letterSpacing: 1.5,
} as const;

const CoverModule = (d: CoverData) => (
  <>
    <Label arrows={false}>{d.tag}</Label>
    {d.eyebrow ? (
      <div style={{ ...bodyStyle, fontWeight: 700, marginBottom: 6 }}>{rich(d.eyebrow)}</div>
    ) : null}
    <div
      style={{
        fontFamily: FONT_DISPLAY,
        color: c.blue,
        fontWeight: 900,
        lineHeight: 1.3,
        letterSpacing: 3,
        marginTop: 8,
      }}
    >
      {d.titleLines.map((t, i) => (
        <div key={i} style={{ fontSize: i === d.titleLines.length - 1 ? 80 : 56 }}>
          {t}
        </div>
      ))}
    </div>
    {d.sub ? <div style={{ ...bodyStyle, marginTop: 28 }}>{rich(d.sub)}</div> : null}
    <div
      style={{
        marginTop: 'auto',
        borderRadius: 20,
        overflow: 'hidden',
        minHeight: 0,
        flex: 1,
        maxHeight: 340,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: c.tagBg,
      }}
    >
      {d.photo ? (
        <img
          src={asset(d.photo)}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <span style={{ color: c.blue, fontFamily: FONT_DISPLAY, fontSize: 34, letterSpacing: 3 }}>
          （照片區 · 換上活動/主題照）
        </span>
      )}
    </div>
  </>
);

const ChecklistModule = (d: ChecklistData) => (
  <>
    <Label>{d.tag}</Label>
    <div style={{ ...bodyStyle, fontWeight: 700, marginBottom: 16 }}>{rich(d.lead)}</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, minHeight: 0 }}>
      {d.items.map((it, idx) => (
        <div
          key={idx}
          style={{ border: `3px dashed ${c.dash}`, borderRadius: 18, padding: '13px 24px' }}
        >
          <div
            style={{
              fontFamily: FONT_DISPLAY,
              fontSize: 33,
              fontWeight: 900,
              color: c.blue,
              letterSpacing: 2,
              marginBottom: 4,
            }}
          >
            {rich(it.title)}
          </div>
          <div style={{ ...bodyStyle, fontSize: 27, lineHeight: 1.5 }}>{rich(it.desc)}</div>
        </div>
      ))}
    </div>
  </>
);

const DefListModule = (d: DefListData) => (
  <>
    <Label>{d.tag}</Label>
    {d.lead ? (
      <div style={{ ...bodyStyle, fontWeight: 700, marginBottom: 12 }}>{rich(d.lead)}</div>
    ) : null}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        flex: 1,
        justifyContent: 'space-evenly',
        paddingBottom: 8,
      }}
    >
      {d.items.map((it) => (
        <div key={it.term} style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
          <Tag>{it.term}</Tag>
          <div style={{ ...bodyStyle, fontSize: 31, lineHeight: 1.6, flex: 1 }}>
            {rich(it.desc)}
          </div>
        </div>
      ))}
    </div>
  </>
);

const SectionsModule = (d: SectionsData) => (
  <>
    <Label>{d.tag}</Label>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        flex: 1,
        justifyContent: 'space-evenly',
        paddingBottom: 8,
      }}
    >
      {d.sections.map((s) => (
        <div key={s.header}>
          <div style={{ marginBottom: 12 }}>
            <Tag>{s.header}</Tag>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {s.bullets.map((b, i) => (
              <div key={i} style={{ ...bodyStyle, fontSize: 29, lineHeight: 1.55 }}>
                ・{rich(b)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
);

const ParagraphsModule = (d: ParagraphsData) => (
  <>
    <Label>{d.tag}</Label>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        flex: 1,
        justifyContent: 'space-evenly',
        paddingBottom: 8,
      }}
    >
      {d.paras.map((p, i) => (
        <div key={i} style={{ ...bodyStyle, fontSize: 34 }}>
          {rich(p)}
        </div>
      ))}
    </div>
  </>
);

const PyramidModule = (d: PyramidData) => {
  const n = d.layers.length;
  return (
    <>
      <Label>{d.tag}</Label>
      {d.paras.map((p, i) => (
        <div key={i} style={{ ...bodyStyle, fontSize: 30, marginBottom: 10 }}>
          {rich(p)}
        </div>
      ))}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 6,
          paddingTop: 20,
        }}
      >
        {d.layers.map((label, i) => {
          const topW = 160;
          const botW = 760;
          const w1 = topW + ((botW - topW) * i) / n;
          const w2 = topW + ((botW - topW) * (i + 1)) / n;
          return (
            <div
              key={label}
              style={{
                width: w2,
                height: 92,
                clipPath: `polygon(${((w2 - w1) / 2 / w2) * 100}% 0, ${(((w2 - w1) / 2 + w1) / w2) * 100}% 0, 100% 100%, 0 100%)`,
                background: c.pyramid[Math.min(i, c.pyramid.length - 1)],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontFamily: FONT_DISPLAY,
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: 3,
              }}
            >
              {label}
            </div>
          );
        })}
      </div>
    </>
  );
};

const QuadrantModule = (d: QuadrantData) => (
  <>
    <Label>{d.tag}</Label>
    {d.paras.map((p, i) => (
      <div key={i} style={{ ...bodyStyle, fontSize: 29, marginBottom: 10 }}>
        {rich(p)}
      </div>
    ))}
    <div style={{ flex: 1, position: 'relative', margin: '30px 30px 10px' }}>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: 2,
          background: c.tagBg,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: 2,
          background: c.tagBg,
        }}
      />
      {(
        [
          [d.axes.top, { left: '50%', top: -14, transform: 'translate(-50%, -50%)' }],
          [d.axes.bottom, { left: '50%', bottom: -34, transform: 'translate(-50%, 0)' }],
          [d.axes.left, { left: -12, top: '50%', transform: 'translate(0, -50%)' }],
          [d.axes.right, { right: -12, top: '50%', transform: 'translate(0, -50%)' }],
        ] as const
      ).map(([label, pos]) => (
        <div
          key={label as string}
          style={{
            position: 'absolute',
            ...(pos as object),
            background: c.blue,
            color: '#fff',
            fontFamily: FONT_DISPLAY,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 3,
            padding: '8px 22px',
            borderRadius: 8,
          }}
        >
          {label}
        </div>
      ))}
      {d.points.map((p) => (
        <div
          key={p.label}
          style={{
            position: 'absolute',
            left: `${50 + p.x * 42}%`,
            top: `${50 - p.y * 40}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Tag>{p.label}</Tag>
        </div>
      ))}
    </div>
  </>
);

const CtaModule = (d: CtaData) => (
  <>
    <Label arrows={false}>{d.tag}</Label>
    <div
      style={{
        fontFamily: FONT_DISPLAY,
        color: c.blue,
        fontWeight: 900,
        fontSize: 76,
        lineHeight: 1.3,
        letterSpacing: 3,
        margin: '26px 0 30px',
      }}
    >
      {d.titleLines.map((t, i) => (
        <div key={i}>{t}</div>
      ))}
    </div>
    {d.paras.map((p, i) => (
      <div key={i} style={{ ...bodyStyle, marginBottom: 16 }}>
        {rich(p)}
      </div>
    ))}
    <div
      style={{
        marginTop: 'auto',
        fontFamily: FONT_DISPLAY,
        fontSize: 36,
        fontWeight: 700,
        color: c.blue,
        letterSpacing: 2,
      }}
    >
      追蹤 {d.handle}
      {d.handleSuffix ?? '，一起把社群做起來'}
    </div>
  </>
);

const MODULES: Record<PageData['module'], (d: any) => React.ReactNode> = {
  cover: CoverModule,
  checklist: ChecklistModule,
  defList: DefListModule,
  sections: SectionsModule,
  paragraphs: ParagraphsModule,
  pyramid: PyramidModule,
  quadrant: QuadrantModule,
  cta: CtaModule,
};

/** Deck JSON → open-slide Page[]（slug 未給時自動 NN-module） */
export const buildPages = (deck: Deck): Page[] =>
  deck.pages.map((data, i) => {
    const slug = data.slug ?? `${String(i + 1).padStart(2, '0')}-${data.module}`;
    const Render = MODULES[data.module];
    const PageComp: Page = () => (
      <div style={fill}>
        <Styles />
        <Frame slug={slug}>{Render(data)}</Frame>
      </div>
    );
    return PageComp;
  });

/* ═══════════════ DECK JSON（做新文圖時只改這裡）═══════════════ */

const DECK: Deck = {
  pages: [
    {
      module: 'cover',
      tag: '模組 cover',
      eyebrow: 'eyebrow：來源/系列名',
      titleLines: ['大標可以兩行', '最後一行最大'],
      sub: '副標一句話。cover 建議放真實照片（"photo": "檔名"）。',
    },
    {
      module: 'checklist',
      tag: '模組 checklist',
      lead: '引言一句話。適合：條列重點、參數、檢查清單。',
      items: [
        { title: '重點一', desc: '虛線卡＝藍粗標＋一到兩行說明' },
        { title: '重點二', desc: '3-4 張卡最剛好，超過就拆頁' },
        { title: '`--code`', desc: '標題和內文都吃 `行內標記` 與 **粗體**' },
        { title: '重點四', desc: '這個模組的節奏是整套的標竿' },
      ],
    },
    {
      module: 'defList',
      tag: '模組 defList',
      lead: '可選引言。適合：名詞拆解、角色分工、對照說明。',
      items: [
        { term: '名詞一', desc: '左側淺藍 tag，右側說明文字。' },
        { term: '名詞二', desc: '3-4 組均分卡片高度，不留下方空白。' },
        { term: '名詞三', desc: '說明可放 `code` 或 **粗體**。' },
      ],
    },
    {
      module: 'sections',
      tag: '模組 sections',
      sections: [
        { header: '章節一', bullets: ['適合：步驟教學、分類重點'] },
        { header: '章節二', bullets: ['`指令用行內標記`', '一節 1-3 條 bullet'] },
        { header: '章節三', bullets: ['2-3 節均分整張卡'] },
      ],
    },
    {
      module: 'paragraphs',
      tag: '模組 paragraphs',
      paras: [
        '純文字頁。適合：痛點鋪陳、故事、觀點。',
        '2-3 段最剛好，段落垂直均分吃滿卡片，不會上堆下空。',
        '重點字用 **粗體** 或 `code` 標出。',
      ],
    },
    {
      module: 'pyramid',
      tag: '模組 pyramid',
      paras: ['適合：層級、優先順序。塔頂到塔底 4-5 層。'],
      layers: ['塔頂', '第二層', '第三層', '第四層', '地基'],
    },
    {
      module: 'quadrant',
      tag: '模組 quadrant',
      paras: ['適合：定位、分類。x,y 介於 -1 到 1。'],
      axes: { top: '軸上', bottom: '軸下', left: '軸左', right: '軸右' },
      points: [
        { label: '項目A', x: 0.6, y: 0.6 },
        { label: '項目B', x: -0.6, y: 0.4 },
        { label: '項目C', x: -0.5, y: -0.55 },
        { label: '項目D', x: 0.5, y: -0.4 },
      ],
    },
    {
      module: 'cta',
      tag: '模組 cta',
      titleLines: ['結尾行動頁', '大標兩行'],
      paras: ['一兩句收尾：互動問題或下一步。', '連結說法：🔗 in bio / 留言區。'],
      handle: '@eric_rookie_ceo',
    },
  ],
};

export default buildPages(DECK) satisfies Page[];
