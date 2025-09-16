

import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import '../styles/MainTable.css';


type TableRow = {
    item: string;
    retail: string;
    copay: string;
};

const initialRows: TableRow[] = [
    { item: 'Frame', retail: '', copay: '' },
    { item: 'Lens Type', retail: '', copay: '' },
    { item: 'Lens Material', retail: '', copay: '' },
    { item: 'Antiglare', retail: '', copay: '' },
    { item: 'Transitions', retail: '', copay: '' },
];

const MainTable: React.FC = () => {
    const [rows, setRows] = useState<TableRow[]>(initialRows);

    const handleInputChange = (index: number, field: keyof TableRow, value: string) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };

    const addRow = () => {
        setRows([...rows, { item: '', retail: '', copay: '' }]);
    };

    return (
            <div className="p-4 justify-center flex flex-col items-center">
                <table className="min-w-fit table-auto bg-neutral-50 shadow-sm rounded-xl overflow-hidden">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="p-3 font-semibold text-gray-700 text-left">Items/Options</th>
                            <th className="p-3 font-semibold text-gray-700 text-left">Retail Price</th>
                            <th className="p-3 font-semibold text-gray-700 text-left">Co-Pays</th>
                            <th className="p-3 font-semibold text-gray-700 text-left" id='deleteColumn'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, idx) => (
                            <tr key={idx} className="bg-stone-50 transition">
                                <td className="p-3">
                                    <input
                                        className="w-full bg-white rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        value={row.item}
                                        onChange={e => handleInputChange(idx, 'item', e.target.value)}
                                        placeholder="Item/Option"
                                    />
                                </td>
                                <td className="p-3">
                                    <input
                                        className="w-full bg-white rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        value={row.retail}
                                        onChange={e => handleInputChange(idx, 'retail', e.target.value)}
                                        placeholder="Retail Price"
                                    />
                                </td>
                                <td className="p-3">
                                    <input
                                        className="w-full bg-white0 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        value={row.copay}
                                        onChange={e => handleInputChange(idx, 'copay', e.target.value)}
                                        placeholder="Co-Pay"
                                    />
                                </td>
                                <td className="text-left p-2" id='deleteTd'>
                                    <button
                                        className="bg-red-100 p-1 rounded-sm text-red-500 hover:text-red-700  hover:bg-red-200 transition"
                                        onClick={() => {
                                            setRows(rows.filter((_, i) => i !== idx));
                                        }}
                                        aria-label="Delete Row"
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded flex items-center gap-2"
                    onClick={addRow}
                >
                    <FaPlus /> Add Row
                </button>
            </div>
    );
};

export default MainTable;