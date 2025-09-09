import { ChevronLeft } from 'lucide-react';
import Button from './elements/Button';
import IframeWrapper from './IframeWrapper';

interface LayoutProps {
  title: string;
  description: string;
  headContent?: React.ReactNode;
  children: React.ReactNode;
  onReady?: (doc: Document) => void;
}

const PagePreviewLayout: React.FC<LayoutProps> = ({ title, description, headContent, children, onReady }) => {
  const iframeHead = (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
      {headContent}
    </>
  );

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <header className='bg-sky-900 text-white p-4'>
          <div className='flex items-center gap-5'>
            <Button to='/' iconLeft={<ChevronLeft />}>
              Retour au portfolio
            </Button>
            <h1 className='text-xl font-bold'>Prévisualisation: {title}</h1>
          </div>
        </header>

        <main className='flex-grow p-6'>
          <IframeWrapper
            head={iframeHead}
            className='w-full h-[80vh] border border-gray-500 rounded-md bg-white'
            onReady={onReady}
          >
            {children}
          </IframeWrapper>
        </main>
      </div>
    </>
  );
};

export default PagePreviewLayout;