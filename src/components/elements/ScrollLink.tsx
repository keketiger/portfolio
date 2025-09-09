import clsx from 'clsx';
import { scrollToElementById } from '../../utils/scrollToElements';

interface ScrollLinkProps extends React.HTMLAttributes<HTMLButtonElement> {
  targetId: string;
  offset?: number;
  children: React.ReactNode;
  className?: string;
}

const ScrollLink: React.FC<ScrollLinkProps> = ({ targetId, children, className, ...props }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElementById(targetId);
  };

  return (
    <button onClick={handleClick} className={clsx(className, 'cursor-pointer')} {...props}>
      {children}
    </button>
  );
};

export default ScrollLink;