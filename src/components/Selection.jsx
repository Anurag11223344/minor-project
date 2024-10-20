import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Selection.css';

const Selection = ({ onAlgorithmSelect }) => {
  const navigate = useNavigate();

  const handleButtonClick = (algorithm) => {
    onAlgorithmSelect(algorithm);
    navigate('/Landing'); // Navigate to the process scheduling page
    // Implement further logic based on the selected algorithm here
  };

  return (
    <div id="selection-page">
      <h1>Select an Algorithm</h1>

      <div id="button-container"> {/* New container for buttons */}
        <button onClick={() => handleButtonClick('Process Scheduling')} className="algorithm-button">
            <h1>Process Scheduling</h1>
            <p>Process scheduling is a key concept in operating systems, responsible for determining which process runs at 
                any given time. It efficiently allocates CPU resources to active processes, ensuring optimal performance and 
                fair sharing of resources. Common scheduling algorithms include First-Come, First-Served (FCFS), Round Robin (RR), 
                and Shortest Job Next (SJN).</p>
        </button>
        <button onClick={() => handleButtonClick('Disk Scheduling')} className="algorithm-button">
            <h1>Disk Scheduling</h1>
            <p>Disk scheduling manages how read and write requests to the disk are ordered, optimizing access time and overall
                 system performance. It determines the sequence in which disk I/O requests are processed, reducing seek time. 
                 Common algorithms include FCFS, Shortest Seek Time First (SSTF), and SCAN (Elevator Algorithm).</p>
        </button>
        <button onClick={() => handleButtonClick('Deadlock Avoidance')} className="algorithm-button">
            <h1>Deadlock Avoidance</h1>
            <p>Deadlock avoidance ensures that a system never enters an unsafe state by carefully allocating resources. 
                The Banker’s algorithm is a classic example, where the system checks if resource allocation will keep the system 
                in a safe state before proceeding. This proactive approach helps in maintaining system stability and preventing
                 deadlocks.</p>
        </button>
      </div>
    </div>
  );
};

export default Selection;
