import React from 'react';
import { Link } from 'react-router-dom';
import { GlassesIcon, ClipboardListIcon, Mail } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen p-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">Welcome to Optician's Toolkit</h1>
          <p className="text-xl text-slate-600 mb-12">
            Create accurate optical quotes and manage recheck forms with ease.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Link to="/calculator" className="group p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <GlassesIcon className="w-16 h-16 mx-auto mb-4 text-blue-500 group-hover:text-blue-600 transition-colors" />
              <h2 className="text-2xl font-light text-slate-800 mb-2">Calculator</h2>
            </Link>
            
            <Link to="/recheck" className="group p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <ClipboardListIcon className="w-16 h-16 mx-auto mb-4 text-green-500 group-hover:text-green-600 transition-colors" />
              <h2 className="text-2xl font-light text-slate-800 mb-2">Recheck Form</h2>
            </Link>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default HomePage;
