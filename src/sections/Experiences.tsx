import { useEffect, useState, useRef } from 'react';
import Experience from '../components/Experience.tsx';
import supabase from '../utils/supabase.ts';
import { gsap } from 'gsap';

export default function Experiences() {
  const [experience, setExperience] = useState([]);
  const [error, setError] = useState(null);
  const experienceRefs = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        let { data: Experience, error } = await supabase
          .from('Experience')
          .select('*');

        if (error) throw error;
        setExperience(Experience);
      } catch (err) {
        console.error('Fetch Error!:', err.message);
        setError(err.message);
      }
    };

    fetchExperience();
  }, []);

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
      <div className="py-10 flex flex-col gap-8 justify-center max-md:px-4">
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
