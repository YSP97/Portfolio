import { SlideBlock } from '@/types/project';

type CircleSummaryBlockType = Extract<SlideBlock, { type: 'circleSummary' }>;

interface SlideCircleSummaryProps {
  block: CircleSummaryBlockType;
}

export default function SlideCircleSummary({ block }: SlideCircleSummaryProps) {
  return (
    <div className="flex flex-col items-center justify-center my-8 w-full">
      <div className="flex items-center justify-center w-full max-w-lg px-4">
        {block.circles?.map((text, idx) => (
          <div
            key={idx}
            className="flex-1 aspect-square max-w-[160px] min-w-[90px] rounded-full border border-blue-600 flex items-center justify-center p-3 sm:p-4 text-center"
            style={{
              marginLeft: idx > 0 ? 'clamp(-14px, -4%, -8px)' : undefined,
              zIndex: idx + 1,
              position: 'relative',
            }}
          >
            <span className="text-[10px] sm:text-xs font-semibold text-blue-700 leading-snug break-keep">
              {text}
            </span>
          </div>
        ))}
      </div>

      {block.title && (
        <h3 className="mt-8 text-center text-base sm:text-lg font-bold text-zinc-950 px-4 break-keep">
          {block.title}
        </h3>
      )}
    </div>
  );
}
