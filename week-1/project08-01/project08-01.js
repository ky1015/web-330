"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Kylie Struhs
      Date:   March 21 2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/


/* Constructor function for the timer object */

function timer(min, sec) {
  timer.minutes = min;
  timer.seconds = sec;
  timer.timeID = null;

  console.log("function 1 is working");
};

/* add a method to start/stop the timer to the prototype of the timer class */

timer.prototype.runPause = function(timer, minBox, secBox) {
  if (timer.timeID) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
    console.log("first if statement is working");
  } else {
    timer.timeID = window.setInterval(countdown, 1000);

    console.log("first else statement is working");

    // add countdown function
    function countdown() {
      console.log("min =" + timer.minutes);
      console.log("sec = " + timer.seconds);
      if (timer.seconds > 0) {
        timer.seconds --;
        console.log("countdown function first if statement is working");
      } else if (timer.minutes > 0) {
        timer.minutes --;
        timer.seconds = 59;
        console.log("countdown function first else statement");
      } else {
        window.clearInterval(timer.timeID);
        timer.timeID = null;
        console.log("countdown function last else statement")
      }

      // write value of timer.minutes to minBox and timer.seconds to secBox
      minBox.value = timer.minutes;
      secBox.value = timer.seconds;
       }
      }
    }



/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
console.log("minBox =" + minBox);
console.log("minBox.value = " + minBox.value);
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// instantiate timer object class with myTimer object

let myTimer = new timer(minBox.value, secBox.value);

// on change, set my timer

minBox.addEventListener("change", myTimer.minutes = minBox.value);

secBox.onchange = function() {
  myTimer.seconds = secBox.value;
}

//

runPauseTimer.onclick = function () {
  myTimer.runPause(myTimer, minBox, secBox);
}