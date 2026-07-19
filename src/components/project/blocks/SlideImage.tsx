import { useState } from 'react';
import { createPortal } from 'react-dom';
import { SlideBlock } from '@/types/project';
import { useEscapeClose } from '@/hooks';

type ImageBlockType = Extract<SlideBlock, { type: 'image' }>;

interface SlideImageProps {
  block: ImageBlockType;
}

export default function SlideImage({ block }: SlideImageProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEscapeClose(isExpanded, () => setIsExpanded(false));

  const isPlaceholder = block.src === '/';

  return (
    <>
      <div className="my-4 flex flex-col items-center">
        <div
          className={`w-full overflow-hidden rounded bg-zinc-800 flex items-center justify-center ${
            !isPlaceholder ? 'cursor-zoom-in' : ''
          }`}
          onClick={() => !isPlaceholder && setIsExpanded(true)}
        >
          {isPlaceholder ? (
            <div className="p-8 text-zinc-500 text-sm text-center">
              📷 {block.caption || '이미지 영역 (와이어프레임)'}
            </div>
          ) : (
            <img
              src={block.src}
              alt={block.caption || 'slide image'}
              className={`w-full h-full ${block.size === 'cover' ? 'object-cover' : 'object-contain'}`}
            />
          )}
        </div>
        {block.caption && (
          <span className="text-xs text-zinc-500 mt-1.5">{block.caption}</span>
        )}
      </div>

      {isExpanded &&
        !isPlaceholder &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsExpanded(false)}
          >
            <img
              src={block.src}
              alt={block.caption || 'slide image'}
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setIsExpanded(false)}
              aria-label="이미지 닫기"
              className="absolute top-4 right-4 text-white/80 hover:text-white transition"
            >
              <svg className="w-6 h-6 fill-current">
                <use href="/sprite.svg#close" />
              </svg>
            </button>
            {block.caption && (
              <span className="absolute bottom-6 text-white/70 text-sm">
                {block.caption}
              </span>
            )}
          </div>,
          document.body
        )}
    </>
  );
}
