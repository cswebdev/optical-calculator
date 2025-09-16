import React, { useState } from 'react';
import {storeLocations} from '../data/LocationData';


interface SecondaryNavProps {
  selectedLocation: string;
  setSelectedLocation: (loc: string) => void;
  taxRate: number;
}

const SecondaryNav: React.FC<SecondaryNavProps> = ({ selectedLocation, setSelectedLocation, taxRate }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  return (
    <nav className="secondary-nav w-full p-4">
      <div className="secondary-nav-content flex items-center justify-between w-full">
        <div className="flex items-center">
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
          <span className="ml-4">Tax Rate: <span className="font-normal">{taxRate}%</span></span>
        </div>
        <div className='display-flex justify-end'>
          <span className="font-semibold">{formattedDate}</span>
        </div>
      </div>
    </nav>
  );
}

export default SecondaryNav;