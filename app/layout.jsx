import './globals.css';

import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MIGIUI',
  description: `우리는 항상 '미지'의 대상을 찾기를 원한다`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden">
          <iframe
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.77vh',
            }}
            src="https://player.vimeo.com/video/866039960?h=9c3dca2c5c&autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1"
            allow="autoplay; fullscreen; picture-in-picture"
            title="migiui"
          />
        </div>
        <Script src="https://player.vimeo.com/api/player.js" />
        <main>{children}</main>
      </body>
    </html>
  );
}
