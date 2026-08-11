import mascotImg from '@assets/mascots/寫履歷情勒二人組.png';
import wportLogo from '@assets/wport.png';
import { ImagePlaceholder, type Page, type SlideMeta } from '@open-slide/core';

export const meta: SlideMeta = {
  title: 'WPORT · 畢業後免工作許可（4:5 輪播）',
  createdAt: '2026-08-11T06:45:14.000Z',
};

export const defaultLocale = 'zh-TW';
export const localeLabels = { 'zh-TW': '繁體中文', vi: 'Tiếng Việt' };

const W = 1080;
const H = 1350;
const SCALE = 1080 / H;

const c = {
  surround: '#CFE0DC',
  bg: '#F1F1F0',
  card: '#FAFAFA',
  ink: '#484848',
  body: '#4A4A4A',
  teal: '#74B8B0',
  tealHead: '#7FBDB4',
  cyan: '#10C2CC',
  mintDeep: '#CFE3E1',
  mint: '#DDE9E7',
  watermark: '#E5EDEB',
  sub: '#A0A0A0',
};

const FONT_DISPLAY = '"Huninn", "jf-openhuninn", "Noto Sans TC", "PingFang TC", sans-serif';
const FONT_BODY = '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif';

const SHARED_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Huninn&family=Noto+Sans+TC:wght@400;500;700;900&display=swap');
.wport-post { font-family: ${FONT_BODY}; -webkit-font-smoothing: antialiased; }
`;

const Styles = () => <style>{SHARED_CSS}</style>;

/** 越南文是拉丁字母，同樣字數佔的寬度約為中日韓字的一半，字級要分開算。 */
const isLatin = (s: string) => !/[\u3000-\u9fff\uff00-\uffef]/.test(s);

const fit = (text: string, box: number, max: number, min = 18) => {
  const per = isLatin(text) ? 0.55 : 1.04;
  return Math.max(min, Math.min(max, Math.floor(box / Math.max(1, text.length * per))));
};

const fitAll = (texts: string[], box: number, max: number, min = 18) =>
  Math.min(...texts.map((t) => fit(t, box, max, min)));

type Content = {
  chip: string;
  title: string[];
  sub: string;
  tagLeft: string;
  tagRight: string;
  coverFig: string;
  p2: { pill: string; head: string; body: string[]; list: string[]; fig: string };
  p3: { pill: string; head: string; items: string[]; note: string; fig: string };
  p4: { pill: string; cards: { title: string; body: string }[] };
};

const fill = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: c.surround,
} as const;

const Frame = ({ slug, children }: { slug: string; children: React.ReactNode }) => (
  <div style={fill}>
    <Styles />
    <div
      className="wport-post cover"
      data-slug={slug}
      data-format="portrait-4x5"
      style={{ width: W * SCALE, height: H * SCALE, position: 'relative', overflow: 'hidden' }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: W,
          height: H,
          transformOrigin: '0 0',
          transform: `scale(${SCALE})`,
          background: c.bg,
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    </div>
  </div>
);

const Watermark = ({ top, left, size }: { top: number; left: number; size: number }) => (
  <div
    aria-hidden
    style={{
      position: 'absolute',
      top,
      left,
      fontFamily: FONT_DISPLAY,
      fontSize: size,
      lineHeight: 0.8,
      color: c.watermark,
      userSelect: 'none',
    }}
  >
    w
  </div>
);

const Logo = ({ width, style }: { width: number; style?: React.CSSProperties }) => (
  <img
    src={wportLogo}
    alt="WPORT"
    style={{ position: 'absolute', width, filter: 'brightness(0) invert(1)', ...style }}
  />
);

const Pill = ({ children }: { children: string }) => (
  <div
    style={{
      position: 'absolute',
      top: 130,
      left: 120,
      right: 100,
      height: 90,
      background: c.teal,
      border: `3px solid ${c.ink}`,
      borderRadius: 46,
      boxShadow: `6px 7px 0 ${c.ink}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: FONT_DISPLAY,
      fontSize: fit(children, 780, 52),
      color: '#fff',
      letterSpacing: isLatin(children) ? 1 : 4,
    }}
  >
    {children}
  </div>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      position: 'absolute',
      top: 290,
      left: 120,
      right: 100,
      bottom: 195,
      background: c.card,
      border: `3px solid ${c.ink}`,
      borderRadius: 46,
      boxShadow: `6px 7px 0 ${c.ink}`,
      padding: '48px 54px',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}
  >
    {children}
  </div>
);

