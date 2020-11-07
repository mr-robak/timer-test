import * as React from "react";
import Countdown from "./components/Countdown";

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

const App = () => {
  return (
    <div>
      <Countdown />
    </div>
  );
};

export default App;
