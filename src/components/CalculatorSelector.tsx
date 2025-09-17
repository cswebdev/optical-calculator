import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { EyeIcon } from "lucide-react";
import { GlassesIcon } from "lucide-react";
import { CalculatorIcon } from "lucide-react";

interface CalculatorSelectorProps {
  selected: string;
  onChange: (type: string) => void;
}

const CalculatorSelector: React.FC<CalculatorSelectorProps> = ({ selected, onChange }) => {
  return (
    <Card className="w-96 ml-0 mt-3 shadow-none border-none">
      <CardHeader>
        <CardTitle className="flex items-center">
          <CalculatorIcon className="mr-2 ml-5 my-0.5 py-0" />
          Calculator Selector
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row space-x-2 ">
          <button
            className={`flex items-center p-2 border rounded hover:bg-slate-100 transition ${selected === "glasses" ? "bg-slate-200" : ""}`}
            onClick={() => onChange("glasses")}
          >
            <GlassesIcon className="mr-2" />
            Glasses
          </button>
          <button
            className={`flex items-center p-2 border rounded hover:bg-slate-100 transition ${selected === "contacts" ? "bg-slate-200" : ""}`}
            onClick={() => onChange("contacts")}
          >
            <EyeIcon className="mr-2" />
            Contacts
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalculatorSelector;