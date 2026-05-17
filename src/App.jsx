import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/navigation/Sidebar';
import HomePage from './pages/HomePage_v2';
import CalculatorPage from './pages/CalculatorPage';
import RecheckPage from './pages/RecheckPage';
import Footer from 'components/layout/Footer';

function App() {
  const basename = import.meta.env.PROD ? '/optical-calculator' : '/';

  return (
    <Router basename={basename}>
      <Sidebar />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<HomePage/>} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/recheck" element={<RecheckPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;