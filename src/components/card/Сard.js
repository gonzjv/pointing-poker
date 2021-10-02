import "./card.css";

export const Card = (props) => {
  const cardValue = [
    0, 1, 13, 21, 34, 55, 89, 144
  ]
  return (
    <div className="card">
      <p className="card__type">{props.card.type}</p>
      <p className="card__value">{props.card.value}</p>
      <p className="card__type card__type-reverse">{props.card.type} </p>
    </div>
  );
}
