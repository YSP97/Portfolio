import { FlowChartItem } from '@/types/project';

export default function StepBox({ item }: { item: FlowChartItem }) {
  return (
    <div className="flex flex-col items-center text-center w-[110px] shrink-0">
      <div
        className={`rounded-lg px-3 py-2 w-full ${
          item.highlight
            ? 'bg-blue-500 text-white'
            : 'bg-zinc-100 text-zinc-700'
        }`}
      >
        <p className="text-xs font-medium">{item.label}</p>
        {item.sublabel && (
          <p className="text-[11px] opacity-80 mt-0.5">{item.sublabel}</p>
        )}
      </div>
      {item.note && (
        <p className="text-[11px] text-zinc-400 mt-1">{item.note}</p>
      )}
      {item.caption && (
        <p className="text-[11px] text-zinc-400 mt-1">{item.caption}</p>
      )}
    </div>
  );
}
