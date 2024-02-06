import './FirstPage.css';

import RandomText from '../components/RandomText';
import StaticComponentsPage from '../components/StaticComponentsPage';
import Tabs from '../components/Tabs';

const FirstPage = () => {
  return (
    <div className="container"> {/* CSS třída pro hlavní kontejner */}
      <div className="child"> {/* CSS třída pro jednotlivé prvky */}
        <RandomText />
      </div>
      <div className="child">
        <StaticComponentsPage />
      </div>
      <div className="child"> {/* CSS třída pro jednotlivé prvky */}
        <Tabs />
      </div>
    </div>
  );
};

export default FirstPage;