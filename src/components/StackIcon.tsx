// components/StackIcon.tsx
import { STACK_ICON_MAP, SPRITE_ICON_MAP, StackName } from "@/constants/stackIcons";

interface StackIconProps {
  name: StackName;
  size?: number;
  className?: string;
}

export function StackIcon({ name, size = 24, className }: StackIconProps) {
  // react-icons에 있는 경우
  if (name in STACK_ICON_MAP) {
    const Icon = STACK_ICON_MAP[name as keyof typeof STACK_ICON_MAP];
    return <Icon size={size} className={className} />;
  }

  // sprite에만 있는 경우 (Zustand 등)
  if (name in SPRITE_ICON_MAP) {
    const spriteId = SPRITE_ICON_MAP[name as keyof typeof SPRITE_ICON_MAP];
    return (
      <svg width={size} height={size} className={className}>
        <use href={`/assets/sprite.svg#${spriteId}`} />
      </svg>
    );
  }

  return null;
}