import wportLogo from '@assets/wport.png';
import ericKainan from '@assets/eric_開南.jpg';
import coChc from './assets/co-chc.jpg';
import coDrinkit from './assets/co-drinkit.jpg';
import coImpact from './assets/co-impact.jpg';
import infoSession from './assets/info-session.jpg';
import logoAikenConsulting from './assets/logos/aiken-consulting.png';
import logoAikenIntl from './assets/logos/aiken-intl.png';
import logoChc from './assets/logos/chc.jpg';
import logoDrinkit from './assets/logos/drinkit.jpg';
import logoFootd from './assets/logos/footd.jpg';
import logoGanggang from './assets/logos/ganggang.png';
import logoHaijia from './assets/logos/haijia.png';
import logoHaohao from './assets/logos/haohao.png';
import logoImpact from './assets/logos/impact.png';
import logoJingli from './assets/logos/jingli.png';
import logoLina from './assets/logos/lina.png';
import logoMitsui from './assets/logos/mitsui.png';
import logoTaiching from './assets/logos/taiching.png';
import logoTcat from './assets/logos/tcat.png';
import logoWanda from './assets/logos/wanda.png';
import logoWportCo from './assets/logos/wport.png';
import logoYes from './assets/logos/yes.png';
import mascot from './assets/mascot.png';
import qrWport from './assets/qr-wport.png';
import regEmail from './assets/reg-email.png';
import regGoogle from './assets/reg-google.png';
import regLang from './assets/reg-lang.png';
import regProfile from './assets/reg-profile.png';
import regProfile2 from './assets/reg-profile2.png';
import regVerify from './assets/reg-verify.png';
import {
  type DesignSystem,
  ImagePlaceholder,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
} from '@open-slide/core';
import qrCode from './assets/校園說明會_持續性_Qr_Code.png';


export const design: DesignSystem = {
  palette: {
    bg: '#0a0a0a',
    text: '#f3edd9',
    accent: '#eab308',
  },
  fonts: {
    display: 'Georgia, "Times New Roman", serif',
    body: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  typeScale: {
    hero: 200,
    body: 32,
  },
  radius: 12,
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

export const meta: SlideMeta = {
  title: 'WPORT × 開南大學 校園說明會',
  createdAt: '2026-05-26T09:12:33.793Z',
};

const PAD_X = 100;
const PAD_TOP = 96;
const PAD_BOTTOM = 88;
const CHROME_Y = 44;

const C = {
  green: '#56C7BB',
  greenFill: '#4EBCB1',
  lime: '#C5E6E1',
  limeBg: '#E8F3EF',
  panel: '#E8F3EF',
  panelStrong: '#D5F5F2',
  panelBorder: 'rgba(28,94,87,0.2)',
  dark: '#1C5E57',
  cream: '#F6F4F4',
  paper: '#F6F4F4',
  surface: '#FAFCFB',
  ink: '#5D5D5D',
  inkSoft: '#636363',
  muted: '#9A9A9A',
  rule: 'rgba(93,93,93,0.14)',
};

const panelBarStyle = (radius = 16): React.CSSProperties => ({
  background: C.panel,
  border: `1px solid ${C.panelBorder}`,
  borderRadius: radius,
});

const FF_ZH = '-apple-system, BlinkMacSystemFont, "PingFang TC", "Segoe UI", system-ui, sans-serif';
const FF_EN = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
const FF_VN = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';
const FF_DISPLAY = '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif';

type Theme = 'cream' | 'paper' | 'green' | 'dark' | 'lime';

const themeBg: Record<Theme, string> = {
  cream: C.cream,
  paper: C.paper,
  green: C.greenFill,
  dark: C.dark,
  lime: C.limeBg,
};

const themeChromeColor = (theme: Theme) =>
  theme === 'dark' || theme === 'green' ? 'rgba(255,255,255,0.7)' : C.inkSoft;

const fill = {
  width: '100%',
  height: '100%',
  position: 'relative' as const,
  overflow: 'hidden' as const,
};

const Blob = ({
  size,
  color,
  top,
  right,
  bottom,
  left,
  opacity = 0.5,
}: {
  size: number;
  color: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  opacity?: number;
}) => (
  <div
    aria-hidden
    style={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      background: color,
      top,
      right,
      bottom,
      left,
      opacity,
      pointerEvents: 'none',
    }}
  />
);

const ChromeTop = ({ theme, right }: { theme: Theme; right: React.ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      top: CHROME_Y,
      left: PAD_X,
      right: PAD_X,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: FF_EN,
      fontSize: 22,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: themeChromeColor(theme),
      fontWeight: 600,
      zIndex: 2,
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <img
        src={wportLogo}
        alt="WPORT 職航站"
        style={{
          height: 32,
          width: 'auto',
          display: 'block',
        }}
      />
    </div>
    <div>{right}</div>
  </div>
);

const ChromeFoot = ({
  theme,
  tagline,
  showPage,
  right,
}: {
  theme: Theme;
  tagline?: string;
  showPage?: boolean;
  right?: React.ReactNode;
}) => {
  const { current } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        bottom: CHROME_Y,
        left: PAD_X,
        right: PAD_X,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: FF_EN,
        fontSize: 22,
        color: theme === 'dark' || theme === 'green' ? 'rgba(255,255,255,0.7)' : C.muted,
        letterSpacing: '0.04em',
        zIndex: 2,
      }}
    >
      <div style={{ fontFamily: FF_ZH, letterSpacing: '0.18em', fontWeight: 500 }}>{tagline}</div>
      <div>{showPage ? `p. ${String(current).padStart(2, '0')}` : right}</div>
    </div>
  );
};

const PageFrame = ({
  theme,
  chromeRight,
  children,
  center,
  bottom,
  blobs,
  foot,
}: {
  theme: Theme;
  chromeRight: React.ReactNode;
  children: React.ReactNode;
  center?: boolean;
  bottom?: boolean;
  blobs?: React.ReactNode;
  foot?: React.ReactNode;
}) => (
  <div
    style={{
      ...fill,
      background: themeBg[theme],
      color: theme === 'dark' || theme === 'green' ? '#fff' : C.ink,
    }}
  >
    {blobs}
    <ChromeTop theme={theme} right={chromeRight} />
    <div
      style={{
        position: 'absolute',
        inset: 0,
        padding: `${PAD_TOP}px ${PAD_X}px ${PAD_BOTTOM}px`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: center ? 'center' : bottom ? 'flex-end' : 'flex-start',
        zIndex: 1,
      }}
    >
      {children}
    </div>
    {foot}
  </div>
);

const Eyebrow = ({ theme, children }: { theme?: Theme; children: React.ReactNode }) => {
  const dark = theme === 'dark' || theme === 'green';
  const lime = theme === 'lime';
  const color = dark ? C.lime : lime ? C.dark : C.green;
  return (
    <div
      style={{
        fontFamily: FF_EN,
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color,
        margin: '0 0 28px 0',
        display: 'flex',
        alignItems: 'center',
        gap: 18,
      }}
    >
      <span style={{ width: 56, height: 3, background: color, borderRadius: 2, flexShrink: 0 }} />
      {children}
    </div>
  );
};

const TitleZh = ({
  children,
  size = 76,
  color,
  style,
}: {
  children: React.ReactNode;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      fontFamily: FF_ZH,
      fontSize: size,
      fontWeight: 900,
      lineHeight: 1.12,
      letterSpacing: '-0.01em',
      margin: 0,
      color,
      ...style,
    }}
  >
    {children}
  </div>
);

const TitleVn = ({
  children,
  theme,
  size = 44,
  style,
}: {
  children: React.ReactNode;
  theme?: Theme;
  size?: number;
  style?: React.CSSProperties;
}) => {
  const dark = theme === 'dark' || theme === 'green';
  const lime = theme === 'lime';
  return (
    <div
      style={{
        fontFamily: FF_VN,
        fontSize: size,
        fontWeight: 500,
        lineHeight: 1.18,
        margin: '18px 0 0 0',
        color: dark ? C.lime : lime ? C.dark : C.green,
        fontStyle: 'italic',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const BodyZh = ({
  children,
  size = 32,
  color,
  style,
}: {
  children: React.ReactNode;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}) => (
  <div style={{ fontFamily: FF_ZH, fontSize: size, lineHeight: 1.5, color, ...style }}>
    {children}
  </div>
);

const BodyVn = ({
  children,
  size = 28,
  color,
  style,
}: {
  children: React.ReactNode;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}) => (
  <div
    style={{
      fontFamily: FF_VN,
      fontSize: size,
      lineHeight: 1.5,
      color: color ?? C.green,
      fontStyle: 'italic',
      ...style,
    }}
  >
    {children}
  </div>
);

const Card = ({
  children,
  variant = 'default',
  style,
}: {
  children: React.ReactNode;
  variant?: 'default' | 'hi' | 'green' | 'lime';
  style?: React.CSSProperties;
}) => {
  const bg =
    variant === 'hi'
      ? C.dark
      : variant === 'green'
        ? C.greenFill
        : variant === 'lime'
          ? C.panel
          : C.surface;
  const border =
    variant === 'default' || variant === 'lime' ? `1px solid ${C.panelBorder}` : undefined;
  return (
    <div
      style={{
        borderRadius: 20,
        padding: 36,
        background: bg,
        border,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

const Pill = ({
  children,
  variant = 'default',
}: {
  children: React.ReactNode;
  variant?: 'default' | 'lime' | 'outline';
}) => {
  const styles: React.CSSProperties =
    variant === 'lime'
      ? {
          background: C.panelStrong,
          color: C.dark,
          border: `1px solid ${C.panelBorder}`,
        }
      : variant === 'outline'
        ? { background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.45)' }
        : { background: C.green, color: '#fff', border: 'none' };
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '10px 22px',
        borderRadius: 999,
        fontFamily: FF_ZH,
        fontSize: 24,
        fontWeight: 600,
        letterSpacing: '0.06em',
        ...styles,
      }}
    >
      {children}
    </div>
  );
};

const NumTag = ({ n, darkTag }: { n: number | string; darkTag?: boolean }) => (
  <div
    style={{
      width: 44,
      height: 44,
      borderRadius: 12,
      background: darkTag ? C.dark : C.green,
      color: darkTag ? C.lime : '#fff',
      display: 'grid',
      placeItems: 'center',
      fontFamily: FF_DISPLAY,
      fontWeight: 800,
      fontSize: 22,
    }}
  >
    {n}
  </div>
);

const SectionDivider = ({
  num,
  chapter,
  titleZh,
  titleVn,
  bodyZh,
  bodyVn,
  blob,
}: {
  num: string;
  chapter: string;
  titleZh: React.ReactNode;
  titleVn: string;
  bodyZh: string;
  bodyVn: string;
  blob?: React.ReactNode;
}) => (
  <PageFrame
    theme="dark"
    chromeRight={`${num} / 06`}
    center
    blobs={blob}
    foot={<ChromeFoot theme="dark" tagline="WPORT · 職航站" showPage />}
  >
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 80 }}>
      <div
        style={{
          fontFamily: FF_DISPLAY,
          fontWeight: 800,
          fontSize: 200,
          lineHeight: 0.9,
          letterSpacing: '-0.04em',
          color: C.lime,
        }}
      >
        {num}
      </div>
      <div>
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 24,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: C.lime,
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          {chapter}
        </div>
        <TitleZh size={100} color="#fff">
          {titleZh}
        </TitleZh>
        <TitleVn theme="dark" style={{ marginTop: 28 }}>
          {titleVn}
        </TitleVn>
        <div style={{ marginTop: 40, maxWidth: 720 }}>
          <BodyZh size={30} color="rgba(255,255,255,0.78)" style={{ marginBottom: 12 }}>
            {bodyZh}
          </BodyZh>
          <BodyVn size={26} color="rgba(197,230,225,0.9)">
            {bodyVn}
          </BodyVn>
        </div>
      </div>
    </div>
  </PageFrame>
);

const LogoSlot = ({
  nameZh,
  nameEn,
  hint,
  style,
  highlight,
}: {
  nameZh: string;
  nameEn: string;
  hint?: string;
  style?: React.CSSProperties;
  highlight?: boolean;
}) => (
  <div
    style={{
      borderRadius: 16,
      overflow: 'hidden',
      border: highlight ? 'none' : `1px solid ${C.rule}`,
      background: highlight ? C.greenFill : C.surface,
      minHeight: 120,
      display: 'flex',
      flexDirection: 'column',
      ...style,
    }}
  >
    <ImagePlaceholder
      hint={hint ?? `${nameZh} (${nameEn}) logo`}
      width={380}
      height={120}
      style={{
        flex: '1 1 auto',
        width: '100%',
        minHeight: 120,
        borderRadius: 0,
        background: highlight ? 'rgba(255,255,255,0.08)' : undefined,
      }}
    />
    <div style={{ padding: '12px 16px', textAlign: 'center' }}>
      <div
        style={{
          fontFamily: FF_ZH,
          fontSize: 22,
          fontWeight: 700,
          color: highlight ? '#fff' : C.ink,
        }}
      >
        {nameZh}
      </div>
      <div
        style={{
          fontFamily: FF_EN,
          fontSize: 18,
          color: highlight ? C.lime : C.muted,
          marginTop: 4,
        }}
      >
        {nameEn}
      </div>
    </div>
  </div>
);

const PortraitSlot = ({ hint, style }: { hint: string; style?: React.CSSProperties }) => (
  <div style={{ borderRadius: 16, overflow: 'hidden', border: `1px solid ${C.rule}`, ...style }}>
    <ImagePlaceholder
      hint={hint}
      width={420}
      height={520}
      style={{ border: 'none', borderRadius: 0, width: '100%', height: '100%' }}
    />
  </div>
);

const QrSlot = ({ hint }: { hint: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
    <img src={qrCode} alt='' style={{ width: 440, height: 440, objectFit: 'cover', objectPosition: '50% 50%' }} />
  </div>
);

const LogoImg = ({ src, name }: { src: string; name: string }) => (
  <div
    style={{
      background: '#fff',
      border: `1px solid ${C.panelBorder}`,
      borderRadius: 14,
      minHeight: 132,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      padding: '16px 14px',
    }}
  >
    <img
      src={src}
      alt={name}
      style={{ height: 48, maxWidth: '100%', objectFit: 'contain', display: 'block' }}
    />
    <div
      style={{
        fontFamily: FF_ZH,
        fontSize: 17,
        fontWeight: 600,
        lineHeight: 1.25,
        color: C.ink,
        textAlign: 'center',
      }}
    >
      {name}
    </div>
  </div>
);

const PhoneShot = ({
  src,
  alt,
  height = 420,
}: {
  src: string;
  alt: string;
  height?: number;
}) => (
  <img
    src={src}
    alt={alt}
    style={{
      height,
      width: 'auto',
      maxWidth: '100%',
      objectFit: 'contain',
      display: 'block',
      filter: 'drop-shadow(0 18px 36px rgba(28,94,87,0.18))',
    }}
  />
);

const StepQr = ({
  size = 200,
  align = 'center',
}: {
  size?: number;
  align?: 'center' | 'flex-start' | 'flex-end';
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: align, gap: 14 }}>
    <div
      style={{
        background: '#fff',
        borderRadius: 18,
        padding: 16,
        boxShadow: '0 16px 40px rgba(0,0,0,0.24)',
      }}
    >
      <img
        src={qrWport}
        alt="WPORT 註冊 QR Code"
        style={{ width: size, height: size, display: 'block', borderRadius: 10 }}
      />
    </div>
    <div style={{ textAlign: align === 'center' ? 'center' : 'left' }}>
      <div style={{ fontFamily: FF_ZH, fontSize: 26, fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
        掃碼立即註冊
      </div>
      <div
        style={{
          fontFamily: FF_VN,
          fontSize: 18,
          fontWeight: 500,
          fontStyle: 'italic',
          color: C.lime,
          lineHeight: 1.3,
          marginTop: 4,
        }}
      >
        Quét mã để đăng ký ngay
      </div>
    </div>
  </div>
);

const StepNum = ({ n, lime }: { n: string; lime?: boolean }) => (
  <div
    style={{
      fontFamily: FF_DISPLAY,
      fontWeight: 800,
      fontSize: 72,
      lineHeight: 1,
      letterSpacing: '-0.04em',
      color: lime ? C.lime : C.green,
    }}
  >
    {n}
  </div>
);

const StatRow = ({
  n,
  zh,
  vn,
  en,
  points,
  highlight,
}: {
  n: string;
  zh: string;
  vn: string;
  en?: string;
  points: string;
  highlight?: boolean;
}) => (
  <>
    <style>{`@keyframes wpStatRowIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}@keyframes wpStatRowPulse{0%,100%{box-shadow:0 0 0 0 rgba(28,94,87,0)}50%{box-shadow:0 0 0 5px rgba(124,193,113,0.4)}}`}</style>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '56px 1fr auto',
        gap: 20,
        alignItems: 'center',
        padding: highlight ? '18px 22px' : '18px 0',
        margin: highlight ? '0 -22px' : undefined,
        borderRadius: highlight ? 16 : undefined,
        background: highlight ? C.greenFill : undefined,
        border: highlight ? `2px solid ${C.green}` : undefined,
        borderBottom: highlight ? `2px solid ${C.green}` : `1px solid ${C.rule}`,
        animation: highlight
          ? `wpStatRowIn 620ms cubic-bezier(0.16, 1, 0.3, 1) ${(Number.parseInt(String(n), 10) - 1) * 70}ms both, wpStatRowPulse 2.4s ease-in-out 1.4s infinite`
          : 'wpStatRowIn 620ms cubic-bezier(0.16, 1, 0.3, 1) both',
        animationDelay: highlight ? undefined : `${(Number.parseInt(String(n), 10) - 1) * 70}ms`,
      }}
    >
      <div style={{ fontFamily: FF_DISPLAY, fontWeight: 800, fontSize: 28, color: C.green }}>
        {n}
      </div>
    <div>
      <div style={{ fontFamily: FF_ZH, fontSize: 30, fontWeight: 700 }}>{zh}</div>
      <BodyVn size={20} style={{ margin: 0 }}>
        {vn}
        {en ? ` · ${en}` : ''}
      </BodyVn>
    </div>
    <div
      style={{
        fontFamily: FF_DISPLAY,
        fontWeight: 800,
        fontSize: 36,
        color: C.ink,
        whiteSpace: 'nowrap',
      }}
    >
      {points}
      <span style={{ fontSize: 22, color: C.muted, marginLeft: 4 }}>點</span>
    </div>
    </div>
  </>
);

const Page1: Page = () => (
  <PageFrame
    theme="dark"
    chromeRight="2026 · 06 · 08"
    center
    blobs={
      <>
        <Blob size={720} color={C.green} top={-180} right={-160} opacity={0.32} />
        <Blob size={420} color={C.lime} bottom={-120} left={80} opacity={0.22} />
      </>
    }
  >
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.18fr 0.82fr',
        gap: 56,
        alignItems: 'center',
      }}
    >
      <div>
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 28,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: C.lime,
            fontWeight: 700,
            marginBottom: 28,
          }}
        >
          CAMPUS INFO SESSION
        </div>
        <TitleZh size={104} color="#fff" style={{ maxWidth: 1000 }}>
          留台求職的下一站，
          <br />
          從這裡啟航。
        </TitleZh>
        <TitleVn theme="dark" size={40} style={{ marginTop: 32, maxWidth: 980 }}>
          Trạm tiếp theo cho hành trình tìm việc tại Đài Loan, bắt đầu từ đây.
        </TitleVn>
        <div style={{ display: 'flex', gap: 16, marginTop: 48 }}>
          <Pill variant="lime">開南大學 × WPORT</Pill>
          <Pill variant="outline">2026 / 06 / 08</Pill>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={mascot}
          alt="WPORT 吉祥物 — 留台求職旅程"
          style={{ width: '100%', maxWidth: 660, height: 'auto', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.35))', objectFit: 'cover' }}
        />
      </div>
    </div>
  </PageFrame>
);

