import { type Page, type SlideMeta, useSlideT } from '@open-slide/core';
import ericPhoto from './assets/eric-tcyac.jpg';
import ntutecLogo from './assets/ntutec-logo-direct.png';
import pitchPropertyPhoto from './assets/pitch-property.jpg';
import pitchTravelPhoto from './assets/pitch-travel.jpg';
import session1on1Photo from './assets/session-1on1.jpg';
import sessionTeamPhoto from './assets/session-team.jpg';
import wportLogo from './assets/wport-logo.png';
import { messages } from './messages';

export const meta: SlideMeta = {
  title: 'WPORT × 台大創創｜青年局提案',
  createdAt: '2026-06-10',
};

export { messages };
export const defaultLocale = 'zh-TW';
export const localeLabels = {
  'zh-TW': '繁體中文',
  en: 'English',
  ja: '日本語',
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

const Footer = ({ num, brand }: { num: string; brand: string }) => (
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
    <span style={{ color: C.text }}>{brand}</span>
    <span>{num} / 11</span>
  </div>
);

const Cover: Page = () => {
  const t = useSlideT();
  return (
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
        {t('cover.eyebrow')}
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
        {t('cover.title.wport')}
        <span style={{ color: C.primary, fontWeight: 'normal', margin: '0 18px' }}>×</span>
        {t('cover.title.ntutec')}
      </h1>
      <p style={{ fontSize: 40, lineHeight: 1.55, marginTop: 56, maxWidth: 1100 }}>
        {t('cover.lead')}
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
};

const Origin: Page = () => {
  const t = useSlideT();
  const brand = t('footer.brand');
  const points = [
    { num: '01', titleKey: 'origin.point.1.title', bodyKey: 'origin.point.1.body' },
    { num: '02', titleKey: 'origin.point.2.title', bodyKey: 'origin.point.2.body' },
    { num: '03', titleKey: 'origin.point.3.title', bodyKey: 'origin.point.3.body' },
  ] as const;

  return (
    <div style={slideBase}>
      <Eyebrow num="01" label={t('origin.eyebrow')} />
      <h2 style={{ fontSize: 60, fontWeight: 'bold', margin: 0, marginBottom: 20 }}>
        {t('origin.title')}
      </h2>
      <p style={{ fontSize: 32, lineHeight: 1.5, color: C.text, maxWidth: 1100, marginBottom: 40 }}>
        {t('origin.lead')}
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
          {points.map((p) => (
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
                <div style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 8 }}>
                  {t(p.titleKey)}
                </div>
                <p style={{ fontSize: 24, lineHeight: 1.5, color: C.text, margin: 0 }}>
                  {t(p.bodyKey)}
                </p>
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
            <div style={{ fontSize: 26, fontWeight: 'bold' }}>{t('origin.caption.name')}</div>
            <div style={{ fontSize: 22, marginTop: 4 }}>{t('origin.caption.role')}</div>
          </div>
        </div>
      </div>

      <Footer num="02" brand={brand} />
    </div>
  );
};

const Positioning: Page = () => {
  const t = useSlideT();
  const brand = t('footer.brand');
  const cards = [
    {
      labelKey: 'positioning.traditional.label',
      titleKey: 'positioning.traditional.title',
      itemKeys: [
        'positioning.traditional.item.1',
        'positioning.traditional.item.2',
        'positioning.traditional.item.3',
        'positioning.traditional.item.4',
      ],
      featured: false,
    },
    {
      labelKey: 'positioning.program.label',
      titleKey: 'positioning.program.title',
      itemKeys: [
        'positioning.program.item.1',
        'positioning.program.item.2',
        'positioning.program.item.3',
        'positioning.program.item.4',
      ],
      featured: true,
    },
  ] as const;

  return (
    <div style={slideBase}>
      <Eyebrow num="02" label={t('positioning.eyebrow')} />
      <h2 style={{ fontSize: 72, fontWeight: 'bold', margin: 0, marginBottom: 20 }}>
        {t('positioning.title')}
      </h2>
      <p style={{ fontSize: 30, lineHeight: 1.5, maxWidth: 1300, marginBottom: 40 }}>
        {t('positioning.lead')}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
        {cards.map((card) => (
          <div
            key={card.titleKey}
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
              {t(card.labelKey)}
            </div>
            <h3 style={{ fontSize: 40, fontWeight: 'bold', marginTop: 0, marginBottom: 28 }}>
              {t(card.titleKey)}
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {card.itemKeys.map((itemKey) => (
                <li
                  key={itemKey}
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
                  <span>{t(itemKey)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Footer num="03" brand={brand} />
    </div>
  );
};

const Stats: Page = () => {
  const t = useSlideT();
  const brand = t('footer.brand');
  const stats = [
    {
      num: '3',
      unitKey: 'stats.sessions.unit',
      labelKey: 'stats.sessions.label',
      subKey: 'stats.sessions.sub',
    },
    {
      num: '9',
      unitKey: 'stats.startups.unit',
      labelKey: 'stats.startups.label',
      subKey: 'stats.startups.sub',
    },
    {
      num: '4',
      unitKey: 'stats.sectors.unit',
      labelKey: 'stats.sectors.label',
      subKey: 'stats.sectors.sub',
    },
  ] as const;

  return (
    <div style={slideBase}>
      <Eyebrow num="03" label={t('stats.eyebrow')} />
      <h2 style={{ fontSize: 72, fontWeight: 'bold', margin: 0, marginBottom: 20 }}>
        {t('stats.title')}
      </h2>
      <p style={{ fontSize: 30, lineHeight: 1.5, marginBottom: 60 }}>{t('stats.lead')}</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: `1px solid ${C.border}`,
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.labelKey}
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
              <span
                style={{ fontSize: 48, fontWeight: 'normal', color: C.textMuted, marginLeft: 12 }}
              >
                {t(s.unitKey)}
              </span>
            </div>
            <div style={{ fontSize: 28, fontWeight: 'bold', marginTop: 24, marginBottom: 8 }}>
              {t(s.labelKey)}
            </div>
            <div style={{ fontSize: 22, color: C.textMuted, lineHeight: 1.5 }}>{t(s.subKey)}</div>
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
        {t('stats.footnote.prefix')}{' '}
        <span style={{ color: C.primary, fontWeight: 'bold' }}>
          {t('stats.footnote.highlight')}
        </span>{' '}
        {t('stats.footnote.suffix')}
      </p>

      <Footer num="04" brand={brand} />
    </div>
  );
};

const Timeline: Page = () => {
  const t = useSlideT();
  const brand = t('footer.brand');
  const columns = [
    {
      date: '2026 / 03 / 17',
      num: '01',
      done: true,
      companies: [
        { name: '錫諾系統', topicKey: 'timeline.s1.c1.topic' },
        { name: '強捷科技', topicKey: 'timeline.s1.c2.topic' },
      ],
    },
    {
      date: '2026 / 04 / 27',
      num: '02',
      done: true,
      companies: [
        { name: '智遊旅程', topicKey: 'timeline.s2.c1.topic' },
        { name: '屋瓦資產', topicKey: 'timeline.s2.c2.topic' },
      ],
    },
    {
      date: '2026 / 05 / 19',
      num: '03',
      done: true,
      companies: [
        { name: '斐闊', topicKey: 'timeline.s3.c1.topic' },
        { name: '原騰數位', topicKey: 'timeline.s3.c2.topic' },
      ],
    },
    {
      date: '2026 / 06 / 09',
      num: '04',
      done: false,
      companies: [
        { name: '熊熊幹大事', topicKey: 'timeline.s4.c1.topic' },
        { name: '凱翔環球', topicKey: 'timeline.s4.c2.topic' },
        { name: '米諾智醫', topicKey: 'timeline.s4.c3.topic' },
      ],
    },
  ] as const;

  return (
    <div style={slideBase}>
      <Eyebrow num="04" label={t('timeline.eyebrow')} />
      <h2 style={{ fontSize: 72, fontWeight: 'bold', margin: 0, marginBottom: 20 }}>
        {t('timeline.title')}
      </h2>
      <p style={{ fontSize: 30, lineHeight: 1.5, marginBottom: 56 }}>{t('timeline.lead')}</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: `1px solid ${C.border}`,
        }}
      >
        {columns.map((col, i) => (
          <div
            key={col.num}
            style={{
              padding: '32px 28px 0 0',
              borderRight: i < 3 ? `1px solid ${C.border}` : 'none',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{ fontSize: 22, color: C.textMuted, letterSpacing: '0.08em', marginBottom: 8 }}
            >
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
              {t(col.done ? 'timeline.status.done' : 'timeline.status.planned')}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '28px 0 0 0' }}>
              {col.companies.map((c, j) => (
                <li
                  key={c.name}
                  style={{
                    fontSize: 24,
                    lineHeight: 1.4,
                    padding: '12px 0',
                    borderBottom: j < col.companies.length - 1 ? `1px solid ${C.border}` : 'none',
                  }}
                >
                  <div style={{ fontWeight: 600 }}>{c.name}</div>
                  <div style={{ fontSize: 20, color: C.textMuted, marginTop: 4 }}>
                    {t(c.topicKey)}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Footer num="05" brand={brand} />
    </div>
  );
};

const FieldPhotos: Page = () => {
  const t = useSlideT();
  const brand = t('footer.brand');
  const captions = [
    'field-photos.caption.1',
    'field-photos.caption.2',
    'field-photos.caption.3',
    'field-photos.caption.4',
  ] as const;

  return (
    <div style={slideBase}>
      <Eyebrow num="05" label={t('field-photos.eyebrow')} />
      <h2 style={{ fontSize: 60, fontWeight: 'bold', margin: 0, marginBottom: 20 }}>
        {t('field-photos.title')}
      </h2>
      <p style={{ fontSize: 30, lineHeight: 1.5, marginBottom: 40 }}>{t('field-photos.lead')}</p>

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
            {t(captions[0])}
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
            {t(captions[1])}
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
            {t(captions[2])}
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
            {t(captions[3])}
          </div>
        </div>
      </div>

      <Footer num="06" brand={brand} />
    </div>
  );
};

const CompanyRow = ({
  idx,
  name,
  topic,
  uniform,
  capital,
  uniformLabel,
  capitalLabel,
}: {
  idx: string;
  name: string;
  topic: string;
  uniform: string;
  capital: string;
  uniformLabel: string;
  capitalLabel: string;
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
      <span style={{ color: C.textMuted, marginRight: 8 }}>{uniformLabel}</span>
      {uniform}
    </div>
    <div style={{ fontSize: 22, fontWeight: 500, textAlign: 'right' }}>
      <span style={{ color: C.textMuted, marginRight: 8 }}>{capitalLabel}</span>
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

const CompaniesPart1: Page = () => {
  const t = useSlideT();
  const brand = t('footer.brand');
  const uniformLabel = t('companies.uniform-label');
  const capitalLabel = t('companies.capital-label');

  return (
    <div style={slideBase}>
      <Eyebrow num="06" label={t('companies.eyebrow.1')} />
      <h2 style={{ fontSize: 56, fontWeight: 'bold', margin: 0, marginBottom: 40 }}>
        {t('companies.part1.title')}
      </h2>

      <div style={{ marginBottom: 32 }}>
        <SessionHead
          session={t('companies.session.1')}
          date="2026 / 03 / 17"
          tag={t('companies.tag.1')}
        />
        <CompanyRow
          idx="01"
          name="錫諾系統有限公司"
          topic={t('companies.c1.topic')}
          uniform="28201077"
          capital="NT$ 5,000,000"
          uniformLabel={uniformLabel}
          capitalLabel={capitalLabel}
        />
        <CompanyRow
          idx="02"
          name="強捷科技股份有限公司"
          topic={t('companies.c2.topic')}
          uniform="94048999"
          capital="NT$ 2,000,000"
          uniformLabel={uniformLabel}
          capitalLabel={capitalLabel}
        />
      </div>

      <div>
        <SessionHead
          session={t('companies.session.2')}
          date="2026 / 04 / 27"
          tag={t('companies.tag.2')}
        />
        <CompanyRow
          idx="03"
          name="智遊旅程股份有限公司"
          topic={t('companies.c3.topic')}
          uniform="90560806"
          capital="NT$ 16,800,000"
          uniformLabel={uniformLabel}
          capitalLabel={capitalLabel}
        />
        <CompanyRow
          idx="04"
          name="屋瓦資產管理有限公司"
          topic={t('companies.c4.topic')}
          uniform="94186325"
          capital="NT$ 1,000,000"
          uniformLabel={uniformLabel}
          capitalLabel={capitalLabel}
        />
      </div>

      <Footer num="07" brand={brand} />
    </div>
  );
};

const CompaniesPart2: Page = () => {
  const t = useSlideT();
  const brand = t('footer.brand');
  const uniformLabel = t('companies.uniform-label');
  const capitalLabel = t('companies.capital-label');

  return (
    <div style={slideBase}>
      <Eyebrow num="06" label={t('companies.eyebrow.2')} />
      <h2 style={{ fontSize: 56, fontWeight: 'bold', margin: 0, marginBottom: 40 }}>
        {t('companies.part2.title')}
      </h2>

      <div style={{ marginBottom: 32 }}>
        <SessionHead
          session={t('companies.session.3')}
          date="2026 / 05 / 19"
          tag={t('companies.tag.3')}
        />
        <CompanyRow
          idx="05"
          name="斐闊有限公司"
          topic={t('companies.c5.topic')}
          uniform="60668360"
          capital="NT$ 5,000"
          uniformLabel={uniformLabel}
          capitalLabel={capitalLabel}
        />
        <CompanyRow
          idx="06"
          name="原騰數位科技有限公司"
          topic={t('companies.c6.topic')}
          uniform="69638309"
          capital="NT$ 100,000"
          uniformLabel={uniformLabel}
          capitalLabel={capitalLabel}
        />
      </div>

      <div>
        <SessionHead
          session={t('companies.session.4')}
          date="2026 / 06 / 09"
          tag={t('companies.tag.4')}
        />
        <CompanyRow
          idx="07"
          name="熊熊幹大事股份有限公司"
          topic={t('companies.c7.topic')}
          uniform="94267380"
          capital="NT$ 1,000,000"
          uniformLabel={uniformLabel}
          capitalLabel={capitalLabel}
        />
        <CompanyRow
          idx="08"
          name="凱翔環球股份有限公司"
          topic={t('companies.c8.topic')}
          uniform="94074089"
          capital="NT$ 10,000,000"
          uniformLabel={uniformLabel}
          capitalLabel={capitalLabel}
        />
        <CompanyRow
          idx="09"
          name="米諾智醫股份有限公司"
          topic={t('companies.c9.topic')}
          uniform="95465020"
          capital="NT$ 2,000,000"
          uniformLabel={uniformLabel}
          capitalLabel={capitalLabel}
        />
      </div>

      <Footer num="08" brand={brand} />
    </div>
  );
};

const ValueProposition: Page = () => {
  const t = useSlideT();
  const brand = t('footer.brand');
  const cards = [
    { labelKey: 'value-proposition.card.1.label', bodyKey: 'value-proposition.card.1.body' },
    { labelKey: 'value-proposition.card.2.label', bodyKey: 'value-proposition.card.2.body' },
    { labelKey: 'value-proposition.card.3.label', bodyKey: 'value-proposition.card.3.body' },
  ] as const;

  return (
    <div style={{ ...slideBase, justifyContent: 'center' }}>
      <Eyebrow num="07" label={t('value-proposition.eyebrow')} />

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
          {t('value-proposition.line1.prefix')}
          <span style={{ color: C.primary }}>{t('value-proposition.line1.highlight')}</span>
          {t('value-proposition.line1.suffix')}
        </div>
        <div>
          {t('value-proposition.line2.prefix')}
          <span style={{ color: C.primary }}>{t('value-proposition.line2.highlight')}</span>
          {t('value-proposition.line2.suffix')}
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
        {cards.map((item) => (
          <div key={item.labelKey}>
            <div
              style={{
                fontSize: 22,
                color: C.textMuted,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              {t(item.labelKey)}
            </div>
            <p style={{ fontSize: 26, lineHeight: 1.55, margin: 0 }}>{t(item.bodyKey)}</p>
          </div>
        ))}
      </div>

      <Footer num="09" brand={brand} />
    </div>
  );
};

const VCCriteria: Page = () => {
  const t = useSlideT();
  const brand = t('footer.brand');
  const criteria = [
    {
      num: '01',
      titleKey: 'vccriteria.c1.title',
      en: 'Scalability & Why Now',
      summaryKey: 'vccriteria.c1.summary',
    },
    {
      num: '02',
      titleKey: 'vccriteria.c2.title',
      en: 'Cap Table & ESOP',
      summaryKey: 'vccriteria.c2.summary',
    },
    {
      num: '03',
      titleKey: 'vccriteria.c3.title',
      en: 'Due Diligence Ready',
      summaryKey: 'vccriteria.c3.summary',
    },
    {
      num: '04',
      titleKey: 'vccriteria.c4.title',
      en: 'Financial Discipline',
      summaryKey: 'vccriteria.c4.summary',
    },
    {
      num: '05',
      titleKey: 'vccriteria.c5.title',
      en: 'Unit Economics & Moat',
      summaryKey: 'vccriteria.c5.summary',
    },
  ] as const;

  return (
    <div style={slideBase}>
      <Eyebrow num="08" label={t('vccriteria.eyebrow')} />
      <h2 style={{ fontSize: 56, fontWeight: 'bold', margin: 0, marginBottom: 20 }}>
        {t('vccriteria.title')}
      </h2>
      <p style={{ fontSize: 28, lineHeight: 1.5, marginBottom: 40 }}>{t('vccriteria.lead')}</p>

      <div style={{ borderTop: `1px solid ${C.border}` }}>
        {criteria.map((c) => (
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
              <div style={{ fontSize: 26, fontWeight: 'bold' }}>{t(c.titleKey)}</div>
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
            <div style={{ fontSize: 24, lineHeight: 1.5 }}>{t(c.summaryKey)}</div>
          </div>
        ))}
      </div>

      <Footer num="10" brand={brand} />
    </div>
  );
};

const Closing: Page = () => {
  const t = useSlideT();

  return (
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
        {t('closing.eyebrow')}
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
        {t('closing.title.line1')}
        <br />
        {t('closing.title.mid')}
        <span style={{ color: C.primary }}>{t('closing.title.highlight')}</span>
        {t('closing.title.line2')}
      </h2>

      <p style={{ fontSize: 32, lineHeight: 1.65, marginTop: 56, maxWidth: 1300 }}>
        {t('closing.lead')}
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
        <span>{t('closing.footer')}</span>
      </div>
    </div>
  );
};

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
