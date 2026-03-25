'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/',         label: 'Home' },
  { href: '/concept',  label: 'Concept' },
  { href: '/access',   label: 'Access' },
  { href: '/contact',  label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111] h-[50px] flex items-center justify-center">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`px-5 h-full flex items-center text-sm tracking-widest transition-colors ${
            pathname === href ? 'text-white' : 'text-[#999] hover:text-white'
          }`}
        >
          {label}
        </Link>
      ))}
      <a
        href="https://my.yoyakul.jp/hp/ps4501/index.html"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-1 px-5 h-full flex items-center text-sm tracking-widest bg-[#e91e8c] text-white hover:bg-[#c4177a] transition-colors"
      >
        予約する
      </a>
    </nav>
  );
}
