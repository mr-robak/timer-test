import React, { useEffect, useState } from "react";

export default function Countdown() {
  const initialState = 30;

  const [count, setCount] = useState(initialState);
  const [timerId, setTimerID] = useState();
  const [counterRunning, setCounterRunning] = useState(false);

  useEffect(() => {
    if (counterRunning) {
      const timer = count > 0 && setInterval(() => setCount(count - 1), 1000);
      setTimerID(timer);
      return () => clearInterval(timer);
    }
  }, [count, counterRunning]);

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMin = () => {
    setCount(count - 1);
  };

  const pauseTimer = () => {
    setCounterRunning(false);
    clearInterval(timerId);
  };

  const resetTimer = () => {
    setCounterRunning(false);
    clearInterval(timerId);
    setCount(initialState);
  };

  const startTimer = () => {
    setCounterRunning(true);
  };

  return (
    <div>
      <div
        style={{
          margin: "auto",
          width: 100,
          height: 100,
          borderRadius: "50%",
          border: "5px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>{count}</h1>
      </div>
      <div style={{ margin: 10 }}>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMin}>-</button>
        <br />
        <button onClick={resetTimer}>Reset</button>
        <br />
        {!counterRunning ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={pauseTimer} disabled={count === 0}>
            Pause
          </button>
        )}
      </div>
    </div>
  );
}

// <button disabled={buttonIsDisabled}>

// Implement a countdown timer
//
// (Clock that counts down 10 9 8 7 ...)
// Clock stops at 0 and says "Finished"
//
// Button "Start" -> start countdown
// Button "Pause" -> pause countdown
// Button "Reset" -> reset the counter to the original setting
// Button "+1" -> add 1 second to the timer
// Button "-1" -> subtract 1 second from the timer
//
// Counter can't go below 0
// "Reset" stops the timer and also sets the counter back to the original number
// If you press "Start" while's it's already running, it shouldn't do anything bad, like count down twice as fast.

// Start the timer
// const timerId = setInterval(callbackFunction, timeoutInMilliseconds)
//
// Stop the timer
// clearInterval(timerId)
