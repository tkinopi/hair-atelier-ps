import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        minHeight: 'calc(100vh - 64px)',
        background: '#111111',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
        padding: '80px 24px',
      }}>
        {/* subtle background texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(233,30,140,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          {/* Eyebrow */}
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '0.78rem', letterSpacing: '0.28em',
            color: '#e91e8c', marginBottom: '28px',
            textTransform: 'uppercase',
          }}>
            Hair Atelier — Shibuya
          </p>

          {/* Main heading */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 300,
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
            lineHeight: 1.0, letterSpacing: '0.04em',
            color: '#ffffff',
            marginBottom: '8px',
          }}>
            P&apos;s
          </h1>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
            letterSpacing: '0.32em', fontStyle: 'italic',
            color: '#aaaaaa', marginBottom: '48px',
          }}>
            hair atelier
          </p>

          {/* Divider */}
          <div style={{
            width: '40px', height: '1px',
            background: '#e91e8c',
            margin: '0 auto 40px',
          }} />

          {/* Tagline */}
          <p style={{
            fontFamily: "'Noto Serif JP', 'Yu Mincho', serif",
            fontSize: 'clamp(0.88rem, 1.8vw, 1.05rem)',
            color: '#999999', lineHeight: 2.2, letterSpacing: '0.06em',
            marginBottom: '56px', maxWidth: '420px',
          }}>
            piece＝かけら。<br />
            白さのない piece が集まり、<br />
            素敵な空間が生まれていく。
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://beauty.hotpepper.jp/slnH000572344/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#e91e8c', color: '#ffffff',
                padding: '14px 40px',
                fontSize: '0.78rem', letterSpacing: '0.12em',
                textDecoration: 'none', display: 'inline-block',
                transition: 'background 0.2s',
              }}
            >
              予約する
            </a>
            <Link href="/concept" style={{
              background: 'transparent', color: '#ffffff',
              border: '1px solid #444444',
              padding: '14px 40px',
              fontSize: '0.78rem', letterSpacing: '0.12em',
              textDecoration: 'none', display: 'inline-block',
            }}>
              Concept
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{
          position: 'absolute', bottom: '36px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        }}>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#555555' }}>
            SCROLL
          </span>
          <div style={{ width: '1px', height: '40px', background: '#333333' }} />
        </div>
      </section>

      {/* ── Info Strip ── */}
      <section style={{
        background: '#ffffff',
        borderBottom: '1px solid #ebebeb',
      }}>
        <div style={{
          maxWidth: '1000px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          borderLeft: '1px solid #ebebeb',
        }}>
          {[
            { label: 'OPEN', value: 'Weekday 12:00–22:00\nSat 11:00–21:00\nSun 11:00–20:00' },
            { label: 'ADDRESS', value: '渋谷区渋谷1-22-10\nTBミヤシタビル4F' },
            { label: 'TEL', value: '03-6411-4501' },
          ].map(({ label, value }) => (
            <div key={label} style={{
              padding: '40px 36px',
              borderRight: '1px solid #ebebeb',
            }}>
              <p style={{
                fontSize: '0.65rem', letterSpacing: '0.2em', color: '#aaaaaa',
                marginBottom: '12px',
              }}>
                {label}
              </p>
              <p style={{
                fontSize: '0.85rem', lineHeight: 1.9, color: '#333333',
                whiteSpace: 'pre-line',
              }}>
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Concept Block ── */}
      <section style={{
        background: '#f8f7f5', padding: '120px 48px',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '0.72rem', letterSpacing: '0.28em',
            color: '#e91e8c', marginBottom: '24px', textTransform: 'uppercase',
          }}>
            Our Concept
          </p>
          <h2 style={{
            fontFamily: "'Noto Serif JP', 'Yu Mincho', serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 300, lineHeight: 1.7, color: '#111111',
            marginBottom: '32px', letterSpacing: '0.04em',
          }}>
            それぞれの個性という「かけら」が<br />
            集まり、輝く場所
          </h2>
          <p style={{
            fontFamily: "'Noto Serif JP', 'Yu Mincho', serif",
            fontSize: '0.92rem', color: '#666666', lineHeight: 2.2,
            marginBottom: '48px',
          }}>
            No.1アットホームなヘアアトリエ。オシャレにプラスな気持ちで
            頑張れるよう応援し、キラキラした素敵なヘアスタイルを提供します。
          </p>
          <Link href="/concept" style={{
            fontSize: '0.73rem', letterSpacing: '0.2em',
            color: '#111111', textDecoration: 'none',
            borderBottom: '1px solid #111111', paddingBottom: '3px',
          }}>
            READ MORE
          </Link>
        </div>
      </section>

      {/* ── Menu Strip ── */}
      <section style={{ background: '#111111', padding: '80px 48px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '0.72rem', letterSpacing: '0.28em',
            color: '#e91e8c', marginBottom: '48px', textTransform: 'uppercase',
            textAlign: 'center',
          }}>
            Menu
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px', background: '#222222',
          }}>
            {[
              { en: 'Cut', jp: 'カット' },
              { en: 'Color', jp: 'カラー' },
              { en: 'Perm', jp: 'パーマ' },
              { en: 'Treatment', jp: 'トリートメント' },
            ].map(({ en, jp }) => (
              <div key={en} style={{
                background: '#111111', padding: '40px 24px', textAlign: 'center',
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.4rem', fontWeight: 300, letterSpacing: '0.06em',
                  color: '#ffffff', marginBottom: '8px',
                }}>
                  {en}
                </p>
                <p style={{ fontSize: '0.72rem', color: '#555555', letterSpacing: '0.08em' }}>
                  {jp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{
        background: '#e91e8c', padding: '72px 48px', textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '0.72rem', letterSpacing: '0.28em',
          color: 'rgba(255,255,255,0.7)', marginBottom: '16px', textTransform: 'uppercase',
        }}>
          Reservation
        </p>
        <p style={{
          fontFamily: "'Noto Serif JP', serif",
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          color: '#ffffff', fontWeight: 300, marginBottom: '36px', letterSpacing: '0.04em',
        }}>
          ご予約はホットペッパービューティーから
        </p>
        <a
          href="https://beauty.hotpepper.jp/slnH000572344/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#ffffff', color: '#e91e8c',
            padding: '16px 48px',
            fontSize: '0.78rem', letterSpacing: '0.12em',
            textDecoration: 'none', display: 'inline-block', fontWeight: 500,
          }}
        >
          今すぐ予約する
        </a>
      </section>
    </>
  );
}
