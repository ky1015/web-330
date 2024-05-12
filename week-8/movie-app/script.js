/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Kylie Struhs
  Date: May 12 2024
  Filename: script.js
*/
"use strict";

var movies = [
  // Add your movie objects here
  {
    title: "Avatar",
    director: "James Cameron",
    releaseYear: "2009",
    synopsis:
      "A paralyzed marine is able to walk again through the use of an Avatar body on the moon of Pandora. He is taught how to survive by the native people, and is drawn into the battle to save their world from mankind.",
  },
  {
    title: "Lady and the Tramp",
    director: "Clyde Geronimi",
    releaseYear: "1955",
    synopsis:
      "A cocker spaniel living a comfortable life has her world turned upside down when her humans have a baby. She finds herself in the company of a street dog who helps her out. Can she ever return to the life she once knew?",
  },
  {
    title: "Back to the Future",
    director: "Robert Zemeckis",
    releaseYear: "1985",
    synopsis:
      "Marty McFly gets into a time machine created by Dr. Brown. Now he finds himself stuck in the past, and he needs to return to the future without doing irreparable damage to the timeline.",
  },
  {
    title: "Amazing Spider-man 2",
    director: "Marc Webb",
    releaseYear: "2014",
    synopsis:
      "Spider-man grows more confident as a hero, but comes up against a new threat: Electro. Can he save his city and his girlfriend?",
  },
];

function fetchMovie(title) {
  // using a promise, search for movie title in movies array, then set timeout to simulate fetching data from server.
  return new Promise((resolve, reject) => {
    let movie = movies.find((movie) => movie.title === title);
    //console.log(title);
    if (movie) {
      setTimeout(() => {
        console.log("We are getting your movie...");
        resolve(movie);
      }, 2000);
    } else {
      reject("We could not find your movie. Please try a different title.");
    }
  });
}

// set up event listener for submitting the form. Once submitted, fetch data from movie to display on page. If promise was rejected, show error message
document
  .getElementById("movie-form")
  .addEventListener("submit", async (event) => {
    const title = document.getElementById("title-input").value;
    event.preventDefault();
    try {
      const movie = await fetchMovie(title);
      document.getElementById("movie-title").innerText = movie.title;
      document.getElementById("movie-director").innerText = movie.director;
      document.getElementById("movie-year").innerText = movie.releaseYear;
      document.getElementById("movie-synopsis").innerText = movie.synopsis;
      console.log("Your movie is: " + movie);
    } catch (error) {
      console.error(error);
      document.getElementById("movie-title").innerText =
        "There was an error getting your movie.";
    }
  });
