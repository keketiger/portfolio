import type { LucideIcon } from 'lucide-react';

interface Props {
  text: string;
  icon: LucideIcon;
  iconClass?: string;
  pos: 'left' | 'right';
  className?: string;
}

export default function TextIcon({
  text,
  icon: Icon,
  iconClass = 'h-4 w-4',
  pos,
  className
}: Props) {
  return (
    <div className='flex items-center gap-2 text-sm'>
      {pos === 'left' && <Icon className={iconClass} />}
      <h3 className={className}>{text}</h3>
      {pos === 'right' && <Icon className={iconClass} />}
    </div>
  );
}
