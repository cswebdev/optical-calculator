import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/navigation/Sidebar';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </Router>
  );
}

export default App;