import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div> 
        <h1 className='text-red-600'>Hello</h1>
        <Link to="/home">
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Go to Home
          </button>
        </Link>
        {/* Add more links as needed */}
    </div>
  )
}
