import React, { useEffect, useState } from 'react';
import './RandomText.css';

const texts = [
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  'Lorem Ipsum has been the industry s standard dummy text ever since the 1500s',
  'when an unknown printer took a galley of type and scrambled it to make a type specimen book',
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

  const prefixes = ['první text', 'druhý text', 'třetí text'];
  const prefixColor = 'green';

  return (
    <div>
      <h1>Náhodný text:</h1>
      <p>
        <span style={{ color: prefixColor }}>{prefixes[texts.indexOf(randomText)]}</span> {randomText}
      </p>
    </div>
  );
};

export default RandomText;
