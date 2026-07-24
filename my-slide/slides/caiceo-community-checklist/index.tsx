import type { Page, SlideMeta } from '@open-slide/core';

export const meta: SlideMeta = {
  title: '菜鳥CEO · 社群健檢表（1:1 輪播）',
  createdAt: '2026-07-19T13:59:05.004Z',
};

/**
 * 菜鳥CEO 輪播模組系統
 * ──────────────────
 * 對照 eric_rookie_ceo 真實貼文（C_xVBsmpDXT、C_sJh2Mtv_v，各 9-10 張 1:1）逐張整理：
 * 版式 = 品牌藍外底 + 白色大圓角卡 + 藍色圓角標籤(白字, ▶▶) + 底部白字「菜鳥CEO」。
 * 每頁是一個 module（key-value 資料驅動），每次發文挑模組、填資料即可：
 *   cover / checklist / defList / sections / paragraphs / pyramid / quadrant / cta
 * 顏色取樣自原圖：外底與標題藍 #02528D。
 */

const SQUARE = 1080;

const c = {
  blue: '#02528D', // 品牌藍：外底、標籤、標題、粗體重點（取樣自原圖 #00548d~#02528d）
  card: '#ffffff',
  ink: '#333333', // 內文深灰
  tagBg: '#C9DAE8', // 淺藍小 tag（定義列表、章節標頭、chart 點）
  dash: '#7FA8C9', // 虛線框
  pyramid: ['#1B5E8E', '#2E729F', '#5B92B5', '#8FB4CC', '#BDD3E2'], // 金字塔藍階
};

const FONT_DISPLAY = '"Huninn", "jf-openhuninn", "Noto Sans TC", "PingFang TC", sans-serif';
const FONT_BODY = '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif';

const SHARED_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Huninn&family=Noto+Sans+TC:wght@400;500;700;900&display=swap');
.caiceo-cover { font-family: ${FONT_BODY}; -webkit-font-smoothing: antialiased; }
`;

const Styles = () => <style>{SHARED_CSS}</style>;

const fill = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#03426f',
} as const;

/** 1080×1080 外框：品牌藍外底 + 白色大圓角卡 + 底部「菜鳥CEO」 */
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

/** 藍色圓角標籤（白字 + ▶▶），對照原版每頁左上角 */
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

/** 淺藍小 tag（定義列表左欄、章節標頭） */
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

const bodyStyle = {
  fontSize: 32,
  fontWeight: 500,
  color: c.ink,
  lineHeight: 1.65,
  letterSpacing: 1.5,
} as const;

/* ──────────────────────────── modules ──────────────────────────── */

/** cover：標籤 + eyebrow + 兩行藍色大標 + （可選）照片區 */
const CoverModule = ({
  tag,
  eyebrow,
  titleLines,
  sub,
}: {
  tag: string;
  eyebrow?: string;
  titleLines: string[];
  sub?: string;
}) => (
  <>
    <Label arrows={false}>{tag}</Label>
    {eyebrow ? (
      <div style={{ ...bodyStyle, fontWeight: 700, marginBottom: 6 }}>{eyebrow}</div>
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
      {titleLines.map((t, i) => (
        <div key={i} style={{ fontSize: i === titleLines.length - 1 ? 88 : 64 }}>{t}</div>
      ))}
    </div>
    {sub ? <div style={{ ...bodyStyle, marginTop: 40 }}>{sub}</div> : null}
    <div
      style={{
        marginTop: 'auto',
        borderRadius: 20,
        background: `linear-gradient(135deg, ${c.tagBg}, #eef4f9)`,
        minHeight: 300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: c.blue,
        fontFamily: FONT_DISPLAY,
        fontSize: 34,
        letterSpacing: 3,
      }}
    >
      （照片區 · 換上活動/主題照）
    </div>
  </>
);

/** checklist：引言 + 藍色虛線框卡片（對照原版「社群健檢表」頁） */
const ChecklistModule = ({
  tag,
  lead,
  items,
}: {
  tag: string;
  lead: string;
  items: { title: string; desc: string }[];
}) => (
  <>
    <Label>{tag}</Label>
    <div style={{ ...bodyStyle, fontWeight: 700, marginBottom: 16 }}>{lead}</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, minHeight: 0 }}>
      {items.map((it) => (
        <div
          key={it.title}
          style={{
            border: `3px dashed ${c.dash}`,
            borderRadius: 18,
            padding: '13px 24px',
          }}
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
            {it.title}
          </div>
          <div style={{ ...bodyStyle, fontSize: 27, lineHeight: 1.5 }}>{it.desc}</div>
        </div>
      ))}
    </div>
  </>
);

