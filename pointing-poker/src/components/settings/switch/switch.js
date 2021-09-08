import "./switch.css";

export default function Switch(props) {
  return (
    <div className="setting">
      <label className="setting__name">{props.value}</label>
      <label class="toggle">
        <input type="checkbox" checked />
        <span class="checkbox-ios-switch"></span>
      </label>
    </div>
  );
}
