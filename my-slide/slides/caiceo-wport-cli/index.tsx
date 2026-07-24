import type { Page, SlideMeta } from '@open-slide/core';
import coverPhoto from './assets/cover.jpg';

export const meta: SlideMeta = {
  title: '菜鳥CEO · WPORT CLI 教學（1:1 輪播）',
  createdAt: '2026-07-20T11:07:13.579Z',
};

/**
 * 菜鳥CEO 輪播模組系統（與 caiceo-community-checklist 同版型）。
 * 來源文章：https://wport.me/blog/posts/wport-cli-ai-agent-job-search-guide/
 * 每頁一個 module，資料在檔案底部 —— 換一篇文只要換底部資料區。
 */

const SQUARE = 1080;

const c = {
  blue: '#02528D',
  card: '#ffffff',
  ink: '#333333',
  tagBg: '#C9DAE8',
  dash: '#7FA8C9',
};

const FONT_DISPLAY = '"Huninn", "jf-openhuninn", "Noto Sans TC", "PingFang TC", sans-serif';
const FONT_BODY = '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif';
const FONT_MONO = '"JetBrains Mono", "SFMono-Regular", Menlo, monospace';

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

/** 指令字串：淺藍底 mono */
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

/* ──────────────────────────── modules ──────────────────────────── */

const CoverModule = ({
  tag,
  eyebrow,
  titleLines,
  sub,
  photo,
}: {
  tag: string;
  eyebrow?: string;
  titleLines: string[];
  sub?: string;
  photo?: string;
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
        <div key={i} style={{ fontSize: i === titleLines.length - 1 ? 80 : 56 }}>{t}</div>
      ))}
    </div>
    {sub ? <div style={{ ...bodyStyle, marginTop: 28 }}>{sub}</div> : null}
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
        marginBottom: 0,
        marginRight: 0,
      }}
    >
      {photo ? (
        <img src={photo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        <span style={{ color: c.blue, fontFamily: FONT_DISPLAY, fontSize: 34, letterSpacing: 3 }}>
          （照片區）
        </span>
      )}
    </div>
  </>
);

