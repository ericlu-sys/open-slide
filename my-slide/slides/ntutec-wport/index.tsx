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

const colors = {
  primary: '#56C7BB',
  bg: '#F8F8F8',
  text: '#1A1A1A',
  textMuted: '#626262',
  border: '#E5E5E5',
};

interface Company {
  idx: string;
  name: string;
  topic: string;
  uniform: string;
  capital: string;
}

function CompanySection({
  sessionNum,
  date,
  tag,
  companies,
}: {
  sessionNum: string;
  date: string;
  tag: string;
  companies: Company[];
}) {
  return (
    <div style={{ marginTop: 24 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: 24,
          paddingBottom: 10,
          borderBottom: `2px solid ${colors.text}`,
        }}
      >
        <span style={{ fontSize: 32, fontWeight: 'bold', color: colors.text }}>{sessionNum}</span>
        <span style={{ fontSize: 24, color: colors.text, fontWeight: 500 }}>{date}</span>
        <span
          style={{
            marginLeft: 'auto',
            fontSize: 24,
            padding: '6px 18px',
            background: 'rgba(0,0,0,0.08)',
            borderRadius: 4,
            color: colors.text,
          }}
        >
          {tag}
        </span>
      </div>
      {companies.map((company, i) => (
        <div
          key={i}
          style={{
            display: 'grid',
            gridTemplateColumns: '56px 1fr 300px 220px',
            alignItems: 'center',
            gap: 28,
            padding: '10px 0',
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          <div style={{ fontSize: 24, color: colors.textMuted }}>{company.idx}</div>
          <div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 'bold',
                color: colors.text,
                lineHeight: 1.3,
              }}
            >
              {company.name}
              <span
                style={{
                  display: 'inline',
                  fontSize: 24,
                  fontWeight: 'normal',
                  color: colors.textMuted,
                  marginLeft: 12,
                }}
              >
                {company.topic}
              </span>
            </div>
          </div>
          <div style={{ fontSize: 24, color: colors.text }}>
            <span style={{ color: colors.textMuted, marginRight: 8 }}>統一編號</span>
            {company.uniform}
          </div>
          <div style={{ fontSize: 24, color: colors.text, fontWeight: 500, textAlign: 'right' }}>
            <span style={{ color: colors.textMuted, marginRight: 8 }}>實收資本額</span>
            {company.capital}
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  slide: {
    width: 1920,
    height: 1080,
    padding: '90px 140px 80px',
    display: 'flex',
    flexDirection: 'column' as const,
    background: colors.bg,
    color: colors.text,
    fontFamily: 'system-ui, -apple-system, sans-serif',
    overflow: 'hidden',
  } as React.CSSProperties,
  slideHeader: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 20,
  } as React.CSSProperties,
  eyebrowRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
  } as React.CSSProperties,
  eyebrow: {
    fontSize: 24,
    fontWeight: 500,
    color: colors.textMuted,
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
  } as React.CSSProperties,
  slideTitle: {
    fontSize: 80,
    fontWeight: 'bold',
    lineHeight: 1.15,
    color: colors.text,
    letterSpacing: '-0.01em',
    margin: 0,
  } as React.CSSProperties,
  slideSubtitle: {
    fontSize: 36,
    fontWeight: 'normal',
    lineHeight: 1.5,
    color: colors.text,
    maxWidth: 1100,
    margin: 0,
  } as React.CSSProperties,
  badge: {
    fontSize: 24,
    color: colors.textMuted,
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
  } as React.CSSProperties,
  footerBar: {
    paddingTop: 24,
    borderTop: `1px solid ${colors.border}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    fontSize: 24,
    color: colors.textMuted,
  } as React.CSSProperties,
  footerOrg: {
    color: colors.text,
  } as React.CSSProperties,
};

export default [
  {
    label: '01 封面',
    render: () => (
      <div
        style={{
          ...styles.slide,
          background: colors.bg,
          justifyContent: 'flex-end',
          paddingTop: 160,
          paddingBottom: 140,
        }}
      >
        <div style={{ ...styles.badge, marginBottom: 80 }}>提案簡報｜深度新創媒合計畫</div>
        <h1
          style={{
            fontSize: 112,
            fontWeight: 'bold',
            lineHeight: 1.08,
            letterSpacing: '-0.015em',
            marginBottom: 0,
          }}
        >
          WPORT職航站
          <span style={{ color: colors.primary, fontWeight: 'normal', margin: '0 18px' }}>×</span>
          台大創創
        </h1>
        <p
          style={{
            fontSize: 40,
            lineHeight: 1.55,
            color: colors.text,
            marginTop: 56,
            maxWidth: 1100,
          }}
        >
          3 場、9 家、4 個產業領域——一套已驗證、可複製的深度新創診斷模式。
        </p>
        <div
          style={{
            marginTop: 100,
            paddingTop: 28,
            borderTop: `1px solid ${colors.border}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            fontSize: 26,
            color: colors.textMuted,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <img src={wportLogo} alt="WPORT" style={{ height: 48, width: 'auto' }} />
            <span style={{ color: colors.border }}>×</span>
            <img src={ntutecLogo} alt="NTU TEC" style={{ height: 44, width: 'auto' }} />
          </div>
        </div>
      </div>
    ),
  },

  {
    label: '02 緣起',
    render: () => (
      <div style={{ ...styles.slide, paddingBottom: 80 }}>
        <div style={styles.slideHeader}>
          <div style={styles.eyebrowRow}>
            <span style={styles.eyebrow}>
              <span style={{ color: colors.primary }}>01</span>
              <span style={{ color: colors.border, margin: '0 14px' }}>/</span>
              緣起
            </span>
          </div>
          <h2 style={{ ...styles.slideTitle, fontSize: 60 }}>三個交會點，協作成形</h2>
          <p style={styles.slideSubtitle}>
            這不是一個湊出來的提案——是三條原本獨立的線，在合適的時間交集起來。
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 80,
            marginTop: 40,
            alignItems: 'stretch',
            height: 560,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
              borderTop: `1px solid ${colors.border}`,
              overflow: 'hidden',
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
            ].map((point, i) => (
              <div
                key={i}
                style={{
                  padding: '18px 0 4px',
                  borderBottom: `1px solid ${colors.border}`,
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr',
                  gap: 20,
                  alignItems: 'baseline',
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    color: colors.primary,
                    lineHeight: 1,
                  }}
                >
                  {point.num}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 26,
                      fontWeight: 'bold',
                      color: colors.text,
                      lineHeight: 1.3,
                      marginBottom: 8,
                    }}
                  >
                    {point.title}
                  </div>
                  <p style={{ fontSize: 24, lineHeight: 1.5, color: colors.text }}>{point.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              position: 'relative',
              borderRadius: 12,
              overflow: 'hidden',
              background: colors.bg,
              height: '100%',
            }}
          >
            <img
              src={ericPhoto}
              alt="Eric"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                padding: '20px 24px',
                fontSize: 24,
                color: '#fff',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.65))',
              }}
            >
              <strong
                style={{
                  display: 'block',
                  fontSize: 26,
                  fontWeight: 'bold',
                  marginBottom: 2,
                }}
              >
                Eric / WPORT職航站 CEO
              </strong>
              <span>現任桃園市青年事務委員會 委員</span>
            </div>
          </div>
        </div>

        <div style={{ ...styles.footerBar, marginTop: 'auto' }}>
          <span style={styles.footerOrg}>WPORT職航站 × 台大創創</span>
          <span>02 / 11</span>
        </div>
      </div>
    ),
  },

  {
    label: '03 計畫定位',
    render: () => (
      <div style={{ ...styles.slide, paddingBottom: 80 }}>
        <div style={styles.slideHeader}>
          <div style={styles.eyebrowRow}>
            <span style={styles.eyebrow}>
              <span style={{ color: colors.primary }}>02</span>
              <span style={{ color: colors.border, margin: '0 14px' }}>/</span>
              計畫定位
            </span>
          </div>
          <h2 style={styles.slideTitle}>用深度 1:1 取代倉促 Demo Day</h2>
          <p style={styles.slideSubtitle}>
            多數新創媒合活動採比賽形式，一場 20+ 家、每組僅 5–10 分鐘。台大創創 × WPORT
            採取相反路徑——一場僅帶 2–3 家，給予每家 30–60 分鐘的 VC 一對一深度回饋。
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginTop: 44 }}>
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
          ].map((card, i) => (
            <div
              key={i}
              style={{
                paddingTop: 28,
                borderTop: card.featured
                  ? `2px solid ${colors.primary}`
                  : `2px solid ${colors.border}`,
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  color: card.featured ? colors.primary : colors.textMuted,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: 24,
                }}
              >
                {card.label}
              </div>
              <h3
                style={{
                  fontSize: 44,
                  fontWeight: 'bold',
                  color: colors.text,
                  lineHeight: 1.25,
                  marginBottom: 28,
                }}
              >
                {card.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {card.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 26,
                      lineHeight: 1.55,
                      color: colors.text,
                      padding: '12px 0',
                      borderBottom: `1px solid ${colors.border}`,
                      display: 'flex',
                      gap: 18,
                    }}
                  >
                    <span style={{ color: colors.textMuted, flexShrink: 0 }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ ...styles.footerBar, marginTop: 'auto' }}>
          <span style={styles.footerOrg}>WPORT職航站 × 台大創創</span>
          <span>03 / 11</span>
        </div>
      </div>
    ),
  },

  {
    label: '04 成果數據',
    render: () => (
      <div style={{ ...styles.slide, paddingBottom: 80 }}>
        <div style={styles.slideHeader}>
          <div style={styles.eyebrowRow}>
            <span style={styles.eyebrow}>
              <span style={{ color: colors.primary }}>03</span>
              <span style={{ color: colors.border, margin: '0 14px' }}>/</span>
              成果數據總覽
            </span>
          </div>
          <h2 style={styles.slideTitle}>已驗證的階段成果</h2>
          <p style={styles.slideSubtitle}>
            三場已順利完成、第四場 6/9 即將舉辦；累計 9 家新創、橫跨 4 個產業領域。
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            marginTop: 56,
            borderTop: `1px solid ${colors.border}`,
          }}
        >
          {[
            {
              num: '3',
              unit: '場',
              label: '已完成場次',
              sub: '3/17、4/27、5/19；第四場 6/9 規劃中',
            },
            {
              num: '9',
              unit: '家',
              label: '參與新創',
              sub: '每場精選 2–3 家，從早期到 PMF 階段皆有',
            },
            {
              num: '4',
              unit: '域',
              label: '產業領域',
              sub: '軟體服務、不動產、寵物消費、生技醫療',
            },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '48px 48px 40px 0',
                borderRight: i < 2 ? `1px solid ${colors.border}` : 'none',
              }}
            >
              <div
                style={{
                  fontSize: 160,
                  fontWeight: 'bold',
                  lineHeight: 0.95,
                  color: colors.text,
                  letterSpacing: '-0.04em',
                }}
              >
                {stat.num}
                <span
                  style={{
                    fontSize: 48,
                    fontWeight: 'normal',
                    color: colors.textMuted,
                    marginLeft: 12,
                  }}
                >
                  {stat.unit}
                </span>
              </div>
              <div
                style={{
                  fontSize: 28,
                  color: colors.text,
                  fontWeight: 'bold',
                  marginTop: 28,
                  marginBottom: 10,
                }}
              >
                {stat.label}
              </div>
              <div style={{ fontSize: 24, color: colors.textMuted, lineHeight: 1.55 }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: 40,
            paddingTop: 24,
            borderTop: `1px solid ${colors.border}`,
            fontSize: 26,
            color: colors.text,
            lineHeight: 1.6,
          }}
        >
          每家新創平均獲得{' '}
          <span style={{ color: colors.primary, fontWeight: 'bold' }}>30–60 分鐘 VC 一對一</span>
          深度回饋——這是比賽式媒合無法達成的密度。
        </p>

        <div style={{ ...styles.footerBar, marginTop: 'auto' }}>
          <span style={styles.footerOrg}>WPORT職航站 × 台大創創</span>
          <span>04 / 11</span>
        </div>
      </div>
    ),
  },

  {
    label: '05 場次時序',
    render: () => (
      <div style={{ ...styles.slide, paddingBottom: 80 }}>
        <div style={styles.slideHeader}>
          <div style={styles.eyebrowRow}>
            <span style={styles.eyebrow}>
              <span style={{ color: colors.primary }}>04</span>
              <span style={{ color: colors.border, margin: '0 14px' }}>/</span>
              場次時序
            </span>
          </div>
          <h2 style={styles.slideTitle}>四場場次的節奏</h2>
          <p style={styles.slideSubtitle}>
            約每月一場，每場帶 2–3 家不同產業的新創，確保 VC 與新創之間都有充足的事前準備時間。
          </p>
        </div>

        <div
          style={{
            marginTop: 56,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: `1px solid ${colors.border}`,
          }}
        >
          {[
            {
              date: '2026 / 03 / 17',
              num: '01',
              status: '已完成',
              companies: [
                { name: '錫諾系統', topic: 'B2B 貿易軟體' },
                { name: '強捷科技', topic: 'AI 面試' },
              ],
              done: true,
            },
            {
              date: '2026 / 04 / 27',
              num: '02',
              status: '已完成',
              companies: [
                { name: '智遊旅程', topic: '旅遊專用 ERP' },
                { name: '屋瓦資產', topic: '房東管理' },
              ],
              done: true,
            },
            {
              date: '2026 / 05 / 19',
              num: '03',
              status: '已完成',
              companies: [
                { name: '斐闊', topic: '個人投資教練' },
                { name: '原騰數位', topic: '2B 模組化工作流' },
              ],
              done: true,
            },
            {
              date: '2026 / 06 / 09',
              num: '04',
              status: '規劃中',
              companies: [
                { name: '熊熊幹大事', topic: '線下活動管理' },
                { name: '凱翔環球', topic: '寵物食品' },
                { name: '米諾智醫', topic: '生技血糖量測' },
              ],
              done: false,
            },
          ].map((col, i) => (
            <div
              key={i}
              style={{
                padding: '32px 28px 0 0',
                borderRight: i < 3 ? `1px solid ${colors.border}` : 'none',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 380,
              }}
            >
              <div
                style={{
                  fontSize: 24,
                  color: colors.textMuted,
                  letterSpacing: '0.08em',
                  marginBottom: 8,
                }}
              >
                {col.date}
              </div>
              <div style={{ fontSize: 72, fontWeight: 'bold', color: colors.text, lineHeight: 1 }}>
                {col.num}
              </div>
              <div
                style={{
                  display: 'inline-block',
                  marginTop: 18,
                  padding: '6px 16px',
                  borderRadius: 20,
                  fontSize: 24,
                  fontWeight: 500,
                  background: col.done ? 'rgba(86, 199, 187, 0.15)' : 'rgba(226, 226, 226, 0.5)',
                  color: col.done ? colors.primary : colors.text,
                  alignSelf: 'flex-start',
                }}
              >
                {col.status}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '28px 0 0 0' }}>
                {col.companies.map((c, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: 26,
                      lineHeight: 1.4,
                      color: colors.text,
                      padding: '12px 0',
                      borderBottom:
                        j < col.companies.length - 1 ? `1px solid ${colors.border}` : 'none',
                    }}
                  >
                    {c.name}
                    <span
                      style={{
                        display: 'block',
                        fontSize: 24,
                        color: colors.textMuted,
                        marginTop: 4,
                      }}
                    >
                      {c.topic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ ...styles.footerBar, marginTop: 'auto' }}>
          <span style={styles.footerOrg}>WPORT職航站 × 台大創創</span>
          <span>05 / 11</span>
        </div>
      </div>
    ),
  },

  {
    label: '06 現場紀實',
    render: () => (
      <div style={{ ...styles.slide, paddingBottom: 80 }}>
        <div style={styles.slideHeader}>
          <div style={styles.eyebrowRow}>
            <span style={styles.eyebrow}>
              <span style={{ color: colors.primary }}>05</span>
              <span style={{ color: colors.border, margin: '0 14px' }}>/</span>
              現場紀實
            </span>
          </div>
          <h2 style={{ ...styles.slideTitle, fontSize: 60 }}>帶著新創團隊，與 VC 面對面</h2>
          <p style={styles.slideSubtitle}>三場已完成、九家新創都實際走完這套深度診斷流程。</p>
        </div>

        <div
          style={{
            marginTop: 48,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 0.8fr',
            gridTemplateRows: '1fr 1fr',
            gap: 16,
            height: 560,
          }}
        >
          {[
            {
              src: pitchTravelPhoto,
              cap: '新創 Pitch｜旅遊 ERP 拆解',
              colSpan: 2,
              rowSpan: 1,
            },
            {
              src: sessionTeamPhoto,
              cap: '全體團隊｜WPORT × 台大創創 × 參與新創',
              colSpan: 1,
              rowSpan: 2,
            },
            { src: session1on1Photo, cap: 'VC 一對一診斷現場', colSpan: 1, rowSpan: 1 },
            { src: pitchPropertyPhoto, cap: '新創 Pitch｜房東管理拆解', colSpan: 1, rowSpan: 1 },
          ].map((photo, i) => (
            <div
              key={i}
              style={{
                position: 'relative',
                borderRadius: 12,
                overflow: 'hidden',
                background: colors.bg,
                minHeight: 0,
                gridColumn: photo.colSpan > 1 ? `span ${photo.colSpan}` : undefined,
                gridRow: photo.rowSpan > 1 ? `span ${photo.rowSpan}` : undefined,
              }}
            >
              <img
                src={photo.src}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: '16px 20px',
                  fontSize: 24,
                  color: '#fff',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                }}
              >
                {photo.cap}
              </div>
            </div>
          ))}
        </div>

        <div style={{ ...styles.footerBar, marginTop: 'auto' }}>
          <span style={styles.footerOrg}>WPORT職航站 × 台大創創</span>
          <span>06 / 11</span>
        </div>
      </div>
    ),
  },

  {
    label: '07 參與新創（上）',
    render: () => (
      <div style={{ ...styles.slide, paddingBottom: 80, overflow: 'auto' }}>
        <div style={styles.slideHeader}>
          <div style={styles.eyebrowRow}>
            <span style={styles.eyebrow}>
              <span style={{ color: colors.primary }}>06</span>
              <span style={{ color: colors.border, margin: '0 14px' }}>/</span>
              參與新創（一）
            </span>
          </div>
          <h2 style={{ ...styles.slideTitle, fontSize: 60 }}>第一、二場｜B2B 軟體與 ERP</h2>
        </div>

        <CompanySection
          sessionNum="第一場"
          date="2026 / 03 / 17"
          tag="B2B 軟體 / AI 應用"
          companies={[
            {
              idx: '01',
              name: '錫諾系統有限公司',
              topic: 'B2B 貿易軟體 ・ SINNO Taiwan Ltd.',
              uniform: '28201077',
              capital: 'NT$ 5,000,000',
            },
            {
              idx: '02',
              name: '強捷科技股份有限公司',
              topic: 'AI 面試',
              uniform: '94048999',
              capital: 'NT$ 2,000,000',
            },
          ]}
        />

        <CompanySection
          sessionNum="第二場"
          date="2026 / 04 / 27"
          tag="旅遊 ERP / 不動產"
          companies={[
            {
              idx: '03',
              name: '智遊旅程股份有限公司',
              topic: '旅遊專用 ERP ・ Intelligent Travel Application Inc.',
              uniform: '90560806',
              capital: 'NT$ 16,800,000',
            },
            {
              idx: '04',
              name: '屋瓦資產管理有限公司',
              topic: '房東管理・包租代管',
              uniform: '94186325',
              capital: 'NT$ 1,000,000',
            },
          ]}
        />

        <div style={{ ...styles.footerBar, marginTop: 'auto' }}>
          <span style={styles.footerOrg}>WPORT職航站 × 台大創創</span>
          <span>07 / 11</span>
        </div>
      </div>
    ),
  },

  {
    label: '08 參與新創（下）',
    render: () => (
      <div style={{ ...styles.slide, paddingBottom: 80, overflow: 'auto' }}>
        <div style={styles.slideHeader}>
          <div style={styles.eyebrowRow}>
            <span style={styles.eyebrow}>
              <span style={{ color: colors.primary }}>06</span>
              <span style={{ color: colors.border, margin: '0 14px' }}>/</span>
              參與新創（二）
            </span>
          </div>
          <h2 style={{ ...styles.slideTitle, fontSize: 60 }}>第三、四場｜消費、生技與工作流</h2>
        </div>

        <CompanySection
          sessionNum="第三場"
          date="2026 / 05 / 19"
          tag="早期軟體"
          companies={[
            {
              idx: '05',
              name: '斐闊有限公司',
              topic: '個人投資教練',
              uniform: '60668360',
              capital: 'NT$ 5,000',
            },
            {
              idx: '06',
              name: '原騰數位科技有限公司',
              topic: '2B 模組化工作流',
              uniform: '69638309',
              capital: 'NT$ 100,000',
            },
          ]}
        />

        <CompanySection
          sessionNum="第四場"
          date="2026 / 06 / 09"
          tag="活動 / 寵物 / 生技"
          companies={[
            {
              idx: '07',
              name: '熊熊幹大事股份有限公司',
              topic: '線下活動管理',
              uniform: '94267380',
              capital: 'NT$ 1,000,000',
            },
            {
              idx: '08',
              name: '凱翔環球股份有限公司',
              topic: '寵物食品 ・ KAI SEAN CO., LTD.',
              uniform: '94074089',
              capital: 'NT$ 10,000,000',
            },
            {
              idx: '09',
              name: '米諾智醫股份有限公司',
              topic: '糖尿病足智慧量測 ・ DMolution Company Limited',
              uniform: '95465020',
              capital: 'NT$ 2,000,000',
            },
          ]}
        />

        <div style={{ ...styles.footerBar, marginTop: 'auto' }}>
          <span style={styles.footerOrg}>WPORT職航站 × 台大創創</span>
          <span>08 / 11</span>
        </div>
      </div>
    ),
  },

  {
    label: '09 深度回饋差異點',
    render: () => (
      <div style={{ ...styles.slide, justifyContent: 'center', paddingBottom: 80 }}>
        <div style={styles.eyebrow}>
          <span style={{ color: colors.primary }}>07</span>
          <span style={{ color: colors.border, margin: '0 14px' }}>/</span>
          差異點
        </div>

        <h2
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            lineHeight: 1.45,
            color: colors.text,
            letterSpacing: '-0.015em',
            maxWidth: 1500,
            marginTop: 48,
          }}
        >
          <span style={{ display: 'block' }}>
            不是讓新創上台講
            <span style={{ color: colors.primary }}>五分鐘</span>，
          </span>
          <span style={{ display: 'block' }}>
            而是請 VC 拆開來看
            <span style={{ color: colors.primary }}>一小時</span>。
          </span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 64,
            marginTop: 100,
            paddingTop: 36,
            borderTop: `1px solid ${colors.border}`,
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
          ].map((item, i) => (
            <div key={i}>
              <div
                style={{
                  fontSize: 24,
                  color: colors.textMuted,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  marginBottom: 16,
                }}
              >
                {item.label}
              </div>
              <p style={{ fontSize: 28, lineHeight: 1.55, color: colors.text }}>{item.body}</p>
            </div>
          ))}
        </div>

        <div style={{ ...styles.footerBar, marginTop: 'auto' }}>
          <span style={styles.footerOrg}>WPORT職航站 × 台大創創</span>
          <span>09 / 11</span>
        </div>
      </div>
    ),
  },

  {
    label: '10 VC 五大評估面向',
    render: () => (
      <div style={{ ...styles.slide, paddingBottom: 80, overflow: 'auto' }}>
        <div style={styles.slideHeader}>
          <div style={styles.eyebrowRow}>
            <span style={styles.eyebrow}>
              <span style={{ color: colors.primary }}>08</span>
              <span style={{ color: colors.border, margin: '0 14px' }}>/</span>
              每場診斷的內容
            </span>
          </div>
          <h2 style={{ ...styles.slideTitle, fontSize: 60 }}>VC 在現場拆解的五大面向</h2>
          <p style={styles.slideSubtitle}>
            每場 1:1 對談中，VC 一定會帶新創走過的五個問題；新創帶回的，是可立刻動工的調整方向。
          </p>
        </div>

        <div style={{ marginTop: 40, borderTop: `1px solid ${colors.border}` }}>
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
          ].map((criterion, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '70px 360px 1fr',
                gap: 40,
                alignItems: 'center',
                padding: '20px 0',
                borderBottom: `1px solid ${colors.border}`,
              }}
            >
              <div
                style={{ fontSize: 36, fontWeight: 'bold', color: colors.primary, lineHeight: 1 }}
              >
                {criterion.num}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: colors.text,
                    lineHeight: 1.25,
                  }}
                >
                  {criterion.title}
                </div>
                <div
                  style={{
                    display: 'block',
                    fontSize: 24,
                    color: colors.textMuted,
                    fontWeight: 'normal',
                    letterSpacing: '0.06em',
                    marginTop: 4,
                    fontFamily: 'monospace',
                  }}
                >
                  {criterion.en}
                </div>
              </div>
              <div style={{ fontSize: 26, lineHeight: 1.55, color: colors.text }}>
                {criterion.summary}
              </div>
            </div>
          ))}
        </div>

        <div style={{ ...styles.footerBar, marginTop: 'auto' }}>
          <span style={styles.footerOrg}>WPORT職航站 × 台大創創</span>
          <span>10 / 11</span>
        </div>
      </div>
    ),
  },

  {
    label: '11 複製到桃園',
    render: () => (
      <div style={{ ...styles.slide, justifyContent: 'center', paddingBottom: 80 }}>
        <div
          style={{
            fontSize: 24,
            color: colors.primary,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 40,
          }}
        >
          09 / 下一步
        </div>

        <h2
          style={{
            fontSize: 104,
            fontWeight: 'bold',
            lineHeight: 1.1,
            color: colors.text,
            letterSpacing: '-0.02em',
            maxWidth: 1400,
          }}
        >
          在台北驗證過的場域，
          <br />
          直接
          <span style={{ color: colors.primary }}>複製</span>
          到桃園。
        </h2>

        <p
          style={{
            fontSize: 34,
            lineHeight: 1.65,
            color: colors.text,
            marginTop: 56,
            maxWidth: 1300,
          }}
        >
          三場、九家、四個產業——這套深度 1:1 模式已在台大創創驗證成熟。同樣的 SOP、同樣的 VC
          網絡，可以直接複製到桃園在地——讓桃園新創團隊不必為了一場 VC
          回饋舟車勞頓北上，在自己家就能拿到同等密度的診斷資源。
        </p>

        <div
          style={{
            marginTop: 120,
            paddingTop: 28,
            borderTop: `1px solid ${colors.border}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            fontSize: 26,
            color: colors.textMuted,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <img src={wportLogo} alt="WPORT" style={{ height: 48, width: 'auto' }} />
            <span style={{ color: colors.border }}>×</span>
            <img src={ntutecLogo} alt="NTU TEC" style={{ height: 44, width: 'auto' }} />
          </div>
          <span>提案至 桃園市政府青年事務局</span>
        </div>
      </div>
    ),
  },
] satisfies Page[];
