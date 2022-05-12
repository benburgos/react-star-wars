import './App.css';
import { useEffect, useState } from 'react';

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
          {results.map((e, i) => {
            return (
                <div className="card" key={i}>
                  <h2>{e.name}</h2>
                  <p>Model: {e.model}</p>
                  <p>Manufacturer: {e.manufacturer}</p>
                  <p>Cost: {e.cost_in_credits} Credits</p>
                </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Star Wars Starships</h1>
        <h2 className='loading-message'>Loading Starships...</h2>
      </div>
    );
  }
}

export default App;
