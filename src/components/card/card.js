import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <p className="card__type">{props.card.type}</p>
      <p className="card__value">{props.card.value}</p>
      <p className="card__type card__type-reverse">{props.card.type} </p>
    </div>
  );
}
