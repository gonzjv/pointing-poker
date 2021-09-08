import "./settings.css";
import Switch from "./switch/switch";

export default function Settings() {
  return (
    <div>
      <h2 className="settings__title">Game settings:</h2>
      <form className="settings__form">
        <Switch value="Scram master as player:" />
        <Switch value="Changing card in round end:" />
        <Switch value="Is timer needed:" />
        <div className="setting">
          <label className="setting__name">Score type</label>
          <input type="text" className="setting__input"></input>
        </div>
        <div className="setting">
          <label className="setting__name">Score type (Short)</label>
          <input type="text" className="setting__input"></input>
        </div>
        <div className="setting">
          <label className="setting__name">Round time</label>
        </div>
      </form>
    </div>
  );
}
