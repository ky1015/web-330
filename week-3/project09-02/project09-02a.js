"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Kylie Struhs
      Date:   April 6 2024

      Filename: project09-02a.js
*/

/* Page Objects */

let riderName = document.getElementById("riderName");
let ageGroup = document.getElementById("ageGroup");
let bikeOption = document.getElementById("bikeOption");
let routeOption = document.getElementById("routeOption");
let accOption = document.getElementById("accOption");
let region = document.getElementById("region");
let miles = document.getElementById("miles");
let comments = document.getElementById("comments");

// add the showData function
let showData = function () {
  // store value of objects in session storage with object name as the key
  sessionStorage.setItem("riderName", riderName.value);
  sessionStorage.setItem("ageGroup", ageGroup.value);
  sessionStorage.setItem("bikeOption", bikeOption.value);
  sessionStorage.setItem("routeOption", routeOption.value);
  sessionStorage.setItem("accOption", accOption.value);
  sessionStorage.setItem("region", region.value);
  sessionStorage.setItem("miles", miles.value);
  sessionStorage.setItem("comments", comments.value);

  // change the value of the location.href object to project09-02b.html file
  location.href = "project09-02b.html";
};

// run the showData function when the submit button is clicked
document.getElementById("submitButton").onclick = showData;