const Page2: Page = () => (
  <PageFrame theme="cream" chromeRight="AGENDA · NỘI DUNG">
    <Eyebrow>AGENDA / Nội dung</Eyebrow>
    <TitleZh>今日六大主題</TitleZh>
    <TitleVn size={52}>6 chủ đề chính hôm nay</TitleVn>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginTop: 72 }}>
      {[
        ['1', 'WPORT 平台介紹', '僑外生就業媒合', 'Kết nối việc làm'],
        ['2', '如何註冊', 'Google 帳號登入', 'Đăng ký bằng Google'],
        ['3', '評點制新制', '在台灣要注意什麼', 'Chế độ điểm mới – Lưu ý'],
        ['4', '學長姐分享', '在台灣的經驗', 'Chia sẻ – Kinh nghiệm'],
        ['5', '職缺介紹', '實習 / 打工 / 正職', 'Thực tập / Làm thêm / Chính thức'],
        ['6', 'Q & A', '現場提問交流', 'Trực tiếp'],
      ].map(([n, zh, sub, vn]) => (
        <Card key={n} style={{ padding: 36 }}>
          <NumTag n={n} />
          {zh ? (
            <div style={{ fontFamily: FF_ZH, fontSize: 36, fontWeight: 700, marginTop: 28 }}>
              {zh}
            </div>
          ) : null}
          <div style={{ fontFamily: FF_ZH, fontSize: 26, color: C.muted, marginTop: 10 }}>
            {sub}
          </div>
          <BodyVn size={24}>{vn}</BodyVn>
        </Card>
      ))}
    </div>
  </PageFrame>
);

const Page3: Page = () => (
  <SectionDivider
    num="01"
    chapter="CHAPTER ONE"
    titleZh="WPORT 平台介紹"
    titleVn="Giới thiệu nền tảng WPORT"
    bodyZh="為僑外生與外籍人才打造的在台求職平台"
    bodyVn="Nền tảng tìm việc tại Đài Loan dành cho sinh viên quốc tế và nhân tài nước ngoài"
    blob={<Blob size={680} color={C.green} bottom={-200} right={-160} opacity={0.32} />}
  />
);

const Page4: Page = () => (
  <PageFrame theme="cream" chromeRight="01 · WPORT 平台">
    <Eyebrow>01 / Why international talent</Eyebrow>
    <TitleZh>
      為什麼我們關注
      <br />
      外籍人才？
    </TitleZh>
    <TitleVn size={52}>Vì sao chúng tôi chú trọng đến nhân tài quốc tế?</TitleVn>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: 80,
        marginTop: 64,
        alignItems: 'flex-start',
      }}
    >
      <div style={{ maxWidth: 720 }}>
        <div
          style={{
            fontFamily: FF_ZH,
            fontSize: 38,
            fontWeight: 700,
            lineHeight: 1.4,
            color: C.ink,
          }}
        >
          外籍人才，是台灣企業<span style={{ color: C.green }}>走向國際</span>的重要力量。
        </div>
        <BodyVn size={28} style={{ marginTop: 16 }}>
          Nhân tài quốc tế: Sức mạnh vươn tầm thế giới của doanh nghiệp Đài Loan.
        </BodyVn>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 56 }}>
          {['多元文化背景', '國際視野', '專業能力'].map((label, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: C.green,
                  borderRadius: 14,
                  display: 'grid',
                  placeItems: 'center',
                  color: '#fff',
                  fontFamily: FF_DISPLAY,
                  fontWeight: 800,
                  fontSize: 26,
                }}
              >
                {String.fromCharCode(65 + i)}
              </div>
              <div style={{ fontFamily: FF_ZH, fontSize: 34, fontWeight: 600 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, marginTop: -48 }}>
        <div
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            border: `1px solid ${C.rule}`,
            boxShadow: '0 24px 48px rgba(28,94,87,0.14)',
          }}
        >
          <img
            src={infoSession}
            alt="WPORT 校園說明會現場 — 一對一求職諮詢"
            style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }}
          />
        </div>
        <Card variant="hi" style={{ padding: 36 }}>
          <div
            style={{
              fontFamily: FF_EN,
              fontSize: 22,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: C.lime,
              fontWeight: 700,
            }}
          >
            Our Mission
          </div>
          <div
            style={{
              fontFamily: FF_ZH,
              fontSize: 36,
              fontWeight: 800,
              lineHeight: 1.3,
              marginTop: 16,
              color: '#fff',
            }}
          >
            打造在台外籍人才的
            <span style={{ color: C.lime }}>職涯平台。</span>
          </div>
          <BodyVn size={24} color={C.lime} style={{ marginTop: 14 }}>
            Xây dựng nền tảng nghề nghiệp cho nhân tài quốc tế tại Đài Loan.
          </BodyVn>
        </Card>
      </div>
    </div>
  </PageFrame>
);

const PageKainan: Page = () => (
  <PageFrame theme="cream" chromeRight="01 · 產學合作">
    <Eyebrow>01 / University collaboration</Eyebrow>
    <TitleZh size={68}>
      產學合作 — 在<span style={{ color: C.green }}>開南大學</span>
      <br />
      資管系教 AI Coding。
    </TitleZh>
    <TitleVn size={42}>
      Hợp tác đào tạo — Giảng dạy AI Coding tại Khoa Quản trị Thông tin, Đại học Kainan.
    </TitleVn>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: 72,
        marginTop: 56,
        alignItems: 'flex-start',
      }}
    >
      <div style={{ maxWidth: 760 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          <Pill>2026 正式課</Pill>
          <Pill variant="lime">30 人 · 電腦教室實機</Pill>
          <Pill variant="lime">David × Eric 合授</Pill>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 44 }}>
          <Card style={{ padding: 32 }}>
            <div
              style={{
                fontFamily: FF_EN,
                fontSize: 22,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.green,
                fontWeight: 700,
              }}
            >
              Eric · 產品流程 / PM
            </div>
            <BodyZh size={28} color={C.ink} style={{ marginTop: 14 }}>
              IDE 選擇、SKILL 是什麼、PRD 標準、Edge Case、Storybook 原型實作、軟體產業的各個角色
            </BodyZh>
          </Card>
          <Card style={{ padding: 32 }}>
            <div
              style={{
                fontFamily: FF_EN,
                fontSize: 22,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.green,
                fontWeight: 700,
              }}
            >
              David · 後端工程
            </div>
            <BodyZh size={28} color={C.ink} style={{ marginTop: 14 }}>
              PRD to SPEC 實作、如何與 PM 溝通、GitHub 基礎
            </BodyZh>
          </Card>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            border: `1px solid ${C.rule}`,
            boxShadow: '0 24px 48px rgba(28,94,87,0.14)',
          }}
        >
          <img
            src={ericKainan}
            alt="開南大學資管系 — AI Coding 正式課現場授課"
            style={{ width: '100%', height: 340, objectFit: 'cover', display: 'block' }}
          />
        </div>
        <Card variant="hi" style={{ padding: 36 }}>
          <div
            style={{
              fontFamily: FF_EN,
              fontSize: 22,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: C.lime,
              fontWeight: 700,
            }}
          >
            On Campus
          </div>
          <div
            style={{
              fontFamily: FF_ZH,
              fontSize: 34,
              fontWeight: 800,
              lineHeight: 1.3,
              marginTop: 16,
              color: '#fff',
            }}
          >
            把業界真實流程
            <span style={{ color: C.lime }}>帶進大學課堂。</span>
          </div>
          <BodyVn size={24} color={C.lime} style={{ marginTop: 14 }}>
            Mang quy trình thực tế trong ngành vào giảng đường đại học.
          </BodyVn>
        </Card>
      </div>
    </div>
  </PageFrame>
);

const Page5: Page = () => (
  <PageFrame theme="paper" chromeRight="01 · WPORT 平台">
    <Eyebrow>01 / What we offer</Eyebrow>
    <TitleZh size={64}>我們不只媒合 — 陪你準備好每一步。</TitleZh>
    <TitleVn size={44}>Không chỉ kết nối — Đồng hành cùng bạn trên hành trang xin việc.</TitleVn>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.05fr',
        gap: 56,
        marginTop: 48,
        alignItems: 'stretch',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {[
          ['1', '工作坊交流', 'Hội thảo trao đổi'],
          ['2', '面試技巧訓練', 'Đào tạo kỹ năng phỏng vấn'],
          ['3', '求職準備指導', 'Hướng dẫn chuẩn bị xin việc'],
          ['4', '在台工作法規說明', 'Hướng dẫn luật lao động tại Đài Loan'],
        ].map(([n, zh, vn]) => (
          <Card key={n} style={{ padding: 32 }}>
            <NumTag n={n} />
            <div style={{ fontFamily: FF_ZH, fontSize: 30, fontWeight: 700, marginTop: 24 }}>
              {zh}
            </div>
            <BodyVn size={21}>{vn}</BodyVn>
          </Card>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: 20,
            overflow: 'hidden',
            border: `1px solid ${C.rule}`,
            background: '#000',
            boxShadow: '0 24px 48px rgba(28,94,87,0.16)',
          }}
        >
          <iframe
            src="https://drive.google.com/file/d/168PIbgfB284dYbF1SvcLHDw5AAdhr3Uw/preview"
            title="WPORT 活動影片 — 求職準備"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '20px 28px',
            ...panelBarStyle(16),
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: C.green,
              color: '#fff',
              display: 'grid',
              placeItems: 'center',
              fontSize: 22,
              flexShrink: 0,
            }}
          >
            ▶
          </div>
          <div>
            <div style={{ fontFamily: FF_ZH, fontSize: 28, fontWeight: 700, color: C.dark }}>
              在台灣找工作的所有準備，我們都在！
            </div>
            <BodyVn size={22} color={C.dark} style={{ marginTop: 2 }}>
              Tất tần tật về hành trang xin việc tại Đài Loan.
            </BodyVn>
          </div>
        </div>
      </div>
    </div>
  </PageFrame>
);

