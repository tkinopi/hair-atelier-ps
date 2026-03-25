export const metadata = {
  title: "Contact | P's -hair atelier-",
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 md:px-12 py-16">

      {/* Page heading */}
      <div className="flex items-center gap-5 mb-10">
        <div className="border-2 border-[#111] px-3 py-2 shadow-[2px_2px_0_#111] font-[family-name:var(--font-display)] text-xl leading-none">
          P<span className="text-[#e91e8c]">★</span>s
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl tracking-[0.15em]">
          CONTACT
        </h1>
      </div>

      <p className="font-[family-name:var(--font-serif)] text-sm text-[#555] leading-[2] mb-10">
        ご予約・お問い合わせはお電話またはメールにてお気軽にどうぞ。<br />
        TEL：<strong className="text-[#111]">03-6411-4501</strong><br />
        MAIL：<a href="mailto:info@ps-room.com" className="text-[#e91e8c] hover:underline">info@ps-room.com</a>
      </p>

      <form className="space-y-5">
        {[
          { label: 'お名前', id: 'name',  type: 'text',  placeholder: '山田 花子',           required: true },
          { label: 'メールアドレス', id: 'email', type: 'email', placeholder: 'example@email.com', required: true },
          { label: 'お電話番号', id: 'tel', type: 'tel', placeholder: '090-0000-0000', required: false },
        ].map(({ label, id, type, placeholder, required }) => (
          <div key={id}>
            <label htmlFor={id} className="block text-xs tracking-wider text-[#555] mb-2">
              {label}
              {required && <span className="text-[#e91e8c] ml-1 text-[10px]">必須</span>}
            </label>
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              className="w-full border border-[#ccc] px-4 py-3 text-sm focus:outline-none focus:border-[#e91e8c] bg-white"
            />
          </div>
        ))}

        <div>
          <label htmlFor="menu" className="block text-xs tracking-wider text-[#555] mb-2">ご希望メニュー</label>
          <select
            id="menu"
            className="w-full border border-[#ccc] px-4 py-3 text-sm focus:outline-none focus:border-[#e91e8c] bg-white appearance-none"
          >
            <option value="">選択してください</option>
            <option>カット</option>
            <option>カラー</option>
            <option>パーマ</option>
            <option>縮毛矯正 / 髪質改善</option>
            <option>その他</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs tracking-wider text-[#555] mb-2">ご希望日時・メッセージ</label>
          <textarea
            id="message"
            rows={5}
            placeholder="ご希望の日時やご要望などをご記入ください"
            className="w-full border border-[#ccc] px-4 py-3 text-sm focus:outline-none focus:border-[#e91e8c] bg-white resize-y"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#111] text-white py-4 text-sm tracking-widest hover:bg-[#e91e8c] transition-colors mt-2"
        >
          送信する
        </button>
      </form>
    </div>
  );
}
