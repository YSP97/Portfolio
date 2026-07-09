import { useEffect, useRef, useState } from 'react';
import useModalStore from '../stores/useModalStore.tsx';
import { gsap } from 'gsap';
import SlideBlockRenderer from '@/components/project/SlideBlockRenderer.tsx';
import Badge from './project/Badge.tsx';

export default function Modal() {
  const { isOpen, closeModal, modalContent } = useModalStore();
  const modalOverlayRef = useRef<HTMLDivElement | null>(null);
  const modalContentRef = useRef<HTMLDivElement | null>(null);
  const slideRef = useRef<HTMLDivElement | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = modalContent?.slides ?? [];
  const totalSlides = slides.length;

  // 모달 열릴 때 슬라이드 인덱스 초기화 + 등장 애니메이션
  useEffect(() => {
    if (isOpen && modalContentRef.current) {
      setCurrentSlide(0);

      gsap.fromTo(modalOverlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });

      gsap.fromTo(
        modalContentRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  // 슬라이드가 바뀔 때마다 콘텐츠 영역 트랜지션
  useEffect(() => {
    if (!slideRef.current) return;

    gsap.fromTo(
      slideRef.current,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.35, ease: 'power2.out' }
    );
  }, [currentSlide]);

  const goToPrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

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
        className="flex flex-col bg-white w-full max-w-4xl h-[85vh] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 영역 - 그대로 유지 */}
        <div className="flex items-start justify-between px-6 py-4 bg-zinc-200">
          <div className='flex-col gap-5'>
            <h1 className="text-xl font-bold tracking-tight">{modalContent.title}</h1>
            <div className='text-[12px] font-sora flex flex-col gap-1 mt-3'>
              <Badge text='개발 기간'/>
              <p>{modalContent.period}</p>
              <Badge text='역할'/>
              <p className="text-xs mt-0.5"> {modalContent.role}({modalContent.teamSize})</p>
            </div>
            <div className='text-[12px] font-sora flex gap-3 mt-3'>
                {
                modalContent.github && (
                  <a href={modalContent.github} className='flex gap-1 items-center'>
                    <svg className="w-4 h-4 fill-current text-gray-700">
                      <use href="/sprite.svg#github" />
                    </svg>
                    <p>Github</p>
                  </a>
                )
              }
                {
                modalContent.deployLink && (
                  <a href={modalContent.deployLink} className='flex gap-2 items-center'>
                    <svg className="w-3 h-3 fill-current text-gray-700">
                      <use href="/sprite.svg#ReadMore" />
                    </svg>
                    <p>배포 링크</p>
                  </a>
                )
              }
            </div>
          </div>
          <button
            onClick={closeModal}
            className="text-xl font-semibold transition"
            aria-label="모달 닫기"
          >
            <svg className="w-5 h-5">
              <use href='/sprite.svg#close' />
            </svg>
          </button>
        </div>

        {/* 슬라이드 영역 */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {totalSlides > 0 ? (
            <>
              <div ref={slideRef} className="flex-1 overflow-y-auto space-y-4">
                <section className="p-6 space-y-4">
                  {/* 슬라이드 타이틀 */}
                  <div className="border-b pb-2.5">
                    <h2 className="text-xl font-extrabold mt-0.5">{slide.title}</h2>
                    {slide.subTitle && (
                      <p className="text-xs text-gray-600/90 font-medium mt-1">{slide.subTitle}</p>
                    )}
                  </div>

                  {/* 슬라이드 */}
                  <div className="space-y-2">
                    {slide.blocks.map((block, bIdx) => (
                      <SlideBlockRenderer key={bIdx} block={block} />
                    ))}
                  </div>
                </section>
              </div>

              {/* 페이지네이션 */}
              <div className="flex items-center justify-between py-1 px-2 border-t border-gray-200">
                <button
                  onClick={goToPrev}
                  disabled={currentSlide === 0}
                  className="text-sm font-medium p-2 rounded-full transition disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                  <svg className="w-6 h-6 fill-current text-white">
                    <use href="/sprite.svg#left" />
                  </svg>
                </button>

                {/* 인디케이터 (점) */}
                <div className="flex items-center gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`${idx + 1}번 슬라이드로 이동`}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentSlide ? 'bg-gray-900 w-5' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={goToNext}
                  disabled={currentSlide === totalSlides - 1}
                  className="text-sm p-1 rounded-full transition disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                  <svg className="w-6 h-6 fill-current text-white">
                    <use href="/sprite.svg#right" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-sm text-center py-12">상세 슬라이드 데이터가 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}