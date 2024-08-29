import React from 'react'
import BubbleSort from './Sorting/BubbleSort'
import { Link } from 'react-router-dom';


export default function Landing() {
  return (
    <div> 
        <a href="../Sorting/BubbleSort"><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sorting Algorithms</button></a>
        <br /> <br />
        <a href="#"><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Searching Algorithms</button></a>
    </div>
  )
}