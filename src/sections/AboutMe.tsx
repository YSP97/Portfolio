import { useEffect, useState, useRef } from 'react';
import QandA from '../components/QandA.tsx';
import supabase from '../utils/supabase.ts';
import { gsap } from 'gsap';

export default function AboutMe() {
  const [aboutMeData, setAboutMeData] = useState([]);
  const [error, setError] = useState(null);
  const qandaRefs = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  /// 데이터 fetch
  useEffect(() => {
    const fetchAboutMeData = async () => {
      try {
        let { data: aboutMe, error } = await supabase
          .from('aboutMe')
          .select('*')
          .order('num', { ascending: true });

        if (error) throw error;
        setAboutMeData(aboutMe);
      } catch (err) {
        console.error('Fetch Error!:', err.message);
        setError(err.message);
      }
    };

    fetchAboutMeData();
  }, []);

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
  }, []);

  const handleMouseEnter = () => {
    gsap.to(imgRef.current, {
      y: -10,
      scale: 1.05,
      duration: 0.3,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imgRef.current, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: 'power3.out',
    });
  };

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
          ref={imgRef}
          src="/assets/profile.png"
          className="w-full max-w-[300px] h-fit border-[3px] rounded-xl shadow-lg shadow-zinc-500 max-md:max-w-[200px]"
          alt="profile"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <div className="flex flex-col gap-5">
          {aboutMeData.map((item, index) => (
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
