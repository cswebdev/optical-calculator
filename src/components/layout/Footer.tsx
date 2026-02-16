const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-100 text-center p-4 mt-4 print:hidden">
            <p className="text-gray-600">&copy; {new Date().getFullYear()} Optical Quote Calculator created by Christian Snider. All rights reserved.</p>
        </footer>
    );
}

export default Footer;