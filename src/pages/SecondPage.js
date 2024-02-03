// SecondPage.js
import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import SportData from '../components/SportData';


const SecondPage = () => {
  const [athleteData, setAthleteData] = useState(null);

  const handleDataLoaded = (athleteName) => {
    // Zde můžete provést další manipulace s daty, pokud jsou potřeba
    setAthleteData({ name: athleteName });
  };

  return (
    <div>
      <InputForm onDataLoaded={handleDataLoaded} />
      <SportData data={athleteData} />
    </div>
  );
};

export default SecondPage;