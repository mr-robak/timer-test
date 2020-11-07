import React, { useState } from "react";

export default function Countdown() {
  const initialState = 30;
  const [duration, setDuration] = useState(initialState);

  const handlePlus = (e) => {
    console.log("!!!!");
    setDuration(duration + 1);
  };

  const handleMin = (e) => {
    setDuration(duration - 1);
  };

  const pauseTimer = (e) => {
    //
  };

  const resetTimer = (e) => {
    //
  };
  const startTimer = (e) => {
    //
  };

  return (
    <div>
      <h1>{duration}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMin}>-</button>
      <br />
      <button onClick={pauseTimer}>Pause</button>
      <br />
      <button onClick={resetTimer}>Reset</button>
      <br />
      <button onClick={startTimer}>Start</button>
    </div>
  );
}

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
