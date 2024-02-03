import React, { useState, useEffect } from 'react';

const SportData = ({ data }) => {
  const [athleteData, setAthleteData] = useState(null);

  useEffect(() => {
   // SportData.js
   const fetchData = async () => {
    try {
      const response = await fetch(data, { mode: 'cors' });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('API Response:', result); // Výpis celé odpovědi do konzole
      setAthleteData(result.players[0]); // Upravte tuto část podle struktury odpovědi od API
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    if (data) {
      fetchData();
    }
  }, [data]);

  useEffect(() => {
    // Přidáno pro výpis odpovědi serveru do konzole
    console.log('API Response:', athleteData);
  }, [athleteData]);

  return (
    <div>
      {athleteData && (
        <div>
          <h2>Athlete's Data: {athleteData.strPlayer}</h2>
          {/* Zde zobrazte další data o sportovci */}
          {/* <pre>{JSON.stringify(athleteData, null, 2)}</pre> */}
        </div>
      )}
    </div>
  );
};

export default SportData;