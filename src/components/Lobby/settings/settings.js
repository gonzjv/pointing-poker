import { useState, useContext } from 'react';
import {Timer} from '../../timer/timer';
import './settings.css';
import Switch from './switch/switch';
import { UsersContext } from '../../../usersContext';


export default function Settings() {
  const [scoreType, setScoreType] = useState('');
  const [isTimer, setIsTimer] = useState(false);
  const {asPlayer, setAsPlayer } = useContext(UsersContext)


  return (
    <div>
      <h2 className="lobby__subtitle settings__title">Game settings:</h2>
      <form className="settings__form">
        <Switch value="Scram master as player:" onCustomChange={() => setAsPlayer(!asPlayer)}/>
        <Switch value="Changing card in round end:" onCustomChange={()=> {}}/>
        <Switch value="Is timer needed:" onCustomChange={() => setIsTimer(!isTimer)} />
        <div className="setting">
          <label className="setting__name">Score type</label>
          <input
            type="text"
            className="setting__input"
            value={scoreType}
            onChange={(event) => {
              setScoreType(event.target.value);
            }}
          ></input>
        </div>
        <div className="setting">
          <label className="setting__name">Score type (Short)</label>
          <input type="text" className="setting__input"></input>
        </div>
        <div className="setting">
          <label className="setting__name">Round time</label>
          <Timer isTimer={isTimer}/>
        </div>
      </form>
    </div>
  );
}
