// src/projectData.js
import passwordGen from './assets/password-generator.png';
import guessGame from './assets/guess-game.png';
import codingQuizz from './assets/coding-quizz.png';
import weather from './assets/weather.png';
import bookshare from './assets/bookshare.png';
import movieReviews from './assets/movie-reviews.png';

const projects = [
     {
     id: 1,
     title: "Password Generator",
     image: passwordGen,
     imageClassName: "password-generator",
     keywords: ["console.log", "variable", "array", "functions"],
     purpose: "Build a password generator app",
     initiative: "Added the copy to clipboard option",
     goingBeyond: "Changed CSS design of starter code provided",
     webLink: "https://waynefenwick.github.io/Password-Generator/",
     githubLink: "https://github.com/waynefenwick/Password-Generator"
     },

     {
     id: 2,
     title: "JavaScript Guess Game",
     image: guessGame,
     imageClassName: "guess-game",
     keywords: ["flex-box", "responsive", "typography", "wire-frame", "forms"],
     purpose: "Increase html and css knowledge",
     initiative: "Personally style my first portfolio",
     goingBeyond: "Added more components than challenge presented",
     webLink: "https://waynefenwick.github.io/Guess-Game/",
     githubLink: "https://github.com/waynefenwick/Guess-Game"
     },

     {
     id: 3,
     title: "Coding Quizz",
     image: codingQuizz,
     imageClassName: "coding-quizz",
     keywords: ["DOM", "timer", "event listener", "bubbling", "storage"],
     purpose: "Understand APIs, Local storage, java functions",
     initiative: "Personal design styling",
     goingBeyond: "Added an extra two questions for the quizz",
     webLink: "https://waynefenwick.github.io/Coding-Quiz-Challenge/",
     githubLink: "https://github.com/waynefenwick/Coding-Quiz-Challenge"
     },

     {
     id: 4,
     title: "Weather App",
     image: weather,
     imageClassName: "weather",
     keywords: ["fetch", "API", "JSON", "parse", "network"],
     purpose: "Learn how 3rd Party APIs work",
     initiative: "Personal design styling of a weather app",
     goingBeyond: "Extensive commitment of time",
     webLink: "https://waynefenwick.github.io/Weather-Dashboard/",
     githubLink: "https://github.com/waynefenwick/Weather-Dashboard"
     },

     {
     id: 5,
     title: "BookShare",
     image: bookshare,
     imageClassName: "bookshare",
     keywords: ["handlebars", "MySQL", "Node.js", "Express"],
     purpose: "Use Node.js and Express.js to create a RESTful API",
     initiative: "Create design and folder structure of project",
     goingBeyond: "Prepping presentation and showing some leadership",
     webLink: "https://fathomless-stream-98788-44df48fe7ade.herokuapp.com/",
     githubLink: "https://github.com/waynefenwick/BookShare"
     },

     {
     id: 6,
     title: "Movie Reviews",
     image: movieReviews,
     imageClassName: "movie-reviews",
     keywords: ["teamwork", "css framework", "interactive", "README"],
     purpose: "API integration backed by full functionality",
     initiative: "Styling and design",
     goingBeyond: "Extra time on styling",
     webLink: "https://fersill53.github.io/movie-reviews-and-gifs/",
     githubLink: "https://github.com/Fersill53/movie-reviews-and-gifs"
     },
];

export default projects;
