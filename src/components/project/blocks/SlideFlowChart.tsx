import { SlideBlock } from '@/types/project';

type FlowChartBlockType = Extract<SlideBlock, { type: 'flowChart' }>;

interface SlideFlowChartProps {
  block: FlowChartBlockType;
}

export default function SlideFlowChart({ block }: SlideFlowChartProps) {
  return (
    <div>
      {block.title && (
        <h4 className="text-sm font-semibold text-gray-600 my-5">
          📍 {block.title}
        </h4>
      )}
      <div className="flex flex-col md:flex-row md:items-stretch gap-1 pb-2">
        {block.items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:items-stretch gap-2 flex-1 min-w-[140px]"
          >
            <div
              className={`p-3 rounded border-2 border-gray-200 flex-1 ${
                item.highlight ? 'bg-blue-600/25' : ''
              }`}
            >
              <div className="text-sm font-bold">{item.label}</div>
              {item.sublabel && (
                <div className="text-[11px] mt-0.5">{item.sublabel}</div>
              )}
              {item.note && (
                <div className="text-[10px] text-red-500 font-semibold mt-1">
                  {item.note}
                </div>
              )}
              {item.caption && (
                <div className="text-[10px] text-gray-500 mt-1">
                  {item.caption}
                </div>
              )}
            </div>
            {idx < block.items.length - 1 && (
              <svg className="w-6 h-6 mx-auto md:my-auto rotate-90 md:rotate-0">
                <use href="/sprite.svg#right" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
