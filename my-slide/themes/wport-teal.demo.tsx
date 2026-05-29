import { type DesignSystem, type Page, useSlidePageNumber } from '@open-slide/core';

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

const colors = {
  muted: '#9A9A9A',
  surface: '#FFFFFF',
  line: '#D7D7D7',
  accentSoft: '#D5F5F2',
  supportBlue: '#305AC1',
};

const frame = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  padding: 120,
  fontFamily: 'var(--osd-font-body)',
  position: 'relative' as const,
};

const Title = ({ children }: { children: React.ReactNode }) => (
  <h1
    style={{
      fontSize: 160,
      fontWeight: 800,
      lineHeight: 1.06,
      letterSpacing: '-0.02em',
      margin: 0,
      color: 'var(--osd-text)',
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    {children}
  </h1>
);

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: 120,
        right: 120,
        bottom: 56,
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 22,
        color: colors.muted,
        letterSpacing: '0.04em',
      }}
    >
      <span>WPORT DESIGN KIT</span>
      <span>{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
    </div>
  );
};

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      fontSize: 24,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--osd-accent)',
      fontWeight: 700,
      fontFamily: 'var(--osd-font-display)',
    }}
  >
    {children}
  </div>
);

const Cover: Page = () => (
  <div style={{ ...frame, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Eyebrow>AI Teaching Portfolio</Eyebrow>
    <Title>Teaching AI with practical impact</Title>
    <p
      style={{
        fontSize: 'var(--osd-size-body)',
        lineHeight: 1.5,
        maxWidth: 1220,
        marginTop: 28,
        color: colors.muted,
      }}
    >
      WPORT teal language applied to academic storytelling: clean structure, consistent tokens, and
      readable hierarchy.
    </p>
    <Footer />
  </div>
);

const Content: Page = () => (
  <div style={frame}>
    <Eyebrow>Core Principles</Eyebrow>
    <h2
      style={{
        margin: '26px 0 0',
        fontSize: 84,
        lineHeight: 1.12,
        letterSpacing: '-0.02em',
        fontWeight: 800,
        fontFamily: 'var(--osd-font-display)',
      }}
    >
      Reusable presentation system
    </h2>
    <div
      style={{
        marginTop: 44,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
      }}
    >
      <div
        style={{
          background: colors.surface,
          border: `1px solid ${colors.line}`,
          borderRadius: 'var(--osd-radius)',
          padding: '28px 30px',
        }}
      >
        <div style={{ fontSize: 26, color: 'var(--osd-accent)', fontWeight: 700 }}>Brand Fidelity</div>
        <div style={{ marginTop: 14, fontSize: 32, lineHeight: 1.45, color: colors.muted }}>
          `#56C7BB` accent, Arial typography, and consistent spacing from the design kit.
        </div>
      </div>
      <div
        style={{
          background: colors.accentSoft,
          border: `1px solid ${colors.line}`,
          borderRadius: 'var(--osd-radius)',
          padding: '28px 30px',
        }}
      >
        <div style={{ fontSize: 26, color: colors.supportBlue, fontWeight: 700 }}>Content Clarity</div>
        <div style={{ marginTop: 14, fontSize: 32, lineHeight: 1.45, color: '#636363' }}>
          Light background and muted text reduce visual noise for teaching-oriented decks.
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

const Closer: Page = () => (
  <div style={{ ...frame, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
    <Eyebrow>Next Step</Eyebrow>
    <h2
      style={{
        margin: '24px 0 0',
        fontSize: 98,
        lineHeight: 1.08,
        letterSpacing: '-0.02em',
        fontWeight: 800,
        fontFamily: 'var(--osd-font-display)',
      }}
    >
      Reuse this theme in
      <br />
      every WPORT deck.
    </h2>
    <p
      style={{
        marginTop: 34,
        fontSize: 34,
        lineHeight: 1.5,
        maxWidth: 1140,
        color: colors.muted,
      }}
    >
      Run /create-slide and choose <strong>wport-teal</strong> to generate new slides with the same
      visual system.
    </p>
    <Footer />
  </div>
);

export default [Cover, Content, Closer] satisfies Page[];
