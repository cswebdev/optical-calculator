import React, { useRef } from "react";

interface PrintableQuoteSheetProps {
  calculatorType: "glasses" | "contacts";
  tableData: any;
  summaryData?: any;
  bodyText?: string;
  discount: number;
  selectedLocation: string;
  taxRate: number;
  totalRetail?: number;
  totalCopay?: number;
  totalWithTaxRetail?: number;
  totalWithTaxCopay?: number;
  taxRetail?: number;
  taxCopay?: number;
}

const PrintableQuoteSheet = React.forwardRef<HTMLDivElement, PrintableQuoteSheetProps>(
  (
    {
      calculatorType,
      tableData,
      summaryData,
      bodyText,
      discount,
      selectedLocation,
      taxRate,
      totalRetail,
      totalCopay,
      totalWithTaxRetail,
      totalWithTaxCopay,
      taxRetail,
      taxCopay,
    },
    ref
  ) => {
    const defaultBodyText = `
Approximate insurance coverage: $${discount}

Current sales tax rate for ${selectedLocation} is ${taxRate}

Designer frames come with a one use, one year warranty. Lenses purchased with Antiglare will have a two year one time warranty. Warranties do not cover loss, theft, or misuse of glasses.

Any quotes regarding payment insurance are not a guarantee of payment. You will be responsible for any balance not covered by your insurance. Any questions regarding coverage should be directed to your carrier.

Your optical purchase is a custom order that cannot be resold and therefore is non-refundable. The order cannot be canceled after it is begun. We will, however, work with you to assure your satisfaction with the products you have selected.
`;

    if (!tableData || !tableData.headers || !tableData.rows) {
      return <div>No data available for printable quote.</div>;
    }

    return (
      <div ref={ref} className="printable-quote-sheet p-4 max-w-xl mx-auto flex justify-center flex-col items-center">
        <h2 className="text-xl font-bold mb-2 text-center">
          {calculatorType === "glasses" ? "Glasses Quote" : "Contact Lens Quote"}
        </h2>
        {/* Compact Table */}
        <table className="w-96 border border-gray-300 text-sm mb-4">
          <thead>
            <tr className="bg-gray-100">
              {tableData.headers.map((header: string, idx: number) => (
                <th key={idx} className="px-2 py-1 border text-center">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row: string[], idx: number) => (
              <tr key={idx}>
                {row.map((cell, cidx) => (
                  <td key={cidx} className="px-2 py-1 border text-right">{cell}</td>
                ))}
              </tr>
            ))}
            {/* Add full summary rows for glasses breakdown */}
            {calculatorType === "glasses" && (
              <>
                <tr className="bg-gray-100 font-semibold text-sm">
                  <td className="px-2 py-1 border text-right">Total</td>
                  <td className="px-2 py-1 border text-center">{typeof totalRetail === 'number' ? `$${totalRetail.toFixed(2)}` : ''}</td>
                  <td className="px-2 py-1 border text-center">{typeof totalCopay === 'number' ? `$${totalCopay.toFixed(2)}` : ''}</td>
                </tr>
                <tr className="bg-gray-100 font-semibold text-sm">
                  <td className="px-2 py-1 border text-right">Discount (Insurance Coverage)</td>
                  <td className="px-2 py-1 border text-center">{typeof discount === 'number' ? `$${discount.toFixed(2)}` : ''}</td>
                  <td className="px-2 py-1 border text-center">{typeof discount === 'number' ? `$${discount.toFixed(2)}` : ''}</td>
                </tr>
                <tr className="bg-gray-100 font-semibold text-sm">
                  <td className="px-2 py-1 border text-right">Tax</td>
                  <td className="px-2 py-1 border text-center">{typeof taxRetail === 'number' ? `$${taxRetail.toFixed(2)}` : ''}</td>
                  <td className="px-2 py-1 border text-center">{typeof taxCopay === 'number' ? `$${taxCopay.toFixed(2)}` : ''}</td>
                </tr>
                <tr className="bg-gray-200 font-bold text-sm">
                  <td className="px-2 py-1 border text-right">Total with Tax</td>
                  <td className="px-2 py-1 border text-center">{typeof totalWithTaxRetail === 'number' ? `$${totalWithTaxRetail.toFixed(2)}` : ''}</td>
                  <td className="px-2 py-1 border text-center">{typeof totalWithTaxCopay === 'number' ? `$${totalWithTaxCopay.toFixed(2)}` : ''}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
        {/* Summary rows if provided */}
        {summaryData && (
          <div className="mb-4">
            {Object.entries(summaryData).map(([label, value]) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="font-semibold">{label}:</span>
              </div>
            ))}
          </div>
        )}
        {/* Body text */}
        <div className="mt-4 text-sm text-gray-700 text-left" style={{ whiteSpace: "pre-line" }}>
          {bodyText || defaultBodyText}
        </div>
      </div>
    );
  }
);

export default PrintableQuoteSheet;

