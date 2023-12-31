import './globals.css';

import localFont from 'next/font/local';
import Image from 'next/image';

import BackgroundVideo from '@/components/BackgroundVideo';
import Navigation from '@/components/Navigation';

const caslon = localFont({
  src: './caslon.woff2',
  display: 'swap',
});

export const metadata = {
  title: 'MIGIUI',
  description: `우리는 항상 '미지'의 대상을 찾기를 원한다`,
};

export default function RootLayout({ children }) {
  return (
    <html id="home" lang="ko" className="scroll-smooth">
      <head>
        <script>{`setTimeout(function(){(document.body.style.opacity = 1)}, 700)`}</script>
      </head>
      <body className={`opacity-0 transition-opacity duration-300 ${caslon.className}`}>
        <img alt="preview" src="/preview.jpg" style={{ display: 'none' }} />
        <BackgroundVideo />

        <main>
          <a href="#home">
            <Image
              className="fixed right-0 top-0 z-20 m-8 w-20"
              src="/logo.svg"
              alt="home"
              width={120}
              height={360}
            />
          </a>
          <div className="fixed flex h-[calc(100dvh)] w-screen flex-col items-center justify-center">
            <Navigation />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
