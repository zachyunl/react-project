import './Tabs.css';
import { useState } from 'react';

const Tabs = () => {
    const [selectedTab, setSelectedTab] = useState(1);
  
    const handleTabClick = (tabNumber) => {
      setSelectedTab(tabNumber);
    };
  
    return (
      <div>
        <button onClick={() => handleTabClick(1)}>Záložka 1</button>
        <button onClick={() => handleTabClick(2)}>Záložka 2</button>
        <button onClick={() => handleTabClick(3)}>Záložka 3</button>
        <button onClick={() => handleTabClick(4)}>Záložka 4</button>
  
        <div>
          {selectedTab === 1 && <p>Text pro záložku 1</p>}
          {selectedTab === 2 && <p>Text pro záložku 2</p>}
          {selectedTab === 3 && <p>Text pro záložku 3</p>}
          {selectedTab === 4 && <p>Text pro záložku 4</p>}
        </div>
      </div>
    );
  };
  
  export default Tabs;