import { useState, forwardRef } from 'react';

const Skill = forwardRef<HTMLDivElement, { icon: string; name: string }>(
  ({ icon, name }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        ref={ref}
        className="bg-white rounded flex flex-col justify-center items-center mx-auto gap-2 border-[2px] border-black hover:bg-black hover:text-white transition-all duration-300 w-[clamp(120px,15vw,180px)] aspect-square shrink-0"
        aria-label={`${name}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <svg className="w-[clamp(28px,6vw,48px)] h-[clamp(28px,6vw,48px)]">
          <use href={`/sprite.svg#icon-${icon}${isHovered ? '-hover' : ''}`} />
        </svg>
        <div className="mt-2 text-center font-extrabold text-[clamp(14px,2vw,16px)]">{name}</div>
      </div>
    );
  }
);

export default Skill;