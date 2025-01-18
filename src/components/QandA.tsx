import { forwardRef } from 'react';

const QandA = forwardRef<HTMLDivElement, { data: any }>(({ data }, ref) => {
  return (
    <div ref={ref} className="flex flex-col gap-3 text1">
      <div className="flex gap-3 text-[30px]">
        <span className="font-semibold">{data.question}</span>
      </div>
      <div className="flex items-start gap-5">
        <p className="text-zinc-500 mt-1">{data.answer}</p>
      </div>
    </div>
  );
});

export default QandA;
