import { ProjectBadge } from '@/components';
import { Project } from '@/types/project';

interface ModalHeaderProps {
  project: Project;
  onClose: () => void;
}

export default function ModalHeader({ project, onClose }: ModalHeaderProps) {
  return (
    <div className="flex items-start justify-between px-6 py-4 bg-zinc-200">
      <div className="flex-col gap-5">
        <h1 className="text-xl font-bold tracking-tight">{project.title}</h1>
        <div className="text-[12px] font-sora flex flex-col gap-1 mt-3">
          <ProjectBadge text="개발 기간" />
          <p>{project.period}</p>
          <ProjectBadge text="역할" />
          <p className="text-xs mt-0.5">
            {project.role}({project.teamSize})
          </p>
        </div>
        <div className="text-[12px] font-sora flex gap-3 mt-3">
          {project.github && (
            <a href={project.github} className="flex gap-1 items-center">
              <svg className="w-4 h-4 fill-current text-gray-700">
                <use href="/sprite.svg#github" />
              </svg>
              <p>Github</p>
            </a>
          )}
          {project.deployLink && (
            <a href={project.deployLink} className="flex gap-2 items-center">
              <svg className="w-3 h-3 fill-current text-gray-700">
                <use href="/sprite.svg#ReadMore" />
              </svg>
              <p>배포 링크</p>
            </a>
          )}
        </div>
      </div>
      <button
        onClick={onClose}
        className="text-xl font-semibold transition"
        aria-label="모달 닫기"
      >
        <svg className="w-5 h-5">
          <use href="/sprite.svg#close" />
        </svg>
      </button>
    </div>
  );
}
