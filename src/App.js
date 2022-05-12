import './App.css';
import { useEffect, useState } from 'react';
import Ships from './components/Ships/Ships';

function App() {
  const [ship, setShip] = useState([]);

  useEffect(() => {
    const getShips = async () => {
      const response = await fetch('https://swapi.dev/api/starships/');
      const data = await response.json();
      setShip(data);
    };
    getShips();
  }, []);

  let { results } = ship;

  if (results) {
    return (
      <div className="App">
        <h1>Star Wars Starships</h1>
        <div className="card-container">
          <Ships {...ship} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Star Wars Starships</h1>
        <h2 className="loading-message">Loading Starships...</h2>
      </div>
    );
  }
}

export default App;
