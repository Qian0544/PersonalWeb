"use client";
import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function CVViewer({ file = "/CV.pdf" }) {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(800);

  useEffect(() => {
    const update = () => setPageWidth(Math.min(window.innerWidth - 32, 900));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <Document
      file={file}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      className="flex flex-col items-center gap-6"
    >
      {Array.from({ length: numPages || 0 }, (_, i) => (
        <Page
          key={i + 1}
          pageNumber={i + 1}
          width={pageWidth}
          className="shadow-2xl"
          renderTextLayer
          renderAnnotationLayer
        />
      ))}
    </Document>
  );
}
