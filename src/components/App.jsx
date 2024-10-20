import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Visualizer from './Visualizer';
import Selection from './Selection';
import Landing from './Landing';
import '../styles/Landing.scss';

export default function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);

  const handleAlgorithmSelect = (algorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Visualizer onAlgorithmSelect={handleAlgorithmSelect} />} />
        <Route path="/selection" element={<Selection onAlgorithmSelect={handleAlgorithmSelect} />} />
        <Route path="/landing" element={<Landing selectedAlgorithm={selectedAlgorithm} />} />
      </Routes>
    </Router>
  );
}
