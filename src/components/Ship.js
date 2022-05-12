import './Ship.css';

export default function Ship(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Model: {props.model}</p>
      <p>Manufacturer: {props.manufacturer}</p>
      <p>Cost: {props.cost_in_credits} Credits</p>
    </div>
  );
}
