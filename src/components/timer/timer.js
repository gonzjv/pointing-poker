import React from "react";
import "./timer.css";
import { useState, useEffect } from "react";
import Button from "../Button/Button";

const padTime = time => {
  return String(time).length === 1 ? `0${time}` : `${time}`;
};

const format = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <React.Fragment>
      <div class="timer">
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

export const Timer = () => {
  const [counter, setCounter] = useState(120);
  const [timerActive, setTimerActive] = useState(false);

  const startRound = () => {
    setTimerActive(!timerActive)
  }

  React.useEffect(() => {
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
    <div >
      {counter === 0 ?
        <Button value="Reset Round" onCustomClick={setCounter(120)} onCustomClick={startRound} isWhite={false} /> :
        <div> {format(counter)}
          <Button value={timerActive ? "Stop" : "Run Round"} onCustomClick={startRound} isWhite={false} />
        </div>}
    </div>
  );
}