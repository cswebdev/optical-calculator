import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-100 text-center p-4 print:hidden">
            <p className="text-gray-600">&copy; {new Date().getFullYear()} Optical Quote Calculator created by Christian Snider. All rights reserved.</p>
            <p className="text-sm text-slate-500 mt-2">
                For questions or feedback:
                <br />
                <Mail className="w-4 h-4 inline-block ml-1 mr-1" />
                <a href="mailto:cswebdev91@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
                    cswebdev91@gmail.com
                </a>
            </p>
        </footer>
    );
}

export default Footer;