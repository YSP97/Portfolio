import { useEffect, useState, useRef } from 'react';
import Project from '../components/Project.tsx';
import supabase from '../utils/supabase.ts';
import { gsap } from 'gsap';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const projectRefs = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const tl = gsap.timeline({ delay: 1 });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('project')
          .select('*')
          .order('count', { ascending: true });
        if (error) throw error;
        setProjects(data);
      } catch (err) {
        console.error('Fetch Error!:', err.message);
        setError(err.message);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.fromTo(
              projectRefs.current,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 3,
                ease: 'power3.out',
                stagger: 0.2,
              }
            );
          }
        });
      },
      { threshold: 0.2 } // 트리거 설정 (20% 뷰포트에 들어오면)
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [projects]);

  return (
    <section
      ref={sectionRef}
      id="project"
      className="bg-black text-white flex flex-col items-center py-[104px] px-[112px] gap-[20px] max-lg:px-[50px]"
    >
      <h1 className="font-sora text-5xl max-sm:flex max-sm:gap-2">
        My <span className="font-extrabold">Project</span>
      </h1>
      {error && <p className="text-red-500">데이터가 존재하지 않아요.</p>}
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            projectData={project}
            ref={(el) => (projectRefs.current[index] = el!)}
          />
        ))
      ) : (
        <p>Loading projects...</p>
      )}
    </section>
  );
}