const Page6: Page = () => (
  <PageFrame theme="lime" chromeRight="01 · LIVE JOBS">
    <div
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}
    >
      <div>
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 26,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: C.dark,
          }}
        >
          CURRENTLY LIVE
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12 }}>
          <div
            style={{
              fontFamily: FF_DISPLAY,
              fontWeight: 800,
              fontSize: 200,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: C.dark,
              marginTop: 12,
            }}
          >
            226
          </div>
          <div
            style={{
              fontFamily: FF_ZH,
              fontSize: 40,
              fontWeight: 800,
              color: C.dark,
              paddingBottom: 24,
            }}
          >
            筆
          </div>
        </div>
        <div
          style={{
            fontFamily: FF_ZH,
            fontSize: 48,
            fontWeight: 800,
            color: C.dark,
            marginTop: 8,
            lineHeight: 1.2,
          }}
        >
          友善職缺，等你來投。
        </div>
        <BodyVn size={28} color={C.dark} style={{ marginTop: 12 }}>
          226 vị trí thân thiện đang chờ bạn ứng tuyển.
        </BodyVn>
      </div>
      <Card variant="hi" style={{ padding: 44 }}>
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 22,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: C.lime,
          }}
        >
          One-click apply
        </div>
        <div
          style={{
            fontFamily: FF_ZH,
            fontSize: 36,
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.4,
            marginTop: 18,
          }}
        >
          點擊{' '}
          <span style={{ background: C.lime, color: C.dark, padding: '4px 14px', borderRadius: 8 }}>
            一鍵投遞人才庫
          </span>
          <br />
          就能看到所有職缺。
        </div>
        <BodyVn size={24} color={C.lime} style={{ marginTop: 16 }}>
          Bấm vào kho nhân tài là có thể xem tất cả vị trí.
        </BodyVn>
      </Card>
    </div>
    <div style={{ marginTop: 44 }}>
      <div
        style={{
          fontFamily: FF_ZH,
          fontSize: 26,
          fontWeight: 700,
          color: C.dark,
          marginBottom: 20,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
        }}
      >
        <span style={{ width: 40, height: 3, background: C.dark, borderRadius: 2 }} />
        外籍友善企業持續徵才中
        <span style={{ fontFamily: FF_VN, fontSize: 22, fontWeight: 500, color: C.dark, opacity: 0.7 }}>
          · Doanh nghiệp thân thiện đang tuyển
        </span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
        <LogoImg src={logoAikenIntl} name="艾肯國際開發" />
        <LogoImg src={logoAikenConsulting} name="艾肯管理顧問" />
        <LogoImg src={logoMitsui} name="三井資訊" />
        <LogoImg src={logoJingli} name="精立數位" />
        <LogoImg src={logoChc} name="自行車健康科技研發中心" />
        <LogoImg src={logoImpact} name="影響力動能" />
        <LogoImg src={logoDrinkit} name="居奇 DRINKIT" />
        <LogoImg src={logoHaijia} name="海嘉" />
        <LogoImg src={logoTcat} name="特捷物流" />
        <LogoImg src={logoGanggang} name="剛剛股份" />
        <LogoImg src={logoWportCo} name="熱火數碼 WPORT" />
        <LogoImg src={logoFootd} name="富特士多" />
        <LogoImg src={logoYes} name="耶斯實業" />
        <LogoImg src={logoLina} name="莉納早餐" />
        <LogoImg src={logoTaiching} name="台慶不動產" />
        <LogoImg src={logoHaohao} name="皓皓租屋" />
        <LogoImg src={logoWanda} name="萬達科技顧問" />
      </div>
    </div>
  </PageFrame>
);

type FeaturedCompany = {
  photo: string;
  logo: string;
  nameZh: string;
  nameEn: string;
  tagline: string;
  subline: string;
  jobs: { title: string; tag: string; pay: string }[];
};

const FEATURED_COMPANIES: FeaturedCompany[] = [
  {
    photo: coImpact,
    logo: logoImpact,
    nameZh: '影響力動能股份有限公司',
    nameEn: 'Impact Motion',
    tagline: '運動產業 × 影響力經營',
    subline: '從台灣出發，連結世界舞台',
    jobs: [
      { title: '電商專員', tag: '正職', pay: '薪資面議' },
      { title: '電商專員', tag: '兼職', pay: '時薪 240' },
    ],
  },
  {
    photo: coChc,
    logo: logoChc,
    nameZh: '自行車暨健康科技研發中心',
    nameEn: 'CHC',
    tagline: '研發 × 檢測 × 產業升級',
    subline: '推動台灣自行車科技前進',
    jobs: [
      { title: 'AI 開發工程師', tag: '正職', pay: '月薪 40K+' },
      { title: '機電整合工程師', tag: '正職', pay: '月薪 36K+' },
    ],
  },
  {
    photo: coDrinkit,
    logo: logoDrinkit,
    nameZh: '居奇股份有限公司',
    nameEn: 'DRINKIT',
    tagline: '酒水文化 × 價值提升',
    subline: '成為高端餐飲體驗的首選品牌',
    jobs: [
      { title: '外場服務員 · USHI HANA 牛花', tag: '正職', pay: '月薪 40K+' },
      { title: '外場服務員 · Torishou 鳥翔', tag: '正職', pay: '論件計酬' },
    ],
  },
];

const Page7: Page = () => (
  <PageFrame theme="cream" chromeRight="01 · FEATURED COMPANIES">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <div>
        <Eyebrow>01 / Featured employers</Eyebrow>
        <TitleZh size={64}>特別推薦企業</TitleZh>
        <TitleVn size={44}>Doanh nghiệp đề xuất đặc biệt</TitleVn>
      </div>
      <Pill>3 Companies</Pill>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginTop: 44 }}>
      {FEATURED_COMPANIES.map((co) => (
        <Card key={co.nameEn} style={{ padding: 0, background: C.surface, overflow: 'hidden' }}>
          <img
            src={co.photo}
            alt={`${co.nameZh} 團隊`}
            style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}
          />
          <div style={{ padding: '24px 28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 56,
                  height: 44,
                  display: 'grid',
                  placeItems: 'center',
                  flexShrink: 0,
                }}
              >
                <img
                  src={co.logo}
                  alt={`${co.nameEn} logo`}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
              </div>
              <div>
                <div style={{ fontFamily: FF_ZH, fontSize: 24, fontWeight: 800, lineHeight: 1.2 }}>
                  {co.nameZh}
                </div>
                <div style={{ fontFamily: FF_EN, fontSize: 18, color: C.muted, marginTop: 2 }}>
                  {co.nameEn}
                </div>
              </div>
            </div>
            <div
              style={{
                fontFamily: FF_ZH,
                fontSize: 22,
                fontWeight: 700,
                color: C.green,
                marginTop: 16,
              }}
            >
              {co.tagline}
            </div>
            <div style={{ fontFamily: FF_ZH, fontSize: 20, color: C.inkSoft, marginTop: 4 }}>
              {co.subline}
            </div>
            <div style={{ height: 1, background: C.rule, margin: '18px 0' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {co.jobs.map((job) => (
                <div
                  key={job.title}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
                    <span
                      style={{
                        fontFamily: FF_ZH,
                        fontSize: 16,
                        fontWeight: 700,
                        color: '#fff',
                        background: C.green,
                        padding: '2px 10px',
                        borderRadius: 6,
                        flexShrink: 0,
                      }}
                    >
                      {job.tag}
                    </span>
                    <span style={{ fontFamily: FF_ZH, fontSize: 21, fontWeight: 600 }}>
                      {job.title}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: FF_DISPLAY,
                      fontSize: 20,
                      fontWeight: 700,
                      color: C.dark,
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}
                  >
                    {job.pay}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  </PageFrame>
);

const Page8: Page = () => (
  <PageFrame
    theme="dark"
    chromeRight="SCAN ME"
    center
    blobs={<Blob size={520} color={C.green} top={-120} left={-80} opacity={0.32} />}
  >
    <div style={{ display: 'flex', flexDirection: 'row', gap: 100, alignItems: 'center' }}>
      <div style={{ flex: 1 }}>
        <Eyebrow theme="dark">SCAN QR CODE</Eyebrow>
        <TitleZh size={96} color="#fff">
          一起來瀏覽
          <br />
          活動職缺吧！
        </TitleZh>
        <TitleVn theme="dark" size={40} style={{ marginTop: 24 }}>
          Cùng xem các vị trí tuyển dụng nhé!
        </TitleVn>
        <div
          style={{
            marginTop: 56,
            display: 'flex',
            flexDirection: 'column',
            gap: 18,
            maxWidth: 640,
          }}
        >
          {['掃描右側 QR Code', '查看本次活動所有職缺', '點擊 一鍵投遞人才庫'].map((text, i) => (
            <div key={text} style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: C.panelStrong,
                  color: C.dark,
                  borderRadius: '50%',
                  display: 'grid',
                  placeItems: 'center',
                  fontFamily: FF_DISPLAY,
                  fontWeight: 800,
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </div>
              <div style={{ fontFamily: FF_ZH, fontSize: 30, color: '#fff' }}>
                {i === 2 ? (
                  <>
                    點擊 <span style={{ color: C.lime, fontWeight: 700 }}>一鍵投遞人才庫</span>
                  </>
                ) : (
                  text
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
        <QrSlot hint="活動職缺 QR Code — wport.me" />
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 22,
            letterSpacing: '0.18em',
            color: C.lime,
            textTransform: 'uppercase',
            fontWeight: 700,
          }}
        >
          wport.me
        </div>
      </div>
    </div>
  </PageFrame>
);

const Page9: Page = () => (
  <SectionDivider
    num="02"
    chapter="CHAPTER TWO"
    titleZh="如何註冊"
    titleVn="Cách đăng ký tài khoản"
    bodyZh="Google 帳號一鍵登入，3 步驟完成你的求職檔案"
    bodyVn="Đăng nhập bằng Google – Hoàn tất hồ sơ trong 3 bước"
    blob={<Blob size={680} color={C.green} top={-180} left={-160} opacity={0.32} />}
  />
);

const Page10: Page = () => (
  <PageFrame theme="cream" chromeRight="02 · 如何註冊">
    <Eyebrow>02 / Quick start</Eyebrow>
    <TitleZh size={64}>開始快速註冊</TitleZh>
    <TitleVn size={44}>Bắt đầu đăng ký nhanh</TitleVn>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginTop: 36 }}>
      <Card style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ background: '#fff', padding: '28px 0 0', display: 'grid', placeItems: 'center' }}>
          <PhoneShot src={regLang} alt="切換語言與註冊畫面" height={350} />
        </div>
        <div style={{ padding: '24px 28px' }}>
          <StepNum n="01" />
          <div style={{ fontFamily: FF_ZH, fontSize: 32, fontWeight: 700, marginTop: 16 }}>
            切換語言 & 註冊
          </div>
          <BodyZh size={24} style={{ marginTop: 8 }}>
            可切換 5 種語言後註冊
          </BodyZh>
          <BodyVn size={21}>Chọn 1 trong 5 ngôn ngữ rồi đăng ký</BodyVn>
        </div>
      </Card>
      <Card style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ background: '#fff', padding: '28px 0 0', display: 'grid', placeItems: 'center' }}>
          <PhoneShot src={regGoogle} alt="Google 帳號登入畫面" height={350} />
        </div>
        <div style={{ padding: '24px 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <StepNum n="02" />
            <Pill variant="lime">推薦 RECOMMENDED</Pill>
          </div>
          <div style={{ fontFamily: FF_ZH, fontSize: 32, fontWeight: 700, marginTop: 16 }}>
            Google 登入
          </div>
          <BodyZh size={24} style={{ marginTop: 8 }}>
            使用 Google 帳號比較快
          </BodyZh>
          <BodyVn size={21}>Đăng nhập bằng Google nhanh hơn</BodyVn>
        </div>
      </Card>
      <Card variant="green" style={{ padding: 40, display: 'flex', flexDirection: 'column' }}>
        <StepNum n="03" lime />
        <div style={{ fontFamily: FF_ZH, fontSize: 34, fontWeight: 700, marginTop: 18, color: '#fff' }}>
          開始填寫
        </div>
        <BodyZh size={24} color="rgba(255,255,255,0.85)" style={{ marginTop: 8 }}>
          填寫個人資料與履歷
        </BodyZh>
        <BodyVn size={20} color={C.lime}>
          Điền thông tin và CV
        </BodyVn>
        <div style={{ flex: 1, minHeight: 24 }} />
        <StepQr size={200} align="center" />
      </Card>
    </div>
  </PageFrame>
);

const Page11: Page = () => (
  <PageFrame theme="paper" chromeRight="02 · 如何註冊">
    <Eyebrow>02 / Email verification</Eyebrow>
    <TitleZh size={64}>一般註冊流程 — Email 驗證</TitleZh>
    <TitleVn size={44}>Quy trình đăng ký — Xác minh email</TitleVn>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginTop: 36 }}>
      <Card style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            background: '#fff',
            flex: 1,
            display: 'grid',
            placeItems: 'center',
            padding: 28,
          }}
        >
          <img
            src={regEmail}
            alt="驗證信已寄送至您的 Email"
            style={{ width: '100%', maxWidth: 440, height: 'auto', display: 'block' }}
          />
        </div>
        <div style={{ padding: '24px 28px' }}>
          <StepNum n="01" />
          <div style={{ fontFamily: FF_ZH, fontSize: 30, fontWeight: 700, marginTop: 14 }}>
            收到驗證信
          </div>
          <BodyVn size={21}>Nhận email xác minh</BodyVn>
        </div>
      </Card>
      <Card style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ background: '#fff', padding: '28px 0 0', display: 'grid', placeItems: 'center' }}>
          <PhoneShot src={regVerify} alt="輸入信箱內驗證碼" height={350} />
        </div>
        <div style={{ padding: '24px 28px' }}>
          <StepNum n="02" />
          <div style={{ fontFamily: FF_ZH, fontSize: 30, fontWeight: 700, marginTop: 14 }}>
            輸入驗證碼
          </div>
          <BodyVn size={21}>Nhập mã xác minh (6 số)</BodyVn>
        </div>
      </Card>
      <Card variant="hi" style={{ padding: 40, display: 'flex', flexDirection: 'column' }}>
        <StepNum n="03" lime />
        <div style={{ fontFamily: FF_ZH, fontSize: 30, fontWeight: 700, marginTop: 16, color: '#fff' }}>
          完成註冊
          <br />
          進入填寫個人資料
        </div>
        <BodyVn size={20} color={C.lime} style={{ marginTop: 8 }}>
          Hoàn tất – Bắt đầu điền hồ sơ cá nhân
        </BodyVn>
        <div style={{ flex: 1, minHeight: 24 }} />
        <StepQr size={200} align="center" />
      </Card>
    </div>
  </PageFrame>
);

