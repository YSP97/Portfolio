import { useRef } from 'react';
import { gsap } from 'gsap';
import useContactStore from '../stores/useContactStore.tsx';

interface ContactButtonProps {
  link?: string;
  icon: string;
}

export default function ContactButton({ icon, link }: ContactButtonProps) {
  const { openModal, setContactData } = useContactStore();
  const isLink = link ? link : null;
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);

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

  const handleMouseEnter = (el: HTMLElement) => {
    gsap.to(el, {
      y: -10,
      duration: 0.1,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = (el: HTMLElement) => {
    gsap.to(el, {
      y: 0,
      duration: 0.1,
      ease: 'power3.out',
    });
  };

  if (isLink) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        className="contact-button bg-white w-14 h-14 border-[3px] border-black rounded hover:bg-black hover:text-white cursor-pointer flex justify-center items-center transition-transform"
        onMouseEnter={() => handleMouseEnter(buttonRef.current!)}
        onMouseLeave={() => handleMouseLeave(buttonRef.current!)}
        title={`${icon}으로 이동`}
      >
        <svg className="w-5 h-5">
          <use href={`/sprite.svg#${icon}`} />
        </svg>
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.Ref<HTMLButtonElement>}
      className="contact-button bg-white w-14 h-14 border-[3px] border-black rounded hover:bg-black hover:text-white cursor-pointer flex justify-center items-center transition-transform"
      onClick={handleClick}
      onMouseEnter={() => handleMouseEnter(buttonRef.current!)}
      onMouseLeave={() => handleMouseLeave(buttonRef.current!)}
      title={`${icon} 정보 보기`}
    >
      <svg className="w-5 h-5">
        <use href={`/sprite.svg#${icon}`} />
      </svg>
    </button>
  );
}
