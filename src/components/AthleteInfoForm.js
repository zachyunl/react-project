import React, { useState } from 'react';
import './AthleteInfoForm.css';

const AthleteInfoForm = () => {
  const [name, setName] = useState('');
  const [athleteData, setAthleteData] = useState(null);
  const [loadingState, setLoadingState] = useState('idle');

  const fetchData = async () => {
    try {
      setLoadingState('loading');
      const apiUrl = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(name)}`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();

      if (result && result.player) {
        setAthleteData(result.player);
        setLoadingState('success');
      } else {
        setAthleteData(null);
        setLoadingState('not-found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setAthleteData(null);
      setLoadingState('error');
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setLoadingState('idle');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (name.trim().length > 0) {
      fetchData();
      setName(''); // Vynulování vstupního pole po úspěšném načtení dat
    } else {
      setAthleteData(null);
      setLoadingState('empty-name');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            placeholder="Jméno sportovce"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <button type="submit">Odeslat</button>
      </form>
      {loadingState === 'error' && <p className="error-message">Chyba při načítání dat.</p>}
      {loadingState === 'loading' && <p className="loading-message">Načítám data...</p>}
      {loadingState === 'not-found' && <p className="not-found-message">Sportovec nenalezen v databázi.</p>}
      {loadingState === 'empty-name' && <p className="empty-name-message">Zadejte jméno sportovce.</p>}
      {athleteData && (
        <div className="results-container">
          <h2>Výsledky hledání:</h2>
          {athleteData.map((athlete, index) => (
            <div key={index}>
              <h3>Jméno sportovce: {athlete.strPlayer}</h3>
              <p>Datum narození: {athlete.dateBorn}</p>
              <p>Národnost: {athlete.strNationality}</p>
              <p>Sport: {athlete.strSport}</p>
              <p>Tým: {athlete.strTeam}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AthleteInfoForm;
