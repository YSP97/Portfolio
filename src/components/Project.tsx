import ProjectLink from './ProjectLink.tsx';
import ProjectThumbnail from './ProjectThumbnail.tsx';

interface ProjectData {
  count: string;
  title: string;
  img?: string;
  desc: string;
  skill: string[];
}

interface ProjectProps {
  index: number;
  projectData: ProjectData;
}

export default function Project({ index, projectData }: ProjectProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex gap-20 items-center py-[60px] ${
        isEven ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <ProjectThumbnail img={projectData.img} />
      <div className="flex flex-col gap-7 justify-center">
        <div className="font-sora text-5xl font-extrabold">
          {projectData.count}
        </div>
        <div className="font-semibold text-[32px]">{projectData.title}</div>
        <p className="text-zinc-500">{projectData.desc}</p>
        <ProjectLink projectData={projectData} />
      </div>
    </div>
  );
}
