import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-[#666] px-8 py-5 flex flex-wrap justify-between items-center gap-3 text-xs">
      <div className="flex flex-wrap gap-4 items-center">
        {[
          { href: '/',        label: 'Home' },
          { href: '/concept', label: 'Concept' },
          { href: '/access',  label: 'Access' },
          { href: '/contact', label: 'Contact' },
        ].map(({ href, label }, i, arr) => (
          <span key={href} className="flex items-center gap-4">
            <Link href={href} className="hover:text-white transition-colors">{label}</Link>
            {i < arr.length - 1 && <span className="text-[#444]">|</span>}
          </span>
        ))}
        <span className="text-[#444]">|</span>
        <a
          href="https://my.yoyakul.jp/hp/ps4501/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e91e8c] hover:text-[#c4177a] transition-colors"
        >
          予約する
        </a>
      </div>
      <span className="text-[#555]">Copyright©P&apos;s All Rights Reserved.</span>
    </footer>
  );
}
