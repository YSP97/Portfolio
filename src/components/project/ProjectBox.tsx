import { forwardRef } from 'react';
import ProjectThumbnail from './ProjectThumbnail.tsx';
import { Project as ProjectType } from '@/types/project';
import useModalStore from '@/stores/useModalStore.tsx';

interface ProjectProps {
  index: number;
  projectData: ProjectType;
}

const ProjectBox = forwardRef<HTMLDivElement, ProjectProps>(
  ({ index, projectData }, ref) => {
    const isEven = index % 2 === 0;

    const { openModal } = useModalStore();
    const handleClick = () => {
      openModal(projectData);
    };

    return (
      <div
        ref={ref}
        className={`flex max-lg:flex-col opacity-0 max-md:py-10 gap-20 max-md:gap-10 items-center text-white py-[60px] px-[40px] rounded-lg hover:bg-white/[0.2] 
          cursor-pointer ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
        onClick={handleClick}
      >
        <ProjectThumbnail
          img={projectData.thumbnail || '/default-thumbnail.png'}
          title={projectData.title}
        />

        <div className="flex flex-col gap-7 justify-center max-md:gap-2">
          <div className="font-sora text-5xl font-extrabold">
            {`0${index + 1}`}
          </div>
          <div className="font-semibold text-[32px]">{projectData.title}</div>

          <div className="text-sm flex flex-col gap-2">
            <span>📅 {projectData.period}</span>
            <span>
              👤 {projectData.role} ({projectData.teamSize})
            </span>
          </div>

          <p className="text-sm">{projectData.summary}</p>

          <div className="flex flex-wrap gap-2 max-sm:mt-3 max-w-[500px]">
            {projectData.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

ProjectBox.displayName = 'Project';

export default ProjectBox;
