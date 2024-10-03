import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from '../components/Landing';


import '../styles/Landing.scss';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/dsa" element={<DSA />} />
        <Route path="/os" element={<OperatingSystem />} /> */}
        
      </Routes>
    </Router>
  )
}
