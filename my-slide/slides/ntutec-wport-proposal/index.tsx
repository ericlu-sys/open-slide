import type { Page, SlideMeta } from '@open-slide/core';
import ericPhoto from './assets/eric-tcyac.jpg';
import ntutecLogo from './assets/ntutec-logo-direct.png';
import pitchPropertyPhoto from './assets/pitch-property.jpg';
import pitchTravelPhoto from './assets/pitch-travel.jpg';
import session1on1Photo from './assets/session-1on1.jpg';
import sessionTeamPhoto from './assets/session-team.jpg';
import wportLogo from './assets/wport-logo.png';

export const meta: SlideMeta = {
  title: 'WPORT × 台大創創｜青年局提案',
  createdAt: '2026-06-10',
};

const C = {
  primary: '#56C7BB',
  bg: '#F8F8F8',
  text: '#1A1A1A',
  textMuted: '#626262',
  border: '#E5E5E5',
};

const slideBase: React.CSSProperties = {
  width: 1920,
  height: 1080,
  padding: '90px 140px 80px',
  display: 'flex',
  flexDirection: 'column',
  background: C.bg,
  color: C.text,
  fontFamily: 'system-ui, -apple-system, sans-serif',
  overflow: 'hidden',
  boxSizing: 'border-box',
};

const Eyebrow = ({ num, label }: { num: string; label: string }) => (
  <div
    style={{
      fontSize: 24,
      color: C.textMuted,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      marginBottom: 36,
    }}
  >
    <span style={{ color: C.primary }}>{num}</span>
    <span style={{ color: C.border, margin: '0 14px' }}>/</span>
    {label}
  </div>
);

