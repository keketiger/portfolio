import type { SimpleIcon } from 'simple-icons';

// https://simpleicons.org/
export default function IconSvg({ icon, size = 32 }: { icon: SimpleIcon, size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={`#${icon.hex}`}
    >
      <path d={icon.path} />
    </svg>
  );
}
