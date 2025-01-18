import { useEffect, useRef } from 'react';
import Skill from '../components/Skill.tsx';
import { gsap } from 'gsap';

export default function Skills() {
  const skillRefs = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const skillsData = [
    { icon: 'html', name: 'HTML5' },
    { icon: 'css', name: 'CSS3' },
    { icon: 'javascript', name: 'JavaScript' },
    { icon: 'typescript', name: 'TypeScript' },
    { icon: 'react', name: 'React' },
    { icon: 'sass', name: 'Sass/scss' },
    { icon: 'tailwindcss', name: 'TailwindCSS' },
    { icon: 'zustand', name: 'Zustand' },
    { icon: 'git', name: 'Git' },
    { icon: 'github', name: 'Github' },
    { icon: 'router', name: 'React-Router-Dom' },
    { icon: 'netlify', name: 'Netlify' },
  ];

  const tl = gsap.timeline({ delay: 1 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.fromTo(
              skillRefs.current,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: 'power3.out',
                stagger: 0.2,
              }
            );
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
      <h1 className="text-[48px]">
        My <span className="font-extrabold">Skills</span>
      </h1>

      <div
        className="flex flex-wrap gap-10 justify-center mt-10 max-w-[1000px]"
      >
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
