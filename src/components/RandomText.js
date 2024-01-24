import React, { useEffect, useState } from 'react';
import './RandomText.css';

const texts = [
  'Co udělají Češi, když vyhrají mistrovství světa ve fotbale? Vypnou Playstation a jdou spát...',
  'Neskákej do toho bazénu! Vždyť tam není voda. To nevadí, já neumím plavat.',
  'Já běhám stovku za 8 sekund! vytahuje se Michal před kamarády. Nesmysl, rekord je 10 sekund! No jo, ale ne když znáš zkratku!',
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
