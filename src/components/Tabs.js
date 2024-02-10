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
           <p>Sportovní aktivity jsou rozmanité a zahrnují individuální sporty (např. běh, plavání), kolektivní sporty (např. fotbal, basketbal) a sporty s míčem (např. tenis, volejbal).</p>
          </>
          }
          {selectedTab === 3 && 
          <>          
          <h2>Záložka 3</h2>
           <p>Najděte si aktivitu, která vás baví: Existuje mnoho druhů sportů, proto je důležité najít si aktivitu, která vás baví a naplňuje.</p>
          </>
          }
          {selectedTab === 4 && 
          <>          
          <h2>Záložka 4</h2>
           <p>Před zahájením sportovní aktivity je vhodné se poradit se svým lékařem, zvláště pokud máte nějaké zdravotní problémy.</p>
          </>
          }
        </div>
      </>
    );
  };
  
  export default Tabs;