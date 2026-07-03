import { forwardRef } from 'react';

const QandA = forwardRef<HTMLDivElement, { data: any }>(({ data }, ref) => {
  return (
    <div ref={ref} className="flex flex-col gap-3 text1">
      <div className="flex gap-3">
        <span className="font-semibold text-[30px] max-md:text-[18px]">{data.title}</span>
      </div>
      <div className="flex items-start gap-5">
        <p className="text-zinc-500 mt-1 max-md:text-[15px]">{data.description}</p>
      </div>
    </div>
  );
});

export default QandA;
