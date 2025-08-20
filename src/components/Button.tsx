import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger';

interface BaseProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

type ButtonAsButton = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const VariantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-zinc-950 border-zinc-600 text-slate-200 hover:bg-zinc-900',
  secondary: 'bg-zinc-800 border-zinc-500 text-slate-100 hover:bg-zinc-700',
  success: 'bg-green-800 border-green-600 text-white hover:bg-green-700',
  danger: 'bg-red-800 border-red-600 text-white hover:bg-red-700'
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    iconLeft,
    iconRight,
    className,
    href,
    ...rest
  } = props;

  const commonClasses = clsx(
    'inline-flex cursor-pointer items-center justify-center rounded-xl border-[1.58px] px-5 py-3 font-medium shadow-md transition-all duration-300 hover:translate-y-[-.335rem] hover:shadow-xl',
    VariantStyles[variant],
    className
  );

  const iconClasses = 'flex size-6 items-center justify-center rounded-full bg-white/10 p-1';

  const content = (
    <>
      {iconLeft && <span className={clsx(iconClasses, 'mr-2')}>{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className={clsx(iconClasses, 'ml-2')}>{iconRight}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={commonClasses} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button className={commonClasses} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}