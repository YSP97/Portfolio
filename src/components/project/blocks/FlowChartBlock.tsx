import { ArrowRight, ArrowDown } from 'lucide-react';
import { FlowChartItem } from '../../../types/project';

function StepBox({ item }: { item: FlowChartItem }) {
  return (
    <div className="flex flex-col items-center text-center w-[110px] shrink-0">
      <div
        className={`rounded-lg px-3 py-2 w-full ${
          item.highlight ? 'bg-blue-500 text-white' : 'bg-zinc-100 text-zinc-700'
        }`}
      >
        <p className="text-xs font-medium">{item.label}</p>
        {item.sublabel && (
          <p className="text-[11px] opacity-80 mt-0.5">{item.sublabel}</p>
        )}
      </div>
      {item.note && <p className="text-[11px] text-zinc-400 mt-1">{item.note}</p>}
      {item.caption && (
        <p className="text-[11px] text-zinc-400 mt-1">{item.caption}</p>
      )}
    </div>
  );
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function FlowChartBlock({
  title,
  items,
}: {
  title?: string;
  items: FlowChartItem[];
}) {
  const rows = chunk(items, 3);

  return (
    <div>
      {title && <p className="text-sm font-medium mb-3">{title}</p>}

      {/* 데스크탑: 지그재그 가로 배치 */}
      <div className="hidden md:flex flex-col gap-4">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex items-start gap-2 ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}
          >
            {row.map((item, j) => (
              <div key={j} className="flex items-center gap-2">
                <StepBox item={item} />
                {j < row.length - 1 && (
                  <ArrowRight size={14} className="text-zinc-300 shrink-0 mt-4" />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 모바일: 세로 1열 */}
      <div className="flex md:hidden flex-col items-center gap-2">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <StepBox item={item} />
            {i < items.length - 1 && <ArrowDown size={14} className="text-zinc-300" />}
          </div>
        ))}
      </div>
    </div>
  );
}