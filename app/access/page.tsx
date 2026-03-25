export const metadata = {
  title: "Access | P's -hair atelier-",
};

export default function AccessPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">

      {/* Page heading */}
      <div className="flex items-center gap-5 mb-14">
        <div className="border-2 border-[#111] px-3 py-2 shadow-[2px_2px_0_#111] font-[family-name:var(--font-display)] text-xl leading-none">
          P<span className="text-[#e91e8c]">★</span>s
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl tracking-[0.15em]">
          ACCESS
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Map */}
        <div className="relative aspect-[4/3] border border-[#ccc] overflow-hidden">
          <div className="absolute inset-[6px] border border-black/10 pointer-events-none z-10" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7378285856595!2d139.70247431524905!3d35.659660980196456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca6d2d92fa7%3A0x91c3efedfc4a6e82!2sHair%20Atelier%20P's!5e0!3m2!1sja!2sjp!4v1600000000000"
            className="w-full h-full border-none"
            allowFullScreen
            loading="lazy"
          />
        </div>

        {/* Info */}
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-base tracking-[0.2em] mb-5">
            SHOP INFO
          </h2>
          <div className="divide-y divide-[#e0ddd8]">
            {[
              { label: 'ADD',   value: '〒150-0002\n渋谷区渋谷1-22-10\nTBミヤシタビル4F' },
              { label: 'TEL',   value: '03-6411-4501' },
              { label: 'MAIL',  value: 'info@ps-room.com', href: 'mailto:info@ps-room.com' },
              { label: 'OPEN',  value: 'Weekday　12:00 - 22:00\nSat　　　11:00 - 21:00\nSun　　　11:00 - 20:00' },
              { label: 'CLOSE', value: '不定休' },
              { label: '最寄駅', value: 'JR渋谷駅東口より徒歩5分\nメトロ渋谷駅B1番出口より徒歩3分' },
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

          <a
            href="https://www.google.com/maps/search/Hair+Atelier+P%27s+渋谷"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block w-full bg-[#e91e8c] text-white text-center py-3 text-sm tracking-widest hover:bg-[#c4177a] transition-colors"
          >
            MAP ▶
          </a>
        </div>
      </div>
    </div>
  );
}
