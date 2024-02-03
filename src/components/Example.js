// Example.js
import React, { useEffect } from 'react';

const Example = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Lionel%20Messi');
        const result = await response.json();
        
        console.log('Data from API:', result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return null;
};

export default Example;