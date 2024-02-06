// StaticComponentsPage.js
import './StaticComponentsPage.css';

import StaticComponent from './StaticComponent';

const StaticComponentsPage = () => {
  return (
    <div className="static-container">
      <StaticComponent imagePath="/images/image1.jpg" text="Běh je jednoduchá, ale efektivní forma cvičení, která zahrnuje opakovaný cyklus střídání chůze nebo běhu." />
      <StaticComponent imagePath="/images/image2.jpg" text="Plavání je skvělým cvičením, které poskytuje celou řadu zdravotních a wellness výhod. Např. posílení svalů, zlepšení flexibility apod." />
      <StaticComponent imagePath="/images/image3.jpg" text="Americký fotbal je složitý sport, který vyžaduje fyzickou sílu, rychlost a strategii. Je oblíbený nejen ve Spojených státech." />
      <StaticComponent imagePath="/images/image4.jpg" text="Cyklistika je populární aktivita a sport, který zahrnuje jízdu na kole. Cyklistika je skvělý způsob, jak zlepšit fyzickou kondici." />
    </div>
  );
};

export default StaticComponentsPage;