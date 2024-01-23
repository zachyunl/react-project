import React, { useEffect, useState } from 'react';

const texts = [
  'První text.',
  'Druhý text.',
  'Třetí text.',
];

const RandomText = () => {
  const [randomText, setRandomText] = useState('');

  useEffect(() => {
    const getRandomText = () => {
      const randomIndex = Math.floor(Math.random() * texts.length);
      return texts[randomIndex];
    };

    setRandomText(getRandomText());
  }, []);

  return (
    <div>
      <h1>Náhodný text:</h1>
      <p>{randomText}</p>
    </div>
  );
};

export default RandomText;