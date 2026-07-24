import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';

const ANIMATION = {
  overlayFadeIn: 0.3,
  contentPopIn: 0.5,
  slideTransition: 0.35,
};

export function useModalAnimation(
  isOpen: boolean,
  overlayRef: RefObject<HTMLDivElement | null>,
  contentRef: RefObject<HTMLDivElement | null>,
  onOpen?: () => void
) {
  useEffect(() => {
    if (isOpen && contentRef.current) {
      onOpen?.();

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: ANIMATION.overlayFadeIn }
      );

      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: ANIMATION.contentPopIn,
          ease: 'power3.out',
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
}

export function useSlideTransition(
  currentSlide: number,
  slideRef: RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    if (!slideRef.current) return;

    gsap.fromTo(
      slideRef.current,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: ANIMATION.slideTransition,
        ease: 'power2.out',
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);
}
