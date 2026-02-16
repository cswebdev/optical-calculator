import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/navigation/Sidebar';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import RecheckPage from './pages/RecheckPage';

function App() {
  const basename = import.meta.env.PROD ? '/optical-calculator' : '/';

  return (
    <Router basename={basename}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/recheck" element={<RecheckPage />} />
      </Routes>
    </Router>
  );
}

export default App;