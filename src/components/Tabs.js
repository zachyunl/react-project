import './Tabs.css';
import { useState } from 'react';

const Tabs = () => {
    const [selectedTab, setSelectedTab] = useState(1);
  
    const handleTabClick = (tabNumber) => {
      setSelectedTab(tabNumber);
    };
  
    return (
      <>
      <div className="container-tabs">
        <button onClick={() => handleTabClick(1)}>Záložka 1</button>
        <button onClick={() => handleTabClick(2)}>Záložka 2</button>
        <button onClick={() => handleTabClick(3)}>Záložka 3</button>
        <button onClick={() => handleTabClick(4)}>Záložka 4</button>
        </div>
        <div className="contaner-tabs-text">
          {selectedTab === 1 && 
          <>          
          <h2>Záložka 1</h2>
           <p>Sport je klíčovou součástí zdravého životního stylu a má mnoho pozitivních účinků na fyzické i duševní zdraví jednotlivce. Pravidelná fyzická aktivita přináší celou řadu výhod, které ovlivňují tělo i mysl.</p>
          </>
          }
          {selectedTab === 2 && 
          <>          
          <h2>Záložka 2</h2>
           <p>Sport je klíčovou součástí zdravého životního stylu a má mnoho pozitivních účinků na fyzické i duševní zdraví jednotlivce. Pravidelná fyzická aktivita přináší celou řadu výhod, které ovlivňují tělo i mysl.</p>
          </>
          }
          {selectedTab === 3 && <p>Text pro záložku 3</p>}
          {selectedTab === 4 && <p>Text pro záložku 4</p>}
        </div>
      </>
    );
  };
  
  export default Tabs;