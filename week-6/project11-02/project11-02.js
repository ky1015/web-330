"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Kylie Struhs
      Date:   April 28 2024

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function () {
  // declare variables
  let codeValue = postalCode.value;
  let countryValue = country.value;
  place.value = "";
  region.value = "";

  // use fetch
  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((data) => {
      place.value = data.places[0]["place name"];
      region.value = data.places[0]["state abbreviation"];
    })
    .catch((error) => console.log(error));
};
