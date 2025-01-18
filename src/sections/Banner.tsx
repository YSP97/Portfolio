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
            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to specimen book.
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
