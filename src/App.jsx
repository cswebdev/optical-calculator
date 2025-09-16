import React, { useState } from 'react';
import { storeLocations } from './data/LocationData';
import SecondaryNav from 'components/SecondaryNav';
import './App.css';
import GlassesCalculator from './components/GlassesCalculator';
import TopNav from './components/TopNav';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(storeLocations[0]?.name || '');
  const taxRate = storeLocations.find(location => location.name === selectedLocation)?.taxRate ?? 0;

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <TopNav />
        <div className='min-w-full'>
          <SecondaryNav
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            taxRate={taxRate}
          />
        </div>
      </div>
      <div className="w-full flex justify-center mt-16">
  <GlassesCalculator taxRate={taxRate} />
      </div>
    </>
  );
}

export default App;