const CheckItem = ({ zh, vn, light }: { zh: string; vn: string; light?: boolean }) => (
  <li
    style={{
      fontFamily: FF_ZH,
      fontSize: 28,
      fontWeight: 600,
      marginBottom: 12,
      color: light ? '#fff' : C.ink,
      listStyle: 'none',
    }}
  >
    ✓ {zh}{' '}
    <span
      style={{
        color: light ? C.lime : C.muted,
        fontWeight: 400,
        fontSize: 24,
        marginLeft: 8,
        opacity: light ? 0.85 : 1,
      }}
    >
      {vn}
    </span>
  </li>
);

const Page12: Page = () => (
  <PageFrame theme="cream" chromeRight="02 · 如何註冊">
    <Eyebrow>02 / Profile & resume</Eyebrow>
    <TitleZh size={64}>填寫個人資料 & 履歷</TitleZh>
    <TitleVn size={44}>Điền thông tin cá nhân và hồ sơ</TitleVn>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '0.92fr 1.08fr',
        gap: 40,
        marginTop: 36,
        alignItems: 'stretch',
      }}
    >
      <Card
        style={{
          padding: 28,
          background: '#fff',
          display: 'flex',
          gap: 20,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <PhoneShot src={regProfile} alt="編輯會員資料 步驟 1" height={480} />
          <div style={{ fontFamily: FF_ZH, fontSize: 22, fontWeight: 700, color: C.dark }}>
            ① 會員資料
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <PhoneShot src={regProfile2} alt="求職與就學資料 步驟 2" height={480} />
          <div style={{ fontFamily: FF_ZH, fontSize: 22, fontWeight: 700, color: C.dark }}>
            ② 求職 / 就學
          </div>
        </div>
      </Card>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Card style={{ padding: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ fontFamily: FF_DISPLAY, fontWeight: 800, fontSize: 44, color: C.green, lineHeight: 1 }}>
              ⚠
            </div>
            <div
              style={{
                fontFamily: FF_EN,
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: C.green,
              }}
            >
              #注意 / Lưu ý
            </div>
          </div>
          <div style={{ fontFamily: FF_ZH, fontSize: 32, fontWeight: 700, marginTop: 14, lineHeight: 1.3 }}>
            姓名請填寫 <span style={{ color: C.green }}>與居留證一致</span>
          </div>
          <BodyVn size={22} style={{ marginTop: 8 }}>
            Họ tên phải khớp với thẻ cư trú
          </BodyVn>
        </Card>
        <Card variant="hi" style={{ padding: 32, flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ fontFamily: FF_DISPLAY, fontWeight: 800, fontSize: 44, color: C.lime, lineHeight: 1 }}>
              ✓
            </div>
            <div
              style={{
                fontFamily: FF_EN,
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: C.lime,
              }}
            >
              #必填 / Bắt buộc
            </div>
          </div>
          <div style={{ fontFamily: FF_ZH, fontSize: 30, fontWeight: 700, marginTop: 14, color: '#fff' }}>
            履歷必填欄位 <span style={{ color: C.lime }}>缺一不可</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 36,
              marginTop: 20,
              paddingTop: 18,
              borderTop: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            <ul style={{ margin: 0, padding: 0, flex: 1 }}>
              <CheckItem zh="履歷填寫" vn="Điền CV" light />
              <CheckItem zh="科系 / 科系類別" vn="Ngành học" light />
              <CheckItem zh="上班時段" vn="Thời gian làm việc" light />
              <CheckItem zh="公開履歷 · 送出申請" vn="Công khai CV · Gửi đơn" light />
            </ul>
            <StepQr size={184} align="center" />
          </div>
        </Card>
      </div>
    </div>
  </PageFrame>
);

const Page13: Page = () => (
  <PageFrame theme="lime" chromeRight="02 · 如何註冊" center>
    <div
      style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80, alignItems: 'center' }}
    >
      <div>
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 26,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: C.dark,
          }}
        >
          APPLICATION SUBMITTED
        </div>
        <div
          style={{
            fontFamily: FF_ZH,
            fontSize: 168,
            fontWeight: 900,
            color: C.dark,
            marginTop: 20,
            lineHeight: 1.05,
          }}
        >
          申請成功 ✨
        </div>
        <div
          style={{
            fontFamily: FF_ZH,
            fontSize: 42,
            fontWeight: 700,
            color: C.dark,
            marginTop: 28,
            lineHeight: 1.3,
          }}
        >
          我們還提供更多的友善企業
          <br />
          ＆職缺可以選擇。
        </div>
        <BodyVn size={28} color={C.dark} style={{ marginTop: 16 }}>
          Chúng tôi còn có thêm rất nhiều doanh nghiệp và vị trí thân thiện để bạn lựa chọn.
        </BodyVn>
      </div>
      <Card variant="hi" style={{ padding: 56 }}>
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 22,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: C.lime,
          }}
        >
          LIVE COUNT
        </div>
        <div
          style={{
            fontFamily: FF_DISPLAY,
            fontWeight: 800,
            fontSize: 220,
            color: '#fff',
            marginTop: 16,
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
          }}
        >
          226
        </div>
        <div
          style={{ fontFamily: FF_ZH, fontSize: 30, fontWeight: 600, color: '#fff', marginTop: 8 }}
        >
          筆友善職缺 ↬
        </div>
        <BodyVn size={22} color={C.lime} style={{ marginTop: 6 }}>
          vị trí thân thiện
        </BodyVn>
      </Card>
    </div>
  </PageFrame>
);

const Page14: Page = () => (
  <PageFrame theme="paper" chromeRight="02 · 如何註冊">
    <Eyebrow>02 / Other ways to apply</Eyebrow>
    <TitleZh>其他投遞履歷方式</TitleZh>
    <TitleVn size={52}>Các cách nộp hồ sơ khác</TitleVn>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 80px 1fr',
        gap: 32,
        marginTop: 72,
        alignItems: 'stretch',
      }}
    >
      <Card style={{ padding: 56, display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 22,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: C.muted,
          }}
        >
          Option A
        </div>
        <div style={{ fontFamily: FF_ZH, fontSize: 56, fontWeight: 800, marginTop: 16 }}>
          Google Form
        </div>
        <BodyVn size={26}>Biểu mẫu Google</BodyVn>
        <div
          style={{
            marginTop: 32,
            fontFamily: FF_ZH,
            fontSize: 28,
            color: C.inkSoft,
            lineHeight: 1.5,
          }}
        >
          傳統表單投遞方式
          <br />
          Cách truyền thống
        </div>
        <div
          style={{
            marginTop: 'auto',
            paddingTop: 36,
            fontFamily: FF_EN,
            fontSize: 22,
            color: C.muted,
            letterSpacing: '0.08em',
          }}
        >
          → 單次投遞 ONE-OFF
        </div>
      </Card>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            fontFamily: FF_DISPLAY,
            fontWeight: 800,
            fontSize: 100,
            color: C.green,
            letterSpacing: '-0.04em',
          }}
        >
          vs
        </div>
      </div>
      <Card variant="green" style={{ padding: 56, display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 22,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: C.lime,
          }}
        >
          Option B · RECOMMENDED
        </div>
        <div
          style={{ fontFamily: FF_ZH, fontSize: 56, fontWeight: 800, marginTop: 16, color: '#fff' }}
        >
          WPORT 職航站
        </div>
        <BodyVn size={26} color={C.lime}>
          Nền tảng WPORT
        </BodyVn>
        <div
          style={{
            marginTop: 32,
            fontFamily: FF_ZH,
            fontSize: 28,
            color: 'rgba(255,255,255,0.92)',
            lineHeight: 1.5,
          }}
        >
          一次建檔，所有友善企業都看得到
          <br />
          Một lần đăng ký – Tất cả doanh nghiệp đều thấy
        </div>
        <div
          style={{
            marginTop: 'auto',
            paddingTop: 36,
            fontFamily: FF_EN,
            fontSize: 22,
            color: C.lime,
            letterSpacing: '0.08em',
          }}
        >
          ★ 持續媒合 ONGOING MATCHING
        </div>
      </Card>
    </div>
  </PageFrame>
);

const Page15: Page = () => (
  <PageFrame
    theme="dark"
    chromeRight="03 / 06"
    center
    blobs={<Blob size={680} color={C.green} top={-180} right={-160} opacity={0.32} />}
    foot={<ChromeFoot theme="dark" tagline="WPORT · 職航站" showPage />}
  >
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 80 }}>
      <div
        style={{
          fontFamily: FF_DISPLAY,
          fontWeight: 800,
          fontSize: 200,
          lineHeight: 0.9,
          letterSpacing: '-0.04em',
          color: C.lime,
        }}
      >
        03
      </div>
      <div>
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 24,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: C.lime,
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          CHAPTER THREE
        </div>
        <TitleZh size={92} color="#fff">
          評點制新制 ─
          <br />
          留台工作必懂
        </TitleZh>
        <TitleVn theme="dark" style={{ marginTop: 28, fontSize: 40 }}>
          Chế độ điểm mới – Điều cần biết khi làm việc tại Đài Loan
        </TitleVn>
        <div style={{ marginTop: 40 }}>
          <div
            style={{
              fontFamily: FF_EN,
              fontSize: 22,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: C.lime,
              fontWeight: 700,
            }}
          >
            在合作夥伴 / In partnership with
          </div>
          <div
            style={{
              fontFamily: FF_ZH,
              fontSize: 40,
              fontWeight: 700,
              color: '#fff',
              marginTop: 12,
            }}
          >
            艾肯顧問 · I-CAN Consulting
          </div>
          <BodyVn size={26} color="rgba(197,230,225,0.9)" style={{ marginTop: 6 }}>
            艾惜人才 · 肯定未來
          </BodyVn>
        </div>
      </div>
    </div>
  </PageFrame>
);

const Page16: Page = () => (
  <PageFrame theme="cream" chromeRight="03 · 評點制 / ICAN">
    <Eyebrow>03 / About ICAN</Eyebrow>
    <TitleZh>艾肯顧問 自我介紹</TitleZh>
    <TitleVn size={52}>Giới thiệu về Tư vấn ICAN</TitleVn>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '0.8fr 1.2fr',
        gap: 56,
        marginTop: 64,
        alignItems: 'stretch',
      }}
    >
      <Card
        style={{
          padding: 48,
          background: C.surface,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: FF_EN,
              fontSize: 22,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: C.green,
              fontWeight: 700,
            }}
          >
            ICAN CONSULTING
          </div>
          <div
            style={{
              fontFamily: FF_ZH,
              fontSize: 60,
              fontWeight: 900,
              marginTop: 18,
              lineHeight: 1.1,
            }}
          >
            艾惜人才
            <br />
            肯定未來
          </div>
          <BodyVn size={26} style={{ marginTop: 16 }}>
            Trân trọng nhân tài · Khẳng định tương lai
          </BodyVn>
        </div>
        <div style={{ marginTop: 40 }}>
          <div style={{ height: 1, background: C.rule, marginBottom: 24 }} />
          <div style={{ fontFamily: FF_EN, fontSize: 22, color: C.muted, letterSpacing: '0.08em' }}>
            Introduction to ICAN Consulting
          </div>
          <BodyVn size={22} style={{ marginTop: 4 }}>
            Giới thiệu về Tư vấn ICAN
          </BodyVn>
        </div>
      </Card>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 28,
          margin: 0,
          padding: 0,
          listStyle: 'none',
        }}
      >
        {[
          <>
            任職艾肯控股集團
            <span style={{ color: C.green, fontWeight: 700, marginLeft: 8 }}>第 4 年</span>
          </>,
          <>負責企業正職招募</>,
          <>
            協助招募超過
            <span style={{ color: C.green, fontWeight: 700, marginLeft: 8 }}>上萬名員工</span>
          </>,
          <>擅長人才媒合、市場行情分析</>,
        ].map((item, i) => (
          <li
            key={i}
            style={{
              fontFamily: FF_ZH,
              fontSize: 32,
              fontWeight: 600,
              display: 'flex',
              alignItems: 'flex-start',
              gap: 16,
            }}
          >
            <span style={{ color: C.green, fontWeight: 800 }}>✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </PageFrame>
);

const Page17: Page = () => (
  <PageFrame
    theme="green"
    chromeRight="03 · 評點制 / ICAN"
    center
    blobs={<Blob size={720} color={C.lime} top={-200} right={-200} opacity={0.18} />}
  >
    <div
      style={{
        fontFamily: FF_EN,
        fontSize: 28,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: C.lime,
      }}
    >
      NEW MEASURES · 2026
    </div>
    <div
      style={{
        fontFamily: FF_ZH,
        fontSize: 140,
        fontWeight: 900,
        lineHeight: 1.05,
        marginTop: 32,
        color: '#fff',
      }}
    >
      跨國勞動力
      <br />
      新措施。
    </div>
    <TitleVn theme="green" size={44} style={{ marginTop: 32 }}>
      Chính sách mới về lao động xuyên quốc gia
    </TitleVn>
    <div style={{ fontFamily: FF_EN, fontSize: 28, marginTop: 20, color: 'rgba(255,255,255,0.7)' }}>
      Cross-Border Workforce New Measures
    </div>
  </PageFrame>
);

const Page18: Page = () => (
  <PageFrame theme="cream" chromeRight="03 · 評點制 / ICAN">
    <Eyebrow>03 / Extended stay</Eyebrow>
    <TitleZh>
      畢業僑外生
      <br />
      延長居留 2 年
    </TitleZh>
    <TitleVn size={52}>Du học sinh tốt nghiệp được gia hạn cư trú 2 năm</TitleVn>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr',
        gap: 48,
        marginTop: 56,
        alignItems: 'stretch',
      }}
    >
      <Card style={{ padding: 48, background: C.surface }}>
        <div
          style={{
            fontFamily: FF_ZH,
            fontSize: 36,
            fontWeight: 700,
            lineHeight: 1.4,
            color: C.ink,
          }}
        >
          畢業僑外生延長居留 <span style={{ color: C.green }}>2 年期間</span>，
          <br />
          <span
            style={{
              background: C.panelStrong,
              padding: '2px 12px',
              borderRadius: 8,
              border: `1px solid ${C.panelBorder}`,
            }}
          >
            無須申請工作許可
          </span>
        </div>
        <div style={{ height: 1, background: C.rule, margin: '32px 0' }} />
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 24,
            fontWeight: 500,
            color: C.muted,
            lineHeight: 1.5,
          }}
        >
          International students with an associate degree or above may extend their stay for 2 years
          without applying for a work permit.
        </div>
        <BodyVn size={24} style={{ marginTop: 14 }}>
          Du học sinh tốt nghiệp từ cao đẳng trở lên được gia hạn cư trú 2 năm mà không cần xin giấy
          phép lao động.
        </BodyVn>
      </Card>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Card variant="hi" style={{ padding: 36 }}>
          <div
            style={{
              fontFamily: FF_EN,
              fontSize: 22,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: C.lime,
              fontWeight: 700,
            }}
          >
            Limitation
          </div>
          <div
            style={{
              fontFamily: FF_ZH,
              fontSize: 34,
              fontWeight: 700,
              marginTop: 14,
              color: '#fff',
            }}
          >
            無法累積
          </div>
          <BodyVn size={22} color={C.lime} style={{ marginTop: 6 }}>
            Không được cộng dồn
          </BodyVn>
          <div
            style={{
              fontFamily: FF_EN,
              fontSize: 22,
              color: 'rgba(255,255,255,0.65)',
              marginTop: 6,
            }}
          >
            Cannot be accumulated
          </div>
        </Card>
        <Card variant="lime" style={{ padding: 36 }}>
          <div
            style={{
              fontFamily: FF_EN,
              fontSize: 22,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: C.dark,
              fontWeight: 700,
            }}
          >
            Long-term path
          </div>
          <div
            style={{
              fontFamily: FF_ZH,
              fontSize: 34,
              fontWeight: 700,
              marginTop: 14,
              color: C.dark,
            }}
          >
            永久居留證 APRC
          </div>
          <BodyVn size={22} color={C.dark} style={{ marginTop: 6, opacity: 0.8 }}>
            Thẻ thường trú
          </BodyVn>
        </Card>
      </div>
    </div>
  </PageFrame>
);

