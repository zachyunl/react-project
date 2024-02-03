// InputForm.js
import React, { useState } from 'react';
import SportData from './SportData';

const InputForm = ({ onDataLoaded }) => {
  const [name, setName] = useState('');

  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // Přidejte k názvu URL parametr "t" pro tým, pokud to bude vhodné v rámci vaší aplikace
    const apiUrl = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${encodeURIComponent(name)}`;
    onDataLoaded(apiUrl);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label>
        Athlete's Name:
        <input type="text" value={name} onChange={handleNameInput} />
      </label>
      <button type="submit">Load Data</button>
    </form>
  );
};

export default InputForm;