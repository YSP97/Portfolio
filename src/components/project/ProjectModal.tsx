'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Project } from '../../types/project';
import SlideBlockRenderer from './SlideBlockRenderer';

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.35, ease: 'power3.out' }
      );
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const activeSlide = project.slides[activeSlideIndex];
  const isFirst = activeSlideIndex === 0;
  const isLast = activeSlideIndex === project.slides.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center md:p-6"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full h-full md:h-auto md:max-h-[85vh] md:max-w-5xl md:rounded-2xl overflow-hidden flex flex-col"
      >
        <div className="flex items-start justify-between px-5 py-4 border-b border-zinc-100 shrink-0">
          <div>
            <h2 className="text-lg font-medium">{project.title}</h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              {project.period} · {project.role} · {project.teamSize}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="모달 닫기"
            className="w-8 h-8 rounded-full hover:bg-zinc-100 flex items-center justify-center shrink-0"
          >
          </button>
        </div>

        <div className="flex gap-2 px-5 py-3 overflow-x-auto border-b border-zinc-100 shrink-0">
          {project.slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlideIndex(i)}
              className={`text-xs px-3 py-1.5 rounded-full border transition-colors shrink-0 whitespace-nowrap ${
                i === activeSlideIndex
                  ? 'bg-zinc-900 text-white border-zinc-900'
                  : 'border-zinc-200 text-zinc-500 hover:bg-zinc-50'
              }`}
            >
              {slide.title}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 md:px-8">
          {activeSlide.subTitle && (
            <p className="text-sm text-zinc-500 mb-4">{activeSlide.subTitle}</p>
          )}
          <div className="flex flex-col gap-6">
            {activeSlide.blocks.map((block, i) => (
              <SlideBlockRenderer key={i} block={block} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between px-5 py-3 border-t border-zinc-100 shrink-0">
          <button
            disabled={isFirst}
            onClick={() => setActiveSlideIndex((i) => i - 1)}
            className="text-sm flex items-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            이전
          </button>
          <span className="text-xs text-zinc-400">
            {activeSlideIndex + 1} / {project.slides.length}
          </span>
          <button
            disabled={isLast}
            onClick={() => setActiveSlideIndex((i) => i + 1)}
            className="text-sm flex items-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}