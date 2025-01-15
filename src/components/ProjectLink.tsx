import useModalStore from '../stores/useModalStore.tsx';

export default function ProjectLink({ link }) {
  const { toggleModal } = useModalStore();

  return (
    <button onClick={toggleModal} className="w-6 h-6">
      <svg className="w-6 h-6">
        <use href="/sprite.svg#ReadMore" />
      </svg>
    </button>
  );
}
