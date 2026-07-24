import { useEffect, useRef, useState } from 'react';
import useModalStore from '@/stores/useModalStore.tsx';
import { SlideBlockRenderer, ModalHeader, ModalPagination } from '@/components';
import {
  useBodyScrollLock,
  useEscapeClose,
  useModalAnimation,
  useSlideTransition,
} from '@/hooks';

export default function Modal() {
  const { isOpen, closeModal, modalContent } = useModalStore();
  const modalOverlayRef = useRef<HTMLDivElement | null>(null);
  const modalContentRef = useRef<HTMLDivElement | null>(null);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);


  useEffect(() => {
    setCurrentSlide(0);
  }, [modalContent]);

  const slides = modalContent?.slides ?? [];
  const totalSlides = slides.length;

  useBodyScrollLock(isOpen);
  useEscapeClose(isOpen, closeModal);
  useModalAnimation(isOpen, modalOverlayRef, modalContentRef, () =>
    setCurrentSlide(0)
  );
  useSlideTransition(currentSlide, slideRef);

  const goToPrev = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));
  const goToNext = () =>
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));

  if (!isOpen || !modalContent) return null;

  const slide = slides[currentSlide];

  return (
    <div
      ref={modalOverlayRef}
      className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4"
      onClick={closeModal}
    >
      <div
        ref={modalContentRef}
        className="flex flex-col bg-white w-full max-w-6xl h-[85vh] shadow-2xl overflow-hidden rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader project={modalContent} onClose={closeModal} />

        <div className="flex-1 overflow-hidden flex flex-col">
          {totalSlides > 0 ? (
            <>
              <div ref={slideRef} className="flex-1 overflow-y-auto space-y-4">
                <section className="p-10 space-y-4">
                  <div className="border-b pb-2.5">
                    <h2 className="text-xl font-extrabold mt-0.5">
                      {slide.title}
                    </h2>
                    {slide.subTitle && (
                      <p className="text-xs text-gray-600/90 font-medium mt-1">
                        {slide.subTitle}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    {slide.blocks.map((block, bIdx) => (
                      <SlideBlockRenderer key={bIdx} block={block} />
                    ))}
                  </div>
                </section>
              </div>

              <ModalPagination
                currentSlide={currentSlide}
                totalSlides={totalSlides}
                onPrev={goToPrev}
                onNext={goToNext}
                onSelect={setCurrentSlide}
                slides={slides}  
              />
            </>
          ) : (
            <p className="text-gray-500 text-sm text-center py-12">
              상세 슬라이드 데이터가 없습니다.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
