import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: "P's -hair atelier- | 美容室 ピース 渋谷",
  description:
    "渋谷のアットホームなヘアアトリエ「P's ピース」。piece＝かけらが集まる、素敵な空間。カット・カラー・パーマ。渋谷区渋谷1-22-10 TBミヤシタビル4F。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Noto+Serif+JP:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Nav />
        <main style={{ flex: 1, paddingTop: '64px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