const CardTitle = ({
  children,
  box = 700,
  max = 64,
}: {
  children: string;
  box?: number;
  max?: number;
}) => (
  <div
    style={{
      fontFamily: FONT_DISPLAY,
      fontSize: fit(children, box, max),
      color: c.tealHead,
      textAlign: 'center',
      letterSpacing: isLatin(children) ? 1 : 8,
    }}
  >
    {children}
  </div>
);

const Rule = ({ top = 34 }: { top?: number }) => (
  <div style={{ height: 2, background: c.ink, marginTop: top }} />
);

const Num = ({ n, size = 44 }: { n: number; size?: number }) => (
  <span
    style={{
      flex: `0 0 ${size}px`,
      width: size,
      height: size,
      borderRadius: '50%',
      background: c.cyan,
      color: '#fff',
      fontFamily: FONT_DISPLAY,
      fontSize: size * 0.56,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {n}
  </span>
);

const LogoCorner = () => (
  <>
    <div
      aria-hidden
      style={{
        position: 'absolute',
        right: -70,
        bottom: -70,
        width: 450,
        height: 250,
        background: c.mint,
        borderTopLeftRadius: 210,
      }}
    />
    <Logo width={188} style={{ right: 78, bottom: 58 }} />
  </>
);

const makePages = (t: Content): Page[] => {
  const titleSize = fitAll(t.title, 900, 124, 44);
  const tagSize = Math.min(58, fitAll([t.tagLeft, t.tagRight], 300, 58, 26));

  const Cover: Page = () => (
    <Frame slug="01-cover">
      <Watermark top={-176} left={268} size={660} />

      <div
        style={{
          position: 'absolute',
          top: 360,
          left: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            background: c.ink,
            color: '#fff',
            fontFamily: FONT_DISPLAY,
            fontSize: fit(t.chip, 620, 44),
            letterSpacing: isLatin(t.chip) ? 1 : 3,
            padding: '15px 38px',
            borderRadius: 18,
          }}
        >
          {t.chip}
        </div>
        <div
          style={{
            marginTop: 26,
            fontFamily: FONT_DISPLAY,
            fontSize: titleSize,
            lineHeight: 1.22,
            color: '#444',
            letterSpacing: isLatin(t.title[0]) ? 2 : 10,
            textAlign: 'center',
          }}
        >
          {t.title[0]}
          <br />
          {t.title[1]}
        </div>
        <div
          style={{
            marginTop: 34,
            fontFamily: FONT_BODY,
            fontSize: 30,
            fontWeight: 700,
            color: c.sub,
            letterSpacing: 1,
          }}
        >
          {t.sub}
        </div>
      </div>

      <div
        aria-hidden
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: 560,
          height: 300,
          background: c.mint,
          borderTopRightRadius: 100,
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: 660,
          height: 232,
          background: c.mintDeep,
          borderTopLeftRadius: 100,
        }}
      />

      <div
        style={{
          position: 'absolute',
          left: 108,
          bottom: 196,
          fontFamily: FONT_DISPLAY,
          fontSize: tagSize,
          color: '#fff',
          letterSpacing: isLatin(t.tagLeft) ? 1 : 4,
        }}
      >
        {t.tagLeft}
      </div>
      <Logo width={232} style={{ left: 148, bottom: 84 }} />
      <div
        style={{
          position: 'absolute',
          right: 250,
          bottom: 128,
          maxWidth: 300,
          fontFamily: FONT_DISPLAY,
          fontSize: tagSize,
          color: '#fff',
          letterSpacing: isLatin(t.tagRight) ? 1 : 4,
          textAlign: 'right',
        }}
      >
        {t.tagRight}
      </div>

      <ImagePlaceholder
        hint={t.coverFig}
        width={182}
        height={232}
        style={{ position: 'absolute', left: 372, bottom: 76 }}
      />
      <img
        src={mascotImg}
        alt=""
        style={{ position: 'absolute', right: 14, bottom: 40, width: 224 }}
      />
    </Frame>
  );

  const Threshold: Page = () => (
    <Frame slug="02-what">
      <Watermark top={200} left={-190} size={760} />
      <Pill>{t.p2.pill}</Pill>
      <Card>
        <CardTitle>{t.p2.head}</CardTitle>
        <Rule top={36} />
        <div
          style={{
            marginTop: 34,
            fontSize: fitAll(t.p2.body, 740, 32, 22),
            lineHeight: 1.72,
            color: c.body,
          }}
        >
          {t.p2.body.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </div>

        <div
          style={{
            marginTop: 40,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            fontFamily: FONT_DISPLAY,
            color: '#3F3F3F',
          }}
        >
          {t.p2.list.map((label, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <Num n={i + 1} size={42} />
              <span
                style={{
                  fontSize: fitAll(t.p2.list, 430, 42, 24),
                  letterSpacing: isLatin(label) ? 1 : 4,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        <ImagePlaceholder
          hint={t.p2.fig}
          width={228}
          height={268}
          style={{ position: 'absolute', right: 46, bottom: 44 }}
        />
      </Card>
      <LogoCorner />
    </Frame>
  );

  const Scoring: Page = () => (
    <Frame slug="03-how">
      <Watermark top={200} left={-190} size={760} />
      <Pill>{t.p3.pill}</Pill>
      <Card>
        <CardTitle>{t.p3.head}</CardTitle>
        <Rule top={36} />

        <div
          style={{
            marginTop: 50,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridAutoFlow: 'column',
            gridTemplateRows: `repeat(${Math.ceil(t.p3.items.length / 2)}, auto)`,
            rowGap: t.p3.items.length > 6 ? 34 : 42,
            columnGap: 36,
            fontFamily: FONT_DISPLAY,
            color: '#3F3F3F',
          }}
        >
          {t.p3.items.map((label, i) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <Num n={i + 1} size={42} />
              <span
                style={{
                  fontSize: fitAll(t.p3.items, 268, 44, 20),
                  letterSpacing: isLatin(label) ? 0 : 3,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            position: 'absolute',
            left: 54,
            right: 270,
            bottom: 56,
            fontSize: fit(t.p3.note, 900, 28, 20),
            color: c.body,
          }}
        >
          {t.p3.note}
        </div>

        <ImagePlaceholder
          hint={t.p3.fig}
          width={206}
          height={180}
          style={{ position: 'absolute', right: 46, bottom: 40 }}
        />
      </Card>
      <LogoCorner />
    </Frame>
  );

  const Notes: Page = () => (
    <Frame slug="04-notes">
      <Watermark top={200} left={-190} size={760} />
      <Pill>{t.p4.pill}</Pill>

      <div
        style={{
          position: 'absolute',
          top: 290,
          left: 120,
          right: 100,
          bottom: 195,
          display: 'flex',
          flexDirection: 'column',
          gap: 42,
        }}
      >
        {t.p4.cards.map((card) => (
          <div
            key={card.title}
            style={{
              flex: 1,
              background: c.card,
              border: `3px solid ${c.ink}`,
              borderRadius: 42,
              boxShadow: `6px 7px 0 ${c.ink}`,
              padding: '20px 42px',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            <CardTitle box={660} max={54}>
              {card.title}
            </CardTitle>
            <Rule top={14} />
            <div
              style={{
                marginTop: 14,
                fontSize: fit(card.body, 2050, 32, 22),
                lineHeight: 1.52,
                color: c.body,
              }}
            >
              {card.body}
            </div>
          </div>
        ))}
      </div>

      <LogoCorner />
    </Frame>
  );

  return [Cover, Threshold, Scoring, Notes];
};

const ZH: Content = {
  chip: '2026 最新制度',
  title: ['畢業後', '免工作許可'],
  sub: 'The 2026 permit-free window',
  tagLeft: '僑外生',
  tagRight: '求職技巧',
  coverFig: '封面照片（可用 blog 首圖）',
  p2: {
    pill: '2026 新制是什麼？',
    head: '畢業後有緩衝期',
    body: [
      '2026 年 1 月 1 日起，符合條件的僑外生',
      '畢業後可在一段期間內免申請工作許可。',
      '雇主也不需要額外提出申請，',
      '全職、兼職、專案型工作都可以。',
    ],
    list: ['僑生陸生最長 2 年', '港澳生最長 1 年', '不受職類限制'],
    fig: '免許可期間時程圖',
  },
  p3: {
    pill: '誰適用？',
    head: '六個適用條件',
    items: ['僑生', '外籍學生', '港澳生', '副學士以上', '取得延長居留', '兩年內畢業'],
    note: '只要有薪酬，正職、打工、實習都適用。',
    fig: '適用資格插圖',
  },
  p4: {
    pill: '重要注意事項',
    cards: [
      {
        title: '未取得許可不得工作',
        body: '拿到 offer、簽完合約不代表可以立刻上班。（免許可期間除外）',
      },
      {
        title: '效期通常與居留證相同',
        body: '居留證快到期時要同步辦理工作許可展延，別讓自己陷入空窗期。',
      },
      {
        title: '換工作需要重新申請',
        body: '許可針對特定雇主核發，換公司就等於換許可，舊的不能沿用。',
      },
    ],
  },
};

const VI: Content = {
  chip: 'Quy định mới 2026',
  title: ['Sau tốt nghiệp', 'miễn giấy phép'],
  sub: 'The 2026 permit-free window',
  tagLeft: 'Du học sinh',
  tagRight: 'Bí quyết tìm việc',
  coverFig: 'Ảnh bìa (có thể dùng ảnh blog)',
  p2: {
    pill: 'Quy định mới 2026 là gì?',
    head: 'Có giai đoạn đệm',
    body: [
      'Từ ngày 1/1/2026, sinh viên đủ điều kiện',
      'được làm việc mà không cần xin giấy phép.',
      'Nhà tuyển dụng cũng không cần nộp đơn thêm,',
      'làm full-time, part-time hay dự án đều được.',
    ],
    list: ['Hoa kiều, đại lục: 2 năm', 'Hồng Kông, Ma Cao: 1 năm', 'Không giới hạn loại việc'],
    fig: 'Sơ đồ giai đoạn miễn phép',
  },
  p3: {
    pill: 'Ai được áp dụng?',
    head: 'Sáu điều kiện',
    items: [
      'Hoa kiều sinh',
      'Sinh viên quốc tế',
      'Sinh viên HK, Ma Cao',
      'Cao đẳng trở lên',
      'Có gia hạn cư trú',
      'Tốt nghiệp trong 2 năm',
    ],
    note: 'Chỉ cần có thù lao thì mọi hình thức đều áp dụng.',
    fig: 'Hình điều kiện áp dụng',
  },
  p4: {
    pill: 'Lưu ý quan trọng',
    cards: [
      {
        title: 'Chưa có phép, chưa làm việc',
        body: 'Nhận offer và ký hợp đồng chưa có nghĩa đi làm ngay. (Trừ giai đoạn miễn phép.)',
      },
      {
        title: 'Thời hạn gắn với ARC',
        body: 'Khi ARC sắp hết hạn, hãy gia hạn giấy phép cùng lúc để tránh khoảng trống.',
      },
      {
        title: 'Đổi việc phải xin lại',
        body: 'Giấy phép cấp cho một nhà tuyển dụng. Đổi công ty tức là đổi phép.',
      },
    ],
  },
};

export const locales = { vi: { pages: makePages(VI) } };

export default makePages(ZH);
