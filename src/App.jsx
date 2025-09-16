import React, { useState } from 'react';
import { storeLocations } from './data/LocationData';
import SecondaryNav from 'components/SecondaryNav';
import './App.css';
import GlassesCalculator from './components/GlassesCalculator';
import TopNav from './components/TopNav';
import Footer from './components/Footer';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(storeLocations[0]?.name || '');
  const taxRate = storeLocations.find(location => location.name === selectedLocation)?.taxRate ?? 0;

  return (
    <div className="relative flex flex-col min-h-screen items-center">
      <div className="flex flex-col items-center justify-center w-full">
        <TopNav />
        <div className="min-w-full">
          <SecondaryNav
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            taxRate={taxRate}
          />
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        <GlassesCalculator taxRate={taxRate} />
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;