'use client';

export default function ContactForm() {
  return (
    <div>
      <p style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: '0.72rem', letterSpacing: '0.28em',
        color: '#e91e8c', marginBottom: '32px', textTransform: 'uppercase',
      }}>
        Message Form
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        {[
          { label: 'お名前', type: 'text', required: true, placeholder: '山田 花子' },
          { label: 'メールアドレス', type: 'email', required: true, placeholder: 'example@email.com' },
          { label: 'お電話番号', type: 'tel', required: false, placeholder: '090-0000-0000' },
        ].map(({ label, type, required, placeholder }) => (
          <div key={label} style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block', fontSize: '0.75rem', letterSpacing: '0.08em',
              color: '#555555', marginBottom: '8px',
            }}>
              {label}
              {required && (
                <span style={{ color: '#e91e8c', fontSize: '0.65rem', marginLeft: '6px' }}>
                  必須
                </span>
              )}
            </label>
            <input
              type={type}
              placeholder={placeholder}
              style={{
                width: '100%', padding: '12px 16px',
                border: '1px solid #e8e8e8', outline: 'none',
                fontSize: '0.88rem', background: '#ffffff',
                color: '#111111', borderRadius: 0,
              }}
            />
          </div>
        ))}

        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'block', fontSize: '0.75rem', letterSpacing: '0.08em',
            color: '#555555', marginBottom: '8px',
          }}>
            ご希望のメニュー
          </label>
          <select style={{
            width: '100%', padding: '12px 16px',
            border: '1px solid #e8e8e8', outline: 'none',
            fontSize: '0.88rem', background: '#ffffff',
            color: '#111111', borderRadius: 0,
            appearance: 'none',
          }}>
            <option value="">選択してください</option>
            <option>カット</option>
            <option>カラー</option>
            <option>パーマ</option>
            <option>トリートメント</option>
            <option>その他 / まずは相談</option>
          </select>
        </div>

        <div style={{ marginBottom: '36px' }}>
          <label style={{
            display: 'block', fontSize: '0.75rem', letterSpacing: '0.08em',
            color: '#555555', marginBottom: '8px',
          }}>
            ご質問・メッセージ
          </label>
          <textarea
            rows={5}
            placeholder="ご希望の日時やご質問などをお気軽にどうぞ"
            style={{
              width: '100%', padding: '12px 16px',
              border: '1px solid #e8e8e8', outline: 'none',
              fontSize: '0.88rem', background: '#ffffff',
              color: '#111111', resize: 'vertical', borderRadius: 0,
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%', background: '#111111', color: '#ffffff',
            border: 'none', padding: '16px',
            fontSize: '0.78rem', letterSpacing: '0.14em',
            cursor: 'pointer',
          }}
        >
          送信する
        </button>
      </form>
    </div>
  );
}
