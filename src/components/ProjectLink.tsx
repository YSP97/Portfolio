import useModalStore from '../stores/useModalStore.tsx';

export default function ProjectLink({ projectData }) {
  const { openModal, setData } = useModalStore();

  const handleClick = () => {
    setData({
      title: projectData.title,
      desc: projectData.desc,
      thumnail: projectData.img,
      link: projectData.link,
      github: projectData.github,
      role: projectData.role,
      skill: projectData.skill,
      period: projectData.period,
      detail: projectData.detail,
      portfolio: projectData.portfolio,
    });

    openModal();
  };

  return (
    <button onClick={handleClick} className="w-6 h-6" title="상세 보기">
      <svg className="w-6 h-6">
        <use href="/sprite.svg#ReadMore" />
      </svg>
    </button>
  );
}
