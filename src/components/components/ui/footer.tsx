import REACT from 'react';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="text-center text-sm text-slate-500 max-w-2xl"> 
            <div className="text-center">
                <p className="text-sm text-slate-500 max-w-2xl">
                    This project is in early development stages, if you are interested in contributing or have any feedback, please contact me at my email:
                    <br />
                    <Mail className="w-4 h-4 inline-block ml-1 mr-1" /> 
                    <a href="mailto:cswebdev91@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
                    cswebdev91@gmail.com
                    </a>
                </p>    
                <p className='text-sm text-slate-500 mt-4 max-w-2xl mx-auto'>&copy; {new Date().getFullYear()} Optician's Toolkit. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
