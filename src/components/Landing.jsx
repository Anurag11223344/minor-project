import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div class="container section-m1"> 
        <h1>Hello</h1>
        <Link to="/dsa">
          <button class="normal">
          Data Structures and Algorithms
            
          </button>
        </Link>
        <br />
        <Link to="/os">
          <button class="normal">
          Operating System Algorithms
          </button>
        </Link>
        {/* Add more links as needed */}
    </div>
  )
}
