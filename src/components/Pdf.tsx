import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


// PDF.js workerSrc 직접 설정
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.js';

interface PdfProps {
  url?: string;
}

export default function Pdf({ url }: PdfProps) {
  if (!url) return null;

  return (
    <div className="w-full h-full overflow-auto border rounded">
      <Document file={url}>
        <Page pageNumber={1} width={800} />
      </Document>
    </div>
  );
}
