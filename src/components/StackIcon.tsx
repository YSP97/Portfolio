import {
  STACK_ICON_MAP,
  SPRITE_ICON_MAP,
  AllStackName,
} from '@/constants/stackIcons';

interface StackIconProps {
  name: AllStackName;
  size?: number;
  className?: string;
}

export default function StackIcon({
  name,
  size = 24,
  className,
}: StackIconProps) {
  console.log("StackIcon에 들어온 name 값:", name, "타입:", typeof name);
  console.log("현재 SPRITE_ICON_MAP 구조:", SPRITE_ICON_MAP);
  if (name in STACK_ICON_MAP) {
    const Icon = STACK_ICON_MAP[name as keyof typeof STACK_ICON_MAP];
    return <Icon size={size} className={className} />;
  }

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
