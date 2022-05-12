import React from 'react';
import Ship from './Ship';

export default function Ships({ results }) {
  const shipArray = results.map((ship, index) => {
    return (
      <Ship
        key={index}
        name={ship.name}
        model={ship.model}
        manufacturer={ship.manufacturer}
        cost_in_credits={ship.cost_in_credits}
      />
    );
  });
  return <React.Fragment>{shipArray}</React.Fragment>;
}
