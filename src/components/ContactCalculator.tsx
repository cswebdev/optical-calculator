import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "./components/ui/card";
import { Label } from "./components/ui/label";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "./components/ui/table";
import { Button } from "./components/ui/button";

const defaultColumns = [
  { id: 1, name: "6 Month Supply" },
  { id: 2, name: "12 Month Supply" },
];

const defaultRows = [
  { id: 1, name: "Contact Lens Brand" },
  { id: 2, name: "Retail Price" },
  { id: 3, name: "Insurance Coverage" },
  { id: 4, name: "Co-Pay" },
];

const ContactCalculator: React.FC = () => {
  const [columns, setColumns] = useState(defaultColumns);
  const [rows] = useState(defaultRows);
  const [headerEdits, setHeaderEdits] = useState<{ [key: number]: string }>({});

  const handleHeaderChange = (id: number, value: string) => {
    setHeaderEdits({ ...headerEdits, [id]: value });
    setColumns(columns.map(col => col.id === id ? { ...col, name: value } : col));
  };

  const addColumn = () => {
    const newId = columns.length + 1;
    setColumns([...columns, { id: newId, name: `New Supply` }]);
  };

  // Build tableData from your contacts calculator state
  const contactTableData = {
    headers: [ ...columns.map(col => col.name) ],
    rows: [ ...rows.map(row => [row.name, ...Array(columns.length).fill('')]) ]
  };

  return (
    <Card className="max-w-3xl mx-auto mt-8">
      <CardHeader>
        <Label className="text-lg font-bold">Contact Lens Calculator</Label>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              {columns.map(col => (
                <TableHead key={col.id}>
                  <input
                    className="bg-transparent border-b border-gray-300 w-full text-center font-semibold"
                    value={headerEdits[col.id] ?? col.name}
                    onChange={e => handleHeaderChange(col.id, e.target.value)}
                  />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.name}</TableCell>
                {columns.map(col => (
                  <TableCell key={col.id}>
                    <input
                      className="w-full px-2 py-1 border rounded"
                      type="text"
                      placeholder={`Enter value`}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button className="mt-4" onClick={addColumn}>
          Add Column
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContactCalculator;