import React from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetTrigger, SheetContent } from "../components/ui/sheet";
import { Button } from "../components/ui/button";
import { HomeIcon, GlassesIcon, ClipboardListIcon } from 'lucide-react';


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
					<Link to="/" className="block py-2 px-4 rounded hover:bg-slate-700 transition w-full">
						<HomeIcon className="inline-block mr-2" />
						Home
					</Link>
					<Link to="/calculator" className="block py-2 px-4 rounded hover:bg-slate-700 transition w-full">
						<GlassesIcon className="inline-block mr-2" />
						Calculator
					</Link>
					<Link to="/recheck" className="block py-2 px-4 rounded hover:bg-slate-700 transition w-full">
						<ClipboardListIcon className="inline-block mr-2" />
						Recheck Form
					</Link>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default Sidebar;
