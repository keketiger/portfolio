import clsx from 'clsx';

export type CardVariant = 'primary' | 'secondary' | 'success' | 'danger';

interface BaseProps {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
}

type CardAsDiv = BaseProps & React.HTMLAttributes<HTMLDivElement> & { href?: undefined };
type CardAsLink = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type CardProps = CardAsDiv | CardAsLink;

const VariantStyles: Record<CardVariant, string> = {
  primary: 'bg-zinc-800 border-zinc-600 text-slate-200 hover:bg-zinc-800/90',
  secondary: 'bg-zinc-700 border-zinc-500 text-slate-100 hover:bg-zinc-700/90',
  success: 'bg-green-800 border-green-600 text-white hover:bg-green-700',
  danger: 'bg-red-800 border-red-600 text-white hover:bg-red-700'
};

export default function Card(props: CardProps) {
  const {
    children,
    variant = 'primary',
    className,
    href,
    ...rest
  } = props;

  const classes = clsx(
    'block max-w-sm rounded-lg border p-6 shadow-sm transition-colors',
    VariantStyles[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <div className={classes} {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
      {children}
    </div>
  );
}
