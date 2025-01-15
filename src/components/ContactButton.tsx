import useModalStore from '../stores/useModalStore.tsx';
export default function ContactButton({ icon, link }) {
  const { toggleModal } = useModalStore();
  const isLink = link ? link : null;

  if (isLink) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white w-14 h-14 border-[3px] border-black rounded hover:bg-black hover:text-white cursor-pointer flex justify-center items-center"
      >
        <svg className="w-5 h-5">
          <use href={`/sprite.svg#${icon}`} />
        </svg>
      </a>
    );
  }

  return (
    <button
      className="bg-white w-14 h-14 border-[3px] border-black rounded hover:bg-black hover:text-white cursor-pointer flex justify-center items-center"
      onClick={toggleModal}
    >
      <svg className="w-5 h-5">
        <use href={`/sprite.svg#${icon}`} />
      </svg>
    </button>
  );
}
