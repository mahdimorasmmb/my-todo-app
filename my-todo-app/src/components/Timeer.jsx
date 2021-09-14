import React, { useEffect, useState } from "react";

export const Timeer = () => {
  const [seconds, setSeconds] = useState(57);
  const [minut, setMinut] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }
  function reset() {
    setSeconds(0);
    setMinut(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      if (seconds > 59) {
        setMinut(minut + 1);
        setSeconds(0);
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="timer">
        {seconds} seconds {minut} minut
      </div>
      <div className="row">
        <button
          className={`btn btn-primary btn-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
