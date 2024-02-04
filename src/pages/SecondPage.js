// SecondPage.js
import React, { useState } from 'react';
import InputForm from '../components/InputForm.old';
import SportData from '../components/SportData.old';
import AthleteInfo from '../components/AthleteInfo';
import AthleteInfoForm from '../components/AthleteInfoForm';


const SecondPage = () => {
  const [athleteData, setAthleteData] = useState(null);

  const handleDataLoaded = (athleteName) => {
    // Zde můžete provést další manipulace s daty, pokud jsou potřeba
    setAthleteData({ name: athleteName });
    console.log(athleteName);
  };
  
  return (
    <div>
      <h1>Sports Information</h1>
      <AthleteInfoForm />
      
    </div>
  );
};

export default SecondPage;