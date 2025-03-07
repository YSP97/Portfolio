interface PdfProps {
  url?: string;
}

export default function Pdf({ url }: PdfProps) {
  if (!url) return null;
  return (
    <>
      <iframe
        src={url}
        width="100%"
        height="600px"
        style={{ border: 'none' }}
      ></iframe>
    </>
  );
}
