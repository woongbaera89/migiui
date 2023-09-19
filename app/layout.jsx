import './globals.css';

import { Inter } from 'next/font/google';

import BackgroundVideo from '@/components/BackgroundVideo';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata = {
  title: 'MIGIUI',
  description: `우리는 항상 '미지'의 대상을 찾기를 원한다`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <img alt="preview" src="/preview.jpg" style={{ display: 'none' }} />
        <BackgroundVideo />
        {children}
      </body>
    </html>
  );
}
