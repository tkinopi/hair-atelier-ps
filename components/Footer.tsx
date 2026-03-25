import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: '#111111', color: '#666666',
      borderTop: '1px solid #222222',
      padding: '48px',
    }}>
      <div style={{
        maxWidth: '1000px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
        flexWrap: 'wrap', gap: '32px',
      }}>
        {/* Brand */}
        <div>
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.1rem', fontWeight: 300, letterSpacing: '0.12em',
            color: '#ffffff', marginBottom: '8px',
          }}>
            P&apos;s <span style={{ color: '#e91e8c', fontStyle: 'italic' }}>hair atelier</span>
          </p>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.04em', lineHeight: 1.9 }}>
            〒150-0002 東京都渋谷区渋谷1-22-10<br />
            TBミヤシタビル4F<br />
            Tel: 03-6411-4501
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '40px' }}>
          {[
            { href: '/', label: 'Home' },
            { href: '/concept', label: 'Concept' },
            { href: '/access', label: 'Access' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontSize: '0.73rem', letterSpacing: '0.1em',
              color: '#666666', textDecoration: 'none',
            }}>
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div style={{
        maxWidth: '1000px', margin: '32px auto 0',
        borderTop: '1px solid #222222', paddingTop: '24px',
        fontSize: '0.7rem', color: '#444444', letterSpacing: '0.04em',
      }}>
        © 2024 P&apos;s hair atelier. All Rights Reserved.
      </div>
    </footer>
  );
}