/** defList：左側淺藍 tag + 右側段落（對照「志工/場地/廠商/參與者」頁） */
const DefListModule = ({
  tag,
  items,
}: {
  tag: string;
  items: { term: string; desc: string }[];
}) => (
  <>
    <Label>{tag}</Label>
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
      {items.map((it) => (
        <div key={it.term} style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
          <Tag>{it.term}</Tag>
          <div style={{ ...bodyStyle, fontSize: 31, lineHeight: 1.6, flex: 1 }}>{it.desc}</div>
        </div>
      ))}
    </div>
  </>
);

/** sections：淺藍章節標頭 + 條列（對照 post2「Carousell 分析師」頁） */
const SectionsModule = ({
  tag,
  sections,
}: {
  tag: string;
  sections: { header: string; bullets: string[] }[];
}) => (
  <>
    <Label>{tag}</Label>
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
      {sections.map((s) => (
        <div key={s.header}>
          <div style={{ marginBottom: 14 }}>
            <Tag>{s.header}</Tag>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {s.bullets.map((b, i) => (
              <div key={i} style={{ ...bodyStyle, fontSize: 30, lineHeight: 1.55 }}>
                ・{b}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
);

/** paragraphs：純文字段落（對照 post2「Grab 中資料的運用」頁） */
const ParagraphsModule = ({ tag, paras }: { tag: string; paras: string[] }) => (
  <>
    <Label>{tag}</Label>
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
      {paras.map((p, i) => (
        <div key={i} style={{ ...bodyStyle, fontSize: 34 }}>{p}</div>
      ))}
    </div>
  </>
);

/** pyramid：藍階金字塔（對照「馬斯洛金字塔（社群版）」頁） */
const PyramidModule = ({
  tag,
  paras,
  layers,
}: {
  tag: string;
  paras: string[];
  layers: string[]; // 從塔頂到塔底
}) => {
  const n = layers.length;
  return (
    <>
      <Label>{tag}</Label>
      {paras.map((p, i) => (
        <div key={i} style={{ ...bodyStyle, fontSize: 30, marginBottom: 10 }}>{p}</div>
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
        {layers.map((label, i) => {
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

/** quadrant：四象限散點（對照「商業/非營利 × 對內/對外」頁） */
const QuadrantModule = ({
  tag,
  paras,
  axes,
  points,
}: {
  tag: string;
  paras: string[];
  axes: { top: string; bottom: string; left: string; right: string };
  points: { label: string; x: number; y: number }[]; // x,y ∈ [-1,1]
}) => (
  <>
    <Label>{tag}</Label>
    {paras.map((p, i) => (
      <div key={i} style={{ ...bodyStyle, fontSize: 29, marginBottom: 10 }}>{p}</div>
    ))}
    <div style={{ flex: 1, position: 'relative', margin: '30px 30px 10px' }}>
      <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: c.tagBg }} />
      <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 2, background: c.tagBg }} />
      {(
        [
          [axes.top, { left: '50%', top: -14, transform: 'translate(-50%, -50%)' }],
          [axes.bottom, { left: '50%', bottom: -34, transform: 'translate(-50%, 0)' }],
          [axes.left, { left: -12, top: '50%', transform: 'translate(0, -50%)' }],
          [axes.right, { right: -12, top: '50%', transform: 'translate(0, -50%)' }],
        ] as const
      ).map(([label, pos]) => (
        <div
          key={label}
          style={{
            position: 'absolute',
            ...pos,
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
      {points.map((p) => (
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

/** cta：結尾行動頁 */
const CtaModule = ({
  tag,
  titleLines,
  paras,
  handle,
}: {
  tag: string;
  titleLines: string[];
  paras: string[];
  handle: string;
}) => (
  <>
    <Label arrows={false}>{tag}</Label>
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
      {titleLines.map((t, i) => (
        <div key={i}>{t}</div>
      ))}
    </div>
    {paras.map((p, i) => (
      <div key={i} style={{ ...bodyStyle, marginBottom: 16 }}>{p}</div>
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
      追蹤 {handle}，一起把社群做起來
    </div>
  </>
);

/* ──────────────────── 本篇內容（社群健檢表示範） ──────────────────── */

const Cover: Page = () => (
  <div style={fill}>
    <Styles />
    <Frame slug="01-cover">
      <CoverModule
        tag="經營社群 · 自我健檢"
        titleLines={['經營社群的人一定要有', '社群健檢表']}
        sub="四格自檢，看看你的社群卡在哪一關。"
      />
    </Frame>
  </div>
);

const Checklist: Page = () => (
  <div style={fill}>
    <Styles />
    <Frame slug="02-checklist">
      <ChecklistModule
        tag="社群健檢表"
        lead="經營社群的人可以檢查一下這些都有做嗎？"
        items={[
          { title: 'FB/IG粉絲頁', desc: '專門發布對外的消息' },
          {
            title: 'Line/ Discord群',
            desc: '針對邀請進來的社群發布訊息，可以生活化、關心，甚至廢文也可以',
          },
          { title: '素材', desc: '有質感的照片、影片等素材，才能做成好的內容吸引人' },
          {
            title: '認同感',
            desc: '讓粉絲和消費者成為社群的一部分，增強認同感，促使社群自發宣傳，降低行銷成本',
          },
        ]}
      />
    </Frame>
  </div>
);

const FourKeys: Page = () => (
  <div style={fill}>
    <Styles />
    <Frame slug="03-defs">
      <DefListModule
        tag="四格逐一拆解"
        items={[
          { term: '粉絲頁', desc: '對外的門面。穩定的發文節奏＋一眼可辨的視覺，決定第一印象。' },
          { term: '鐵粉群', desc: '把粉絲從「看到」變成「參與」。生活化的訊息比官方公告更有效。' },
          { term: '素材', desc: '素材質感決定別人願不願意停下來。隨手拍和有一致美感差很多。' },
          { term: '認同感', desc: '最關鍵的一格。粉絲以身為社群一員為榮，才會自發幫你宣傳。' },
        ]}
      />
    </Frame>
  </div>
);

const Pyramid: Page = () => (
  <div style={fill}>
    <Styles />
    <Frame slug="04-pyramid">
      <PyramidModule
        tag="健檢的優先順序"
        paras={['四格不是平行的。先把地基打穩，再往上疊，順序錯了最後只是散沙！']}
        layers={['認同感', '素材', '鐵粉群', '粉絲頁', '目標與定位']}
      />
    </Frame>
  </div>
);

const Quadrant: Page = () => (
  <div style={fill}>
    <Styles />
    <Frame slug="05-quadrant">
      <QuadrantModule
        tag="你的社群在哪一區"
        paras={['用「對內/對外 × 日常/門面」定位每個管道，資源該放哪裡一目了然。']}
        axes={{ top: '門面', bottom: '日常', left: '對內', right: '對外' }}
        points={[
          { label: 'FB/IG', x: 0.6, y: 0.55 },
          { label: '官網', x: 0.75, y: 0.8 },
          { label: 'Line群', x: -0.6, y: -0.5 },
          { label: 'Discord', x: -0.75, y: -0.25 },
          { label: '實體聚會', x: -0.35, y: 0.45 },
          { label: 'Threads', x: 0.45, y: -0.6 },
        ]}
      />
    </Frame>
  </div>
);

const Why: Page = () => (
  <div style={fill}>
    <Styles />
    <Frame slug="06-why">
      <ParagraphsModule
        tag="為什麼需要這張表"
        paras={[
          '大多數人把「經營社群」當成「發文」，發完就結束，粉絲永遠只是觀眾。',
          '但真正把人留下的，是四件事的組合：對外的門面、對內的鐵粉場域、有質感的素材，以及最關鍵的——認同感。',
          '每季拿這張表自檢一次，你會很清楚下一步該補哪一格。',
        ]}
      />
    </Frame>
  </div>
);

const Cta: Page = () => (
  <div style={fill}>
    <Styles />
    <Frame slug="07-cta">
      <CtaModule
        tag="換你了"
        titleLines={['幫你的社群', '打個分數']}
        paras={['四格裡，你已經做到幾格？', '留言告訴我你卡在哪一關 👇']}
        handle="@eric_rookie_ceo"
      />
    </Frame>
  </div>
);

const pages: Page[] = [Cover, Checklist, FourKeys, Pyramid, Quadrant, Why, Cta];
export default pages satisfies Page[];
