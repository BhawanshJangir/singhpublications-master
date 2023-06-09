import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import file from './assets/file.pdf';
function Pdfview() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(
      pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
    );

  return (
    <>
     
      <div className="w-full h-max my-5 py-5 flex items-center justify-center
            ">
        <div className="w-4/5 h-max py-5 bg-white flex flex-col items-center justify-center rounded-lg
            " style={{ 'border': '1px solid #777777' }}>
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
      <nav className='flex justify-between px-10'>
        <button className=" text-white px-12 py-2 mt-5 rounded-2xl focus:outline-none" style={{ 'backgroundColor': "#315ED2" }} onClick={goToPrevPage}>Prev</button>
        <button className=" text-white px-12 py-2 mt-5 rounded-2xl focus:outline-none" style={{ 'backgroundColor': "#315ED2" }} onClick={goToNextPage}>Next</button>
        
      </nav>

    </>
  );
}
export default Pdfview;