const ChecklistModule = ({
  tag,
  lead,
  items,
}: {
  tag: string;
  lead: string;
  items: { title: React.ReactNode; desc: React.ReactNode }[];
}) => (
  <>
    <Label>{tag}</Label>
    <div style={{ ...bodyStyle, fontWeight: 700, marginBottom: 16 }}>{lead}</div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1, minHeight: 0 }}>
      {items.map((it, idx) => (
        <div
          key={idx}
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

const DefListModule = ({
  tag,
  lead,
  items,
}: {
  tag: string;
  lead?: string;
  items: { term: string; desc: React.ReactNode }[];
}) => (
  <>
    <Label>{tag}</Label>
    {lead ? <div style={{ ...bodyStyle, fontWeight: 700, marginBottom: 12 }}>{lead}</div> : null}
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

const SectionsModule = ({
  tag,
  sections,
}: {
  tag: string;
  sections: { header: string; bullets: React.ReactNode[] }[];
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
          <div style={{ marginBottom: 12 }}>
            <Tag>{s.header}</Tag>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {s.bullets.map((b, i) => (
              <div key={i} style={{ ...bodyStyle, fontSize: 29, lineHeight: 1.55 }}>
                ・{b}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
);

const ParagraphsModule = ({ tag, paras }: { tag: string; paras: React.ReactNode[] }) => (
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

const CtaModule = ({
  tag,
  titleLines,
  paras,
  handle,
}: {
  tag: string;
  titleLines: string[];
  paras: React.ReactNode[];
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
      追蹤 {handle}，一起把 AI 用進求職
    </div>
  </>
);

/* ──────────────── 本篇資料（WPORT CLI 教學）──────────────── */

const P1: Page = () => (
  <div style={fill}>
    <Styles />
    <Frame slug="01-cover">
      <CoverModule
        tag="AI 求職 · 工具教學"
        eyebrow="@wport/cli 使用說明"
        titleLines={['一行指令，讓 AI Agent', '幫你搜職缺']}
        photo={coverPhoto}
      />
    </Frame>
  </div>
);

const P2: Page = () => (
  <div style={fill}>
    <Styles />
    <Frame slug="02-pain">
      <ParagraphsModule
        tag="你是不是也遇過"
        paras={[
          '在 Cursor 裡跟 AI 說「幫我找桃園的 PM 職缺」，它通常只能上網搜，或請你手動複製貼上。',
          <>
            如果把職缺搜尋做成 <b>CLI（命令列工具）</b>，AI Agent 就能直接執行指令、拿到結構化
            JSON，再往下客製履歷、比對 JD、寫進你的筆記。
          </>,
          <>
            這就是 <Code>@wport/cli</Code> 存在的理由。
          </>,
        ]}
      />
    </Frame>
  </div>
);

const P3: Page = () => (
  <div style={fill}>
    <Styles />
    <Frame slug="03-why-cli">
      <DefListModule
        tag="為什麼是 CLI 不是網頁"
        lead="網頁適合人類點擊，命令列適合程式與 AI Agent。"
        items={[
          { term: '人類瀏覽', desc: '網頁 GUI 直覺好看，這仍是你的主場。' },
          { term: 'AI 搜尋', desc: '網頁要模擬點擊、不穩定；CLI 一行指令，穩定。' },
          { term: '接續處理', desc: '不用爬 HTML，原生輸出 JSON / NDJSON。' },
          { term: '串進腳本', desc: <>直接 pipe 給 <Code>jq</Code>、Skill、CI，自動化不卡關。</> },
        ]}
      />
    </Frame>
  </div>
);

const P4: Page = () => (
  <div style={fill}>
    <Styles />
    <Frame slug="04-quickstart">
      <SectionsModule
        tag="三步驟快速開始"
        sections={[
          {
            header: '安裝（Node ≥ 18.17）',
            bullets: [<Code>npm install -g @wport/cli</Code>],
          },
          {
            header: '搜尋職缺',
            bullets: [<Code>wport jobs search --keyword "產品經理"</Code>],
          },
          {
            header: '查看詳情',
            bullets: [
              <Code>wport jobs view &lt;enc_id&gt;</Code>,
              '終端機顯示表格；pipe 出去自動變 JSON。',
            ],
          },
        ]}
      />
    </Frame>
  </div>
);

const P5: Page = () => (
  <div style={fill}>
    <Styles />
    <Frame slug="05-agent-flags">
      <ChecklistModule
        tag="Agent 友善參數"
        lead="專為 AI 工作流設計，讓 LLM 少讀廢話、多做事："
        items={[
          { title: <Code>--minimal</Code>, desc: '只留 Agent 必要欄位，省 token' },
          { title: <Code>--fields enc_id,title</Code>, desc: '自訂欄位，要什麼拿什麼' },
          { title: <Code>--batch</Code>, desc: '從 stdin 吃多個 enc_id，NDJSON 逐行輸出，單筆失敗不中斷' },
          { title: <Code>--output json</Code>, desc: '強制 JSON，接 jq / Skill 都順' },
        ]}
      />
    </Frame>
  </div>
);

const P6: Page = () => (
  <div style={fill}>
    <Styles />
    <Frame slug="06-cursor">
      <ParagraphsModule
        tag="在 Cursor 這樣用"
        paras={[
          '打開 Agent 模式，直接下這段指令：',
          <div
            style={{
              border: `3px dashed ${c.dash}`,
              borderRadius: 18,
              padding: '22px 28px',
              fontSize: 29,
              lineHeight: 1.6,
              color: c.ink,
            }}
          >
            「請在終端機執行 <Code>wport jobs search --keyword "桃園 產品經理" --minimal --output
            json</Code>，把結果整理成表格，標出最適合應屆生的 3 筆。」
          </div>,
          'Agent 會自己呼叫 CLI、拿到 JSON、接著產出履歷建議——比請它「去網站找職缺」可靠得多。',
        ]}
      />
    </Frame>
  </div>
);

const P7: Page = () => (
  <div style={fill}>
    <Styles />
    <Frame slug="07-design">
      <DefListModule
        tag="我們為什麼這樣設計"
        items={[
          { term: 'Agent 優先', desc: 'minimal / fields / batch / pipe 友善，全是為了讓 AI 少讀廢話、多做事。' },
          { term: '公開分離', desc: '求職者搜職缺不用帳號；企業功能收在 enterprise 子命令，金鑰權限清楚。' },
          { term: '可腳本化', desc: '和 jq、Skill、MCP 工具鏈串接，把搜職缺變成履歷客製流水線的一環。' },
        ]}
      />
    </Frame>
  </div>
);

const P8: Page = () => (
  <div style={fill}>
    <Styles />
    <Frame slug="08-cta">
      <CtaModule
        tag="下一步"
        titleLines={['開一個終端機', '試一行看看']}
        paras={[
          <>
            安裝：<Code>npm install -g @wport/cli</Code>
          </>,
          <>
            卡住先跑 <Code>wport doctor</Code>；完整教學在 wport.me 部落格 🔗 in bio
          </>,
        ]}
        handle="@eric_rookie_ceo"
      />
    </Frame>
  </div>
);

const pages: Page[] = [P1, P2, P3, P4, P5, P6, P7, P8];
export default pages satisfies Page[];