const Footer = ({ num }: { num: string }) => (
  <div
    style={{
      marginTop: 'auto',
      paddingTop: 24,
      borderTop: `1px solid ${C.border}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      fontSize: 24,
      color: C.textMuted,
    }}
  >
    <span style={{ color: C.text }}>WPORT職航站 × 台大創創</span>
    <span>{num} / 11</span>
  </div>
);

const Cover: Page = () => (
  <div style={{ ...slideBase, padding: '160px 140px 140px', justifyContent: 'flex-end' }}>
    <div
      style={{
        fontSize: 24,
        color: C.textMuted,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        marginBottom: 80,
      }}
    >
      提案簡報｜深度新創媒合計畫
    </div>
    <h1
      style={{
        fontSize: 112,
        fontWeight: 'bold',
        margin: 0,
        lineHeight: 1.08,
        letterSpacing: '-0.015em',
      }}
    >
      WPORT職航站
      <span style={{ color: C.primary, fontWeight: 'normal', margin: '0 18px' }}>×</span>
      台大創創
    </h1>
    <p style={{ fontSize: 40, lineHeight: 1.55, marginTop: 56, maxWidth: 1100 }}>
      3 場、9 家、4 個產業領域——一套已驗證、可複製的深度新創診斷模式。
    </p>
    <div
      style={{
        marginTop: 100,
        paddingTop: 28,
        borderTop: `1px solid ${C.border}`,
        display: 'flex',
        alignItems: 'center',
        gap: 32,
      }}
    >
      <img src={wportLogo} alt="WPORT" style={{ height: 48, width: 'auto' }} />
      <span style={{ color: C.border, fontSize: 28 }}>×</span>
      <img src={ntutecLogo} alt="NTU TEC" style={{ height: 44, width: 'auto' }} />
    </div>
  </div>
);

const Origin: Page = () => (
  <div style={slideBase}>
    <Eyebrow num="01" label="緣起" />
    <h2 style={{ fontSize: 60, fontWeight: 'bold', margin: 0, marginBottom: 20 }}>
      三個交會點，協作成形
    </h2>
    <p style={{ fontSize: 32, lineHeight: 1.5, color: C.text, maxWidth: 1100, marginBottom: 40 }}>
      這不是一個湊出來的提案——是三條原本獨立的線，在合適的時間交集起來。
    </p>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: 80,
        height: 560,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderTop: `1px solid ${C.border}`,
        }}
      >
        {[
          {
            num: '01',
            title: '桃園安東基地',
            body: 'WPORT 職航站 進駐桃園安東基地期間，總經理 Eric 與台大創創營運長 Howard 因此相識。',
          },
          {
            num: '02',
            title: '企業 × 場域 的自然互補',
            body: 'WPORT 廣泛接觸企業與新創社群；台大創創需要高品質的企業與項目導入。兩者一拍即合，三場深度小場順勢成型。',
          },
          {
            num: '03',
            title: 'Eric 任桃園青年資委，看見在地需求',
            body: 'CEO Eric 本屆擔任桃園市青年事務委員會委員，觀察到桃園在地新創同樣渴望高品質 VC 資源——這套已驗證的模式，可以複製回桃園。',
          },
        ].map((p) => (
          <div
            key={p.num}
            style={{
              padding: '20px 0',
              borderBottom: `1px solid ${C.border}`,
              display: 'grid',
              gridTemplateColumns: '60px 1fr',
              gap: 20,
              flex: 1,
            }}
          >
            <div style={{ fontSize: 32, fontWeight: 'bold', color: C.primary }}>{p.num}</div>
            <div>
              <div style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 8 }}>{p.title}</div>
              <p style={{ fontSize: 24, lineHeight: 1.5, color: C.text, margin: 0 }}>{p.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          position: 'relative',
          borderRadius: 12,
          overflow: 'hidden',
          height: '100%',
        }}
      >
        <img
          src={ericPhoto}
          alt="Eric"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            padding: '20px 24px',
            color: '#fff',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 'bold' }}>Eric / WPORT職航站 CEO</div>
          <div style={{ fontSize: 22, marginTop: 4 }}>現任桃園市青年事務委員會 委員</div>
        </div>
      </div>
    </div>

    <Footer num="02" />
  </div>
);

const Positioning: Page = () => (
  <div style={slideBase}>
    <Eyebrow num="02" label="計畫定位" />
    <h2 style={{ fontSize: 72, fontWeight: 'bold', margin: 0, marginBottom: 20 }}>
      用深度 1:1 取代倉促 Demo Day
    </h2>
    <p style={{ fontSize: 30, lineHeight: 1.5, maxWidth: 1300, marginBottom: 40 }}>
      多數新創媒合活動採比賽形式，一場 20+ 家、每組僅 5–10 分鐘。台大創創 × WPORT 採取相反路徑——一場僅帶 2–3 家，給予每家 30–60 分鐘的 VC 一對一深度回饋。
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
      {[
        {
          label: '傳統路線',
          title: '比賽式 Demo Day',
          items: [
            '一場 15–30 家新創',
            '每組 5–10 分鐘上台',
            '評審多為觀察、評分',
            '新創獲得曝光，但難得到「能直接修改商業模式」的回饋',
          ],
          featured: false,
        },
        {
          label: '本計畫路線',
          title: '深度 1:1 診斷',
          items: [
            '一場僅 2–3 家精選新創',
            '每家 30–60 分鐘深度互動',
            'VC 直接拆解股權、財報、商業模式',
            '新創帶回可立刻動工的具體調整方向',
          ],
          featured: true,
        },
      ].map((card) => (
        <div
          key={card.title}
          style={{
            paddingTop: 28,
            borderTop: card.featured ? `3px solid ${C.primary}` : `2px solid ${C.border}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: card.featured ? C.primary : C.textMuted,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: 24,
            }}
          >
            {card.label}
          </div>
          <h3 style={{ fontSize: 40, fontWeight: 'bold', marginTop: 0, marginBottom: 28 }}>
            {card.title}
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {card.items.map((item) => (
              <li
                key={item}
                style={{
                  fontSize: 26,
                  lineHeight: 1.55,
                  padding: '14px 0',
                  borderBottom: `1px solid ${C.border}`,
                  display: 'flex',
                  gap: 18,
                }}
              >
                <span style={{ color: C.textMuted }}>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <Footer num="03" />
  </div>
);

const Stats: Page = () => (
  <div style={slideBase}>
    <Eyebrow num="03" label="成果數據總覽" />
    <h2 style={{ fontSize: 72, fontWeight: 'bold', margin: 0, marginBottom: 20 }}>
      已驗證的階段成果
    </h2>
    <p style={{ fontSize: 30, lineHeight: 1.5, marginBottom: 60 }}>
      三場已順利完成、第四場 6/9 即將舉辦；累計 9 家新創、橫跨 4 個產業領域。
    </p>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        borderTop: `1px solid ${C.border}`,
      }}
    >
      {[
        { num: '3', unit: '場', label: '已完成場次', sub: '3/17、4/27、5/19；第四場 6/9 規劃中' },
        { num: '9', unit: '家', label: '參與新創', sub: '每場精選 2–3 家，從早期到 PMF 階段皆有' },
        { num: '4', unit: '域', label: '產業領域', sub: '軟體服務、不動產、寵物消費、生技醫療' },
      ].map((s, i) => (
        <div
          key={s.label}
          style={{
            padding: '48px 48px 40px 0',
            borderRight: i < 2 ? `1px solid ${C.border}` : 'none',
          }}
        >
          <div
            style={{
              fontSize: 160,
              fontWeight: 'bold',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
            }}
          >
            {s.num}
            <span style={{ fontSize: 48, fontWeight: 'normal', color: C.textMuted, marginLeft: 12 }}>
              {s.unit}
            </span>
          </div>
          <div style={{ fontSize: 28, fontWeight: 'bold', marginTop: 24, marginBottom: 8 }}>
            {s.label}
          </div>
          <div style={{ fontSize: 22, color: C.textMuted, lineHeight: 1.5 }}>{s.sub}</div>
        </div>
      ))}
    </div>

    <p
      style={{
        marginTop: 36,
        paddingTop: 24,
        borderTop: `1px solid ${C.border}`,
        fontSize: 26,
        lineHeight: 1.6,
      }}
    >
      每家新創平均獲得{' '}
      <span style={{ color: C.primary, fontWeight: 'bold' }}>30–60 分鐘 VC 一對一</span>{' '}
      深度回饋——這是比賽式媒合無法達成的密度。
    </p>

    <Footer num="04" />
  </div>
);

const Timeline: Page = () => (
  <div style={slideBase}>
    <Eyebrow num="04" label="場次時序" />
    <h2 style={{ fontSize: 72, fontWeight: 'bold', margin: 0, marginBottom: 20 }}>
      四場場次的節奏
    </h2>
    <p style={{ fontSize: 30, lineHeight: 1.5, marginBottom: 56 }}>
      約每月一場，每場帶 2–3 家不同產業的新創。
    </p>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        borderTop: `1px solid ${C.border}`,
      }}
    >
      {[
        {
          date: '2026 / 03 / 17',
          num: '01',
          status: '已完成',
          done: true,
          companies: [
            { name: '錫諾系統', topic: 'B2B 貿易軟體' },
            { name: '強捷科技', topic: 'AI 面試' },
          ],
        },
        {
          date: '2026 / 04 / 27',
          num: '02',
          status: '已完成',
          done: true,
          companies: [
            { name: '智遊旅程', topic: '旅遊專用 ERP' },
            { name: '屋瓦資產', topic: '房東管理' },
          ],
        },
        {
          date: '2026 / 05 / 19',
          num: '03',
          status: '已完成',
          done: true,
          companies: [
            { name: '斐闊', topic: '個人投資教練' },
            { name: '原騰數位', topic: '2B 模組化工作流' },
          ],
        },
        {
          date: '2026 / 06 / 09',
          num: '04',
          status: '規劃中',
          done: false,
          companies: [
            { name: '熊熊幹大事', topic: '線下活動管理' },
            { name: '凱翔環球', topic: '寵物食品' },
            { name: '米諾智醫', topic: '生技血糖量測' },
          ],
        },
      ].map((col, i) => (
        <div
          key={col.num}
          style={{
            padding: '32px 28px 0 0',
            borderRight: i < 3 ? `1px solid ${C.border}` : 'none',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ fontSize: 22, color: C.textMuted, letterSpacing: '0.08em', marginBottom: 8 }}>
            {col.date}
          </div>
          <div style={{ fontSize: 64, fontWeight: 'bold', lineHeight: 1 }}>{col.num}</div>
          <div
            style={{
              display: 'inline-block',
              marginTop: 16,
              padding: '6px 16px',
              borderRadius: 20,
              fontSize: 22,
              fontWeight: 500,
              background: col.done ? 'rgba(86,199,187,0.15)' : 'rgba(0,0,0,0.08)',
              color: col.done ? C.primary : C.text,
              alignSelf: 'flex-start',
            }}
          >
            {col.status}
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '28px 0 0 0' }}>
            {col.companies.map((c, j) => (
              <li
                key={c.name}
                style={{
                  fontSize: 24,
                  lineHeight: 1.4,
                  padding: '12px 0',
                  borderBottom:
                    j < col.companies.length - 1 ? `1px solid ${C.border}` : 'none',
                }}
              >
                <div style={{ fontWeight: 600 }}>{c.name}</div>
                <div style={{ fontSize: 20, color: C.textMuted, marginTop: 4 }}>{c.topic}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <Footer num="05" />
  </div>
);

const FieldPhotos: Page = () => (
  <div style={slideBase}>
    <Eyebrow num="05" label="現場紀實" />
    <h2 style={{ fontSize: 60, fontWeight: 'bold', margin: 0, marginBottom: 20 }}>
      帶著新創團隊，與 VC 面對面
    </h2>
    <p style={{ fontSize: 30, lineHeight: 1.5, marginBottom: 40 }}>
      三場已完成、九家新創都實際走完這套深度診斷流程。
    </p>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 0.8fr',
        gridTemplateRows: '1fr 1fr',
        gap: 16,
        height: 500,
      }}
    >
      <div
        style={{
          gridColumn: '1 / span 2',
          position: 'relative',
          borderRadius: 12,
          overflow: 'hidden',
        }}
      >
        <img
          src={pitchTravelPhoto}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            padding: '16px 20px',
            color: '#fff',
            fontSize: 22,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
          }}
        >
          新創 Pitch｜旅遊 ERP 拆解
        </div>
      </div>
      <div
        style={{
          gridColumn: 3,
          gridRow: '1 / span 2',
          position: 'relative',
          borderRadius: 12,
          overflow: 'hidden',
        }}
      >
        <img
          src={sessionTeamPhoto}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            padding: '16px 20px',
            color: '#fff',
            fontSize: 22,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
          }}
        >
          全體團隊合影
        </div>
      </div>
      <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
        <img
          src={session1on1Photo}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            padding: '14px 18px',
            color: '#fff',
            fontSize: 22,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
          }}
        >
          VC 一對一診斷現場
        </div>
      </div>
      <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden' }}>
        <img
          src={pitchPropertyPhoto}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            padding: '14px 18px',
            color: '#fff',
            fontSize: 22,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
          }}
        >
          房東管理拆解
        </div>
      </div>
    </div>

    <Footer num="06" />
  </div>
);