const Page19: Page = () => (
  <PageFrame theme="paper" chromeRight="03 · 評點制 / ICAN">
    <Eyebrow>03 / Points-based system</Eyebrow>
    <TitleZh>畢業僑生留台工作評點制</TitleZh>
    <TitleVn size={52}>Hệ thống cấp phép lao động theo thang điểm</TitleVn>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 56 }}>
      {[
        [
          '1',
          'STATUS',
          '身分',
          '僑生 或 華裔學生',
          'Sinh viên Hoa kiều',
          'Overseas Chinese Students',
          'default',
        ],
        [
          '2',
          'EDUCATION',
          '學歷',
          '在台取得\n大學（含）以上學歷',
          'Tốt nghiệp từ đại học trở lên',
          '',
          'default',
        ],
        [
          '3',
          'POINTS · MOL',
          '經審核點數',
          '≥70',
          '累積點數門檻 · 勞動部',
          'Tích lũy ≥70 điểm · Bộ Lao động',
          'hi',
        ],
      ].map(([num, en, zh, main, vn, enSub, v]) => (
        <Card
          key={num}
          variant={v as 'default' | 'hi'}
          style={{ padding: 40, background: v === 'default' ? C.cream : undefined }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: v === 'hi' ? C.lime : C.green,
                color: v === 'hi' ? C.dark : '#fff',
                display: 'grid',
                placeItems: 'center',
                fontFamily: FF_DISPLAY,
                fontWeight: 800,
                fontSize: 28,
              }}
            >
              {num}
            </div>
            <div
              style={{
                fontFamily: FF_EN,
                fontSize: 22,
                fontWeight: 700,
                letterSpacing: '0.14em',
                color: v === 'hi' ? C.lime : C.muted,
              }}
            >
              {en}
            </div>
          </div>
          <div
            style={{
              fontFamily: FF_ZH,
              fontSize: 32,
              fontWeight: 700,
              marginTop: 24,
              color: v === 'hi' ? '#fff' : undefined,
            }}
          >
            {zh}
          </div>
          <div
            style={{
              height: 1,
              background: v === 'hi' ? 'rgba(255,255,255,0.18)' : C.rule,
              margin: '20px 0',
            }}
          />
          {num === '3' ? (
            <>
              <div
                style={{
                  fontFamily: FF_DISPLAY,
                  fontWeight: 800,
                  fontSize: 120,
                  color: C.lime,
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                }}
              >
                ≥70
              </div>
              <div style={{ fontFamily: FF_ZH, fontSize: 24, color: '#fff', marginTop: 8 }}>
                累積點數門檻 · 勞動部
              </div>
              <BodyVn size={22} color={C.lime}>
                {vn}
              </BodyVn>
            </>
          ) : (
            <>
              <div
                style={{
                  fontFamily: FF_ZH,
                  fontSize: 28,
                  fontWeight: 600,
                  lineHeight: 1.4,
                  whiteSpace: 'pre-line',
                }}
              >
                {main}
              </div>
              <BodyVn size={22}>{vn}</BodyVn>
              {enSub ? (
                <div style={{ fontFamily: FF_EN, fontSize: 20, color: C.muted, marginTop: 4 }}>
                  {enSub}
                </div>
              ) : null}
            </>
          )}
        </Card>
      ))}
    </div>
  </PageFrame>
);

const Page20: Page = () => (
  <PageFrame theme="cream" chromeRight="03 · 評點制 / ICAN">
    <Eyebrow>03 / Case flow</Eyebrow>
    <TitleZh>案例分享 — 明X興業 繪圖助理</TitleZh>
    <TitleVn size={52}>Case study – Trợ lý vẽ kỹ thuật tại Minh X Hưng Nghiệp</TitleVn>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16, marginTop: 72 }}>
      {[
        ['01', '招募', 'Tuyển dụng'],
        ['02', '面試', 'Phỏng vấn'],
        ['03', '錄取', 'Trúng tuyển'],
        ['04', '申請評點制資料', 'Xin tài liệu chế độ điểm'],
        ['05', '收到工作聘僱許可函', 'Nhận giấy phép lao động'],
        ['06', '申請居留證變更', 'Đổi thẻ cư trú'],
      ].map(([n, zh, vn]) => (
        <Card key={n} style={{ padding: 28, background: C.surface }}>
          <StepNum n={n} />
          <div style={{ fontFamily: FF_ZH, fontSize: 28, fontWeight: 700, marginTop: 14 }}>
            {zh}
          </div>
          <BodyVn size={20}>{vn}</BodyVn>
        </Card>
      ))}
    </div>
    <div
      style={{
        marginTop: 48,
        padding: '24px 32px',
        ...panelBarStyle(),
        display: 'flex',
        alignItems: 'center',
        gap: 24,
      }}
    >
      <div style={{ fontFamily: FF_DISPLAY, fontWeight: 800, fontSize: 40, color: C.dark }}>★</div>
      <div>
        <div style={{ fontFamily: FF_ZH, fontSize: 30, fontWeight: 700, color: C.dark }}>
          由雇主與應聘人員共同提交評點制資料
        </div>
        <BodyVn size={22} color={C.dark}>
          Hồ sơ chế độ điểm do người sử dụng lao động & ứng viên cùng nộp.
        </BodyVn>
      </div>
    </div>
  </PageFrame>
);

const Page21: Page = () => (
  <PageFrame theme="paper" chromeRight="03 · 評點制 / ICAN">
    <Eyebrow>03 / Scoring breakdown</Eyebrow>
    <div
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32 }}
    >
      <div>
        <TitleZh size={64}>評點項目及點數</TitleZh>
        <TitleVn size={52}>Các mục đánh giá và điểm số</TitleVn>
      </div>
      <Card
        variant="lime"
        style={{
          padding: '24px 36px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ fontFamily: FF_ZH, fontSize: 24, color: C.dark, fontWeight: 600 }}>
          合計門檻
        </div>
        <div
          style={{
            fontFamily: FF_DISPLAY,
            fontWeight: 800,
            fontSize: 80,
            color: C.dark,
            lineHeight: 1,
            letterSpacing: '-0.04em',
          }}
        >
          70<span style={{ fontSize: 36 }}>點 👑</span>
        </div>
      </Card>
    </div>
    <div
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 64px', marginTop: 40 }}
    >
      <StatRow n="01" zh="學歷" vn="Trình độ học vấn" en="Education" points="5–30" />
      <StatRow n="02" zh="華語語文能力" vn="Tiếng Hoa" en="Mandarin" points="0–30" />
      <StatRow n="03" zh="聘僱薪資" vn="Mức lương" en="Salary" points="10–40" highlight />
      <StatRow n="04" zh="他國語言能力" vn="Ngoại ngữ" en="Foreign Language" points="0–20" />
      <StatRow n="05" zh="工作經驗" vn="Kinh nghiệm" en="Experience" points="0–20" />
      <StatRow n="06" zh="配合政府政策" vn="Tuân thủ chính sách" en="Policies" points="0–20" />
      <StatRow n="07" zh="擔任職務資格" vn="Trình độ vị trí" en="Position" points="0–20" />
      <StatRow n="08" zh="在校成績" vn="Thành tích học tập" en="Academic" points="0–10" />
    </div>
  </PageFrame>
);

const SeniorProfile = ({
  chrome,
  no,
  nameZh,
  nameEn,
  photoHint,
  logoZh,
  logoEn,
  school,
  schoolEn,
  major,
  majorEn,
  level,
  levelEn,
  theme = 'cream',
}: {
  chrome: string;
  no: string;
  nameZh: string;
  nameEn: string;
  photoHint: string;
  logoZh: string;
  logoEn: string;
  school: string;
  schoolEn: string;
  major: string;
  majorEn: string;
  level: string;
  levelEn: string;
  theme?: Theme;
}) => (
  <PageFrame theme={theme} chromeRight={chrome}>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '0.85fr 1.15fr',
        gap: 64,
        alignItems: 'stretch',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <PortraitSlot hint={photoHint} style={{ flex: 1, minHeight: 420 }} />
        <LogoSlot nameZh={logoZh} nameEn={logoEn} style={{ aspectRatio: '16 / 6' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Eyebrow>{no}</Eyebrow>
        <TitleZh size={60}>{nameZh}</TitleZh>
        <TitleVn size={32}>{nameEn}</TitleVn>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginTop: 48 }}>
          {[
            ['School', school, schoolEn, 'default'],
            ['Major', major, majorEn, 'default'],
            ['Level', level, levelEn, 'default'],
            ['Nationality', '越南', 'Việt Nam', 'green'],
          ].map(([label, zh, en, v]) => (
            <Card
              key={label as string}
              variant={v as 'default' | 'green'}
              style={{ padding: 28, background: v === 'default' ? C.surface : undefined }}
            >
              <div
                style={{
                  fontFamily: FF_EN,
                  fontSize: 20,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: v === 'green' ? C.lime : C.muted,
                  fontWeight: 700,
                }}
              >
                {label}
              </div>
              <div
                style={{
                  fontFamily: FF_ZH,
                  fontSize: 30,
                  fontWeight: 700,
                  marginTop: 10,
                  color: v === 'green' ? '#fff' : undefined,
                }}
              >
                {zh}
              </div>
              <BodyVn size={20} color={v === 'green' ? C.lime : undefined}>
                {en}
              </BodyVn>
            </Card>
          ))}
        </div>
        <div
          style={{
            marginTop: 'auto',
            paddingTop: 36,
            fontFamily: FF_EN,
            fontSize: 22,
            letterSpacing: '0.16em',
            color: C.muted,
            fontWeight: 600,
          }}
        >
          艾惜人才 · 肯定未來 · ICAN
        </div>
      </div>
    </div>
  </PageFrame>
);

const Page22: Page = () => (
  <SectionDivider
    num="04"
    chapter="CHAPTER FOUR"
    titleZh="學長姐 現身說法"
    titleVn="Chia sẻ từ các anh chị đi trước"
    bodyZh="已經在台灣工作的他們，怎麼說？"
    bodyVn="Họ – những người đang làm việc tại Đài Loan – nói gì?"
    blob={<Blob size={680} color={C.green} top={-180} left={-160} opacity={0.32} />}
  />
);

const Page23: Page = () => (
  <SeniorProfile
    chrome="04 · 學長姐分享 01"
    no="04 / Senior sharing No.01"
    nameZh="青重 / TRAN THANH TRONG"
    nameEn="Du học sinh chia sẻ"
    photoHint="Portrait — TRAN THANH TRONG, Kaori Thermal"
    logoZh="高力熱能"
    logoEn="Kaori Thermal Technology"
    school="元智大學"
    schoolEn="Yuan Ze University"
    major="資訊工程系"
    majorEn="CNTT"
    level="碩士"
    levelEn="Thạc sĩ"
  />
);

const Page24: Page = () => (
  <PageFrame theme="paper" chromeRight="04 · 學長姐分享 01">
    <Eyebrow>04 / Working at Kaori Thermal</Eyebrow>
    <TitleZh>
      在高力熱能 —
      <br />
      工作狀況分享
    </TitleZh>
    <TitleVn size={52}>Chia sẻ trạng thái công việc tại Kaori Thermal</TitleVn>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '0.6fr 1fr 1fr',
        gap: 24,
        marginTop: 64,
        alignItems: 'stretch',
      }}
    >
      <PortraitSlot
        hint="Work photo 1 — Kaori Thermal workplace scene"
        style={{ aspectRatio: '3 / 4', minHeight: 480 }}
      />
      <PortraitSlot
        hint="Work photo 2 — Kaori Thermal team photo"
        style={{ aspectRatio: '3 / 4', minHeight: 480 }}
      />
      <Card
        variant="hi"
        style={{ padding: 40, display: 'flex', flexDirection: 'column', minHeight: 480 }}
      >
        <div
          style={{
            fontFamily: FF_DISPLAY,
            fontSize: 80,
            color: C.lime,
            lineHeight: 1,
            fontWeight: 800,
          }}
        >
          "
        </div>
        <div
          style={{
            fontFamily: FF_ZH,
            fontSize: 30,
            fontWeight: 600,
            color: '#fff',
            lineHeight: 1.5,
            marginTop: 12,
          }}
        >
          在台灣工作讓我學到很多，公司很照顧外籍員工。
        </div>
        <BodyVn size={22} color={C.lime} style={{ marginTop: 14 }}>
          Làm việc tại Đài Loan giúp tôi học được rất nhiều, công ty rất quan tâm đến nhân viên nước
          ngoài.
        </BodyVn>
        <div
          style={{
            marginTop: 'auto',
            paddingTop: 16,
            fontFamily: FF_EN,
            fontSize: 20,
            color: C.lime,
            fontWeight: 600,
          }}
        >
          — TRAN THANH TRONG
        </div>
      </Card>
    </div>
  </PageFrame>
);

