import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import '../styles/Visualizer.css'; // Assuming the CSS is stored here
import videoSource from '../resources/16381072-hd_1920_1080_25fps.mp4';

const Visualizer = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleStartClick = () => {
    navigate('/selection'); // Navigate to the selection page
  };

  return (
    <div id="background">
      <video autoPlay muted loop className="background-video">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1><b>ALGORITHMS VISUALIZER</b></h1>
        <div id="button">
          <button id="start" onClick={handleStartClick}>GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
