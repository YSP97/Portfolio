import { StackIcon } from '@/components';
import { SlideBlock } from '@/types/project';

type StacksBlockType = Extract<SlideBlock, { type: 'stacks' }>;

interface SlideStacksProps {
  block: StacksBlockType;
}

export default function SlideStacks({ block }: SlideStacksProps) {
  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-3 my-3">
      {block.items.map((item, idx) => (
        <div key={idx} className="p-3 flex flex-col gap-3 max-sm:max-w-[200px]">
          {item.icon && (
            <StackIcon
              name={item.icon}
              size={24}
              className="text-black shrink-0 w-16 h-16 mx-auto"
            />
          )}
          <div>
            <span className="font-bold flex justify-center">{item.name}</span>
            <p className="text-xs text-zinc-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