const Page25: Page = () => (
  <SeniorProfile
    chrome="04 · 學長姐分享 02"
    no="04 / Senior sharing No.02"
    nameZh="阮日輝 / NGUYỄN NHẬT HUY"
    nameEn="Du học sinh chia sẻ"
    photoHint="Portrait — NGUYỄN NHẬT HUY, Source Photonics"
    logoZh="索爾思光電"
    logoEn="Source Photonics"
    school="元智大學"
    schoolEn="Yuan Ze University"
    major="電機工程"
    majorEn="Kỹ thuật điện"
    level="大學一年級"
    levelEn="Năm nhất đại học"
  />
);

const Page26: Page = () => (
  <PageFrame theme="paper" chromeRight="04 · 學長姐分享 03">
    <Eyebrow>04 / Senior sharing No.03</Eyebrow>
    <TitleZh>何明潔 / HÀ MINH KIỆT</TitleZh>
    <TitleVn size={52}>Source Photonics · 碩士畢業</TitleVn>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '0.75fr 1.25fr',
        gap: 56,
        marginTop: 56,
        alignItems: 'stretch',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <PortraitSlot
          hint="Portrait — HÀ MINH KIỆT, Source Photonics"
          style={{ flex: 1, minHeight: 380 }}
        />
        <LogoSlot nameZh="索爾思光電" nameEn="Source Photonics" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Card variant="lime" style={{ padding: 48 }}>
          <div
            style={{
              fontFamily: FF_EN,
              fontSize: 24,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: C.dark,
            }}
          >
            STATUS UPDATE
          </div>
          <div
            style={{
              fontFamily: FF_ZH,
              fontSize: 56,
              fontWeight: 900,
              color: C.dark,
              marginTop: 16,
              lineHeight: 1.15,
            }}
          >
            延期在台申請
            <br />
            已完成 ✓
          </div>
          <BodyVn size={26} color={C.dark} style={{ marginTop: 16 }}>
            Đã hoàn tất các thủ tục gia hạn thời gian lưu trú tại Đài Loan.
          </BodyVn>
        </Card>
        <Card variant="hi" style={{ padding: 36 }}>
          <div
            style={{
              fontFamily: FF_DISPLAY,
              fontSize: 56,
              color: C.lime,
              lineHeight: 1,
              fontWeight: 800,
            }}
          >
            "
          </div>
          <div
            style={{
              fontFamily: FF_ZH,
              fontSize: 30,
              fontWeight: 500,
              color: '#fff',
              lineHeight: 1.5,
              marginTop: 8,
            }}
          >
            學歷已取得、申請也完成 — 接下來就是專注在台灣工作的下一階段。
          </div>
          <BodyVn size={22} color={C.lime} style={{ marginTop: 12 }}>
            Hoàn tất việc học và thủ tục – Tiếp theo là tập trung cho giai đoạn làm việc tại Đài
            Loan.
          </BodyVn>
        </Card>
      </div>
    </div>
  </PageFrame>
);

const Page27: Page = () => (
  <SectionDivider
    num="05"
    chapter="CHAPTER FIVE"
    titleZh="職缺介紹"
    titleVn="Giới thiệu cơ hội việc làm"
    bodyZh="正職 / 打工 / 實習 — 一次看個夠"
    bodyVn="Chính thức / Làm thêm / Thực tập – Xem một lần đủ luôn"
    blob={<Blob size={680} color={C.green} bottom={-200} right={-160} opacity={0.32} />}
  />
);

const JobFullTime = ({
  chrome,
  eyebrow,
  titleZh,
  titleVn,
  logoZh,
  logoEn,
  payLabel,
  payValue,
  paySub,
  footer,
  hours,
  hoursVn,
  location,
  locationVn,
  perks,
  theme = 'cream',
}: {
  chrome: string;
  eyebrow: string;
  titleZh: string;
  titleVn: string;
  logoZh: string;
  logoEn: string;
  payLabel: string;
  payValue: string;
  paySub: string;
  footer: string;
  hours: React.ReactNode;
  hoursVn: string;
  location: React.ReactNode;
  locationVn: string;
  perks: [string, string][];
  theme?: Theme;
}) => (
  <PageFrame theme={theme} chromeRight={chrome}>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '0.7fr 1.3fr',
        gap: 56,
        alignItems: 'stretch',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <LogoSlot
          nameZh={logoZh}
          nameEn={logoEn}
          style={{ aspectRatio: '4 / 3', minHeight: 180 }}
        />
        <Card variant="lime" style={{ padding: 28 }}>
          <div
            style={{
              fontFamily: FF_EN,
              fontSize: 20,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: C.dark,
            }}
          >
            {payLabel}
          </div>
          <div
            style={{
              fontFamily: FF_DISPLAY,
              fontSize: 60,
              fontWeight: 800,
              color: C.dark,
              marginTop: 10,
              lineHeight: 1,
              letterSpacing: '-0.03em',
            }}
          >
            {payValue}
          </div>
          <div style={{ fontFamily: FF_ZH, fontSize: 22, color: C.dark, marginTop: 8 }}>
            {paySub}
          </div>
        </Card>
        <div style={{ flex: 1 }} />
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 20,
            letterSpacing: '0.16em',
            color: C.muted,
            fontWeight: 600,
          }}
        >
          {footer}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <TitleZh size={68}>{titleZh}</TitleZh>
        <TitleVn size={44}>{titleVn}</TitleVn>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 48 }}>
          <Card style={{ padding: 28, background: theme === 'paper' ? C.cream : undefined }}>
            <div
              style={{
                fontFamily: FF_EN,
                fontSize: 20,
                color: C.muted,
                letterSpacing: '0.14em',
                fontWeight: 700,
              }}
            >
              HOURS
            </div>
            <div
              style={{
                fontFamily: FF_DISPLAY,
                fontSize: 28,
                fontWeight: 700,
                marginTop: 8,
                lineHeight: 1.3,
              }}
            >
              {hours}
            </div>
            <BodyVn size={20}>{hoursVn}</BodyVn>
          </Card>
          <Card style={{ padding: 28, background: theme === 'paper' ? C.cream : undefined }}>
            <div
              style={{
                fontFamily: FF_EN,
                fontSize: 20,
                color: C.muted,
                letterSpacing: '0.14em',
                fontWeight: 700,
              }}
            >
              LOCATION
            </div>
            <div
              style={{
                fontFamily: FF_ZH,
                fontSize: 26,
                fontWeight: 700,
                marginTop: 8,
                lineHeight: 1.3,
              }}
            >
              {location}
            </div>
            <BodyVn size={20}>{locationVn}</BodyVn>
          </Card>
        </div>
        <div style={{ marginTop: 24 }}>
          <div
            style={{
              fontFamily: FF_ZH,
              fontSize: 26,
              fontWeight: 600,
              color: C.muted,
              marginBottom: 14,
            }}
          >
            優勢 / Ưu điểm
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {perks.map(([zh, vn]) => (
              <Card key={zh} variant="green" style={{ padding: '24px 28px' }}>
                <div style={{ fontFamily: FF_ZH, fontSize: 28, fontWeight: 700, color: '#fff' }}>
                  {zh}
                </div>
                <BodyVn size={20} color={C.lime}>
                  {vn}
                </BodyVn>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  </PageFrame>
);

const Page28: Page = () => (
  <JobFullTime
    chrome="05 · 職缺 01 · 正職"
    eyebrow="05 / Full-time No.01"
    titleZh="外勤技術工程師"
    titleVn="Kỹ sư kỹ thuật hiện trường · Field Technical Engineer"
    logoZh="明曜興業"
    logoEn="Ming Yao Air Condition"
    payLabel="MONTHLY PAY"
    payValue="$35K–38K"
    paySub="+ 獎金 $5K–13K"
    footer="明曜興業 · MING YAO · Công ty TNHH Minh Diệu Hưng Nghiệp"
    hours="08:00 – 17:00"
    hoursVn="Giờ làm việc"
    location={
      <>
        桃園市蘆竹區
        <br />
        中興一街 18 號
      </>
    }
    locationVn="Lô Trúc, Đào Viên"
    perks={[
      ['精進專業技術', 'Nâng cao kỹ thuật chuyên môn'],
      ['拓展人脈關係', 'Mở rộng mối quan hệ'],
    ]}
  />
);

const Page29: Page = () => (
  <JobFullTime
    theme="paper"
    chrome="05 · 職缺 02 · 正職"
    eyebrow="05 / Full-time No.02"
    titleZh="內外場儲備幹部"
    titleVn="Nhân viên dự bị quản lý nhà hàng · Restaurant Management Trainee"
    logoZh="牧羊人集團 · 汪喵星球"
    logoEn="Shepherdtech Group"
    payLabel="MONTHLY PAY"
    payValue="$40K–44K"
    paySub="+ 獎金另計"
    footer="牧羊人集團 · SHEPHERDTECH · Tập đoàn Shepherd"
    hours={
      <>
        11:30 – 21:30
        <br />
        10:00 – 23:00
      </>
    }
    hoursVn="Hai ca làm việc"
    location={
      <>
        台北信義 ATT
        <br />
        新竹竹北遠百
      </>
    }
    locationVn="Đài Bắc / Tân Trúc"
    perks={[
      ['週休二日', 'Nghỉ thứ 7, CN'],
      ['管理職務', 'Vị trí quản lý'],
    ]}
  />
);

const PageKatsuya: Page = () => (
  <JobFullTime
    theme="cream"
    chrome="05 · 職缺 03 · 打工"
    eyebrow="05 / Part-time No.03"
    titleZh="餐飲服務員"
    titleVn="Nhân viên phục vụ nhà hàng · Restaurant Service Crew"
    logoZh="台灣吉豚屋 · Katsuya"
    logoEn="Katsuya Taiwan"
    payLabel="HOURLY PAY"
    payValue="$205/hr"
    paySub="起 · 獎金另計"
    footer="台灣吉豚屋 · KATSUYA · Katsuya Đài Loan"
    hours={
      <>
        早班 06:30 – 15:30
        <br />
        晚班 15:30 – 22:00
        <br />
        假日 06:30 – 22:00
      </>
    }
    hoursVn="Ca linh hoạt 4–8 giờ"
    location={
      <>
        台北市中山區
        <br />
        捷運行天宮站
      </>
    }
    locationVn="Trung Sơn, Đài Bắc"
    perks={[
      ['彈性排班', 'Ca linh hoạt'],
      ['兼職 · 長期穩定', 'Bán thời gian ổn định'],
    ]}
  />
);

const ManufacturingJob = ({
  chrome,
  no,
  companyZh,
  companyEn,
  products,
  productsVn,
  shifts,
  shiftsVn,
  locationLabel,
  location,
  locationVn,
  theme = 'cream',
}: {
  chrome: string;
  no: string;
  companyZh: string;
  companyEn: string;
  products: React.ReactNode;
  productsVn: string;
  shifts: React.ReactNode;
  shiftsVn: string;
  locationLabel: string;
  location: React.ReactNode;
  locationVn: string;
  theme?: Theme;
}) => (
  <PageFrame theme={theme} chromeRight={chrome}>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '0.7fr 1.3fr',
        gap: 56,
        alignItems: 'stretch',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <LogoSlot
          nameZh={companyZh}
          nameEn={companyEn}
          style={{ aspectRatio: '4 / 3', minHeight: 180 }}
        />
        <Card variant="lime" style={{ padding: 28 }}>
          <div
            style={{
              fontFamily: FF_EN,
              fontSize: 20,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: C.dark,
            }}
          >
            MAIN PRODUCTS
          </div>
          <div
            style={{
              fontFamily: FF_ZH,
              fontSize: 26,
              fontWeight: 700,
              color: C.dark,
              marginTop: 10,
              lineHeight: 1.4,
            }}
          >
            {products}
          </div>
          <BodyVn size={20} color={C.dark} style={{ opacity: 0.85, marginTop: 8 }}>
            {productsVn}
          </BodyVn>
        </Card>
        <div style={{ flex: 1 }} />
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 20,
            letterSpacing: '0.16em',
            color: C.muted,
            fontWeight: 600,
          }}
        >
          {companyZh} · {companyEn.toUpperCase()}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Eyebrow>{no}</Eyebrow>
        <TitleZh size={76}>{companyZh}</TitleZh>
        <TitleVn size={44}>{companyEn}</TitleVn>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 48 }}>
          <Card style={{ padding: 28, background: theme === 'paper' ? C.cream : undefined }}>
            <div
              style={{
                fontFamily: FF_EN,
                fontSize: 20,
                color: C.muted,
                letterSpacing: '0.14em',
                fontWeight: 700,
              }}
            >
              SHIFTS
            </div>
            <div
              style={{
                fontFamily: FF_DISPLAY,
                fontSize: 26,
                fontWeight: 700,
                marginTop: 8,
                lineHeight: 1.4,
              }}
            >
              {shifts}
            </div>
            <BodyVn size={20}>{shiftsVn}</BodyVn>
          </Card>
          <Card variant="hi" style={{ padding: 28 }}>
            <div
              style={{
                fontFamily: FF_EN,
                fontSize: 20,
                color: C.lime,
                letterSpacing: '0.14em',
                fontWeight: 700,
              }}
            >
              {locationLabel}
            </div>
            <div
              style={{
                fontFamily: FF_ZH,
                fontSize: 24,
                fontWeight: 700,
                marginTop: 8,
                lineHeight: 1.4,
                color: '#fff',
              }}
            >
              {location}
            </div>
            <BodyVn size={20} color={C.lime}>
              {locationVn}
            </BodyVn>
          </Card>
        </div>
      </div>
    </div>
  </PageFrame>
);

