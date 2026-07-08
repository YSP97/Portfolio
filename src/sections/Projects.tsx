import { useEffect, useState, useRef } from 'react';
import ProjectComponent from '../components/Project.tsx';
import { gsap } from 'gsap';
import { projectData } from '@/data/projectData';
import { Project } from '@/types/project';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(projectData);
  const [error, setError] = useState(null);
  const projectRefs = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = projectRefs.current.filter(Boolean);
            
            tl.fromTo(
              targets,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power3.out',
                stagger: 0.2,
              }
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
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
      className="bg-black flex flex-col items-center py-[104px] px-[112px] gap-[20px] max-lg:px-[50px]"
    >
      <h1 className="font-sora text-5xl max-sm:flex max-sm:gap-2 text-white">
        My <span className="font-extrabold">Project</span>
      </h1>
      {error && <p className="text-red-500">데이터가 존재하지 않아요.</p>}
      {projects.length > 0 ? (
        projects.map((project, index) => (
          <div key={project.id}>
            <ProjectComponent
              index={index}
              projectData={project}
              ref={(el) => {
                if (el) projectRefs.current[index] = el;
              }}
            />
          </div>
        ))
      ) : (
        <p>Loading projects...</p>
      )}
    </section>
  );
}