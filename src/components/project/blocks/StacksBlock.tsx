import Image from 'next/image';
import { StackItem } from '../../../types/project';

export default function StacksBlock({ items }: { items: StackItem[] }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div key={item.name} className="flex gap-3 items-start">
          {item.icon && (
            <div className="relative w-6 h-6 shrink-0 mt-0.5">
              <Image src={item.icon} alt={item.name} fill className="object-contain" />
            </div>
          )}
          <div>
            <p className="text-sm font-medium">{item.name}</p>
            <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}