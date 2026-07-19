import useModalStore from '@/stores/useModalStore.tsx';
import { Project } from '@/types/project';

interface ProjectLinkProps {
  projectData: Project;
}

export default function ProjectLink({ projectData }: ProjectLinkProps) {
  const { openModal } = useModalStore();

  const handleClick = () => {
    openModal(projectData);
  };

  return (
    <button
      onClick={handleClick}
      className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform"
      title="상세 보기"
    >
      <svg className="w-6 h-6 fill-current text-white">
        <use href="/sprite.svg#ReadMore" />
      </svg>
    </button>
  );
}