const CompanyRow = ({
  idx,
  name,
  topic,
  uniform,
  capital,
}: {
  idx: string;
  name: string;
  topic: string;
  uniform: string;
  capital: string;
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '56px 1fr 280px 220px',
      alignItems: 'center',
      gap: 28,
      padding: '12px 0',
      borderBottom: `1px solid ${C.border}`,
    }}
  >
    <div style={{ fontSize: 22, color: C.textMuted }}>{idx}</div>
    <div style={{ fontSize: 24, fontWeight: 'bold' }}>
      {name}
      <span style={{ fontSize: 22, fontWeight: 'normal', color: C.textMuted, marginLeft: 12 }}>
        {topic}
      </span>
    </div>
    <div style={{ fontSize: 22 }}>
      <span style={{ color: C.textMuted, marginRight: 8 }}>統一編號</span>
      {uniform}
    </div>
    <div style={{ fontSize: 22, fontWeight: 500, textAlign: 'right' }}>
      <span style={{ color: C.textMuted, marginRight: 8 }}>實收</span>
      {capital}
    </div>
  </div>
);

const SessionHead = ({ session, date, tag }: { session: string; date: string; tag: string }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'baseline',
      gap: 24,
      paddingBottom: 10,
      borderBottom: `2px solid ${C.text}`,
      marginBottom: 8,
    }}
  >
    <span style={{ fontSize: 28, fontWeight: 'bold' }}>{session}</span>
    <span style={{ fontSize: 22, fontWeight: 500 }}>{date}</span>
    <span
      style={{
        marginLeft: 'auto',
        fontSize: 22,
        padding: '6px 18px',
        background: 'rgba(0,0,0,0.08)',
        borderRadius: 4,
      }}
    >
      {tag}
    </span>
  </div>
);

