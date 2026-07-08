'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ImageBlock({
  src,
  caption,
  size = 'cover',
}: {
  src: string;
  caption?: string;
  size?: 'contain' | 'cover';
}) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <figure className="cursor-zoom-in" onClick={() => setIsZoomed(true)}>
        <div className="relative w-full h-64 rounded-lg overflow-hidden border border-zinc-100 bg-zinc-50">
          <Image
            src={src}
            alt={caption ?? ''}
            fill
            className={size === 'contain' ? 'object-contain' : 'object-cover'}
          />
        </div>
        {caption && (
          <figcaption className="text-xs text-zinc-400 mt-1.5">
            {caption}
          </figcaption>
        )}
      </figure>

      {isZoomed && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center cursor-zoom-out p-6"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative w-full h-full max-w-5xl">
            <Image src={src} alt={caption ?? ''} fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}