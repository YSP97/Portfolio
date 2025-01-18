import useContactStore from '../stores/useContactStore.tsx';

interface ContactButtonProps {
  link?: string;
  icon: string;
}

export default function ContactButton({ icon, link }: ContactButtonProps) {
  const { openModal, setContactData } = useContactStore();
  const isLink = link ? link : null;

  const handleClick = () => {
    if (icon === 'phone') {
      const data = {
        title: 'PHONE',
        phone: '010-2955-4941',
      };
      setContactData(data);
    } else if (icon === 'email') {
      const data = {
        title: 'EMAIL',
        phone: 'pus9717@gmail.com',
      };
      setContactData(data);
    }
    openModal();
  };

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
      onClick={handleClick}
    >
      <svg className="w-5 h-5">
        <use href={`/sprite.svg#${icon}`} />
      </svg>
    </button>
  );
}
