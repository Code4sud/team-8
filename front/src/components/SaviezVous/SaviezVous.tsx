import React from 'react';
import Carousel from './Carousel'; 
import SaviezVousP1 from "./SaviezVousP1";
import SaviezVousP2 from "./SaviezVousP2";
import SaviezVousP3 from "./SaviezVousP3"; 


const SaviezVous: React.FC = () => {
  const slides = [
    { id: '1', content: <SaviezVousP1 /> },
    { id: '2', content: <SaviezVousP2 /> },
    { id: '3', content: <SaviezVousP3 /> },
  ];

  return (
    <div>
      <h2>Les principaux polluants atmosphériques</h2>
      <Carousel slides={slides} />
    </div>
  );
};

export default SaviezVous;
