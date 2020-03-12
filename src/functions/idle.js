let initialTimer;
let finalTimer;

export const setup = () => {
  document.addEventListener("mousemove", resetTimer, false);
  document.addEventListener("mousedown", resetTimer, false);
  document.addEventListener("keypress", resetTimer, false);
  document.addEventListener("DOMMouseScroll", resetTimer, false);
  document.addEventListener("mousewheel", resetTimer, false);
  document.addEventListener("touchmove", resetTimer, false);
  document.addEventListener("MSPointerMove", resetTimer, false);

  startTimer();
};

const startTimer = () => {
  // wait 2 seconds before calling goInactive
  initialTimer = window.setTimeout(goInactive, 5000);
};

const resetTimer = e => {
  window.clearTimeout(initialTimer);
  window.clearTimeout(finalTimer);

  goActive();
};

const goInactive = () => {
  // do something
  finalTimer = window.setTimeout(goInactiveFinal, 2000);
  console.log("First Timeout: Second Timer Fired", finalTimer);
};

const goInactiveFinal = () => {
  // do something
  console.log("Second Timeout");
};

const goActive = () => {
  // do something
  console.log("Timer Reset");

  startTimer();
};
