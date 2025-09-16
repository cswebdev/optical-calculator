import React, { useState } from 'react';
import {storeLocations} from '../data/LocationData';


const SecondaryNav: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState(storeLocations[0]?.name || '');
  const taxRate = storeLocations.find(location => location.name === selectedLocation)?.taxRate;
  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  return (
    <nav className="secondary-nav">
      <div className="secondary-nav-content flex flex-direction-row items-center gap-4">
        <label htmlFor="store-location-select" className="mr-2">Store Location:</label>
        <select
          id="store-location-select"
          className="store-location-input px-2 py-1 rounded border border-gray-300"
          value={selectedLocation}
          onChange={e => setSelectedLocation(e.target.value)}
        >
          {storeLocations.map((location) => (
            <option key={location.name} value={location.name}>
              {location.name}
            </option>
          ))}
        </select>
        <span className="ml-4">Tax Rate: <span className="font-normal">{taxRate ?? '--'}%</span></span>
        <span className="ml-4">Date: <span className="font-semibold">{formattedDate}</span></span>
      </div>
    </nav>
  );
}

export default SecondaryNav;