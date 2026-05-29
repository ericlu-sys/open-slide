import {
  type DesignSystem,
  ImagePlaceholder,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
} from '@open-slide/core';
import wportLogo from '@assets/wport.png';
import wportSquare from '@assets/wport_方形logo.png';
import ericNccu from '@assets/eric_nccu.jpg';
import davidInstructor from '@assets/david-instructor.jpg';
import davidCaseTaoyuanGroup from '@assets/david-case-taoyuan-group.jpg';
import davidCaseClaudeSkills from '@assets/david-case-claude-skills.jpg';
import ericJingli from '@assets/eric_精立數位.jpg';
import ericNankai from '@assets/eric_開南.jpg';





export const design: DesignSystem = {
  palette: {
    bg: '#F2FCFB',
    text: '#5D5D5D',
    accent: '#56C7BB',
  },
  fonts: {
    display: 'Arial, "Arial Rounded MT", sans-serif',
    body: 'Arial, "Arial Rounded MT", sans-serif',
  },
  typeScale: { hero: 160, body: 36 },
  radius: 12,
};

const palette = {
  supportBlue: '#305AC1',
  blueSoft: 'rgba(48, 90, 193, 0.12)',
  tealSoft: 'rgba(86, 199, 187, 0.14)',
  accentSoft: '#D5F5F2',
  muted: '#9A9A9A',
  faint: '#B5B5B5',
  line: '#D7D7D7',
  surface: '#FFFFFF',
};

const PAD_X = 140;
const PAD_Y = 120;

const fill = {
  width: '100%',
  height: '100%',
  fontFamily: 'var(--osd-font-body)',
  color: 'var(--osd-text)',
  background: 'var(--osd-bg)',
  position: 'relative' as const,
  overflow: 'hidden',
};

const EASE_OUT = 'cubic-bezier(0, 0, 0.2, 1)';
const EASE_IN = 'cubic-bezier(0.4, 0, 1, 1)';

export const transition: SlideTransition = {
  duration: 200,
  exit: {
    duration: 140,
    easing: EASE_IN,
    keyframes: [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(-4px)' },
    ],
  },
  enter: {
    duration: 200,
    delay: 80,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(6px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
};

const breath: SlideTransition = {
  duration: 460,
  exit: {
    duration: 180,
    easing: EASE_IN,
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
  },
  enter: {
    duration: 240,
    delay: 300,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(8px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
};

const keyframes = `
@keyframes aiFadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes aiFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes aiFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(12px, -18px) scale(1.03); }
}
.ai-fadeUp { opacity: 0; animation: aiFadeUp 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.ai-fadeIn { opacity: 0; animation: aiFadeIn 1000ms ease forwards; }
`;

const Style = () => <style>{keyframes}</style>;

const LabGlow = () => (
  <>
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: 720,
        height: 720,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(86,199,187,0.2) 0%, transparent 70%)',
        top: -180,
        right: -120,
        animation: 'aiFloat 14s ease-in-out infinite',
      }}
    />
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        width: 560,
        height: 560,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(48,90,193,0.12) 0%, transparent 70%)',
        bottom: -160,
        left: -80,
        animation: 'aiFloat 18s ease-in-out infinite reverse',
      }}
    />
  </>
);

const GridBg = () => (
  <svg
    width="100%"
    height="100%"
    style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.45 }}
    aria-hidden="true"
    role="presentation"
  >
    <title>decorative grid</title>
    <defs>
      <pattern id="ai-grid" width="64" height="64" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.5" fill={palette.line} />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ai-grid)" />
  </svg>
);

const Eyebrow = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <div
    className="ai-fadeUp"
    style={{
      animationDelay: `${delay}ms`,
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: '0.28em',
      textTransform: 'uppercase',
      color: 'var(--osd-accent)',
    }}
  >
    {children}
  </div>
);

const PageNumber = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: PAD_X,
        bottom: 56,
        fontSize: 18,
        letterSpacing: '0.24em',
        textTransform: 'uppercase',
        color: palette.faint,
      }}
    >
      WPORT AI 課程 · {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
    </div>
  );
};

const PageHeading = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <h2
    className="ai-fadeUp"
    style={{
      animationDelay: `${delay}ms`,
      fontFamily: 'var(--osd-font-display)',
      fontSize: 72,
      fontWeight: 800,
      lineHeight: 1.12,
      letterSpacing: '-0.03em',
      margin: 0,
    }}
    >
    {children}
  </h2>
);

