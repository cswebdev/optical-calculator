import React from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';



interface TableRow {
  item: string;
  retail: string;
  copay: string;
}

interface MainTableProps {
  rows: TableRow[];
  setRows: React.Dispatch<React.SetStateAction<TableRow[]>>;
  materialCopay: string;
  setMaterialCopay: React.Dispatch<React.SetStateAction<string>>;
  taxRate: number;
}

const initialRows: TableRow[] = [
    { item: 'Frame', retail: '', copay: '' },
    { item: 'Lens Type', retail: '', copay: '' },
    { item: 'Lens Material', retail: '', copay: '' },
    { item: 'Anti-Reflective', retail: '', copay: '' },
    { item: 'Transitions', retail: '', copay: '' },
];

const GlassesCalculator: React.FC<MainTableProps> = ({
  rows,
  setRows,
  materialCopay,
  setMaterialCopay,
  taxRate
}) => {
    // Controlled handlers
    const handleInputChange = (index: number, field: keyof TableRow, value: string) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };

    const addRow = () => {
        setRows([...rows, { item: '', retail: '', copay: '' }]);
    };

    const removeRow = (idx: number) => {
        setRows(rows.filter((_, i) => i !== idx));
    };

    // Calculation logic
    const totalRetail = rows.reduce((sum, row) => sum + Number(row.retail || 0), 0);
    const materialCopayValue = Number(materialCopay || 0);
    const totalCopay = rows.reduce((sum, row) => sum + Number(row.copay || 0), 0) + materialCopayValue;
    const discount = totalRetail - totalCopay;
    const taxRetail = totalRetail * taxRate;
    const taxCopay = taxRetail;
    const totalWithTaxRetail = totalRetail + taxRetail;
    const totalWithTaxCopay = totalCopay + taxCopay;

    return (
            <div className="p-4 justify-center flex flex-col items-center">
                <table className="min-w-fit table-auto bg-neutral-50 shadow-sm rounded-xl overflow-hidden">
                    <thead className="bg-gray-100">
                        <tr> 
                            <th className="px-5 py-3 font-semibold text-gray-700 text-left">Items/Options</th>
                            <th className="px-5 py-3 font-semibold text-gray-700 text-left">Retail Price</th>
                            <th className="px-5 py-3 font-semibold text-gray-700 text-left">Co-Pays</th>
                            <th className="px-5 py-3 font-semibold text-gray-700 text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                         {/* Static Material Co-Pay row */}
                        <tr className="bg-stone-100">
                            <td className="px-5 py-1 font-normal text-left">Material Co-Pay</td>
                            <td className="px-3 py-1">
                                <input
                                    className="w-full bg-gray-200 rounded-md px-2 py-1 cursor-not-allowed"
                                    value={''}
                                    disabled
                                    placeholder="N/A"
                                />
                            </td>
                            <td className="px-3 py-1">
                                <input
                                    className="w-full bg-white rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    value={materialCopay}
                                    onChange={e => setMaterialCopay(e.target.value)}
                                    placeholder="Material Co-Pay"
                                />
                            </td>
                            <td className="px-3 py-1"></td>
                        </tr>
                        {/* Dynamic rows */}
                        {rows.map((row, idx) => (
                            <tr key={idx} className="bg-stone-50 transition">
                                <td className="px-3 py-1">
                                    <input
                                        className="w-full bg-white rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        value={row.item}
                                        onChange={e => handleInputChange(idx, 'item', e.target.value)}
                                        placeholder="Item/Option"
                                    />
                                </td>
                                <td className="px-3 py-1">
                                    <input
                                        className="w-full bg-white rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        value={row.retail}
                                        onChange={e => handleInputChange(idx, 'retail', e.target.value)}
                                        placeholder="Retail Price"
                                    />
                                </td>
                                <td className="px-3 py-1">
                                    <input
                                        className="w-full bg-white rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        value={row.copay}
                                        onChange={e => handleInputChange(idx, 'copay', e.target.value)}
                                        placeholder="Co-Pay"
                                    />
                                </td>
                                <td className="text-left px-3 py-1" id='deleteTd'>
                                    <button
                                        className="bg-red-100 p-1 rounded-sm text-red-500 hover:text-red-700 hover:bg-red-200 transition print:hidden"
                                        onClick={() => removeRow(idx)}
                                        aria-label="Delete Row"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                       
                        <tr>
                            <td className="px-3 py-1"></td>
                            <td className="px-3 py-1"></td>
                            <td className="px-3 py-1"></td>
                            <td className="text-left px-3 py-1">
                                <button
                                    className="p-1 bg-blue-500 text-white rounded flex items-center print:hidden"
                                    onClick={addRow}
                                >
                                    <FaPlus /> 
                                </button>
                            </td>
                        </tr>
                        <tr className="bg-gray-100 font-semibold">
                            <td className="px-3 py-1 text-right">Total</td>
                            <td className="px-3 py-1 text-left">${totalRetail.toFixed(2)}</td>
                            <td className="px-3 py-1 text-left">${totalCopay.toFixed(2)}</td>
                            <td className="px-3 py-1"></td>
                        </tr>
                        <tr className="bg-gray-100 font-semibold">
                            <td className="px-3 py-1 text-right">Discount (Insurance Coverage)</td>
                            <td className="px-3 py-1 text-left">${discount.toFixed(2)}</td>
                            <td className="px-3 py-1 text-left">${discount.toFixed(2)}</td>
                            <td className="px-3 py-1"></td>
                        </tr>
                        <tr className="bg-gray-100 font-semibold">
                            <td className="px-3 py-1 text-right">Tax</td>
                            <td className="px-3 py-1 text-left">${taxRetail.toFixed(2)}</td>
                            <td className="px-3 py-1 text-left">${taxCopay.toFixed(2)}</td>
                            <td className="px-3 py-1"></td>
                        </tr>
                        <tr className="bg-gray-200 font-bold">
                            <td className="px-3 py-1 text-right">Total with Tax</td>
                            <td className="px-3 py-1 text-left">${totalWithTaxRetail.toFixed(2)}</td>
                            <td className="px-3 py-1 text-left">${totalWithTaxCopay.toFixed(2)}</td>
                            <td className="px-3 py-1"></td>
                        </tr>
                    </tbody>
                </table>
                <div className='mt-4'>
                    <p>Your insurance covers a total of <span className='font-semibold'>${discount.toFixed(2)}</span></p>
                </div>
            </div>
  );
};

export default GlassesCalculator;