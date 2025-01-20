import { Link } from 'react-scroll';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function MoveUp() {
  const moveUpRef = useRef<SVGSVGElement | null>(null);

  const tl = gsap.timeline({ delay: 3 });

  useEffect(() => {
    if (moveUpRef.current) {
      // 초기 등장 애니메이션
      tl.fromTo(
        moveUpRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 3, ease: 'power3.out' }
      );
    }
  }, []);

  const handleMouseEnter = (el: SVGSVGElement) => {
    // 마우스 올렸을 때 튀어오르는 애니메이션
    gsap.to(el, {
      y: -10,
      scale: 1.1,
      duration: 0.3,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = (el: SVGSVGElement) => {
    // 마우스 뗐을 때 원래 위치로 복귀
    gsap.to(el, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: 'power3.out',
    });
  };

  return (
    <Link to="top" smooth={true} duration={700} title="위로 이동">
      <svg
        ref={moveUpRef}
        className="w-14 h-14 cursor-pointer max-sm:w-10"
        onMouseEnter={() => handleMouseEnter(moveUpRef.current!)}
        onMouseLeave={() => handleMouseLeave(moveUpRef.current!)}
      >
        <use href="/sprite.svg#up-circle" />
      </svg>
    </Link>
  );
}
