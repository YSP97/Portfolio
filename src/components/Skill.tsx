import { useState, forwardRef } from 'react';

const Skill = forwardRef<HTMLDivElement, { icon: string; name: string }>(
  ({ icon, name }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
  ref={ref}
  className="w-full aspect-square max-w-[186px] bg-white rounded flex flex-col justify-center items-center mx-auto gap-8 border-[2px] border-black hover:bg-black hover:text-white hover:-translate-y-2.5 hover:scale-105 transition-all duration-300 opacity-0"
  aria-label={`${name}`}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  <svg className="w-[clamp(32px,8vw,56px)] h-[clamp(32px,8vw,56px)]">
    <use href={`/sprite.svg#icon-${icon}${isHovered ? '-hover' : ''}`} />
  </svg>
  <div className="mt-2 text-center font-extrabold text-[clamp(14px,2vw,16px)]">{name}</div>
</div>
    );
  }
);

export default Skill;