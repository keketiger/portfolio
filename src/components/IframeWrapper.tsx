import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface IframeWrapperProps {
  children: React.ReactNode;
  head?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const IframeWrapper: React.FC<IframeWrapperProps> = ({ children, head, className, style }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHead, setIframeHead] = useState<HTMLElement | null>(null);
  const [iframeBody, setIframeBody] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument;
    if (!doc) return;

    const interval = setInterval(() => {
      if (doc.head && doc.body) {
        setIframeHead(doc.head);
        setIframeBody(doc.body);
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      className={className}
      style={style}
      sandbox='allow-scripts allow-same-origin'
    >
      {iframeHead && createPortal(head, iframeHead)}
      {iframeBody && createPortal(children, iframeBody)}
    </iframe>
  );
};

export default IframeWrapper;