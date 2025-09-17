import React from 'react';
import { Sheet, SheetTrigger, SheetContent } from "./components/ui/sheet";
import { Button } from "./components/ui/button";
import { GlassesIcon } from 'lucide-react';

const Sidebar: React.FC = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="ghost" className="fixed top-4 left-4 z-50">
					{/* Hamburger icon or text */}
					<span className="text-xl">&#9776;</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="p-0 w-64 bg-slate-800 text-white">
				<div className="mt-16 flex flex-col items-start px-4">
					<a href="#" className="block py-2 px-4 rounded hover:bg-slate-700 transition w-full">
						<GlassesIcon className="inline-block mr-2" />
						Calculator
					</a>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default Sidebar;
