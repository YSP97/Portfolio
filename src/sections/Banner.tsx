import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Contacts } from '@/components';

export default function Banner() {
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const tl = gsap.timeline({ delay: 1 });

  useEffect(() => {
    // 텍스트 애니메이션
    tl.fromTo(
      linesRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: 'power3.out',
        stagger: 0.2,
      }
    )
      // 이미지 애니메이션
      .fromTo(
        imgRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: 'power3.out',
        },
        '-=2.5'
      );
  }, []);

  return (
    <section className="bg-white px-20 pt-[104px] w-full">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="text-5xl flex flex-col gap-5 pt-[60px] max-md:text-[30px] max-lg:text-[40px]">
          <div ref={(el) => (linesRef.current[0] = el)}>안녕하세요.</div>
          <div
            className="flex gap-4 font-extrabold max-md:gap-2"
            ref={(el) => (linesRef.current[1] = el)}
          >
            <span>프론트엔드</span>
            <span className="text-white text-stroke">개발자</span>
          </div>
          <div ref={(el) => (linesRef.current[2] = el)}>
            <span className="font-extrabold">박윤선</span>
            <span>입니다.</span>
          </div>
          <p
            className="text-sm max-w-[600px] text-zinc-500"
            ref={(el) => (linesRef.current[3] = el)}
          >
            사용자의 관점에서 고민하는 것을 즐기는 프론트엔드 개발자 박윤선입니다.
            기획·운영 업무를 경험하며 서비스가 사용자에게 도달하기까지의 전체 흐름을 이해하게 되었고, 이는 화면 너머의 맥락까지 고려하는 개발자로 성장하는 밑거름이 되었습니다.
            다양한 직군의 동료 및 클라이언트와 소통하며 문제를 함께 풀어온 경험을 바탕으로, 지금도 사용자 경험 개선을 위해 새로운 기술과 라이브러리를 적극적으로 학습하고 적용하고 있습니다.
          </p>
          <Contacts />
        </div>
        <img
          ref={(el) => (imgRef.current = el)}
          src="/assets/girl.svg"
          alt="Developer Illustration"
          className="min-w-[300px] md:w-[630px] mb-4 md:mb-0"
        />
      </div>
    </section>
  );
}