const Page30: Page = () => (
  <ManufacturingJob
    chrome="05 · 職缺 04 · 製造業"
    no="05 / Manufacturing No.04"
    companyZh="緯創資通"
    companyEn="Wistron Corporation"
    products={
      <>
        各類電腦
        <br />
        AI 伺服器與資料中心
      </>
    }
    productsVn="Máy tính, máy chủ AI & TT dữ liệu"
    shifts={
      <>
        日班 08:00 – 17:00
        <br />
        夜班 20:00 – 05:00
      </>
    }
    shiftsVn="Ca ngày / Ca đêm"
    locationLabel="LOCATIONS"
    location={
      <>
        竹北廠 · 智慧二路 1 號
        <br />
        新安廠 · 新竹市東區新安路 5 號
      </>
    }
    locationVn="Nhà máy Zhubei & Hsin-An"
  />
);

const Page31: Page = () => (
  <ManufacturingJob
    theme="paper"
    chrome="05 · 職缺 05 · 製造業"
    no="05 / Manufacturing No.05"
    companyZh="金像電子"
    companyEn="Gold Circuit Electronics"
    products={
      <>
        AI / 高階伺服器板
        <br />
        網路通訊設備板
        <br />
        筆記型電腦
      </>
    }
    productsVn="Bo mạch máy chủ AI / mạng / laptop"
    shifts={
      <>
        日班 08:00 – 20:10
        <br />
        夜班 20:00 – 08:10
      </>
    }
    shiftsVn="Ca ngày / Ca đêm"
    locationLabel="LOCATION"
    location={
      <>
        桃園市中壢區
        <br />
        西園路 113 號
      </>
    }
    locationVn="Quận Zhongli, Đào Viên"
  />
);

const PageInnoLight: Page = () => (
  <ManufacturingJob
    chrome="05 · 職缺 06 · 製造業"
    no="05 / Manufacturing No.06"
    companyZh="旭創光通"
    companyEn="InnoLight Technology"
    products={
      <>
        高速光通訊
        <br />
        收發模組
      </>
    }
    productsVn="Mô-đun thu phát quang tốc độ cao"
    shifts={
      <>
        日班 07:00 – 19:00
        <br />
        夜班 19:00 – 07:00
      </>
    }
    shiftsVn="Ca ngày / Ca đêm"
    locationLabel="LOCATION"
    location={
      <>
        桃園市平鎮區
        <br />
        工業十路 4 號
      </>
    }
    locationVn="Quận Pingzhen, Đào Viên"
  />
);

const Page32: Page = () => (
  <ManufacturingJob
    theme="paper"
    chrome="05 · 職缺 07 · 製造業"
    no="05 / Manufacturing No.07"
    companyZh="華星光通"
    companyEn="LuxNet Corporation"
    products={
      <>
        電子零組件製造業
        <br />
        光通訊雷射
        <br />
        光學次模組
      </>
    }
    productsVn="SX linh kiện điện tử & quang học"
    shifts={
      <>
        日班 07:00 – 19:00
        <br />
        夜班 19:00 – 07:00
      </>
    }
    shiftsVn="Ca ngày / Ca đêm"
    locationLabel="LOCATION"
    location={
      <>
        桃園市中壢區
        <br />
        合江路 6 號
      </>
    }
    locationVn="Quận Zhongli, Đào Viên"
  />
);

const PageGarmin: Page = () => (
  <ManufacturingJob
    chrome="05 · 職缺 08 · 製造業"
    no="05 / Manufacturing No.08"
    companyZh="台灣國際航電"
    companyEn="Garmin Corporation"
    products={
      <>
        智慧手錶與運動穿戴
        <br />
        行車紀錄器產線操作
      </>
    }
    productsVn="Đồng hồ & thiết bị đeo, dây chuyền DVR"
    shifts={
      <>
        日班 08:00 – 17:00
        <br />
        夜班 20:00 – 05:00
      </>
    }
    shiftsVn="Ca ngày / Ca đêm"
    locationLabel="LOCATION"
    location={
      <>
        桃園市中壢區
        <br />
        北園路 24 號
      </>
    }
    locationVn="Quận Zhongli, Đào Viên"
  />
);

const Page34: Page = () => (
  <ManufacturingJob
    theme="paper"
    chrome="05 · 職缺 09 · 製造業"
    no="05 / Manufacturing No.09"
    companyZh="台灣積層"
    companyEn="Taiwan Lamination Industries"
    products={
      <>
        專業軟性包裝材料
        <br />
        食品包裝 · 鋁箔袋
      </>
    }
    productsVn="Vật liệu đóng gói linh hoạt"
    shifts={
      <>
        日班 06:40 – 15:20
        <br />
        中班 17:00 – 01:40
      </>
    }
    shiftsVn="Ca ngày / Ca chiều"
    locationLabel="LOCATION"
    location={
      <>
        桃園市中壢區
        <br />
        新北園路 11 號
      </>
    }
    locationVn="Quận Zhongli, Đào Viên"
  />
);

const Page35: Page = () => (
  <PageFrame theme="lime" chromeRight="05 · 打工 / Part-time">
    <Eyebrow theme="lime">05 / Part-time rules</Eyebrow>
    <TitleZh>僑生打工 三條規定</TitleZh>
    <TitleVn theme="lime" size={52}>
      3 quy định về việc làm thêm dành cho sinh viên quốc tế
    </TitleVn>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 72 }}>
      {[
        ['一定要有\n工作許可證', 'Cần có giấy phép lao động.'],
        ['上課期間\n每週最多 20 小時', 'Tối đa 20 giờ mỗi tuần trong thời gian học.'],
        ['寒暑假\n可以全職', 'Toàn thời gian trong kỳ nghỉ hè và đông.'],
      ].map(([zh, vn]) => (
        <Card key={zh} variant="hi" style={{ padding: 48 }}>
          <div
            style={{
              fontFamily: FF_DISPLAY,
              fontWeight: 800,
              fontSize: 80,
              color: C.lime,
              lineHeight: 1,
              letterSpacing: '-0.04em',
            }}
          >
            !
          </div>
          <div
            style={{
              fontFamily: FF_ZH,
              fontSize: 36,
              fontWeight: 700,
              color: '#fff',
              marginTop: 24,
              lineHeight: 1.3,
              whiteSpace: 'pre-line',
            }}
          >
            {zh}
          </div>
          <BodyVn size={24} color={C.lime} style={{ marginTop: 14 }}>
            {vn}
          </BodyVn>
        </Card>
      ))}
    </div>
  </PageFrame>
);

const Page36: Page = () => (
  <PageFrame theme="cream" chromeRight="艾肯顧問 / ICAN">
    <Eyebrow>ICAN Consulting · 優勢</Eyebrow>
    <TitleZh>艾肯顧問 三大優勢</TitleZh>
    <TitleVn size={52}>Lợi thế của ICAN Consulting</TitleVn>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginTop: 72 }}>
      {[
        ['01', '1 對 1 專人服務', 'Dịch vụ hỗ trợ riêng', 'Personalized Service'],
        ['02', '職缺媒合', 'Kết nối việc làm', 'Job Matching'],
        ['03', '代辦工作證', 'Hỗ trợ làm giấy phép lao động', 'Work Permit Assistance'],
      ].map(([n, zh, vn, en]) => (
        <Card key={n} style={{ padding: 48, background: C.surface }}>
          <div
            style={{
              fontFamily: FF_DISPLAY,
              fontWeight: 800,
              fontSize: 80,
              color: C.green,
              lineHeight: 1,
              letterSpacing: '-0.04em',
            }}
          >
            {n}
          </div>
          <div
            style={{
              fontFamily: FF_ZH,
              fontSize: 36,
              fontWeight: 700,
              marginTop: 24,
              lineHeight: 1.3,
            }}
          >
            {zh}
          </div>
          <BodyVn size={24}>{vn}</BodyVn>
          <div style={{ fontFamily: FF_EN, fontSize: 22, color: C.muted, marginTop: 8 }}>{en}</div>
        </Card>
      ))}
    </div>
  </PageFrame>
);

const Page37: Page = () => (
  <PageFrame theme="cream" chromeRight="艾肯顧問 / ICAN">
    <Eyebrow>ICAN · Full service</Eyebrow>
    <TitleZh>艾肯管理顧問股份有限公司</TitleZh>
    <TitleVn size={52}>I-CAN International Development Co., Ltd.</TitleVn>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 56 }}>
      {[
        ['媒合人才', 'Phù hợp tài năng'],
        ['合法工作保障', 'Bảo đảm việc làm hợp pháp'],
        ['百位專員服務', 'Hàng trăm chuyên gia'],
        ['一對一專人規劃', 'Lập kế hoạch cá nhân 1-1'],
        ['找工作更快速', 'Tìm việc nhanh hơn'],
        ['累積職場經驗', 'Tích lũy kinh nghiệm'],
      ].map(([zh, vn]) => (
        <Card key={zh} style={{ padding: 32 }}>
          <div style={{ fontFamily: FF_DISPLAY, fontWeight: 800, fontSize: 36, color: C.green }}>
            ★
          </div>
          <div style={{ fontFamily: FF_ZH, fontSize: 28, fontWeight: 700, marginTop: 16 }}>
            {zh}
          </div>
          <BodyVn size={22}>{vn}</BodyVn>
        </Card>
      ))}
    </div>
    <div
      style={{
        marginTop: 32,
        padding: '20px 32px',
        background: C.dark,
        borderRadius: 14,
        display: 'flex',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <div style={{ fontFamily: FF_DISPLAY, fontWeight: 800, fontSize: 32, color: C.lime }}>✓</div>
      <div>
        <div style={{ fontFamily: FF_ZH, fontSize: 26, fontWeight: 700, color: '#fff' }}>
          合法營業登記 · 政府核可
        </div>
        <BodyVn size={22} color={C.lime}>
          Đăng ký kinh doanh hợp pháp
        </BodyVn>
      </div>
    </div>
  </PageFrame>
);

const Page38: Page = () => (
  <PageFrame theme="cream" chromeRight="艾肯顧問 · 服務據點">
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <div>
        <Eyebrow>ICAN · Service locations</Eyebrow>
        <TitleZh size={64}>服務據點 — 全台 + 海外</TitleZh>
        <TitleVn size={52}>Cơ sở dịch vụ trong và ngoài Đài Loan</TitleVn>
      </div>
      <Pill>9 OFFICES</Pill>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, marginTop: 48 }}>
      <div>
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: C.green,
            marginBottom: 16,
          }}
        >
          TAIWAN
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            ['桃園所', '蘆竹區文新街 7 號 1F'],
            ['中壢所', '中壢區中園路 165 號'],
            ['新莊所', '中正路 889-5 號'],
            ['土城所', '中央路三段 50 號'],
            ['新竹所', '東大路二段 156 號 10F'],
            ['台中所', '英才路 396 號 4F-3'],
            ['台南所', '永康區自強路 642 號', true],
          ].map(([name, addr, span]) => (
            <Card
              key={name as string}
              style={{
                padding: '20px 24px',
                background: C.surface,
                gridColumn: span ? 'span 2' : undefined,
              }}
            >
              <div style={{ fontFamily: FF_ZH, fontSize: 24, fontWeight: 700, color: C.green }}>
                {name}
              </div>
              <div
                style={{
                  fontFamily: FF_ZH,
                  fontSize: 22,
                  color: C.inkSoft,
                  marginTop: 4,
                  lineHeight: 1.4,
                }}
              >
                {addr}
              </div>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: C.lime,
            marginBottom: 16,
            paddingLeft: 20,
          }}
        >
          OVERSEAS
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            [
              '越南所 · Vietnam',
              'Tầng 6, Tòa Golden Field, 24 Nguyễn Cơ Thạch, Mỹ Đình, Nam Từ Liêm, Hà Nội',
            ],
            ['泰國所 · Chonburi', '211/10 หมู่ที่ 4 ตำบลบ่อวิน อำเภอศรีราชา จังหวัดชลบุรี 20230'],
            ['泰國所 · Prachin Buri', '211/10 หมู่ที่ 4 ตำบลบ่อวิน อำเภอศรีราชา จังหวัดชลบุรี 20230'],
          ].map(([title, addr]) => (
            <Card key={title} variant="hi" style={{ padding: '24px 28px' }}>
              <div style={{ fontFamily: FF_ZH, fontSize: 24, fontWeight: 700, color: C.lime }}>
                {title}
              </div>
              <div
                style={{
                  fontFamily: FF_VN,
                  fontSize: 22,
                  color: 'rgba(255,255,255,0.86)',
                  marginTop: 6,
                  lineHeight: 1.4,
                }}
              >
                {addr}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </PageFrame>
);

const ICAN_CREAM = '#FAF5EB';
const ICAN_GOLD = '#B08A45';
const ICAN_GOLD_SOFT = '#D8C498';
const ICAN_BROWN = '#5A4528';
const ICAN_RED = '#A4122B';
const FF_SERIF = '"Songti TC", "STSong", "PingFang TC", Georgia, serif';
const FF_SCRIPT = '"Snell Roundhand", "Apple Chancery", "Brush Script MT", cursive';

const DottedCorner = ({ style }: { style: React.CSSProperties }) => (
  <div
    aria-hidden
    style={{
      position: 'absolute',
      width: 168,
      height: 132,
      backgroundImage: `radial-gradient(${ICAN_GOLD_SOFT} 2.4px, transparent 2.6px)`,
      backgroundSize: '20px 20px',
      opacity: 0.55,
      pointerEvents: 'none',
      ...style,
    }}
  />
);

const ConsultantColumn = ({
  kind,
  qrHint,
  name,
  tag,
}: {
  kind: string;
  qrHint: string;
  name: string;
  tag: string;
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div
      style={{
        fontFamily: FF_SERIF,
        fontSize: 92,
        fontWeight: 700,
        color: ICAN_BROWN,
        letterSpacing: '0.12em',
        lineHeight: 1,
      }}
    >
      {kind}
    </div>
    <div
      style={{
        marginTop: 34,
        background: '#fff',
        border: `2px solid ${ICAN_GOLD_SOFT}`,
        borderRadius: 18,
        padding: 16,
        boxShadow: '0 18px 40px rgba(120,90,40,0.16)',
      }}
    >
      <ImagePlaceholder hint={qrHint} width={250} height={250} style={{ borderRadius: 8 }} />
    </div>
    <div
      style={{
        fontFamily: FF_SCRIPT,
        fontSize: 76,
        fontStyle: 'italic',
        color: ICAN_GOLD,
        marginTop: 24,
        lineHeight: 1,
      }}
    >
      {name}
    </div>
    <div
      style={{
        marginTop: 18,
        padding: '10px 30px',
        borderRadius: 999,
        background: ICAN_BROWN,
        color: '#FBF3E2',
        fontFamily: FF_ZH,
        fontSize: 24,
        fontWeight: 600,
        letterSpacing: '0.06em',
      }}
    >
      {tag}
    </div>
  </div>
);

const Page39: Page = () => (
  <div style={{ ...fill, background: ICAN_CREAM }}>
    <div
      aria-hidden
      style={{
        position: 'absolute',
        top: 28,
        left: 28,
        right: 28,
        bottom: 92,
        border: `2px solid ${ICAN_GOLD_SOFT}`,
        borderRadius: 20,
        pointerEvents: 'none',
      }}
    />
    <DottedCorner style={{ top: 58, left: 58 }} />
    <DottedCorner style={{ bottom: 128, right: 58 }} />

    <div style={{ position: 'absolute', left: 36, bottom: 92, width: 420, height: 868 }}>
      <ImagePlaceholder
        hint="Rita 打工顧問 去背人像照"
        width={420}
        height={868}
        style={{ width: '100%', height: '100%', borderRadius: 14 }}
      />
    </div>
    <div style={{ position: 'absolute', right: 36, bottom: 92, width: 420, height: 868 }}>
      <ImagePlaceholder
        hint="Hani 正職顧問 去背人像照"
        width={420}
        height={868}
        style={{ width: '100%', height: '100%', borderRadius: 14 }}
      />
    </div>

    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 92,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 480px 0',
      }}
    >
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, width: '100%' }}>
        <div
          aria-hidden
          style={{
            position: 'absolute',
            left: '50%',
            top: 8,
            bottom: 8,
            borderLeft: `1px dashed ${ICAN_GOLD_SOFT}`,
            transform: 'translateX(-50%)',
          }}
        />
        <ConsultantColumn kind="打工" qrHint="Rita 打工 LINE QR Code" name="Rita" tag="貼心服務 · 誠信可靠" />
        <ConsultantColumn kind="正職" qrHint="Hani 正職 LINE QR Code" name="Hani" tag="專業細心 · 值得信賴" />
      </div>
      <div
        style={{
          marginTop: 44,
          fontFamily: FF_ZH,
          fontSize: 30,
          fontWeight: 600,
          color: ICAN_GOLD,
          letterSpacing: '0.1em',
        }}
      >
        ✦ 掃描 QR Code 加入 LINE，立即諮詢 ✦
      </div>
    </div>

    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 72,
        background: ICAN_RED,
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <div style={{ fontFamily: FF_SERIF, fontSize: 32, fontWeight: 700, color: '#fff', letterSpacing: '0.32em' }}>
        艾惜人才　肯定未來
      </div>
    </div>
  </div>
);

