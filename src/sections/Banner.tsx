import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Contacts from '../components/Contacts.tsx';

export default function Banner() {
  const linesRef = useRef<HTMLDivElement[]>([]);
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
        duration: 2.5,
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
        '-=1.5' // 텍스트 애니메이션과 동시 시작
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
            안녕하세요. 사용자의 관점에서 고민하는 것을 즐기는 프론트엔드 개발자
            박윤선입니다. 사용자에게 웹을 통한 다양하고 편안한 경험을 제공하고 싶어서 개발자로 전향하게 되었습니다. 사용자와의 소통이나 작업하는 동료들과의 피드백을
            중요시하여 다양한 사람들과 자주 소통하고 사용자의 경험을 위한 개선을 위해 노력하고
            있습니다. 다양한 라이브러리와 API를 찾아보거나 새로운 기술을
            공부하여 적용하는 것을 좋아하여 새로운 도전을 나서고 있습니다. 
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