const CompaniesPart1: Page = () => (
  <div style={slideBase}>
    <Eyebrow num="06" label="參與新創（一）" />
    <h2 style={{ fontSize: 56, fontWeight: 'bold', margin: 0, marginBottom: 40 }}>
      第一、二場｜B2B 軟體與 ERP
    </h2>

    <div style={{ marginBottom: 32 }}>
      <SessionHead session="第一場" date="2026 / 03 / 17" tag="B2B 軟體 / AI 應用" />
      <CompanyRow idx="01" name="錫諾系統有限公司" topic="B2B 貿易軟體" uniform="28201077" capital="NT$ 5,000,000" />
      <CompanyRow idx="02" name="強捷科技股份有限公司" topic="AI 面試" uniform="94048999" capital="NT$ 2,000,000" />
    </div>

    <div>
      <SessionHead session="第二場" date="2026 / 04 / 27" tag="旅遊 ERP / 不動產" />
      <CompanyRow idx="03" name="智遊旅程股份有限公司" topic="旅遊專用 ERP" uniform="90560806" capital="NT$ 16,800,000" />
      <CompanyRow idx="04" name="屋瓦資產管理有限公司" topic="房東管理・包租代管" uniform="94186325" capital="NT$ 1,000,000" />
    </div>

    <Footer num="07" />
  </div>
);

