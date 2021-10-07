import './switch.css';

export default function Switch(props) {
  return (
    <div className="setting">
      <label className="setting__name">{props.value}</label>
      <label className="toggle">
        <input type="checkbox" />
        <span className="checkbox-ios-switch"></span>
      </label>
    </div>
  );
}
