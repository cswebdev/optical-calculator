import React, { useState, useRef } from 'react';
import { storeLocations } from './data/LocationData';
import SecondaryNav from 'components/SecondaryNav';
import './App.css';
import GlassesCalculator from './components/GlassesCalculator';
import CalculatorSelector from 'components/CalculatorSelector';
import ContactCalculator from './components/ContactCalculator';
import TopNav from './components/TopNav';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Footer from './components/Footer';
import Sidebar from './components/sidebar';
import PrintableQuoteSheet from './components/PrintableQuoteSheet';


function App() {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCalculator, setSelectedCalculator] = useState("glasses");
  const [rows, setRows] = useState([
    { item: 'Frame', retail: '', copay: '' },
    { item: 'Lens Type', retail: '', copay: '' },
    { item: 'Lens Material', retail: '', copay: '' },
    { item: 'Anti-Reflective', retail: '', copay: '' },
    { item: 'Transitions', retail: '', copay: '' },
  ]);
  const [materialCopay, setMaterialCopay] = useState('');
  const taxRate = storeLocations.find(location => location.name === selectedLocation)?.taxRate ?? 0;

  // Calculation logic
  const totalRetail = rows.reduce((sum, row) => sum + Number(row.retail || 0), 0);
  const materialCopayValue = Number(materialCopay || 0);
  const totalCopay = rows.reduce((sum, row) => sum + Number(row.copay || 0), 0) + materialCopayValue;
  const discount = totalRetail - totalCopay;
  const taxRetail = totalRetail * taxRate;
  const taxCopay = taxRetail;
  const totalWithTaxRetail = totalRetail + taxRetail;
  const totalWithTaxCopay = totalCopay + taxCopay;
  const bodyText = `
Approximate insurance coverage: $${discount}

Current sales tax rate for ${selectedLocation} is ${taxRate}

Designer frames come with a one use, one year warranty. Lenses purchased with Antiglare will have a two year one time warranty. Warranties do not cover loss, theft, or misuse of glasses.

Any quotes regarding payment insurance are not a guarantee of payment. You will be responsible for any balance not covered by your insurance. Any questions regarding coverage should be directed to your carrier.

Your optical purchase is a custom order that cannot be resold and therefore is non-refundable. The order cannot be canceled after it is begun. We will, however, work with you to assure your satisfaction with the products you have selected.
`;

  const printableRef = useRef();

  // PDF generation handler
  const handleDownloadPDF = async () => {
    const input = printableRef.current;
    if (!input) return;
    // Use html2canvas to render the DOM node to a canvas
    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
    // Get image and PDF dimensions
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    // Scale image to fit within PDF page, maintaining aspect ratio
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const scaledHeight = imgHeight * ratio;


    const pdfContentWidth = 600; // match .print-preview width
    const marginX = (pdfWidth - pdfContentWidth) / 2;
    pdf.addImage(imgData, 'PNG', marginX, 40, pdfContentWidth, scaledHeight);
    pdf.save('optical-quote.pdf');
  };

  const tableData = {
    headers: ["Item", "Retail Price", "Co-Pay"],
    rows: [
      ["Material Co-Pay", "N/A", materialCopay],
      ...rows.map(row => [row.item, row.retail, row.copay])
    ]
  };

  // Example usage in JSX
  return (
    <>
      {/* sidebar */}
    <Sidebar />

      {/* Main container for the app */}
      <div className="relative flex flex-col min-h-screen items-left">
        <div className="flex flex-col items-center justify-center w-full">
          <TopNav onPrint={handleDownloadPDF} />
          <div className="min-w-full">
            <SecondaryNav
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              taxRate={taxRate}
            />
          </div>
        </div>
        {/* Calculator Selector */}
        <div className="flex justify-start">
          <CalculatorSelector
            selected={selectedCalculator}
            onChange={setSelectedCalculator}
          />
        </div>
        {/*  Calculator Display Area */}
        <div className="w-full flex justify-center mt-0 ">
          {selectedCalculator === "glasses" ? (
            <GlassesCalculator
              rows={rows}
              setRows={setRows}
              materialCopay={materialCopay}
              setMaterialCopay={setMaterialCopay}
              taxRate={taxRate}
            />
          ) : (
            <ContactCalculator />
          )}
        </div>
        {/* <div className="absolute bottom-0 w-full">
          <Footer />
        </div> */}
        {/* PrintableQuoteSheet is hidden but available for PDF generation */}
        <div style={{ opacity: 0, pointerEvents: 'none', position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: -1 }} aria-hidden="true">
          <PrintableQuoteSheet
            ref={printableRef}
            calculatorType={selectedCalculator}
            tableData={tableData}
            bodyText={bodyText}
            discount={discount}
            selectedLocation={selectedLocation}
            taxRate={taxRate}
            totalRetail={totalRetail}
            totalCopay={totalCopay}
            taxRetail={taxRetail}
            taxCopay={taxCopay}
            totalWithTaxRetail={totalWithTaxRetail}
            totalWithTaxCopay={totalWithTaxCopay}
          />
        </div>
      </div>
    </>
  );
}

export default App;