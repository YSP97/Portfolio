import { useEffect, useRef } from 'react';
import useModalStore from '../stores/useModalStore.tsx';
import { gsap } from 'gsap';
import SlideBlockRenderer from '@/components/project/SlideBlockRenderer.tsx';

export default function Modal() {
  const { isOpen, closeModal, modalContent } = useModalStore();
  const modalOverlayRef = useRef<HTMLDivElement | null>(null);
  const modalContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && modalContentRef.current) {
      gsap.fromTo(modalOverlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      
      gsap.fromTo(
        modalContentRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [isOpen]);

  if (!isOpen || !modalContent) return null;

  return (
    <div
      ref={modalOverlayRef}
      className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4"
      onClick={closeModal}
    >
      <div
        ref={modalContentRef}
        className="flex flex-col bg-white rounded-xl w-full max-w-4xl h-[85vh]  shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 영역 */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-100 text-white">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-zinc-100">{modalContent.title}</h1>
            <p className="text-xs text-zinc-400 mt-0.5">⚙️ {modalContent.role}</p> 
            <p>{modalContent.teamSize}</p>
          </div>
          <button
            onClick={closeModal}
            className="text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold px-4 py-2 rounded-lg transition"
            aria-label="모달 닫기"
          >
            닫기
          </button>
        </div>

        {/* 슬라이드 컨텐츠 스크롤 영역 */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-zinc-800">
          {modalContent.slides && modalContent.slides.length > 0 ? (
            modalContent.slides.map((slide, sIdx) => (
              <section 
                key={slide.id} 
                className="p-6 bg-zinc-900/30 border border-zinc-900 rounded-xl space-y-4"
              >
                {/* 슬라이드 타이틀 */}
                <div className="border-b border-zinc-800 pb-2.5">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500">Slide 0{sIdx + 1}</span>
                  <h2 className="text-xl font-extrabold text-zinc-100 mt-0.5">{slide.title}</h2>
                  {slide.subTitle && (
                    <p className="text-xs text-amber-500/90 font-medium mt-1">💡 {slide.subTitle}</p>
                  )}
                </div>

                {/* 슬라이드 내부 블록 순회 */}
                <div className="space-y-2">
                  {slide.blocks.map((block, bIdx) => (
                    <SlideBlockRenderer key={bIdx} block={block} />
                  ))}
                </div>
              </section>
            ))
          ) : (
            <p className="text-zinc-500 text-sm text-center py-12">상세 슬라이드 데이터가 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}