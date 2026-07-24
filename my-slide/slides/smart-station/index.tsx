import type { Page, SlideMeta } from '@open-slide/core';
import type { ReactNode } from 'react';
import audaciousLogo from './assets/audacious-pathways-logo-light.png';
import david from './assets/david.png';
import eric from './assets/eric.png';
import gugu from './assets/gugu.png';
import logoIcon from './assets/logo-icon.png';

const TALENT_HUB_EVENT_URL =
  'https://hypelink.app/@wport/events/wport-talent-hub-3?utm_source=university';
const SMART_STATION_VENUE_URL = 'https://maps.app.goo.gl/WKPHvWLCd4h9V2UTA';
const ERIC_COVER_PHOTO =
  'https://res.cloudinary.com/dyebbsckc/image/upload/f_auto,q_auto:good,w_1200,c_limit/v1783409274/wport-blog/wport-cli-cover.jpg';

/** Instagram / FB feed 4:5 — fits inside 1920×1080 canvas */
const BANNER_W = 864;
const BANNER_H = 1080;

export const meta: SlideMeta = {
  title: '聰電站 · 講座橫幅',
  createdAt: '2026-06-05T16:51:05.525Z',
};

const SHARED_CSS = `
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700;800&family=Noto+Sans+TC:wght@500;700;900&family=Space+Grotesk:wght@600;700&display=swap');
.cong-root {
  --teal: #7ec8c8;
  --teal-bright: #79e6da;
  --teal-soft: #a9dcdc;
  --teal-deep: #2a6b6e;
  --ink: #eef5f6;
  --ink-dim: rgba(226, 240, 241, 0.78);
  --display: "Space Grotesk", "Noto Sans TC", sans-serif;
  --tc: "Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif;
}
.cong-root .banner {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  container-type: size;
  container-name: bn;
  font-family: var(--tc);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
}
.cong-root .banner * { box-sizing: border-box; }
.cong-root .bn-logo { display: block; object-fit: contain; }
.cong-root .bn-photo { background: #0b1a28; object-fit: cover; object-position: center 22%; }
.cong-root .bn-photo--eric { object-position: 52% 32%; }

/* ─── 4:5 tech portrait ─── */
.cong-root .bn-p {
  background:
    radial-gradient(120% 70% at 50% 0%, rgba(126, 200, 200, 0.22) 0%, transparent 55%),
    radial-gradient(90% 55% at 100% 80%, rgba(42, 107, 110, 0.35) 0%, transparent 55%),
    linear-gradient(165deg, #0a1726 0%, #0c2236 48%, #07131e 100%);
}
.cong-root .bn-p::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(126, 200, 200, 0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(126, 200, 200, 0.055) 1px, transparent 1px);
  background-size: 9cqw 9cqw;
  -webkit-mask-image: radial-gradient(100% 80% at 50% 20%, #000 0%, transparent 72%);
  mask-image: radial-gradient(100% 80% at 50% 20%, #000 0%, transparent 72%);
  pointer-events: none;
}
.cong-root .bn-p::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 0.55cqw;
  background: linear-gradient(90deg, var(--teal-bright), rgba(126, 200, 200, 0) 70%);
  pointer-events: none;
}
.cong-root .bn-p.bn-p--clean::after { display: none; }
.cong-root .bn-p .p-wrap {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5cqw 6cqw 4.5cqw;
  gap: 2.2cqw;
  overflow: hidden;
}
.cong-root .bn-p .p-brand {
  display: flex;
  align-items: center;
  gap: 1.8cqw;
  flex: 0 0 auto;
  min-width: 0;
}
.cong-root .bn-p .p-brand .bn-logo {
  width: 7.8cqw;
  height: 7.8cqw;
  flex: 0 0 auto;
}
.cong-root .bn-p .p-wordmark {
  display: flex;
  flex-direction: column;
  line-height: 1;
  min-width: 0;
}
.cong-root .bn-p .p-wordmark b {
  font-size: 4.4cqw;
  font-weight: 900;
  letter-spacing: 0.14em;
}
.cong-root .bn-p .p-wordmark span {
  font-family: var(--display);
  font-size: 2.4cqw;
  font-weight: 600;
  letter-spacing: 0.36em;
  color: var(--teal);
  margin-top: 0.5em;
}
.cong-root .bn-p .p-x {
  font-family: var(--display);
  font-size: 3.2cqw;
  font-weight: 700;
  color: var(--teal-soft);
  opacity: 0.85;
  line-height: 1;
  flex: 0 0 auto;
}
.cong-root .bn-p .bn-logo--partner {
  width: auto;
  height: 8cqw;
  max-width: 30cqw;
  object-fit: contain;
  object-position: left center;
  flex: 0 0 auto;
}
.cong-root .bn-p .p-head {
  display: flex;
  flex-direction: column;
  gap: 1.8cqw;
  flex: 0 0 auto;
  min-width: 0;
}
.cong-root .bn-p .p-chip {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 1.2cqw;
  padding: 1.1cqw 2.6cqw;
  border: 1px solid rgba(126, 200, 200, 0.5);
  border-radius: 999px;
  font-size: 3.2cqw;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--teal-soft);
  background: rgba(126, 200, 200, 0.08);
  white-space: nowrap;
}
.cong-root .bn-p .p-chip i {
  width: 1.5cqw;
  height: 1.5cqw;
  border-radius: 50%;
  background: var(--teal-bright);
  box-shadow: 0 0 1.4cqw var(--teal-bright);
}
.cong-root .bn-p .p-title {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.04em;
}
.cong-root .bn-p .p-title span {
  font-size: 8.6cqw;
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: 0.01em;
}
.cong-root .bn-p .p-title--compact span {
  font-size: 6.6cqw;
}
.cong-root .bn-p .p-title em {
  font-style: normal;
  color: var(--teal);
}
.cong-root .bn-p .p-kicker {
  font-family: var(--display);
  font-size: 2.8cqw;
  font-weight: 600;
  letter-spacing: 0.24em;
  color: var(--teal);
  text-transform: uppercase;
}
.cong-root .bn-p .p-rule {
  width: 11cqw;
  height: 0.5cqw;
  background: var(--teal);
}

/* Photo slot shrinks; name/title size against the banner, not the mid band */
.cong-root .bn-p .p-cast {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5cqw;
  flex: 1 1 0;
  min-height: 0;
  overflow: hidden;
}
.cong-root .bn-p .p-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4cqw;
  height: 100%;
  max-height: 100%;
  width: 38cqw;
  flex: 0 1 auto;
  min-width: 0;
  min-height: 0;
}
.cong-root .bn-p .p-card--solo {
  width: 48cqw;
}
.cong-root .bn-p .p-ring-slot {
  flex: 1 1 0;
  min-height: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  container-type: size;
  overflow: hidden;
}
.cong-root .bn-p .p-ring {
  position: relative;
  flex: 0 0 auto;
  width: min(100cqw, 100cqh);
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 0.45cqw;
  overflow: hidden;
  background: conic-gradient(from 210deg, var(--teal-bright), var(--teal-deep), var(--teal));
  box-shadow: 0 1cqw 2.4cqw rgba(0,0,0,0.4), 0 0 2.8cqw rgba(126,200,200,0.14);
}
.cong-root .bn-p .p-ring .bn-photo {
  display: block;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
}
.cong-root .bn-p .p-name {
  font-family: var(--display);
  font-size: 5.8cqw;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.1;
  flex: 0 0 auto;
}
.cong-root .bn-p .p-card--solo .p-name {
  font-size: 6.6cqw;
}
.cong-root .bn-p .p-role {
  font-size: 3.5cqw;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--teal);
  text-align: center;
  line-height: 1.2;
  flex: 0 0 auto;
}
.cong-root .bn-p .p-card--solo .p-role {
  font-size: 3.8cqw;
}

.cong-root .bn-p .p-ports {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2cqw;
  flex: 1 1 0;
  min-height: 0;
  width: 100%;
  overflow: hidden;
  container-type: size;
}
.cong-root .bn-p .p-port {
  position: relative;
  width: min(42cqw, 72cqh);
  flex: 0 1 auto;
  min-width: 0;
  max-height: 100%;
}
.cong-root .bn-p .p-portframe {
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  max-height: 100%;
  border-radius: 2cqw;
  overflow: hidden;
  border: 1px solid rgba(126, 200, 200, 0.4);
  box-shadow: 0 1.4cqw 2.8cqw rgba(0,0,0,0.45);
}
.cong-root .bn-p .p-portframe .bn-photo {
  width: 100%;
  height: 100%;
  display: block;
}
.cong-root .bn-p .p-plate {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  padding: 4cqw 1.8cqw 1.6cqw;
  background: linear-gradient(transparent, rgba(6, 12, 20, 0.94) 55%);
}
.cong-root .bn-p .p-plate b {
  display: block;
  font-family: var(--display);
  font-size: 5.2cqw;
  font-weight: 700;
}
.cong-root .bn-p .p-plate span {
  display: block;
  font-size: 3.2cqw;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--teal);
  margin-top: 0.3cqw;
}

.cong-root .bn-p .p-meta {
  display: flex;
  flex-direction: column;
  gap: 1.5cqw;
  width: 100%;
  flex: 0 0 auto;
  padding: 2.4cqw 2.8cqw;
  border-radius: 2.4cqw;
  background: rgba(126, 200, 200, 0.1);
  border: 1px solid rgba(126, 200, 200, 0.35);
}
.cong-root .bn-p .p-metarow {
  display: flex;
  align-items: flex-start;
  gap: 1.6cqw;
  font-size: 4.4cqw;
  line-height: 1.35;
  font-weight: 600;
}
.cong-root .bn-p .p-metarow svg {
  width: 4.6cqw;
  height: 4.6cqw;
  flex: 0 0 auto;
  margin-top: 0.12em;
  fill: none;
  stroke: var(--teal);
  stroke-width: 1.8;
}
.cong-root .bn-p .p-metarow b {
  font-family: var(--display);
  font-weight: 700;
  letter-spacing: 0.02em;
}
.cong-root .bn-p .p-metarow .dim {
  color: var(--ink-dim);
  font-weight: 500;
  font-size: 4cqw;
}
.cong-root .bn-p .p-metarow .place {
  font-size: 4cqw;
  font-weight: 700;
  color: var(--ink);
  line-height: 1.35;
}
.cong-root .bn-p .p-num {
  position: absolute;
  right: 1.5cqw;
  top: 0;
  font-family: var(--display);
  font-weight: 700;
  font-size: 36cqw;
  line-height: 1;
  color: rgba(126, 200, 200, 0.055);
  letter-spacing: -0.04em;
  pointer-events: none;
  user-select: none;
  z-index: 1;
}

/* ─── 4:5 cute portrait (page 05) ─── */
.cong-root .bn-cute {
  --ink: #3a2f45;
  --ink-dim: #6b5d78;
  --accent: #ff7eb6;
  --accent-2: #7ec8c8;
  --card: #fffdf8;
  background:
    radial-gradient(80% 50% at 12% 8%, rgba(255, 186, 214, 0.55) 0%, transparent 55%),
    radial-gradient(70% 45% at 92% 18%, rgba(167, 230, 220, 0.5) 0%, transparent 50%),
    radial-gradient(60% 40% at 70% 92%, rgba(255, 214, 160, 0.35) 0%, transparent 55%),
    linear-gradient(165deg, #fff6fb 0%, #f3fbff 48%, #fff8ef 100%);
  color: var(--ink);
  font-family: "M PLUS Rounded 1c", "Noto Sans TC", sans-serif;
}
.cong-root .bn-cute::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 126, 182, 0.14) 1.1cqw, transparent 1.2cqw);
  background-size: 7.5cqw 7.5cqw;
  background-position: 0 0;
  opacity: 0.55;
  pointer-events: none;
}
.cong-root .bn-cute .c-wrap {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5.5cqw 6cqw 5cqw;
  gap: 2.4cqw;
  overflow: hidden;
}
.cong-root .bn-cute .c-brand {
  display: flex;
  align-items: center;
  gap: 2cqw;
  flex: 0 0 auto;
}
.cong-root .bn-cute .c-brand .bn-logo {
  width: 9cqw;
  height: 9cqw;
  border-radius: 50%;
  box-shadow: 0 0.6cqw 0 #ffd0e4, 0 1.2cqw 2cqw rgba(255, 126, 182, 0.25);
}
.cong-root .bn-cute .c-wordmark b {
  display: block;
  font-size: 5cqw;
  font-weight: 800;
  letter-spacing: 0.08em;
}
.cong-root .bn-cute .c-wordmark span {
  display: inline-block;
  margin-top: 0.55em;
  padding: 0.35cqw 1.6cqw;
  border-radius: 999px;
  background: #ffe3f0;
  color: var(--accent);
  font-size: 2.5cqw;
  font-weight: 800;
  letter-spacing: 0.2em;
}
.cong-root .bn-cute .c-title {
  margin: 0;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.12em;
}
.cong-root .bn-cute .c-title span {
  font-size: 8.4cqw;
  font-weight: 800;
  line-height: 1.18;
  letter-spacing: 0.01em;
}
.cong-root .bn-cute .c-title em {
  font-style: normal;
  color: var(--accent);
}
.cong-root .bn-cute .c-cast {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5cqw;
  flex: 1 1 0;
  min-height: 0;
  overflow: hidden;
}
.cong-root .bn-cute .c-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4cqw;
  height: 100%;
  max-height: 100%;
  width: 38cqw;
  min-width: 0;
  min-height: 0;
}
.cong-root .bn-cute .c-sticker-slot {
  flex: 1 1 0;
  min-height: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  container-type: size;
  overflow: hidden;
}
.cong-root .bn-cute .c-sticker {
  width: min(100cqw, 100cqh);
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 1.1cqw;
  background: #fff;
  box-shadow:
    0 0.5cqw 0 #ffd6ea,
    0 1.4cqw 2.6cqw rgba(90, 60, 100, 0.14);
  overflow: hidden;
  flex: 0 0 auto;
}
.cong-root .bn-cute .c-sticker .bn-photo {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  display: block;
}
.cong-root .bn-cute .c-name {
  font-size: 5.8cqw;
  font-weight: 800;
  line-height: 1.1;
  flex: 0 0 auto;
}
.cong-root .bn-cute .c-role {
  font-size: 3.4cqw;
  font-weight: 700;
  color: var(--accent);
  background: #ffe8f2;
  padding: 0.55cqw 2cqw;
  border-radius: 999px;
  line-height: 1.2;
  flex: 0 0 auto;
}
.cong-root .bn-cute .c-meta {
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5cqw;
  width: 100%;
  padding: 2.6cqw 3cqw;
  border-radius: 3.2cqw;
  background: var(--card);
  border: 0.45cqw solid #ffe0ef;
  box-shadow: 0 1cqw 0 #ffd0e4;
}
.cong-root .bn-cute .c-metarow {
  display: flex;
  align-items: flex-start;
  gap: 1.6cqw;
  font-size: 4.2cqw;
  font-weight: 700;
  line-height: 1.35;
}
.cong-root .bn-cute .c-metarow svg {
  width: 4.6cqw;
  height: 4.6cqw;
  flex: 0 0 auto;
  margin-top: 0.1em;
  fill: none;
  stroke: var(--accent);
  stroke-width: 1.9;
}
.cong-root .bn-cute .c-metarow .dim {
  color: var(--ink-dim);
  font-weight: 700;
  font-size: 3.9cqw;
  margin-top: 0.2em;
}
.cong-root .bn-cute .c-metarow .place {
  color: var(--ink);
  font-weight: 800;
  font-size: 4cqw;
}
.cong-root .bn-cute .c-blob {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
}
.cong-root .bn-cute .c-blob--a {
  width: 22cqw;
  height: 22cqw;
  right: -6cqw;
  top: 28cqw;
  background: rgba(126, 200, 200, 0.28);
}
.cong-root .bn-cute .c-blob--b {
  width: 16cqw;
  height: 16cqw;
  left: -5cqw;
  bottom: 26cqw;
  background: rgba(255, 186, 120, 0.28);
}
`;

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

function CongFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="cong-root"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#050a12',
      }}
    >
      <style>{SHARED_CSS}</style>
      <div style={{ width: BANNER_W, height: BANNER_H, overflow: 'hidden' }}>{children}</div>
    </div>
  );
}

function MetaBlock({
  date,
  time,
  place,
  placeHref,
}: {
  date: string;
  time: string;
  place: string;
  placeHref?: string;
}) {
  return (
    <div className="p-meta">
      <div className="p-metarow">
        <ClockIcon />
        <div>
          <b>{date}</b>
          <div className="dim" style={{ marginTop: '0.2em' }}>
            {time}
          </div>
        </div>
      </div>
      <div className="p-metarow">
        <PinIcon />
        {placeHref ? (
          <a
            href={placeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="aj-interactive-link place"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            {place}
          </a>
        ) : (
          <span className="place">{place}</span>
        )}
      </div>
    </div>
  );
}

const BannerA: Page = () => (
  <CongFrame>
    <div className="banner bn-p">
      <div className="p-wrap">
        <div className="p-brand">
          <img className="bn-logo" src={logoIcon} alt="聰電站" />
          <div className="p-wordmark">
            <b>聰電站</b>
            <span>VOL.4</span>
          </div>
        </div>
        <div className="p-head">
          <div className="p-chip">
            <i />
            聰電站 #4-台北場
          </div>
          <h1 className="p-title">
            <span>軟體人陪你一起</span>
            <span>
              Vibe <em>Coding</em>
            </span>
          </h1>
        </div>
        <div className="p-cast">
          <div className="p-card">
            <div className="p-ring-slot">
              <div className="p-ring">
                <img className="bn-photo bn-photo--eric" src={eric} alt="Eric" />
              </div>
            </div>
            <div className="p-name">Eric</div>
            <div className="p-role">青蛙首領</div>
          </div>
          <div className="p-card">
            <div className="p-ring-slot">
              <div className="p-ring">
                <img className="bn-photo" src={gugu} alt="古古" />
              </div>
            </div>
            <div className="p-name">古古</div>
            <div className="p-role">熊熊首領</div>
          </div>
        </div>
        <MetaBlock
          date="2026 / 06 / 07 (日)"
          time="13:00 – 19:00"
          place="熊熊幹大事辦公室 · 臺北市中正區忠孝東路一段49巷17號3樓"
        />
      </div>
    </div>
  </CongFrame>
);

const BannerD: Page = () => (
  <CongFrame>
    <div className="banner bn-p bn-p--clean">
      <div className="p-wrap">
        <div className="p-brand">
          <img className="bn-logo" src={logoIcon} alt="聰電站" />
          <div className="p-wordmark">
            <b>聰電站</b>
            <span>VOL.5</span>
          </div>
          <span className="p-x" aria-hidden="true">
            ×
          </span>
          <img
            className="bn-logo bn-logo--partner"
            src={audaciousLogo}
            alt="AUdacious Pathways Education"
          />
        </div>
        <div className="p-head">
          <div className="p-chip">
            <i />
            聰電站 #5-台北場
          </div>
          <h1 className="p-title">
            <span>
              <em>Claude</em>
            </span>
            <span>幫你省下行政工作</span>
          </h1>
        </div>
        <div className="p-cast">
          <div className="p-card p-card--solo">
            <div className="p-ring-slot">
              <div className="p-ring">
                <img className="bn-photo bn-photo--eric" src={ERIC_COVER_PHOTO} alt="Eric" />
              </div>
            </div>
            <div className="p-name">Eric</div>
            <div className="p-role">職航站 CEO</div>
          </div>
        </div>
        <MetaBlock
          date="2026 / 07 / 25 (六)"
          time="14:00 – 17:00 · 可延長"
          place="熊熊幹大事辦公室 · 臺北市中正區忠孝東路一段49巷17號3樓"
        />
      </div>
    </div>
  </CongFrame>
);

const BannerB: Page = () => (
  <CongFrame>
    <div className="banner bn-p">
      <div className="p-num">03</div>
      <div className="p-wrap">
        <div className="p-brand">
          <img className="bn-logo" src={logoIcon} alt="聰電站" />
          <div className="p-wordmark">
            <b>聰電站</b>
            <span>VOL.3</span>
          </div>
        </div>
        <div className="p-head">
          <div className="p-kicker">AI 實作工作坊 · WORKSHOP</div>
          <div className="p-rule" />
          <h1 className="p-title p-title--compact">
            <span>沒有資科背景的人</span>
            <span>也能實作的</span>
            <span>
              <em>AI 課程</em>
            </span>
          </h1>
        </div>
        <div className="p-ports">
          <div className="p-port">
            <div className="p-portframe">
              <img className="bn-photo bn-photo--eric" src={eric} alt="Eric" />
              <div className="p-plate">
                <b>Eric</b>
                <span>WPORT PM</span>
              </div>
            </div>
          </div>
          <div className="p-port">
            <div className="p-portframe">
              <img className="bn-photo" src={david} alt="David" />
              <div className="p-plate">
                <b>David</b>
                <span>後端工程師</span>
              </div>
            </div>
          </div>
        </div>
        <MetaBlock
          date="2026 / 06 / 26 (五)"
          time="19:00 – 22:00"
          place="想享一隅共享空間 · 桃園蘆竹"
        />
      </div>
    </div>
  </CongFrame>
);

const BannerC: Page = () => (
  <CongFrame>
    <div className="banner bn-p">
      <div className="p-wrap">
        <div className="p-brand">
          <img className="bn-logo" src={logoIcon} alt="聰電站" />
          <div className="p-wordmark">
            <b>聰電站</b>
            <span>VOL.3</span>
          </div>
        </div>
        <div className="p-head">
          <h1 className="p-title">
            <a
              href={TALENT_HUB_EVENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="aj-interactive-link"
              style={{
                color: 'inherit',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              <span>沒有資科背景的人</span>
              <span>
                也能實作的 <em>AI 課程</em>
              </span>
            </a>
          </h1>
        </div>
        <div className="p-cast">
          <div className="p-card">
            <div className="p-ring-slot">
              <div className="p-ring">
                <img className="bn-photo bn-photo--eric" src={eric} alt="Eric" />
              </div>
            </div>
            <div className="p-name">Eric</div>
            <div className="p-role">WPORT PM</div>
          </div>
          <div className="p-card">
            <div className="p-ring-slot">
              <div className="p-ring">
                <img className="bn-photo" src={david} alt="David" />
              </div>
            </div>
            <div className="p-name">David</div>
            <div className="p-role">後端工程師</div>
          </div>
        </div>
        <MetaBlock
          date="2026 / 06 / 26 (五)"
          time="19:00 – 22:00"
          place="想享一隅共享空間 · 桃園蘆竹"
          placeHref={SMART_STATION_VENUE_URL}
        />
      </div>
    </div>
  </CongFrame>
);

const BannerCCute: Page = () => (
  <CongFrame>
    <div className="banner bn-cute">
      <div className="c-blob c-blob--a" />
      <div className="c-blob c-blob--b" />
      <div className="c-wrap">
        <div className="c-brand">
          <img className="bn-logo" src={logoIcon} alt="聰電站" />
          <div className="c-wordmark">
            <b>聰電站</b>
            <span>VOL.3</span>
          </div>
        </div>
        <h1 className="c-title">
          <a
            href={TALENT_HUB_EVENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="aj-interactive-link"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            <span>沒有資科背景的人</span>
            <span>
              也能實作的 <em>AI 課程</em>
            </span>
          </a>
        </h1>
        <div className="c-cast">
          <div className="c-card">
            <div className="c-sticker-slot">
              <div className="c-sticker">
                <img className="bn-photo bn-photo--eric" src={eric} alt="Eric" />
              </div>
            </div>
            <div className="c-name">Eric</div>
            <div className="c-role">WPORT PM</div>
          </div>
          <div className="c-card">
            <div className="c-sticker-slot">
              <div className="c-sticker">
                <img className="bn-photo" src={david} alt="David" />
              </div>
            </div>
            <div className="c-name">David</div>
            <div className="c-role">後端工程師</div>
          </div>
        </div>
        <div className="c-meta">
          <div className="c-metarow">
            <ClockIcon />
            <div>
              <b>2026 / 06 / 26 (五)</b>
              <div className="dim">19:00 – 22:00</div>
            </div>
          </div>
          <div className="c-metarow">
            <PinIcon />
            <a
              href={SMART_STATION_VENUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="aj-interactive-link place"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              想享一隅共享空間 · 桃園蘆竹
            </a>
          </div>
        </div>
      </div>
    </div>
  </CongFrame>
);

export { BannerC as SmartStationVol3 };

export default [BannerA, BannerD, BannerB, BannerC, BannerCCute] satisfies Page[];