const CompaniesPart2: Page = () => (
  <div style={slideBase}>
    <Eyebrow num="06" label="參與新創（二）" />
    <h2 style={{ fontSize: 56, fontWeight: 'bold', margin: 0, marginBottom: 40 }}>
      第三、四場｜消費、生技與工作流
    </h2>

    <div style={{ marginBottom: 32 }}>
      <SessionHead session="第三場" date="2026 / 05 / 19" tag="早期軟體" />
      <CompanyRow idx="05" name="斐闊有限公司" topic="個人投資教練" uniform="60668360" capital="NT$ 5,000" />
      <CompanyRow idx="06" name="原騰數位科技有限公司" topic="2B 模組化工作流" uniform="69638309" capital="NT$ 100,000" />
    </div>

    <div>
      <SessionHead session="第四場" date="2026 / 06 / 09" tag="活動 / 寵物 / 生技" />
      <CompanyRow idx="07" name="熊熊幹大事股份有限公司" topic="線下活動管理" uniform="94267380" capital="NT$ 1,000,000" />
      <CompanyRow idx="08" name="凱翔環球股份有限公司" topic="寵物食品" uniform="94074089" capital="NT$ 10,000,000" />
      <CompanyRow idx="09" name="米諾智醫股份有限公司" topic="糖尿病足智慧量測" uniform="95465020" capital="NT$ 2,000,000" />
    </div>

    <Footer num="08" />
  </div>
);

