import { useRef } from 'react';
import { Slides } from '@/types/project';

interface ModalPaginationProps {
  currentSlide: number;
  totalSlides: number;
  slides: Slides[];
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export default function ModalPagination({
  currentSlide,
  slides,
  onSelect,
}: ModalPaginationProps) {
  const tabRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    tabRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    tabRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center border-t border-gray-200 justify-between">
      <button
        onClick={scrollLeft}
        className="p-2 shrink-0 hover:bg-gray-100 transition"
      >
        <svg className="w-4 h-4 fill-current text-gray-500">
          <use href="/sprite.svg#left" />
        </svg>
      </button>

      <div
        ref={tabRef}
        className="flex overflow-x-auto scrollbar-hide"
      >
        {slides.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`px-4 py-2.5 text-sm whitespace-nowrap transition border-b-2 ${
              idx === currentSlide
                ? 'border-gray-900 font-medium text-gray-900'
                : 'border-transparent text-gray-400 hover:text-gray-600'
            }`}
          >
            {slide.title}
          </button>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="p-2 shrink-0 hover:bg-gray-100 transition"
      >
        <svg className="w-4 h-4 fill-current text-gray-500">
          <use href="/sprite.svg#right" />
        </svg>
      </button>
    </div>
  );
}