export const metadata = {
  title: "Concept | P's -hair atelier-",
};

export default function ConceptPage() {
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
          Our Story
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          fontWeight: 300, letterSpacing: '0.08em', color: '#ffffff', lineHeight: 1,
        }}>
          Concept
        </h1>
      </section>

      {/* ── Main Content ── */}
      <section style={{ background: '#ffffff', padding: '100px 48px' }}>
        <div style={{
          maxWidth: '1000px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px',
          alignItems: 'start',
        }}>
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=700&q=80"
              alt="サロン内観"
              style={{
                width: '100%', aspectRatio: '3/4', objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Text */}
          <div style={{ paddingTop: '20px' }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '0.7rem', letterSpacing: '0.28em',
              color: '#e91e8c', marginBottom: '24px', textTransform: 'uppercase',
            }}>
              piece = かけら
            </p>
            <h2 style={{
              fontFamily: "'Noto Serif JP', 'Yu Mincho', serif",
              fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)',
              fontWeight: 300, lineHeight: 1.8, color: '#111111',
              marginBottom: '32px', letterSpacing: '0.04em',
            }}>
              それぞれの「かけら」が<br />
              集まる場所
            </h2>

            <div style={{
              width: '32px', height: '1px', background: '#e91e8c', marginBottom: '32px',
            }} />

            <p style={{
              fontFamily: "'Noto Serif JP', 'Yu Mincho', serif",
              fontSize: '0.9rem', lineHeight: 2.4, color: '#555555',
              marginBottom: '28px',
            }}>
              「piece＝かけら」というサロン名に込めた想いは、
              お客様一人ひとりの個性という「かけら」が集まり、
              輝く空間を作りたいという思いから生まれました。
            </p>
            <p style={{
              fontFamily: "'Noto Serif JP', 'Yu Mincho', serif",
              fontSize: '0.9rem', lineHeight: 2.4, color: '#555555',
              marginBottom: '28px',
            }}>
              白さのないpieceが集まり、素敵な空間が生まれていく。
              そんな場所を目指し、No.1アットホームなヘアアトリエとして
              お客様の魅力を最大限に引き出すヘアスタイルをご提案します。
            </p>
            <p style={{
              fontFamily: "'Noto Serif JP', 'Yu Mincho', serif",
              fontSize: '0.9rem', lineHeight: 2.4, color: '#555555',
            }}>
              オシャレにプラスな気持ちで頑張れるよう応援し、
              キラキラした素敵なヘアスタイルを提供します。
            </p>
          </div>
        </div>
      </section>

      {/* ── Salon Info ── */}
      <section style={{ background: '#f8f7f5', padding: '80px 48px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '0.72rem', letterSpacing: '0.28em',
            color: '#e91e8c', marginBottom: '40px', textTransform: 'uppercase',
          }}>
            Salon Information
          </p>

          {[
            { label: 'サロン名', value: "P's -hair atelier-（ピース）" },
            { label: '住所', value: '〒150-0002 東京都渋谷区渋谷1-22-10 TBミヤシタビル4F' },
            { label: 'TEL', value: '03-6411-4501' },
            { label: 'MAIL', value: 'info@ps-room.com' },
            { label: '営業時間', value: 'Weekday  12:00〜22:00\nSat  11:00〜21:00\nSun  11:00〜20:00' },
            { label: '定休日', value: '不定休' },
          ].map(({ label, value }, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '120px 1fr',
              padding: '20px 0',
              borderBottom: '1px solid #e8e8e8',
              gap: '24px',
            }}>
              <span style={{
                fontSize: '0.72rem', letterSpacing: '0.08em',
                color: '#aaaaaa', paddingTop: '2px',
              }}>
                {label}
              </span>
              <span style={{
                fontSize: '0.88rem', color: '#333333',
                lineHeight: 1.9, whiteSpace: 'pre-line',
              }}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
