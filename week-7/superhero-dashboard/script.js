/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Kylie Struhs
  Date: May 5 2024
  Filename: script.js
  Instructions:
    1. Create an HTML page with three sections. Each section will display the information
      for a different superhero. Use CSS styling to bring your dashboard to life.
    2. In your JavaScript code, create an array of superhero objects. Each object should
      contain properties for name, superpower, weakness, and city.
    3. Create three functions, each function should return a promise that “fetches” the
      data for a different superhero in the object array. Use the setTimeout to simulate a
      delay in fetching the data. Set each function’s timer to a different value starting with
      2 seconds and expanding from there.
    4. Use Promise.allSettled to make sure all of the superhero data is fetched before
      updating the webpage. The function should handle both fulfilled promises and
      rejected promises.
    5. If a promise is fulfilled, update the webpage with the superhero data. If a promise is
      rejected, display an error message in the webpage under the section where the
      promise failed. For example, if the first promise fails, the error message should be
      placed under the first section in the webpage. If the second promise fails, the error
      message should be placed under the second section in the webpage, and so on
*/

"use strict";

let heroes = [
  // TODO: Create superhero objects
  {
    name: "Scarlet Witch",
    superpower: "Chaos magic",
    weakness: "mental stability",
    city: "Westview",
  },
  {
    name: "Spiderman",
    superpower: "spidey sense",
    weakness: "small knives",
    city: "New York",
  },
  {
    name: "Antman",
    superpower: "size manipulation",
    weakness: "bug spray",
    city: "San Francisco",
  },
];

function fetchHero1() {
  // get data of Scarlet Witch with delay of 3 seconds
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(heroes[0]);
      resolve("Hero1 data displayed");
    }, 3000);
  });
}

function fetchHero2() {
  // get data of Spiderman with delay of 4 seconds
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(heroes[1]);
      resolve("Hero2 data displayed");
    }, 4000);
  });
}

function fetchHero3() {
  // get data of Antman with delay of 5 seconds
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(heroes[2]);
      resolve("Hero3 data displayed");
    }, 5000);
  });
}

// update the website with the data
Promise.allSettled([fetchHero1(), fetchHero2(), fetchHero3()]).then(
  (results) => {
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log(result.value);
        document.getElementById("hero1text").innerHTML = JSON.stringify(
          heroes[0]
        );
        document.getElementById("hero2text").innerHTML = JSON.stringify(
          heroes[1]
        );
        document.getElementById("hero3text").innerHTML = JSON.stringify(
          heroes[2]
        );
      } else {
        console.log("An error occurred:", result.reason);
      }
    });
  }
);
