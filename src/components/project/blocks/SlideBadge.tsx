import { SlideBlock } from '@/types/project';

type BadgeBlockType = Extract<SlideBlock, { type: 'badge' }>;

interface SlideBadgeProps {
  block: BadgeBlockType;
}

const BADGE_VARIANT_STYLES: Record<string, string> = {
  before: 'bg-zinc-200 text-zinc-600',
  after: 'bg-blue-600 text-white',
};

export default function SlideBadge({ block }: SlideBadgeProps) {
  const variantClass = BADGE_VARIANT_STYLES[block.variant ?? 'before'];

  return (
    <div className="flex items-center gap-2 my-1.5">
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap ${variantClass}`}
      >
        {block.text}
      </span>
      {block.description && (
        <span className="text-xs text-zinc-600">-- {block.description}</span>
      )}
    </div>
  );
}