const BulletList = ({
  items,
  startDelay = 240,
}: {
  items: string[];
  startDelay?: number;
}) => (
  <ul
    style={{
      listStyle: 'none',
      margin: '48px 0 0',
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
    }}
  >
    {items.map((item, index) => (
      <li
        key={item}
        className="ai-fadeUp"
        style={{
          animationDelay: `${startDelay + index * 80}ms`,
          display: 'flex',
          gap: 20,
          alignItems: 'flex-start',
          fontSize: 'var(--osd-size-body)',
          lineHeight: 1.55,
          color: palette.muted,
        }}
      >
        <span
          style={{
            flexShrink: 0,
            width: 10,
            height: 10,
            borderRadius: '50%',
            marginTop: 14,
            background:
              index % 2 === 0
                ? 'linear-gradient(135deg, var(--osd-accent), #4EBCB1)'
                : `linear-gradient(135deg, ${palette.supportBlue}, #6587DC)`,
          }}
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const SectionDivider = ({
  section,
  title,
  subtitle,
}: {
  section: string;
  title: React.ReactNode;
  subtitle: string;
}) => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Style />
    <LabGlow />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow delay={0}>{section}</Eyebrow>
      <h2
        className="ai-fadeUp"
        style={{
          animationDelay: '100ms',
          fontFamily: 'var(--osd-font-display)',
          fontSize: 112,
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          margin: '32px 0 0',
        }}
      >
        {title}
      </h2>
      <p
        className="ai-fadeUp"
        style={{
          animationDelay: '220ms',
          fontSize: 40,
          lineHeight: 1.5,
          color: palette.muted,
          margin: '40px 0 0',
          maxWidth: 920,
        }}
      >
        {subtitle}
      </p>
    </div>
    <PageNumber />
  </div>
);

const InstructorPage = ({
  name,
  subname,
  role,
  highlights,
  accent,
  photoSrc,
  photoAlt,
  number,
}: {
  name: string;
  subname?: string;
  role: string;
  highlights: string[];
  accent: 'teal' | 'blue';
  photoSrc: string;
  photoAlt: string;
  number: '01' | '02';
}) => {
  const accentColor = accent === 'teal' ? 'var(--osd-accent)' : palette.supportBlue;
  return (
    <div
      style={{
        ...fill,
        padding: `${PAD_Y}px ${PAD_X}px`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Style />
      <GridBg />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '520px 1fr',
          gap: 80,
          alignItems: 'center',
        }}
      >
        <div className="ai-fadeUp" style={{ animationDelay: '160ms' }}>
          <img src={photoSrc} alt={photoAlt} style={{ width: 520, height: 640, objectFit: 'cover', objectPosition: '50% 50%' }} />
        </div>
        <div>
          <Eyebrow>核心講師 · {number} / 02</Eyebrow>
          <h2
            className="ai-fadeUp"
            style={{
              animationDelay: '80ms',
              fontFamily: 'var(--osd-font-display)',
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              margin: '24px 0 0',
            }}
          >
            {name}
            {subname ? (
              <span
                style={{
                  display: 'block',
                  fontSize: 32,
                  fontWeight: 600,
                  color: palette.muted,
                  marginTop: 6,
                  letterSpacing: 0,
                }}
              >
                {subname}
              </span>
            ) : null}
          </h2>
          <div
            className="ai-fadeUp"
            style={{
              animationDelay: '160ms',
              fontSize: 30,
              fontWeight: 600,
              color: accentColor,
              margin: '28px 0 0',
            }}
          >
            {role}
          </div>
          <ul
            style={{
              listStyle: 'none',
              margin: '36px 0 0',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {highlights.map((line, i) => (
              <li
                key={line}
                className="ai-fadeUp"
                style={{
                  animationDelay: `${240 + i * 80}ms`,
                  fontSize: 28,
                  lineHeight: 1.5,
                  color: palette.muted,
                  paddingLeft: 22,
                  borderLeft: `3px solid ${accentColor}`,
                }}
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <PageNumber />
    </div>
  );
};

const ExperienceEntry = ({
  period,
  org,
  role,
  achievement,
  accent = 'teal',
  delay = 0,
}: {
  period: string;
  org: string;
  role: string;
  achievement: string;
  accent?: 'teal' | 'blue';
  delay?: number;
}) => {
  const accentColor = accent === 'blue' ? palette.supportBlue : 'var(--osd-accent)';
  return (
    <div
      className="ai-fadeUp"
      style={{
        animationDelay: `${delay}ms`,
        display: 'grid',
        gridTemplateColumns: '220px 1fr',
        gap: 32,
        padding: '20px 0',
        borderBottom: `1px solid ${palette.line}`,
      }}
    >
      <div
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: accentColor,
          letterSpacing: '0.04em',
          paddingTop: 8,
        }}
      >
        {period}
      </div>
      <div>
        <div style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.2 }}>
          {org}
          <span
            style={{
              fontSize: 24,
              fontWeight: 500,
              color: palette.muted,
              marginLeft: 14,
            }}
          >
            · {role}
          </span>
        </div>
        <div
          style={{
            fontSize: 24,
            lineHeight: 1.45,
            color: palette.muted,
            marginTop: 6,
          }}
        >
          {achievement}
        </div>
      </div>
    </div>
  );
};

const TalkEntry = ({
  period,
  org,
  topic,
  delay = 0,
  accent = 'blue',
}: {
  period: string;
  org: string;
  topic: string;
  delay?: number;
  accent?: 'teal' | 'blue';
}) => {
  const accentColor = accent === 'blue' ? palette.supportBlue : 'var(--osd-accent)';
  return (
    <div
      className="ai-fadeUp"
      style={{
        animationDelay: `${delay}ms`,
        display: 'grid',
        gridTemplateColumns: '140px 1fr',
        gap: 28,
        padding: '14px 0',
        borderBottom: `1px solid ${palette.line}`,
      }}
    >
      <div
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: accentColor,
          letterSpacing: '0.04em',
          paddingTop: 4,
        }}
      >
        {period}
      </div>
      <div>
        <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.25 }}>{org}</div>
        <div
          style={{
            fontSize: 22,
            lineHeight: 1.4,
            color: palette.muted,
            marginTop: 4,
          }}
        >
          {topic}
        </div>
      </div>
    </div>
  );
};