const ValueProposition: Page = () => (
  <div style={{ ...slideBase, justifyContent: 'center' }}>
    <Eyebrow num="07" label="差異點" />

    <h2
      style={{
        fontSize: 76,
        fontWeight: 'bold',
        lineHeight: 1.4,
        letterSpacing: '-0.015em',
        maxWidth: 1500,
        margin: 0,
      }}
    >
      <div>
        不是讓新創上台講<span style={{ color: C.primary }}>五分鐘</span>，
      </div>
      <div>
        而是請 VC 拆開來看<span style={{ color: C.primary }}>一小時</span>。
      </div>
    </h2>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 64,
        marginTop: 100,
        paddingTop: 36,
        borderTop: `1px solid ${C.border}`,
      }}
    >
      {[
        {
          label: '回饋密度',
          body: '每家 30–60 分鐘 VC 一對一，遠高於比賽式 Demo Day 的 5–10 分鐘上台時間。',
        },
        {
          label: '深度議題',
          body: '直接拆解股權結構、單元經濟、財務紀律與護城河，而非泛泛的市場簡介回饋。',
        },
        {
          label: '可帶走的成果',
          body: '新創會收到具體調整建議——ESOP 預留、客戶定義紅線、資本額增資等可立即動工項目。',
        },
      ].map((item) => (
        <div key={item.label}>
          <div
            style={{
              fontSize: 22,
              color: C.textMuted,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            {item.label}
          </div>
          <p style={{ fontSize: 26, lineHeight: 1.55, margin: 0 }}>{item.body}</p>
        </div>
      ))}
    </div>

    <Footer num="09" />
  </div>
);

const VCCriteria: Page = () => (
  <div style={slideBase}>
    <Eyebrow num="08" label="每場診斷的內容" />
    <h2 style={{ fontSize: 56, fontWeight: 'bold', margin: 0, marginBottom: 20 }}>
      VC 在現場拆解的五大面向
    </h2>
    <p style={{ fontSize: 28, lineHeight: 1.5, marginBottom: 40 }}>
      每場 1:1 對談中，VC 一定會帶新創走過的五個問題；新創帶回的，是可立刻動工的調整方向。
    </p>

    <div style={{ borderTop: `1px solid ${C.border}` }}>
      {[
        {
          num: '01',
          title: '規模化與天花板',
          en: 'Scalability & Why Now',
          summary: '能否在基金壽命內做到機構規模？以及——為什麼是現在？',
        },
        {
          num: '02',
          title: '股權與團隊穩定度',
          en: 'Cap Table & ESOP',
          summary: '是否預留 ESOP 給核心成員？拒絕「一人獨大、團隊零股權」結構。',
        },
        {
          num: '03',
          title: '盡職調查就緒度',
          en: 'Due Diligence Ready',
          summary: '合規、勞健保、客戶定義、債務揭露——能否承受 VC 一通電話的查證？',
        },
        {
          num: '04',
          title: '支出報表與財務紀律',
          en: 'Financial Discipline',
          summary: 'Burn Rate、RD/GA/SM 分類、Recurring vs Non-recurring，誠實面對弱點。',
        },
        {
          num: '05',
          title: '單元經濟與護城河',
          en: 'Unit Economics & Moat',
          summary: '定價邏輯是否成立？除了 AI 風口之外，留客與技術壁壘在哪？',
        },
      ].map((c) => (
        <div
          key={c.num}
          style={{
            display: 'grid',
            gridTemplateColumns: '70px 360px 1fr',
            gap: 40,
            alignItems: 'center',
            padding: '18px 0',
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          <div style={{ fontSize: 32, fontWeight: 'bold', color: C.primary }}>{c.num}</div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 'bold' }}>{c.title}</div>
            <div
              style={{
                fontSize: 22,
                color: C.textMuted,
                letterSpacing: '0.04em',
                marginTop: 4,
                fontFamily: 'monospace',
              }}
            >
              {c.en}
            </div>
          </div>
          <div style={{ fontSize: 24, lineHeight: 1.5 }}>{c.summary}</div>
        </div>
      ))}
    </div>

    <Footer num="10" />
  </div>
);

const Closing: Page = () => (
  <div style={{ ...slideBase, justifyContent: 'center' }}>
    <div
      style={{
        fontSize: 22,
        color: C.primary,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        marginBottom: 40,
      }}
    >
      09 / 下一步
    </div>

    <h2
      style={{
        fontSize: 96,
        fontWeight: 'bold',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        maxWidth: 1500,
        margin: 0,
      }}
    >
      在台北驗證過的場域，
      <br />
      直接<span style={{ color: C.primary }}>複製</span>到桃園。
    </h2>

    <p style={{ fontSize: 32, lineHeight: 1.65, marginTop: 56, maxWidth: 1300 }}>
      三場、九家、四個產業——這套深度 1:1 模式已在台大創創驗證成熟。同樣的 SOP、同樣的 VC
      網絡，可以直接複製到桃園在地——讓桃園新創團隊不必為了一場 VC
      回饋舟車勞頓北上，在自己家就能拿到同等密度的診斷資源。
    </p>

    <div
      style={{
        marginTop: 'auto',
        paddingTop: 28,
        borderTop: `1px solid ${C.border}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 24,
        color: C.textMuted,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <img src={wportLogo} alt="WPORT" style={{ height: 48, width: 'auto' }} />
        <span style={{ color: C.border, fontSize: 28 }}>×</span>
        <img src={ntutecLogo} alt="NTU TEC" style={{ height: 44, width: 'auto' }} />
      </div>
      <span>提案至 桃園市政府青年事務局</span>
    </div>
  </div>
);

export default [
  Cover,
  Origin,
  Positioning,
  Stats,
  Timeline,
  FieldPhotos,
  CompaniesPart1,
  CompaniesPart2,
  ValueProposition,
  VCCriteria,
  Closing,
] satisfies Page[];
