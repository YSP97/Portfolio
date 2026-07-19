import { FlowChartItem } from '@/types/project';
import StepBox from './StepBox';

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
          </div>
        ))}
      </div>
    </div>
  );
}