const CaseMeta = ({ children }: { children: React.ReactNode }) => (
  <p
    className="ai-fadeUp"
    style={{
      animationDelay: '160ms',
      fontSize: 28,
      lineHeight: 1.5,
      color: palette.muted,
      margin: '24px 0 0',
      maxWidth: 720,
    }}
  >
    {children}
  </p>
);

const Cover: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Style />
    <GridBg />
    <LabGlow />
    <img
      src={wportSquare}
      alt="WPORT"
      className="ai-fadeIn"
      style={{
        position: 'absolute',
        top: PAD_Y,
        right: PAD_X,
        width: 96,
        height: 96,
        zIndex: 2,
      }}
    />
    <div style={{ position: 'relative', zIndex: 1, maxWidth: 1320 }}>
      <Eyebrow delay={0}>WPORT 企業服務</Eyebrow>
      <h1
        className="ai-fadeUp"
        style={{
          animationDelay: '120ms',
          fontFamily: 'var(--osd-font-display)',
          fontSize: 'var(--osd-size-hero)',
          fontWeight: 800,
          lineHeight: 1.04,
          letterSpacing: '-0.04em',
          margin: '36px 0 0',
        }}
      >
        AI 課程，
        <br />
        <span style={{ color: 'var(--osd-accent)' }}>我們怎麼教。</span>
      </h1>
      <p
        className="ai-fadeUp"
        style={{
          animationDelay: '240ms',
          fontSize: 44,
          lineHeight: 1.45,
          color: palette.muted,
          margin: '40px 0 0',
          maxWidth: 980,
        }}
      >
        從公開課、大學正式課到企業內訓
        <br />
        可客製的實戰型 AI 教學方案
      </p>
      <div
        className="ai-fadeUp"
        style={{
          animationDelay: '360ms',
          display: 'inline-flex',
          marginTop: 48,
          padding: '16px 28px',
          borderRadius: 'var(--osd-radius)',
          background: palette.surface,
          border: `1px solid ${palette.line}`,
          fontSize: 24,
          fontWeight: 600,
          color: 'var(--osd-accent)',
          boxShadow: '0 18px 48px rgba(93, 93, 93, 0.08)',
        }}
      >
        歡迎學校 · 企業 · 社群合作洽詢
      </div>
    </div>
    <PageNumber />
  </div>
);

