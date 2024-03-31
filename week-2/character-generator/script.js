/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Kylie Struhs
  Date: March 30 2024
  Filename: script.js
*/

"use strict";


// function to create a character object with member functions
function createCharacter(name, gender, characterClass) {
  return {
  getName : function() {
    return (name);
    },
  getGender : function() {
    return (gender);
    },
  getClass : function() {
    return (characterClass);
    }
  };
  }


// event listener to create objects on click
document.getElementById("generateHero").addEventListener("click", function(e) {
e.preventDefault();

//Get inputted form values
let name = document.getElementById("heroName").value;
let characterClass = document.getElementById("heroClass").value;
let gender = document.getElementById("heroGender").value;

// Function to create character
const character = createCharacter(name, gender, characterClass);

// TODO: Display character information
let image = document.getElementById("picture");
if (characterClass == 'warrior') {
  image.src='images/warrior.png';
} else if (characterClass == 'mage') {
  image.src ='images/mage.png';
} else if (characterClass == 'rogue') {
  image.src ='images/rogue.png';
}

document.getElementById("characterOutput").innerHTML = character.getName() + " " + character.getGender() + " " + character.getClass();
},
);