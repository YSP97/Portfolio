import { useEffect, useState, useRef } from 'react';
import { QandA } from '@/components';
import { gsap } from 'gsap';
import { aboutMeData } from '@/data/aboutMeData.ts';

export default function AboutMe() {
  const [data, setData] = useState(aboutMeData);
  const qandaRefs = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              qandaRefs.current,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: 'power3.out',
                stagger: 0.2,
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [aboutMeData]);

  return (
    <section
      ref={sectionRef}
      id="about-me"
      className="py-[104px] flex flex-col gap-10 px-56 items-center w-full max-lg:px-4"
    >
      <h1 className="flex gap-4 text-[48px] font-sora">
        <span>About</span>
        <span className="font-extrabold">Me</span>
      </h1>
      <div className="flex flex-col md:flex-row gap-10 max-md:items-center">
        <img
          src="/assets/profile.jpg"
          className="w-full max-w-[300px] h-fit rounded-xl max-md:max-w-[200px] transition-transform duration-300 ease-out hover:-translate-y-2.5 hover:scale-105"
          alt="profile"
        />
        <div className="flex flex-col gap-5">
          {data.map((item, index) => (
            <QandA
              data={item}
              key={index}
              ref={(el) => (qandaRefs.current[index] = el!)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
