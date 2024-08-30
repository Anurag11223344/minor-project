import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from '../components/Landing';
import DSA from '../pages/DSA';
import OperatingSystem from '../pages/OperatingSystem';

import '../styles/Landing.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dsa" element={<DSA />} />
        <Route path="/os" element={<OperatingSystem />} />
        
      </Routes>
    </BrowserRouter>
  )
}
