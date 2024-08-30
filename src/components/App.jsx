import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Landing from './Landing'
import Home from '../pages/Home';

export default function App() {
  return (
    // <div className='text-red-600'>
    //   App
    
    // </div>
    <BrowserRouter>
    {/* <Landing/> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  )
}
