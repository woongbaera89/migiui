'use client';

import Vimeo from '@u-wave/react-vimeo';
import { useState } from 'react';

export default function BackgroundVideo() {
  const [opacity, setOpacity] = useState(0);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden">
      <Vimeo
        video="866039960"
        autoplay
        loop
        muted
        background
        playsInline
        controls={false}
        responsive
        onPlaying={() => {
          setOpacity(1);
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{
          width: '100vw',
          height: '56.25vw',
          minHeight: '100vh',
          minWidth: '177.77vh',
          opacity,
        }}
      />
    </div>
  );
}
