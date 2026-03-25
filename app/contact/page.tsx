import ContactForm from './ContactForm';

export const metadata = {
  title: "Contact | P's -hair atelier-",
};

export default function ContactPage() {
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
          Get in Touch
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(2.8rem, 6vw, 5rem)',
          fontWeight: 300, letterSpacing: '0.08em', color: '#ffffff', lineHeight: 1,
        }}>
          Contact
        </h1>
      </section>

      {/* ── Contact Content ── */}
      <section style={{ background: '#ffffff', padding: '80px 48px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>

          {/* Direct Contact */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px',
            background: '#ebebeb', marginBottom: '64px',
          }}>
            {[
              { label: 'TEL', value: '03-6411-4501', note: '営業時間内にお電話ください' },
              { label: 'MAIL', value: 'info@ps-room.com', note: '2〜3営業日以内にご返信します' },
            ].map(({ label, value, note }) => (
              <div key={label} style={{ background: '#ffffff', padding: '36px 32px' }}>
                <p style={{
                  fontSize: '0.65rem', letterSpacing: '0.2em',
                  color: '#aaaaaa', marginBottom: '10px',
                }}>
                  {label}
                </p>
                <p style={{
                  fontSize: '1rem', color: '#111111', marginBottom: '8px',
                  fontFamily: "'Cormorant Garamond', serif", letterSpacing: '0.06em',
                }}>
                  {value}
                </p>
                <p style={{ fontSize: '0.72rem', color: '#aaaaaa' }}>{note}</p>
              </div>
            ))}
          </div>

          {/* Reservation CTA */}
          <div style={{
            background: '#f8f7f5', padding: '48px 40px',
            textAlign: 'center', marginBottom: '64px',
            borderTop: '2px solid #e91e8c',
          }}>
            <p style={{
              fontFamily: "'Noto Serif JP', serif",
              fontSize: '1rem', color: '#111111', marginBottom: '8px', fontWeight: 300,
            }}>
              ご予約はホットペッパービューティーから
            </p>
            <p style={{ fontSize: '0.78rem', color: '#888888', marginBottom: '28px' }}>
              24時間いつでもご予約いただけます
            </p>
            <a
              href="https://beauty.hotpepper.jp/slnH000572344/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: '#e91e8c', color: '#ffffff',
                padding: '14px 48px',
                fontSize: '0.78rem', letterSpacing: '0.1em',
                textDecoration: 'none',
              }}
            >
              予約する
            </a>
          </div>

          {/* Contact Form (Client Component) */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
