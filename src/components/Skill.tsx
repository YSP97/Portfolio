import { useState, forwardRef } from 'react';
import { gsap } from 'gsap';

const Skill = forwardRef<HTMLDivElement, { icon: string; name: string }>(
  ({ icon, name }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = (el: HTMLDivElement) => {
      gsap.to(el, {
        y: 0,
        scale: 1.05,
        duration: 0.3,
        ease: 'power3.out',
      });
      setIsHovered(true);
    };

    const handleMouseLeave = (el: HTMLDivElement) => {
      gsap.to(el, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power3.out',
      });
      setIsHovered(false);
    };

    return (
      <div
        ref={ref}
        className="w-[186px] h-[186px] bg-white rounded flex flex-col justify-center items-center mx-auto gap-8 py-[37px] border-[2px] border-black hover:bg-black hover:text-white transition-colors duration-300 opacity-0"
        aria-label={`${name}`}
        onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
        onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
      >
        <svg className="w-[56px] h-[56px]">
          <use href={`/sprite.svg#icon-${icon}${isHovered ? '-hover' : ''}`} />
        </svg>
        <div className="mt-2 text-center font-extrabold">{name}</div>
      </div>
    );
  }
);

export default Skill;