Cover.transition = {
  duration: 280,
  exit: {
    duration: 160,
    easing: EASE_IN,
    keyframes: [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(-6px)' },
    ],
  },
  enter: {
    duration: 280,
    delay: 100,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(12px)', filter: 'blur(4px)' },
      { opacity: 1, transform: 'translateY(0)', filter: 'blur(0)' },
    ],
  },
};

const Overview: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px` }}>
    <Style />
    <GridBg />
    <LabGlow />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>簡報導覽</Eyebrow>
      <PageHeading delay={80}>這份簡報要告訴您什麼</PageHeading>
      <BulletList
        items={[
          'WPORT 能為您規劃哪些 AI 課程型態',
          '我們的教學方法與學員可帶走的產出',
          '兩位核心講師的專長與代表場次',
          '實際授課案例（預留照片區，可替換現場素材）',
          '合作洽詢與下一步',
        ]}
      />
    </div>
    <PageNumber />
  </div>
);

const ValueSection: Page = () => (
  <SectionDivider
    section="章節 01"
    title={
      <>
        為什麼
        <br />
        選 WPORT
      </>
    }
    subtitle="業界實戰講師帶隊，課程設計可對應公開課、校園與企業三種場景。"
  />
);

ValueSection.transition = breath;

const ValueContent: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px` }}>
    <Style />
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>我們的優勢</Eyebrow>
      <PageHeading delay={80}>不是理論串稿，是能上手的實戰</PageHeading>
      <BulletList
        items={[
          '講師來自 WPORT 產品與工程第一線，教材貼近真實工作流',
          '三類受眾經驗：中高齡公開課 · 大學正式課 · 企業內訓',
          '可遷移方法論，課後能立刻套用在日常任務',
          '完整教材、Skill 模板與示範 Repo 可留存複用',
          '桃園在地持續經營（聰電站等社群活動）',
        ]}
      />
    </div>
    <PageNumber />
  </div>
);

const ApproachSection: Page = () => (
  <SectionDivider
    section="章節 02"
    title={
      <>
        教學
        <br />
        方法
      </>
    }
    subtitle="不教背語法；教流程、判斷力，以及如何把 AI 變成可複用的工作資產。"
  />
);

ApproachSection.transition = breath;