const HrReservedRow = ({ label, vn }: { label: string; vn: string }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '16px 20px',
      border: `1px dashed ${C.panelBorder}`,
      borderRadius: 12,
      background: C.surface,
    }}
  >
    <div style={{ width: 12, height: 12, borderRadius: '50%', background: C.green, flexShrink: 0 }} />
    <div>
      <div style={{ fontFamily: FF_ZH, fontSize: 24, fontWeight: 700, color: C.ink }}>{label}</div>
      <div style={{ fontFamily: FF_VN, fontSize: 19, color: C.muted, fontStyle: 'italic' }}>{vn}</div>
    </div>
  </div>
);

const CompanyHrPage = ({
  num,
  companyZh,
  photoHint,
  logoHint,
}: {
  num: string;
  companyZh: string;
  photoHint: string;
  logoHint: string;
}) => (
  <PageFrame theme="cream" chromeRight={`企業宣傳 ${num} · HR`}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <div>
        <Eyebrow>HR Spotlight · 企業宣傳</Eyebrow>
        <TitleZh size={64}>{companyZh}</TitleZh>
        <TitleVn size={40}>Doanh nghiệp đối tác · HR giới thiệu</TitleVn>
      </div>
      <Pill variant="lime">{num} / 03</Pill>
    </div>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '0.82fr 1.18fr',
        gap: 44,
        marginTop: 44,
        alignItems: 'stretch',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <PortraitSlot hint={photoHint} style={{ flex: 1, minHeight: 520 }} />
        <div style={{ fontFamily: FF_ZH, fontSize: 24, fontWeight: 700, color: C.muted, textAlign: 'center' }}>
          HR 照片預留 · Ảnh HR
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Card style={{ padding: 28, display: 'flex', alignItems: 'center', gap: 24 }}>
          <ImagePlaceholder hint={logoHint} width={180} height={88} />
          <div>
            <div style={{ fontFamily: FF_ZH, fontSize: 26, fontWeight: 700 }}>公司 Logo</div>
            <BodyVn size={20} style={{ marginTop: 4 }}>
              Logo công ty
            </BodyVn>
          </div>
        </Card>
        <Card style={{ padding: 32, flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontFamily: FF_EN,
              fontSize: 20,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: C.green,
            }}
          >
            About · 公司簡介
          </div>
          <div style={{ fontFamily: FF_ZH, fontSize: 28, fontWeight: 700, color: C.muted, marginTop: 14 }}>
            （HR 簡介內容預留）
          </div>
          <BodyVn size={20} style={{ marginTop: 6 }}>
            Nội dung giới thiệu do HR bổ sung
          </BodyVn>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 24 }}>
            <HrReservedRow label="主要服務 / 產品" vn="Sản phẩm · Dịch vụ" />
            <HrReservedRow label="招募職缺" vn="Vị trí tuyển dụng" />
            <HrReservedRow label="工作地點" vn="Địa điểm làm việc" />
            <HrReservedRow label="福利 / 制度" vn="Phúc lợi · Chế độ" />
          </div>
        </Card>
      </div>
    </div>
  </PageFrame>
);

const Page43: Page = () => (
  <CompanyHrPage
    num="01"
    companyZh="精力數位股份有限公司"
    photoHint="精力數位 HR 人物照"
    logoHint="精力數位 公司 Logo"
  />
);

const Page44: Page = () => (
  <CompanyHrPage num="02" companyZh="智慧老人" photoHint="智慧老人 HR 人物照" logoHint="智慧老人 公司 Logo" />
);

const Page45: Page = () => (
  <CompanyHrPage num="03" companyZh="機童科技" photoHint="機童科技 HR 人物照" logoHint="機童科技 公司 Logo" />
);

const CompanyBooth = ({ no, nameZh }: { no: string; nameZh: React.ReactNode }) => (
  <Card
    style={{
      padding: 30,
      background: C.surface,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
    }}
  >
    <div
      style={{
        fontFamily: FF_EN,
        fontSize: 20,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: C.green,
      }}
    >
      BOOTH {no}
    </div>
    <div
      style={{
        fontFamily: FF_ZH,
        fontSize: 38,
        fontWeight: 900,
        color: C.ink,
        lineHeight: 1.12,
      }}
    >
      {nameZh}
    </div>
    <div
      style={{
        marginTop: 'auto',
        paddingTop: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: FF_ZH,
        fontSize: 23,
        fontWeight: 700,
        color: C.dark,
      }}
    >
      <span style={{ color: C.green }}>★</span> 用人主管駐點
    </div>
  </Card>
);

const Page40: Page = () => (
  <PageFrame
    theme="lime"
    chromeRight="★ 別錯過 · Đừng bỏ lỡ ★"
    blobs={<Blob size={520} color={C.green} top={-150} right={-120} opacity={0.22} />}
  >
    <div
      style={{
        fontFamily: FF_EN,
        fontSize: 24,
        letterSpacing: '0.24em',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: C.dark,
      }}
    >
      DON'T MISS · OUTSIDE BOOTHS
    </div>
    <div
      style={{
        fontFamily: FF_ZH,
        fontSize: 76,
        fontWeight: 900,
        lineHeight: 1.05,
        marginTop: 14,
        color: C.dark,
      }}
    >
      活動結束別走！
    </div>
    <TitleVn theme="lime" size={32} style={{ marginTop: 10 }}>
      Sau buổi giới thiệu – Đừng vội về nhé!
    </TitleVn>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 32 }}>
      <Card variant="hi" style={{ padding: 32 }}>
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 20,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: C.lime,
          }}
        >
          BOOTH 01
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 14 }}>
          <img src={wportLogo} alt="WPORT" style={{ height: 50, width: 'auto' }} />
          <div style={{ fontFamily: FF_ZH, fontSize: 40, fontWeight: 900, color: '#fff' }}>
            WPORT 職航站
          </div>
        </div>
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            ['履歷健檢 / Khám hồ sơ'],
            ['職缺推薦 / Giới thiệu việc làm'],
            ['註冊指引 / Hướng dẫn đăng ký'],
          ].map(([text]) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  background: C.panelStrong,
                  borderRadius: '50%',
                  flexShrink: 0,
                }}
              />
              <div style={{ fontFamily: FF_ZH, fontSize: 26, fontWeight: 500, color: '#fff' }}>
                {text}
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card style={{ padding: 32, background: C.surface, border: `3px solid ${C.dark}` }}>
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 20,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: C.green,
          }}
        >
          BOOTH 02
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 14 }}>
          <div
            style={{
              width: 52,
              height: 52,
              background: C.dark,
              borderRadius: 10,
              display: 'grid',
              placeItems: 'center',
              color: C.lime,
              fontFamily: FF_DISPLAY,
              fontWeight: 800,
              fontSize: 22,
            }}
          >
            桃
          </div>
          <div
            style={{
              fontFamily: FF_ZH,
              fontSize: 36,
              fontWeight: 900,
              color: C.ink,
              lineHeight: 1.1,
            }}
          >
            桃園就業服務處
          </div>
        </div>
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            '留台諮詢 / Tư vấn lưu trú',
            '就業服務 / Dịch vụ việc làm',
            '法規諮詢 / Hỏi đáp luật pháp',
          ].map((text) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  background: C.green,
                  borderRadius: '50%',
                  flexShrink: 0,
                }}
              />
              <div style={{ fontFamily: FF_ZH, fontSize: 26, fontWeight: 500 }}>{text}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
    <div style={{ marginTop: 28, display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
      <div style={{ fontFamily: FF_ZH, fontSize: 28, fontWeight: 800, color: C.dark }}>
        ★ 上台企業也設攤 · 歡迎直接與用人主管聊聊
      </div>
      <div
        style={{
          fontFamily: FF_VN,
          fontSize: 20,
          fontStyle: 'italic',
          color: C.dark,
          opacity: 0.85,
        }}
      >
        Trò chuyện trực tiếp với quản lý tuyển dụng
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 16 }}>
      <CompanyBooth no="03" nameZh="精力數位" />
      <CompanyBooth no="04" nameZh="智慧老人" />
      <CompanyBooth no="05" nameZh="機童科技" />
    </div>
  </PageFrame>
);

const Page41: Page = () => (
  <PageFrame
    theme="dark"
    chromeRight="06 / 06"
    center
    blobs={
      <>
        <Blob size={720} color={C.green} bottom={-200} left={-160} opacity={0.28} />
        <Blob size={480} color={C.lime} top={-120} right={-100} opacity={0.18} />
      </>
    }
  >
    <div
      style={{
        fontFamily: FF_EN,
        fontSize: 28,
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
        fontWeight: 700,
        color: C.lime,
      }}
    >
      CHAPTER SIX · LIVE
    </div>
    <div
      style={{
        fontFamily: FF_DISPLAY,
        fontWeight: 800,
        fontSize: 360,
        lineHeight: 0.85,
        letterSpacing: '-0.06em',
        color: '#fff',
        marginTop: 32,
      }}
    >
      Q&A
    </div>
    <div style={{ fontFamily: FF_ZH, fontSize: 56, fontWeight: 700, color: '#fff', marginTop: 32 }}>
      現場詢問 — 我們在這裡。
    </div>
    <TitleVn theme="dark" size={36} style={{ marginTop: 16 }}>
      Trực tiếp – Chúng tôi sẵn sàng trả lời.
    </TitleVn>
  </PageFrame>
);

const Page42: Page = () => (
  <PageFrame
    theme="cream"
    chromeRight="END · 問卷回饋"
    center
    foot={<ChromeFoot theme="cream" tagline="WPORT · 職航站 × ICAN · 艾肯顧問" right="wport.me" />}
  >
    <div
      style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80, alignItems: 'center' }}
    >
      <div>
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 26,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: C.green,
          }}
        >
          THANK YOU · CẢM ƠN
        </div>
        <div
          style={{
            fontFamily: FF_ZH,
            fontSize: 120,
            fontWeight: 900,
            lineHeight: 1.05,
            marginTop: 28,
            color: C.ink,
          }}
        >
          感謝您參加
          <br />
          本次說明會。
        </div>
        <TitleVn size={40} style={{ marginTop: 32 }}>
          Cảm ơn bạn đã tham gia buổi giới thiệu hôm nay!
        </TitleVn>
        <div
          style={{
            marginTop: 48,
            padding: '32px 40px',
            background: C.dark,
            color: '#fff',
            borderRadius: 20,
          }}
        >
          <div style={{ fontFamily: FF_ZH, fontSize: 30, fontWeight: 700, lineHeight: 1.4 }}>
            誠摯邀請您掃描 QR Code 填寫問卷
            <br />
            完成填寫者，將有機會獲得<span style={{ color: C.lime }}>超商禮券！</span>
          </div>
          <BodyVn size={22} color={C.lime} style={{ marginTop: 12 }}>
            Hãy quét mã QR để điền khảo sát – Hoàn thành sẽ có cơ hội nhận phiếu quà tặng cửa hàng
            tiện lợi!
          </BodyVn>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <QrSlot hint="問卷 QR Code — feedback survey" />
        <div
          style={{
            fontFamily: FF_EN,
            fontSize: 22,
            letterSpacing: '0.18em',
            color: C.green,
            fontWeight: 700,
            textTransform: 'uppercase',
          }}
        >
          SCAN TO FEEDBACK
        </div>
        <Pill variant="lime">禮券抽獎 · Bốc thăm trúng thưởng</Pill>
      </div>
    </div>
  </PageFrame>
);

export default [
  Page1,
  Page2,
  Page3,
  Page4,
  PageKainan,
  Page5,
  Page6,
  Page7,
  Page8,
  Page10,
  Page11,
  Page12,
  Page15,
  Page16,
  Page18,
  Page19,
  Page20,
  Page21,
  Page22,
  Page26,
  Page27,
  Page28,
  Page29,
  PageKatsuya,
  Page30,
  Page31,
  PageInnoLight,
  Page32,
  PageGarmin,
  Page34,
  Page35,
  Page37,
  Page39,
  Page43,
  Page44,
  Page45,
  Page40,
  Page41,
  Page42,
] satisfies Page[];
