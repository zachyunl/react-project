import React, { useState, useEffect } from 'react';

const AthleteInfoForm = () => {
  const [name, setName] = useState('');
  const [athletesData, setAthletesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError('');
        const apiUrl = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(name)}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result && result.player) {
          setAthletesData(result.player);
        } else {
          setAthletesData([]);
          setError('Sportovec nenalezen v databázi.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Chyba při načítání dat.');
      } finally {
        setIsLoading(false);
      }
    };

    if (name && isLoading) {
      fetchData();
    }
  }, [name, isLoading]);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setError('');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== '') {
      setIsLoading(true);
    } else {
      setError('Zadejte jméno sportovce.');
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          <input type="text" placeholder="Jméno sportovce" value={name} onChange={handleNameChange} />
        </label>
        <button type="submit">Odeslat</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {isLoading && <p>Načítám data...</p>}
      {athletesData.length > 0 && (
        <div>
          <h2>Výsledky hledání:</h2>
          {athletesData.map((athlete, index) => (
            <div key={index}>
              <h3>Athlete's Data: {athlete.strPlayer}</h3>
              <p>Nationality: {athlete.strNationality}</p>
              <p>Sport: {athlete.strSport}</p>
              {/* Zde můžete zobrazit další informace o sportovci */}
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AthleteInfoForm;