const ApproachContent: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px` }}>
    <Style />
    <GridBg />
    <LabGlow />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>方法論</Eyebrow>
      <PageHeading delay={80}>兩條主軸，對應不同角色</PageHeading>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 32,
          marginTop: 48,
        }}
      >
        <div
          className="ai-fadeUp"
          style={{
            animationDelay: '200ms',
            padding: '32px 36px',
            borderRadius: 'var(--osd-radius)',
            background: palette.tealSoft,
            border: `1px solid ${palette.line}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: 'var(--osd-accent)',
              marginBottom: 16,
            }}
          >
            工程協作 · David
          </div>
          <div
            style={{
              fontFamily: 'var(--osd-font-display)',
              fontSize: 40,
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            Plan → Execute → Verify
          </div>
          <p style={{ fontSize: 30, lineHeight: 1.5, color: palette.muted, margin: 0 }}>
            先釐清 edge case 與步驟，再分段生成與驗證；適用 Vibe Coding、後端實作與 AI
            工具選型。
          </p>
        </div>
        <div
          className="ai-fadeUp"
          style={{
            animationDelay: '280ms',
            padding: '32px 36px',
            borderRadius: 'var(--osd-radius)',
            background: palette.blueSoft,
            border: `1px solid ${palette.line}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: palette.supportBlue,
              marginBottom: 16,
            }}
          >
            產品流程 · Eric
          </div>
          <div
            style={{
              fontFamily: 'var(--osd-font-display)',
              fontSize: 34,
              fontWeight: 800,
              lineHeight: 1.25,
              marginBottom: 20,
            }}
          >
            痛點 → PM → PRD → UI/UX → 工程
          </div>
          <p style={{ fontSize: 30, lineHeight: 1.5, color: palette.muted, margin: 0 }}>
            強調規格與動線；`prd-gen`、`prd-2-storybook` 等 Skill 讓非工程背景也能產出可接手的
            文件與原型。
          </p>
        </div>
      </div>
      <p
        className="ai-fadeUp"
        style={{
          animationDelay: '400ms',
          fontSize: 32,
          lineHeight: 1.5,
          color: palette.muted,
          margin: '40px 0 0',
        }}
      >
        現場以實作為主：每位學員帶走草稿、模板或可分享的公開成果。
      </p>
    </div>
    <PageNumber />
  </div>
);

const InstructorsSection: Page = () => (
  <SectionDivider
    section="章節 03"
    title={
      <>
        講師
        <br />
        陣容
      </>
    }
    subtitle="依課程主題安排主講或合授；以下為目前核心講師。"
  />
);

InstructorsSection.transition = breath;

const InstructorDavid: Page = () => (
  <InstructorPage
    name="David"
    subname="CrazyYao"
    role="WPORT 資深工程師 · 7+ 年實戰"
    accent="teal"
    photoSrc={davidInstructor}
    photoAlt="David（CrazyYao）— 講師個人形象照"
    number="01"
    highlights={[
      '社會大學中高齡公開課 ：0經驗開始學AI的路徑',
      '企業內訓：設計、客服、行銷等非程式背景者如何使用AI產出成品',
      '開南大學：教授資管系學生，後端工程師AI實作的過程，PRD to SPEC',
      'Claude公開課助教：與工程師探索Claude更有效率的產出方法',
    ]}
  />
);

const InstructorEric: Page = () => (
  <InstructorPage
    name="Eric"
    role="WPORT 執行長 · BD/PM/數位行銷"
    accent="blue"
    photoSrc={ericNccu}
    photoAlt="Eric — 講師個人形象照"
    number="02"
    highlights={[
      '企業內訓：使用n8n實作潛在名單自動抓取',
      '企業內訓：如何使用ga mcp實現數位行銷',
      '開南大學：教授資管系學生，目前業界PM如何使用AI',
      '公開演講：如何數位轉型、B2B業務開發等',
    ]}
  />
);

const EricTeaching: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Style />
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>Eric · 授課與演講</Eyebrow>
      <PageHeading delay={80}>授課與演講經歷</PageHeading>
      <div style={{ marginTop: 32, borderTop: `1px solid ${palette.line}` }}>
        <TalkEntry
          delay={200}
          period="2026"
          org="開南大學"
          topic="軟體產業在 AI 時代的工具及應用"
        />
        <TalkEntry
          delay={250}
          period="2025"
          org="精立數位 · 企業內訓"
          topic="n8n 自動化實作：自動搜集名單"
        />
        <TalkEntry
          delay={300}
          period="2024"
          org="政治大學"
          topic="如何從大學開始職涯規劃"
        />
        <TalkEntry
          delay={350}
          period="2024"
          org="師範大學"
          topic="僑外生如何留台、職涯規劃"
        />
        <TalkEntry
          delay={400}
          period="2021"
          org="微軟 × 聯強 · 線上研討會"
          topic="數種B2B不同的業態 如何開始數位轉型"
        />
        <TalkEntry
          delay={450}
          period="2019"
          org="智慧零售電子展 · 實務講堂"
          topic="歐洲陌生開發"
        />
        <TalkEntry
          delay={500}
          period="2018"
          org="亞泰電子商務展"
          topic="B2B 如何數位化"
        />
      </div>
    </div>
    <PageNumber />
  </div>
);

const EricExperience: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Style />
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>Eric · 工作與社群經歷</Eyebrow>
      <PageHeading delay={80}>工作與社群經歷</PageHeading>
      <div style={{ marginTop: 40, borderTop: `1px solid ${palette.line}` }}>
        <ExperienceEntry
          delay={200}
          period="2024 – 至今"
          org="熱火數碼資訊"
          role="執行長（CEO）"
          achievement="軟體開發、新創資源銜接、小人提計劃，雇主品牌"
          accent="blue"
        />
   
    
        <ExperienceEntry
          delay={440}
          period="2015 – 2024"
          org="錫諾系統"
          role="商業開發經理"
          achievement="Figma設計、SEO、B2B軟體業務開發、gas、python、VBA自動化"
          accent="blue"
        />
      </div>
    </div>
    <PageNumber />
  </div>
);

const CasesSection: Page = () => (
  <SectionDivider
    section="章節 04"
    title={
      <>
        實際
        <br />
        案例
      </>
    }
    subtitle="以下場次皆為 WPORT 實際授課紀錄；右側預留照片區，請上傳現場或成果截圖。"
  />
);

CasesSection.transition = breath;

const CasePublic: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Style />
    <GridBg />
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 640px',
        gap: 48,
        alignItems: 'center',
      }}
    >
      <div>
        <Eyebrow>案例 ①</Eyebrow>
        <PageHeading delay={80}>公開課 · 桃園社區大學</PageHeading>
        <CaseMeta>
          2024-04 · 中高齡學員 · 約 15 人 · 3 小時
          <br />
          主題：ChatGPT 自學日語流程（David 主講）
        </CaseMeta>
        <BulletList
          startDelay={320}
          items={[
            '「舊式 vs AI 學習法」對照，如何與AI合作',
            '三步驟提問法：定第一步、拆階段、立刻可做',
            '現場 5 分鐘實作：學員親自與 ChatGPT對話',
          ]}
        />
      </div>
      <div className="ai-fadeUp" style={{ animationDelay: '240ms' }}>
        <img src={davidCaseTaoyuanGroup} alt="桃園社大 AI 語言學習工作坊 — 現場合照" style={{ width: 640, height: 480, objectFit: 'cover', objectPosition: '50% 40%' }} />
      </div>
    </div>
    <PageNumber />
  </div>
);

const CaseUniversity: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Style />
    <GridBg />
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 640px',
        gap: 48,
        alignItems: 'center',
      }}
    >
      <div>
        <Eyebrow>案例 ②</Eyebrow>
        <PageHeading delay={80}>大學正式課 · 開南資管系</PageHeading>
        <CaseMeta>
          2026 · 30 人 · 電腦教室實機 · David , Eric 合授
        </CaseMeta>
        <BulletList
          startDelay={320}
          items={[
            'Eric：IDE選擇、SKILL是什麼、PRD標準、edge Case、storybok實作protopype、軟體產業的各個角色',
            'David：PRD to SPEC實作、如何與PM溝通、Github基礎',
          ]}
        />
      </div>
      <div className="ai-fadeUp" style={{ animationDelay: '240ms' }}>
        <img src={ericNankai} alt="開南大學資管系工作坊 — 現場授課" style={{ width: 640, height: 480, objectFit: 'cover', objectPosition: '50% 35%' }} />
      </div>
    </div>
    <PageNumber />
  </div>
);

const CaseCorporate: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Style />
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>案例 ③</Eyebrow>
      <PageHeading delay={80}>企業內訓</PageHeading>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
          marginTop: 40,
        }}
      >
        <div className="ai-fadeUp" style={{ animationDelay: '240ms' }}>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              marginBottom: 16,
              color: palette.supportBlue,
            }}
          >
            精立數位 · n8n 實作（Eric）
          </div>
          <img src={ericJingli} alt='精立數位 n8n 企業內訓 — 現場或簡報截圖' style={{ width: 760, height: 300, objectFit: 'cover', objectPosition: '50% 50%' }} />
        </div>
        <div className="ai-fadeUp" style={{ animationDelay: '320ms' }}>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              marginBottom: 16,
              color: 'var(--osd-accent)',
            }}
          >
            非程式背景也能學位如何用Claude實作產品 v2（David）
          </div>
          <img src={davidCaseClaudeSkills} alt="企業內訓 Claude Skills — David 現場授課" style={{ width: 760, height: 300, objectFit: 'cover', objectPosition: '50% 45%' }} />
        </div>
      </div>
    </div>
    <PageNumber />
  </div>
);

const CaseCommunity: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Style />
    <GridBg />
    <LabGlow />
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 640px',
        gap: 48,
        alignItems: 'center',
      }}
    >
      <div>
        <Eyebrow>案例 ④</Eyebrow>
        <PageHeading delay={80}>聰電站第三場 · AI 基礎</PageHeading>
        <CaseMeta>
          2026-06-18 · 桃園在地 · 非技術背景 · 約 3 小時 · David + Eric 合授
        </CaseMeta>
        <BulletList
          startDelay={320}
          items={[
            'David：Antigravity、Model 切換、Skill 概念',
            'Eric：Obsidian、openslide、GitHub Pages',
            '結束時每位學員應有可分享的公開網址',
          ]}
        />
      </div>
      <div className="ai-fadeUp" style={{ animationDelay: '240ms' }}>
        <ImagePlaceholder
          hint="未來準備中"
          width={640}
          height={480}
        />
      </div>
    </div>
    <PageNumber />
  </div>
);

const Offerings: Page = () => (
  <div style={{ ...fill, padding: `${PAD_Y}px ${PAD_X}px` }}>
    <Style />
    <GridBg />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Eyebrow>課程模組</Eyebrow>
      <PageHeading delay={80}>可依對象組合的課程型態</PageHeading>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          marginTop: 48,
        }}
      >
        <div
          className="ai-fadeUp"
          style={{
            animationDelay: '200ms',
            padding: '28px 32px',
            borderRadius: 'var(--osd-radius)',
            background: palette.surface,
            border: `1px solid ${palette.line}`,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--osd-accent)' }}>公開課</div>
          <div style={{ fontSize: 32, fontWeight: 700, margin: '12px 0', lineHeight: 1.3 }}>
            AI 入門與生活應用
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.45, color: palette.muted }}>
            語言學習、提問法、非技術族群友善節奏
          </div>
        </div>
        <div
          className="ai-fadeUp"
          style={{
            animationDelay: '280ms',
            padding: '28px 32px',
            borderRadius: 'var(--osd-radius)',
            background: palette.surface,
            border: `1px solid ${palette.line}`,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 700, color: palette.supportBlue }}>校園</div>
          <div style={{ fontSize: 32, fontWeight: 700, margin: '12px 0', lineHeight: 1.3 }}>
            產學工作坊
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.45, color: palette.muted }}>
            PRD、Vibe Coding、業界流程實作
          </div>
        </div>
        <div
          className="ai-fadeUp"
          style={{
            animationDelay: '360ms',
            padding: '28px 32px',
            borderRadius: 'var(--osd-radius)',
            background: palette.surface,
            border: `1px solid ${palette.line}`,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--osd-accent)' }}>企業</div>
          <div style={{ fontSize: 32, fontWeight: 700, margin: '12px 0', lineHeight: 1.3 }}>
            內訓與顧問
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.45, color: palette.muted }}>
            n8n 自動化、Claude Skills、團隊工作流導入
          </div>
        </div>
      </div>
    </div>
    <PageNumber />
  </div>
);

const Closing: Page = () => (
  <div
    style={{
      ...fill,
      padding: `${PAD_Y}px ${PAD_X}px`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Style />
    <GridBg />
    <LabGlow />
    <img
      src={wportLogo}
      alt="WPORT"
      className="ai-fadeIn"
      style={{
        position: 'absolute',
        top: PAD_Y,
        right: PAD_X,
        height: 48,
        width: 'auto',
        zIndex: 2,
      }}
    />
    <div style={{ position: 'relative', zIndex: 1, maxWidth: 1180 }}>
      <Eyebrow delay={0}>下一步</Eyebrow>
      <h2
        className="ai-fadeUp"
        style={{
          animationDelay: '100ms',
          fontFamily: 'var(--osd-font-display)',
          fontSize: 96,
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          margin: '32px 0 0',
        }}
      >
        一起規劃適合貴單位的 AI 課程
      </h2>
      <div
        className="ai-fadeUp"
        style={{
          animationDelay: '240ms',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          marginTop: 48,
          fontSize: 36,
          lineHeight: 1.5,
          color: palette.muted,
        }}
      >
        <span>洽詢：企業內訓 · 校園合作 · 公開課/社群活動</span>
        <span>可依對象、時數、主題與講師組合客製</span>
      </div>
      <p
        className="ai-fadeUp"
        style={{
          animationDelay: '360ms',
          fontSize: 28,
          color: palette.faint,
          marginTop: 48,
        }}
      >
        感謝撥冗 — WPORT AI 課程方案
      </p>
    </div>
    <PageNumber />
  </div>
);

export const meta: SlideMeta = {
  title: 'WPORT AI 課程方案',
  theme: 'wport-teal',
  createdAt: '2026-05-25T07:26:34.180Z',
};

export default [
  Cover,
  InstructorDavid,
  InstructorEric,
  EricTeaching,
  EricExperience,
  CasePublic,
  CaseUniversity,
  CaseCorporate,
  CaseCommunity,
  Offerings,
] satisfies Page[];
