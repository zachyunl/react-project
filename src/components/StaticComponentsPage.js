import './StaticComponentsPage.css';

import StaticComponent from './StaticComponent';

const StaticComponentsPage = () => {
  return (
    <div>
      <h1>Stránka se statickými komponentami</h1>
      <StaticComponent imagePath="/images/image1.jpg" text="První statická komponenta" />
      <StaticComponent imagePath="/images/image2.jpg" text="Druhá statická komponenta" />
      <StaticComponent imagePath="/images/image3.jpg" text="Třetí statická komponenta" />
      <StaticComponent imagePath="/images/image4.jpg" text="Čtvrtá statická komponenta" />
    </div>
  );
};

export default StaticComponentsPage;