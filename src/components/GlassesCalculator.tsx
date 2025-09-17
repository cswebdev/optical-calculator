import React from 'react';
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from "./components/ui/table";
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
                <Table className="min-w-fit bg-neutral-50 shadow-sm rounded-xl overflow-hidden">
                    <TableHeader className="bg-gray-100">
                        <TableRow>
                            <TableHead className="px-5 py-3 font-semibold text-gray-700 text-left">Items/Options</TableHead>
                            <TableHead className="px-5 py-3 font-semibold text-gray-700 text-left">Retail Price</TableHead>
                            <TableHead className="px-5 py-3 font-semibold text-gray-700 text-left">Co-Pays</TableHead>
                            <TableHead className="px-5 py-3 font-semibold text-gray-700 text-left"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {/* Static Material Co-Pay row */}
                        <TableRow className="bg-stone-100">
                            <TableCell className="px-5 py-1 font-normal text-left">Material Co-Pay</TableCell>
                            <TableCell className="px-3 py-1">
                                <Input
                                    className="w-full bg-gray-200 rounded-md px-2 py-1 cursor-not-allowed"
                                    value={''}
                                    disabled
                                    placeholder="N/A"
                                />
                            </TableCell>
                            <TableCell className="px-3 py-1">
                                <Input
                                    className="w-full bg-white rounded-md px-2 py-1"
                                    value={materialCopay}
                                    onChange={e => setMaterialCopay(e.target.value)}
                                    placeholder="Material Co-Pay"
                                />
                            </TableCell>
                            <TableCell className="px-3 py-1"></TableCell>
                        </TableRow>
                        {/* Dynamic rows */}
                        {rows.map((row, idx) => (
                            <TableRow key={idx} className="bg-stone-50 transition">
                                <TableCell className="px-3 py-1">
                                    <Input
                                        className="w-full bg-white rounded-md px-2 py-1"
                                        value={row.item}
                                        onChange={e => handleInputChange(idx, 'item', e.target.value)}
                                        placeholder="Item/Option"
                                    />
                                </TableCell>
                                <TableCell className="px-3 py-1">
                                    <Input
                                        className="w-full bg-white rounded-md px-2 py-1"
                                        value={row.retail}
                                        onChange={e => handleInputChange(idx, 'retail', e.target.value)}
                                        placeholder="Retail Price"
                                    />
                                </TableCell>
                                <TableCell className="px-3 py-1">
                                    <Input
                                        className="w-full bg-white rounded-md px-2 py-1"
                                        value={row.copay}
                                        onChange={e => handleInputChange(idx, 'copay', e.target.value)}
                                        placeholder="Co-Pay"
                                    />
                                </TableCell>
                                <TableCell className="text-left px-3 py-1" id='deleteTd'>
                                    <Button
                                        variant="destructive"
                                        size="icon"
                                        className="print:hidden"
                                        onClick={() => removeRow(idx)}
                                        aria-label="Delete Row"
                                    >
                                        <FaTrash />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell className="px-3 py-1"></TableCell>
                            <TableCell className="px-3 py-1"></TableCell>
                            <TableCell className="px-3 py-1"></TableCell>
                            <TableCell className="text-left px-3 py-1">
                                <Button
                                    variant="default"
                                    size="icon"
                                    className="print:hidden"
                                    onClick={addRow}
                                >
                                    <FaPlus />
                                </Button>
                            </TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-100 font-semibold">
                            <TableCell className="px-3 py-1 text-right">Total</TableCell>
                            <TableCell className="px-3 py-1 text-left">${totalRetail.toFixed(2)}</TableCell>
                            <TableCell className="px-3 py-1 text-left">${totalCopay.toFixed(2)}</TableCell>
                            <TableCell className="px-3 py-1"></TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-100 font-semibold">
                            <TableCell className="px-3 py-1 text-right">Discount (Insurance Coverage)</TableCell>
                            <TableCell className="px-3 py-1 text-left">${discount.toFixed(2)}</TableCell>
                            <TableCell className="px-3 py-1 text-left">${discount.toFixed(2)}</TableCell>
                            <TableCell className="px-3 py-1"></TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-100 font-semibold">
                            <TableCell className="px-3 py-1 text-right">Tax</TableCell>
                            <TableCell className="px-3 py-1 text-left">${taxRetail.toFixed(2)}</TableCell>
                            <TableCell className="px-3 py-1 text-left">${taxCopay.toFixed(2)}</TableCell>
                            <TableCell className="px-3 py-1"></TableCell>
                        </TableRow>
                        <TableRow className="bg-gray-200 font-bold">
                            <TableCell className="px-3 py-1 text-right">Total with Tax</TableCell>
                            <TableCell className="px-3 py-1 text-left">${totalWithTaxRetail.toFixed(2)}</TableCell>
                            <TableCell className="px-3 py-1 text-left">${totalWithTaxCopay.toFixed(2)}</TableCell>
                            <TableCell className="px-3 py-1"></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div className='mt-4'>
                    <p>Your insurance covers a total of <span className='font-semibold'>${discount.toFixed(2)}</span></p>
                </div>
            </div>
  );
};

export default GlassesCalculator;