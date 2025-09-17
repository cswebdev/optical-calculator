import logo from '../assets/logo.svg';

const TopNav: React.FC<{ onPrint: () => void }> = ({ onPrint }) => (
    <nav className="bg-slate-100 min-w-full p-4 rounded-sm ">
        <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <img src={logo} alt="Logo" className="h-[47px] w-[250px]" />
                <span className="text-[#001231] font-bold text-xl">| Optical Quote Sheet</span>
            </div>
            <div>
                <button onClick={onPrint} className="px-4 py-2 bg-blue-500 text-white rounded">
                    Print
                </button>
            </div>
        </div>
    </nav>
);

export default TopNav;