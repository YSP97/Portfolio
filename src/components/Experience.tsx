import { forwardRef } from 'react';
import { gsap } from 'gsap';

const Experience = forwardRef<HTMLDivElement, { data: any }>(
  ({ data }, ref) => {
    const handleMouseEnter = (el: HTMLDivElement) => {
      gsap.to(el, {
        y: -10,
        scale: 1.05,
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    const handleMouseLeave = (el: HTMLDivElement) => {
      gsap.to(el, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    return (
      <div
        ref={ref}
        className="max-w-[1168px] w-full py-[30px] px-6 border-[2px] rounded-[10px] border-zinc-500 flex flex-col gap-7 hover:bg-zinc-800"
        onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
        onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-7 max-md:gap-3">
            <img
              src={data.icon}
              className="w-10 rounded-full"
              alt={`${data.icon} icon`}
            />
            <span className="font-semibold">{data.name}</span>
          </div>
          <span className="font-sora md:ml-auto md:mt-0 mt-2 text-zinc-300">
            {data.peroid}
          </span>
        </div>
        <p className="text-zinc-300">{data.desc}</p>
      </div>
    );
  }
);

export default Experience;
