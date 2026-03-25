export const metadata = {
  title: "Access | P's -hair atelier-",
};

export default function AccessPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section style={{
        background: '#111111', padding: '100px 48px 80px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '0.72rem', letterSpacing: '0.28em',
          color: '#e91e8c', marginBottom: '20px', textTransform: 'uppercase',
        }}>
          How to find us
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          fontWeight: 300, letterSpacing: '0.08em', color: '#ffffff', lineHeight: 1,
        }}>
          Access
        </h1>
      </section>

      {/* ── Map + Info ── */}
      <section style={{ background: '#ffffff', padding: '80px 48px' }}>
        <div style={{
          maxWidth: '1000px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 420px', gap: '64px',
          alignItems: 'start',
        }}>
          {/* Map */}
          <div style={{
            aspectRatio: '4/3', background: '#f0f0f0', overflow: 'hidden',
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7378285856595!2d139.70247431524905!3d35.659660980196456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca6d2d92fa7%3A0x91c3efedfC4a6e82!2sHair%20Atelier%20P's!5e0!3m2!1sja!2sjp!4v1600000000000"
              width="100%" height="100%"
              style={{ border: 'none', display: 'block' }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Info */}
          <div>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '0.7rem', letterSpacing: '0.28em',
              color: '#e91e8c', marginBottom: '28px', textTransform: 'uppercase',
            }}>
              Shop Info
            </p>

            {[
              { label: 'ADDRESS', value: '〒150-0002\n東京都渋谷区渋谷1-22-10\nTBミヤシタビル4F' },
              { label: 'TEL', value: '03-6411-4501' },
              { label: 'MAIL', value: 'info@ps-room.com' },
              { label: 'OPEN', value: 'Weekday  12:00〜22:00\nSat  11:00〜21:00\nSun  11:00〜20:00' },
              { label: 'CLOSE', value: '不定休' },
              { label: 'アクセス', value: 'JR渋谷駅 東口より徒歩5分\n東京メトロ渋谷駅B1出口より徒歩3分' },
            ].map(({ label, value }, i) => (
              <div key={i} style={{
                padding: '16px 0',
                borderBottom: '1px solid #ebebeb',
                display: 'grid', gridTemplateColumns: '72px 1fr', gap: '16px',
              }}>
                <span style={{
                  fontSize: '0.65rem', letterSpacing: '0.14em',
                  color: '#aaaaaa', paddingTop: '3px',
                }}>
                  {label}
                </span>
                <span style={{
                  fontSize: '0.85rem', color: '#333333',
                  lineHeight: 1.9, whiteSpace: 'pre-line',
                }}>
                  {value}
                </span>
              </div>
            ))}

            <a
              href="https://www.google.com/maps/search/Hair+Atelier+P's+渋谷"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block', marginTop: '28px',
                background: '#111111', color: '#ffffff',
                padding: '12px 32px',
                fontSize: '0.73rem', letterSpacing: '0.12em',
                textDecoration: 'none',
              }}
            >
              Google Map で開く
            </a>
          </div>
        </div>
      </section>

      {/* ── Direction Guide ── */}
      <section style={{ background: '#f8f7f5', padding: '72px 48px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '0.72rem', letterSpacing: '0.28em',
            color: '#e91e8c', marginBottom: '32px', textTransform: 'uppercase',
          }}>
            Direction
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px',
          }}>
            {[
              {
                title: 'JR渋谷駅より',
                steps: ['東口改札を出る', 'ミヤシタパーク方面へ', '徒歩約5分'],
              },
              {
                title: '東京メトロより',
                steps: ['渋谷駅B1出口', '地上へ出てすぐ右折', '徒歩約3分'],
              },
            ].map(({ title, steps }) => (
              <div key={title} style={{
                background: '#ffffff', padding: '32px',
                borderTop: '2px solid #e91e8c',
              }}>
                <p style={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontSize: '0.85rem', fontWeight: 500,
                  color: '#111111', marginBottom: '16px',
                }}>
                  {title}
                </p>
                <ol style={{ paddingLeft: '0', listStyle: 'none' }}>
                  {steps.map((step, i) => (
                    <li key={i} style={{
                      fontSize: '0.82rem', color: '#666666',
                      lineHeight: 1.8, padding: '4px 0',
                      display: 'flex', gap: '10px', alignItems: 'flex-start',
                    }}>
                      <span style={{
                        color: '#e91e8c', fontSize: '0.65rem',
                        fontFamily: "'Cormorant Garamond', serif",
                        paddingTop: '3px', flexShrink: 0,
                      }}>
                        0{i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
