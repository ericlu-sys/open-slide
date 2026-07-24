import type { Page, SlideMeta } from '@open-slide/core';

export const meta: SlideMeta = {
  title: '無白丁會所 · 封面',
  createdAt: '2026-06-05T16:51:05.525Z',
};

const SHARED_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Noto+Serif+TC:wght@300;400;500;600&display=swap');
.nodullar-root {
  --display: "Cormorant Garamond", "Noto Serif TC", "Songti TC", serif;
  --serif: "Noto Serif TC", "Songti TC", "PingFang TC", serif;
  --ink: #f5f0e8;
  --gold: #c9a962;
  --gold-soft: rgba(235, 220, 195, 0.82);
}
.nodullar-root .cover-frame {
  font-family: var(--serif);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
}
`;

const CDN = 'https://res.cloudinary.com/dcqz561bh/image/upload';
const FX =
  'c_auto,g_auto,h_2160,w_2160/e_background_removal/e_grayscale/e_contrast:level_-70;type_sigmoidal/e_sharpen:253/f_png/e_contrast:level_37;type_sigmoidal/e_brightness:-16';

type CoverPalette = {
  shellBg: string;
  bg1: string;
  bg2: string;
  bg3: string;
  accent1: string;
  accent2: string;
  border: string;
  gridTint: string;
};

type CoverData = {
  organizer: string;
  sessionNo: string;
  speakerName: string;
  speakerTitle: string;
  eventName: string;
  speakerImage: string;
  speakerLeft: string;
  speakerWidth: string;
  speakerHeight: string;
  speakerScale: string;
};

const palettes: CoverPalette[] = [
  {
    shellBg: '#031216',
    bg1: '#041a22',
    bg2: '#0e3a4a',
    bg3: '#1e5a6e',
    accent1: 'rgba(56, 148, 178, 0.22)',
    accent2: 'rgba(88, 178, 205, 0.16)',
    border: 'rgba(72, 158, 188, 0.34)',
    gridTint: 'rgba(108, 188, 215, 0.06)',
  },
  {
    shellBg: '#040a18',
    bg1: '#061830',
    bg2: '#143878',
    bg3: '#2a5090',
    accent1: 'rgba(72, 118, 205, 0.22)',
    accent2: 'rgba(108, 148, 225, 0.16)',
    border: 'rgba(88, 128, 210, 0.34)',
    gridTint: 'rgba(128, 158, 230, 0.06)',
  },
  {
    shellBg: '#060818',
    bg1: '#101838',
    bg2: '#283880',
    bg3: '#485098',
    accent1: 'rgba(108, 98, 205, 0.22)',
    accent2: 'rgba(138, 128, 225, 0.16)',
    border: 'rgba(118, 108, 215, 0.34)',
    gridTint: 'rgba(148, 138, 235, 0.06)',
  },
  {
    shellBg: '#080614',
    bg1: '#1a1440',
    bg2: '#3a2880',
    bg3: '#5c5098',
    accent1: 'rgba(138, 88, 205, 0.22)',
    accent2: 'rgba(168, 118, 225, 0.16)',
    border: 'rgba(148, 98, 215, 0.34)',
    gridTint: 'rgba(178, 128, 235, 0.06)',
  },
  {
    shellBg: '#0c0614',
    bg1: '#280e38',
    bg2: '#582868',
    bg3: '#7a4880',
    accent1: 'rgba(188, 78, 168, 0.22)',
    accent2: 'rgba(215, 108, 188, 0.16)',
    border: 'rgba(198, 88, 178, 0.34)',
    gridTint: 'rgba(225, 128, 205, 0.06)',
  },
  {
    shellBg: '#100610',
    bg1: '#380e28',
    bg2: '#682848',
    bg3: '#805870',
    accent1: 'rgba(205, 78, 108, 0.22)',
    accent2: 'rgba(225, 108, 138, 0.16)',
    border: 'rgba(215, 88, 128, 0.34)',
    gridTint: 'rgba(235, 128, 158, 0.06)',
  },
  {
    shellBg: '#0a0608',
    bg1: '#1a0a10',
    bg2: '#3a1428',
    bg3: '#5c2840',
    accent1: 'rgba(180, 72, 96, 0.28)',
    accent2: 'rgba(201, 169, 98, 0.14)',
    border: 'rgba(201, 169, 98, 0.28)',
    gridTint: 'rgba(201, 169, 98, 0.05)',
  },
];

const covers: CoverData[] = [
  {
    organizer: '無白丁會所',
    sessionNo: '#1',
    speakerName: 'Eric Lu',
    speakerTitle: '熱火數碼CEO',
    eventName: '人才市場：如何吸引關鍵人才',
    speakerImage: `${CDN}/${FX}/myrxgysaoletflz44btd`,
    speakerLeft: '-3%',
    speakerWidth: '39%',
    speakerHeight: '94%',
    speakerScale: '2.2',
  },
  {
    organizer: '無白丁會所',
    sessionNo: '#2',
    speakerName: 'Bunny',
    speakerTitle: '高級鐘錶傳承到義大利精品',
    eventName: '洞悉品味：解讀高端消費背後的文化與選擇',
    speakerImage: `${CDN}/${FX}/wcnmdwnascx2zobnnvdw`,
    speakerLeft: '-3%',
    speakerWidth: '39%',
    speakerHeight: '94%',
    speakerScale: '2.5',
  },
  {
    organizer: '無白丁會所',
    sessionNo: '#3',
    speakerName: '曾學彥 Sam',
    speakerTitle: '杉畝藝術創辦人',
    eventName: '賦形感官：品牌敘事中的藝術經緯',
    speakerImage: `${CDN}/${FX}/qw1mqz2mxyae28o4sq1r`,
    speakerLeft: '-3%',
    speakerWidth: '39%',
    speakerHeight: '94%',
    speakerScale: '2.6',
  },
  {
    organizer: '無白丁會所',
    sessionNo: '#4',
    speakerName: 'Hank Lin',
    speakerTitle: '澤木行旅創辦人',
    eventName: '空間的溫度：從 Misty Bar 到氛圍經營',
    speakerImage: `${CDN}/${FX}/kcj5zqmjhke3asve35p1`,
    speakerLeft: '15%',
    speakerWidth: '39%',
    speakerHeight: '94%',
    speakerScale: '2.2',
  },
  {
    organizer: '無白丁會所',
    sessionNo: '#5',
    speakerName: '陳柏豪 Como',
    speakerTitle: '宏本國際有限公司創意總監',
    eventName: '鋼板的藝術：工業與美學的融合',
    speakerImage: `${CDN}/${FX}/ixkptjsfxak6fcygjja3`,
    speakerLeft: '-3%',
    speakerWidth: '39%',
    speakerHeight: '94%',
    speakerScale: '2.2',
  },
  {
    organizer: '無白丁會所',
    sessionNo: '#6',
    speakerName: '郎祖名',
    speakerTitle: '春河劇團團長',
    eventName: '戲夢‧築場：構築一場永不落幕的人文實驗。',
    speakerImage: `${CDN}/${FX}/speaker_1780682003`,
    speakerLeft: '-3%',
    speakerWidth: '39%',
    speakerHeight: '94%',
    speakerScale: '2.2',
  },
];

function NodullarStyles() {
  return <style>{SHARED_CSS}</style>;
}

function NodullarCover({ data, palette }: { data: CoverData; palette: CoverPalette }) {
  return (
    <div className="nodullar-root">
      <NodullarStyles />
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: palette.shellBg,
        }}
      >
        <div
          className="cover-frame"
          style={{
            position: 'relative',
            overflow: 'hidden',
            width: 1080,
            height: 1080,
            background: `
            radial-gradient(110% 80% at 0% 100%, ${palette.accent1}, transparent 60%),
            radial-gradient(100% 100% at 90% 0%, ${palette.accent2}, transparent 60%),
            linear-gradient(135deg, ${palette.bg1}, ${palette.bg2} 52%, ${palette.bg3})
          `,
            boxShadow: `inset 0 0 0 1px ${palette.border}, 0 16px 36px rgba(0, 0, 0, 0.36)`,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: `
              linear-gradient(105deg, rgba(9, 13, 24, 0.24) 0%, rgba(9, 13, 24, 0.68) 28%, rgba(9, 13, 24, 0) 52%),
              repeating-linear-gradient(90deg, ${palette.gridTint} 0, ${palette.gridTint} 1px, transparent 1px, transparent 44px)
            `,
            }}
          />
          <div
            style={{
              position: 'absolute',
              right: '7.4%',
              top: '8.8%',
              fontFamily: 'var(--display)',
              color: 'var(--gold)',
              fontSize: 92,
              fontWeight: 300,
              fontStyle: 'italic',
              letterSpacing: '0.1em',
              textShadow: '0 2px 14px rgba(0, 0, 0, 0.48)',
            }}
          >
            {data.sessionNo}
          </div>
          <div
            style={{
              position: 'absolute',
              right: '6.4%',
              bottom: '8.2%',
              fontFamily: 'var(--serif)',
              color: 'var(--gold-soft)',
              fontSize: 24,
              fontWeight: 300,
              letterSpacing: '0.32em',
            }}
          >
            {data.organizer}
          </div>
          <div
            style={{
              position: 'absolute',
              left: data.speakerLeft,
              bottom: 0,
              width: data.speakerWidth,
              height: '100%',
              display: 'grid',
              alignItems: 'end',
              justifyItems: 'start',
              zIndex: 1,
            }}
          >
            <img
              src={data.speakerImage}
              alt={data.speakerName}
              style={{
                width: '100%',
                height: data.speakerHeight,
                objectFit: 'contain',
                objectPosition: 'left bottom',
                display: 'block',
                transform: `scale(${data.speakerScale})`,
                transformOrigin: 'left bottom',
                filter:
                  'grayscale(1) contrast(1.12) brightness(0.93) sepia(0.08) drop-shadow(0 0 1px rgba(8, 12, 26, 0.95)) drop-shadow(0 8px 24px rgba(7, 12, 28, 0.5))',
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '62%',
              transform: 'translate(-50%, -50%)',
              display: 'inline-flex',
              flexDirection: 'column',
              gap: 18,
              width: '76%',
              alignItems: 'center',
              textAlign: 'center',
              zIndex: 2,
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '-20px -26px -16px -24px',
                background:
                  'linear-gradient(90deg, rgba(6, 10, 24, 0.16) 0%, rgba(6, 10, 24, 0.76) 32%, rgba(6, 10, 24, 0.55) 100%)',
                borderRadius: 18,
                zIndex: -1,
              }}
            />
            <h1
              style={{
                margin: 0,
                fontFamily: 'var(--serif)',
                fontSize: 84,
                lineHeight: 1.22,
                fontWeight: 500,
                letterSpacing: '0.06em',
                color: 'var(--ink)',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.55)',
              }}
            >
              {data.speakerName}
            </h1>
            <p
              style={{
                margin: 0,
                fontFamily: 'var(--serif)',
                fontSize: 34,
                lineHeight: 1.5,
                fontWeight: 400,
                letterSpacing: '0.2em',
                color: 'var(--gold)',
              }}
            >
              {data.speakerTitle}
            </p>
            <p
              style={{
                margin: '10px 0 0',
                fontFamily: 'var(--serif)',
                fontSize: 46,
                lineHeight: 1.38,
                fontWeight: 500,
                letterSpacing: '0.08em',
                color: 'var(--gold)',
                borderTop: '1px solid rgba(201, 169, 98, 0.42)',
                paddingTop: 22,
                width: '100%',
              }}
            >
              {data.eventName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NodullarGatheringCover({ palette }: { palette: CoverPalette }) {
  return (
    <div className="nodullar-root">
      <NodullarStyles />
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: palette.shellBg,
        }}
      >
        <div
          className="cover-frame"
          style={{
            position: 'relative',
            overflow: 'hidden',
            width: 1080,
            height: 1080,
            background: `
            radial-gradient(90% 70% at 50% 110%, ${palette.accent1}, transparent 55%),
            radial-gradient(80% 60% at 12% 8%, ${palette.accent2}, transparent 50%),
            radial-gradient(60% 50% at 88% 18%, rgba(201, 169, 98, 0.08), transparent 45%),
            linear-gradient(160deg, ${palette.bg1}, ${palette.bg2} 48%, ${palette.bg3})
          `,
            boxShadow: `inset 0 0 0 1px ${palette.border}, 0 16px 36px rgba(0, 0, 0, 0.36)`,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background: `
              repeating-linear-gradient(90deg, ${palette.gridTint} 0, ${palette.gridTint} 1px, transparent 1px, transparent 52px),
              repeating-linear-gradient(0deg, ${palette.gridTint} 0, ${palette.gridTint} 1px, transparent 1px, transparent 52px)
            `,
              opacity: 0.55,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '14%',
              transform: 'translateX(-50%)',
              width: 120,
              height: 1,
              background:
                'linear-gradient(90deg, transparent, rgba(201, 169, 98, 0.55) 20%, rgba(201, 169, 98, 0.55) 80%, transparent)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              width: '78%',
              gap: 28,
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: 'var(--display)',
                fontSize: 28,
                fontWeight: 400,
                fontStyle: 'italic',
                letterSpacing: '0.42em',
                color: 'var(--gold-soft)',
                textIndent: '0.42em',
              }}
            >
              Speakers&apos; Salon
            </p>
            <h1
              style={{
                margin: 0,
                fontFamily: 'var(--serif)',
                fontSize: 92,
                lineHeight: 1.28,
                fontWeight: 500,
                letterSpacing: '0.14em',
                color: 'var(--ink)',
                textShadow: '0 2px 18px rgba(0, 0, 0, 0.45)',
              }}
            >
              無白丁講師聚會
            </h1>
            <div
              style={{
                width: 72,
                height: 1,
                background: 'rgba(201, 169, 98, 0.5)',
              }}
            />
            <p
              style={{
                margin: 0,
                fontFamily: 'var(--serif)',
                fontSize: 36,
                lineHeight: 1.65,
                fontWeight: 300,
                letterSpacing: '0.28em',
                color: 'var(--gold)',
              }}
            >
              以酒會友 · 以知識相會
            </p>
            <p
              style={{
                margin: '8px 0 0',
                fontFamily: 'var(--serif)',
                fontSize: 30,
                lineHeight: 1.7,
                fontWeight: 300,
                letterSpacing: '0.12em',
                color: 'rgba(245, 240, 232, 0.72)',
                maxWidth: '88%',
              }}
            >
              致謝歷届分享者
              <br />
              在爐邊，續寫無白丁的對話
            </p>
          </div>
          <div
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '10%',
              transform: 'translateX(-50%)',
              fontFamily: 'var(--serif)',
              color: 'var(--gold-soft)',
              fontSize: 24,
              fontWeight: 300,
              letterSpacing: '0.36em',
              textIndent: '0.36em',
            }}
          >
            無白丁會所
          </div>
        </div>
      </div>
    </div>
  );
}

function makeCoverPage(data: CoverData, palette: CoverPalette): Page {
  const Page: Page = () => <NodullarCover data={data} palette={palette} />;
  return Page;
}

const pages = [
  ...covers.map((data, i) => makeCoverPage(data, palettes[i] ?? palettes[0])),
  () => <NodullarGatheringCover palette={palettes[6] ?? palettes[0]} />,
];

export default pages satisfies Page[];
