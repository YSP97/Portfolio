interface ModalPaginationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export default function ModalPagination({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onSelect,
}: ModalPaginationProps) {
  return (
    <div className="flex items-center justify-between py-1 px-2 border-t border-gray-200">
      <button
        onClick={onPrev}
        disabled={currentSlide === 0}
        className="text-sm font-medium p-2 rounded-full transition disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100"
      >
        <svg className="w-6 h-6 fill-current text-white">
          <use href="/sprite.svg#left" />
        </svg>
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            aria-label={`${idx + 1}번 슬라이드로 이동`}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentSlide ? 'bg-gray-900 w-5' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="text-sm p-1 rounded-full transition disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100"
      >
        <svg className="w-6 h-6 fill-current text-white">
          <use href="/sprite.svg#right" />
        </svg>
      </button>
    </div>
  );
}
