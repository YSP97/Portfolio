import { forwardRef } from 'react';
import ProjectLink from './ProjectLink.tsx';
import ProjectThumbnail from './ProjectThumbnail.tsx';

interface ProjectData {
  count: number;
  title: string;
  img?: string;
  desc: string;
  skill: string[];
}

interface ProjectProps {
  index: number;
  projectData: ProjectData;
}

const Project = forwardRef<HTMLDivElement, ProjectProps>(
  ({ index, projectData }, ref) => {
    const isEven = index % 2 === 0;

    return (
      <div
        ref={ref}
        className={`flex max-lg:flex-col opacity-0 max-md:py-10 gap-20 max-md:gap-10 items-center py-[60px] ${
          isEven ? 'flex-row' : 'flex-row-reverse'
        }`}
      >
        <ProjectThumbnail img={projectData.img} title={projectData.title} />
        <div className="flex flex-col gap-7 justify-center max-md:gap-2">
          <div className="font-sora text-5xl font-extrabold">
            {`0${projectData.count}`}
          </div>
          <div className="font-semibold text-[32px]">{projectData.title}</div>
          <p className="text-zinc-500">{projectData.desc}</p>
          <ProjectLink projectData={projectData} />
        </div>
      </div>
    );
  }
);

export default Project;
