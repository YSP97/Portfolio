import Project from '../components/Project.tsx';
import projectData from '../utils/projectData.ts';

export default function Projects() {
  return (
    <section
      id="project"
      className="bg-black text-white flex flex-col items-center py-[104px] px-[112px] gap-[20px]"
    >
      <h1 className="font-sora text-5xl">
        My <span className="font-extrabold">Project</span>
      </h1>
      {projectData.map((project, index) => (
        <Project
          key={index}
          index={index}
          projectData={project}
        />
      ))}
    </section>
  );
}
