import { ArrowUpRight, Download } from 'lucide-react';
import type { ReactNode } from 'react';

type ActionButtonProps =
  | {
      icon: ReactNode;
      title: string;
      description: string;
      href: string;
      downloadFile?: never;
    }
  | {
      icon: ReactNode;
      title: string;
      description: string;
      href?: never;
      downloadFile: string;
    };

export default function ActionButton(props: ActionButtonProps) {
  const content = (
    <div className='flex items-center gap-4 transition rounded-xl p-2 hover:shadow-md'>
      {/* Icône gauche */}
      <div className='flex size-12 items-center justify-center'>
        {props.icon}
      </div>

      {/* Texte */}
      <div className='flex-1'>
        <h3 className='font-semibold text-gray-900'>{props.title}</h3>

        <div className='mt-1 flex items-center gap-2 text-sm text-gray-500'>
          <span>{props.description}</span>

          {'href' in props ? (
            <ArrowUpRight className='size-4' />
          ) : (
            <Download className='size-4' />
          )}
        </div>
      </div>
    </div>
  );

  if ('href' in props) {
    return (
      <a
        href={props.href}
        target='_blank'
        rel='noopener noreferrer'
        className='block'
      >
        {content}
      </a>
    );
  }

  return (
    <a href={props.downloadFile} download className='block'>
      {content}
    </a>
  );
}
