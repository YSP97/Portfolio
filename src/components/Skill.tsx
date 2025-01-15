import { useState } from 'react';

export default function Skill({ icon, name }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-[186px] h-[186px] bg-white rounded flex flex-col justify-center items-center mx-auto gap-8 py-[37px] border-[2px] border-black hover:bg-black hover:text-white"
      aria-label={`${name}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg className="w-[56px] h-[56px]">
        <use href={`/sprite.svg#icon-${icon}${isHovered ? '-hover' : ''}`} />
      </svg>
      <div className="mt-2 text-center font-extrabold">{name}</div>
    </div>
  );
}
