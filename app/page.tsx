import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-50px)] bg-white flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">

      {/* Background dot texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative sketched objects */}
      <span className="absolute right-[8%] top-[15%] text-5xl opacity-[0.08] -rotate-[30deg] select-none">✂</span>
      <span className="absolute left-[6%] bottom-[20%] text-4xl opacity-[0.07] rotate-[15deg] select-none">⊹</span>
      <span className="absolute right-[14%] bottom-[25%] text-3xl opacity-[0.18] text-[#e91e8c] select-none">★</span>

      {/* Logo frame */}
      <div className="relative z-10 text-center mb-10">
        <div className="inline-block border-2 border-[#111] px-6 py-4 shadow-[3px_3px_0_#111] relative">
          <span className="absolute -top-3.5 left-3 text-[#e91e8c] text-sm leading-none">★</span>
          <span className="absolute -top-3.5 right-3 text-[#e91e8c] text-sm leading-none">★</span>
          <p className="font-[family-name:var(--font-display)] text-6xl leading-none tracking-tight">
            P<span className="text-[#e91e8c]">★</span>s
          </p>
          <p className="font-[family-name:var(--font-display)] text-sm tracking-[0.25em] mt-2 uppercase">
            Hair Atelier
          </p>
        </div>
      </div>

      {/* Sketch divider */}
      <div className="sketch-divider mb-8 relative z-10">
        <span className="text-[#e91e8c]">✦</span>
      </div>

      {/* Tagline */}
      <p className="relative z-10 font-[family-name:var(--font-serif)] text-center text-base md:text-lg leading-[2.4] mb-10">
        ピースの語源は &quot;piece = かけら&quot;。<br />
        小さな piece が集まり、素敵な piece が出来ていく。<br />
        <span className="text-sm text-[#888]">渋谷のアットホームなヘアアトリエ。</span>
      </p>

      {/* Sketch box */}
      <div className="relative z-10 border border-[#bbb] px-10 py-8 max-w-lg w-full text-center mb-10">
        <div className="absolute inset-1 border border-dashed border-[#ccc] pointer-events-none" />
        <p className="font-[family-name:var(--font-serif)] text-sm text-[#555] leading-[2.2]">
          渋谷界隈でNO.1アットホームなサロン。<br />
          オシャレにプラスαな提案で多くの方に親しまれています。<br />
          カラーの提案もお任せください。
        </p>
      </div>

      {/* CTA buttons */}
      <div className="relative z-10 flex flex-wrap gap-4 justify-center">
        <Link
          href="/concept"
          className="bg-[#111] text-white px-8 py-3 text-sm tracking-widest hover:opacity-80 transition-opacity"
        >
          Concept
        </Link>
        <Link
          href="/access"
          className="bg-[#111] text-white px-8 py-3 text-sm tracking-widest hover:opacity-80 transition-opacity"
        >
          Access
        </Link>
        <a
          href="https://my.yoyakul.jp/hp/ps4501/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#e91e8c] text-white px-8 py-3 text-sm tracking-widest hover:bg-[#c4177a] transition-colors"
        >
          予約する
        </a>
      </div>
    </div>
  );
}
