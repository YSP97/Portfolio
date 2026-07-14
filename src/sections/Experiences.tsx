import { useEffect, useState, useRef } from 'react';
import Experience from '../components/Experience.tsx';
import { gsap } from 'gsap';
import { ExperienceItem } from '@/types/data.ts';
import { ExperiencesData } from '@/data/ExperiencesData.ts';

export default function Experiences() {
  const [experience, setExperience] = useState<ExperienceItem[]>(ExperiencesData);
  const experienceRefs = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              experienceRefs.current,
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
  }, [experience]);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white flex flex-col items-center py-[104px] gap-5 justify-center"
    >
      <h1 className="text-5xl font-sora max-md:flex max-md:flex-col max-md:gap-4 items-center">
        My <span className="font-extrabold">Experience</span>
      </h1>
      <div className="py-10 flex flex-col gap-8 justify-center px-12 w-full items-center">
        {experience.map((item, index) => (
          <Experience
            data={item}
            key={index}
            ref={(el) => (experienceRefs.current[index] = el!)}
          />
        ))}
      </div>
    </section>
  );
}
