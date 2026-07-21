import { useEffect, useRef } from 'react';
import { Skill } from '@/components';
import { gsap } from 'gsap';
import { skillsData } from '@/data/skillsData.ts';

export default function Skills() {
  const skillRefs = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef(gsap.timeline({ delay: 0.2 }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.current.fromTo(
              skillRefs.current,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.3,
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
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="flex flex-col font-sora items-center py-[104px] px-20"
    >
      <h1 className="text-[48px] max-md:flex max-md:gap-2">
        My <span className="font-extrabold">Skills</span>
      </h1>

      <div className="grid grid-cols-2 gap-4 md:gap-8 justify-center mt-10 w-full max-w-[1200px] md:[grid-template-columns:repeat(auto-fit,minmax(min(180px,100%),180px))]">
        {skillsData.map((skill, index) => (
          <Skill
            key={index}
            ref={(el) => (skillRefs.current[index] = el!)}
            icon={skill.icon}
            name={skill.name}
          />
        ))}
      </div>
    </section>
  );
}