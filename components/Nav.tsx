'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/',        label: 'Home' },
  { href: '/concept', label: 'Concept' },
  { href: '/access',  label: 'Access' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: '#111111',
      height: '64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px',
      borderBottom: '1px solid #222222',
    }}>
      <Link href="/" style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: '1.2rem', fontWeight: 300, letterSpacing: '0.12em',
        color: '#ffffff', textDecoration: 'none',
      }}>
        P&apos;s{' '}
        <span style={{ color: '#e91e8c', fontStyle: 'italic', fontWeight: 400 }}>
          hair atelier
        </span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} style={{
            fontSize: '0.75rem', letterSpacing: '0.12em',
            color: pathname === href ? '#ffffff' : '#777777',
            textDecoration: 'none', transition: 'color 0.2s',
            paddingBottom: '2px',
            borderBottom: pathname === href ? '1px solid #e91e8c' : '1px solid transparent',
          }}>
            {label}
          </Link>
        ))}
        <a
          href="https://beauty.hotpepper.jp/slnH000572344/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#e91e8c', color: '#ffffff',
            padding: '9px 22px',
            fontSize: '0.73rem', letterSpacing: '0.08em',
            textDecoration: 'none',
          }}
        >
          予約する
        </a>
      </div>
    </nav>
  );
}
