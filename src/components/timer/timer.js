import "./timer.css";
import { useState } from "react";

export default function Timer() {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(20);

  return (
    <div class="timer">
      <div>
        <label for="minutes" className="timer__text">
          minutes
        </label>
        <input
          type="text"
          name="minutes"
          value={minutes}
          onChange={(event) => setMinutes(event.target.value)}
          className="timer__input"
        />
      </div>
      <p className="timer__doubledots">:</p>
      <div>
        <label for="seconds" className="timer__text">
          seconds
        </label>
        <input
          type="text"
          name="seconds"
          value={seconds}
          onChange={(event) => setSeconds(event.target.value)}
          className="timer__input"
        />
      </div>
    </div>
  );
}
