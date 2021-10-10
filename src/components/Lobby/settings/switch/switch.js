import './switch.css';

export default function Switch({value, onCustomChange}) {

  return (
    <div className="setting">
      <label className="setting__name">{value}</label>
      <label className="toggle">
        <input type="checkbox"  onChange={onCustomChange} />
        <span className="checkbox-ios-switch"></span>
      </label>
    </div>
  );
}
