import React from "react";
import "./timer.css";
import { useState, useEffect,useContext } from "react";
import Button from "../Button/Button";
import { UsersContext } from '../../usersContext';


const padTime = time => {
  return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <React.Fragment>
      <div className="timer">
        <div className="timer__text timer__input">
          {minutes}
        </div>
        <p className="timer__doubledots">:</p>
        <div className="timer__text timer__input">
          {padTime(seconds)}
        </div>
      </div>
    </React.Fragment>
  )
};

export const Timer = ({ isTimer }) => {
  const [counter, setCounter] = useState(120);
  const [timerActive, setTimerActive] = useState(false);
  const {isDealer, asPlayer } = useContext(UsersContext)

  const startRound = () => {
    setCounter(120)
    setTimerActive(true)
  }

  useEffect(() => {
    let timer;
    if (counter > 0 && timerActive) {
      timer = setTimeout(() => setCounter(c => c - 1), 1000);
    } else {
      setTimerActive(false);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter, timerActive]);

  return (
    <div className="timer-wrapper">
      {isTimer == false ?
        <div className="timer-overlay"></div> : ""
      }
      {counter === 0 ?
        <div >
          {format(counter)}
          {isDealer && !asPlayer ?  
          <Button value="Reset Round" onCustomClick={startRound} isWhite={false} /> : ""}
        
        </div> :
        <div>
          {format(counter)}
          {isDealer && !asPlayer ? 
          <Button value={timerActive ? "Reset Round" : "Run Round"} onCustomClick={startRound} isWhite={false} />
          :  ""} 
        </div>
      }
    </div>
  );
}