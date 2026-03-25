import Image from 'next/image';

export const metadata = {
  title: "Concept | P's -hair atelier-",
};

export default function ConceptPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">

      {/* Page heading */}
      <div className="flex items-center gap-5 mb-14">
        <div className="border-2 border-[#111] px-3 py-2 shadow-[2px_2px_0_#111] font-[family-name:var(--font-display)] text-xl leading-none">
          P<span className="text-[#e91e8c]">★</span>s
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl tracking-[0.15em]">
          CONCEPT
        </h1>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Ornate text frame */}
        <div className="ornate-frame">
          <div className="corner-tr" />
          <div className="corner-bl" />
          <p className="font-[family-name:var(--font-serif)] text-base text-center leading-[2.6]">
            ピースの語源は&quot;piece=かけら&quot;。<br /><br />
            小さなpieceが集まり、<br />
            素敵なpieceが出来ていく。<br /><br />
            そんなたくさんの出会いが<br />
            生まれる空間にしたい。<br /><br />
            そういう想いも込めて誕生した<br />
            アットホームなヘアアトリエ。
          </p>
        </div>

        {/* Photo */}
        <div className="relative aspect-[4/3] border border-[#ccc] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80"
            alt="サロン内観"
            fill
            className="object-cover"
          />
          <div className="absolute inset-[6px] border border-black/10 pointer-events-none z-10" />
        </div>
      </div>

      {/* Info block */}
      <div className="mt-14 pt-10 border-t border-[#e0ddd8]">
        <h2 className="font-[family-name:var(--font-display)] text-base tracking-[0.2em] mb-5">
          SALON INFO
        </h2>
        <div className="divide-y divide-[#e0ddd8]">
          {[
            { label: 'ADD',   value: '〒150-0002 渋谷区渋谷1-22-10 TBミヤシタビル4F' },
            { label: 'TEL',   value: '03-6411-4501' },
            { label: 'MAIL',  value: 'info@ps-room.com', href: 'mailto:info@ps-room.com' },
            { label: 'OPEN',  value: 'Weekday　12:00 - 22:00\nSat　　　11:00 - 21:00\nSun　　　11:00 - 20:00' },
            { label: 'CLOSE', value: '不定休' },
          ].map(({ label, value, href }) => (
            <div key={label} className="flex py-3 text-sm gap-4">
              <span className="w-16 text-[#888] shrink-0">{label}</span>
              <span className="text-[#111] whitespace-pre-line">
                {href ? (
                  <a href={href} className="text-[#e91e8c] hover:underline">{value}</a>
                ) : value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
