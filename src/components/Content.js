import React, { useEffect } from 'react';
import profilePic from '../assets/Profile-Pic.png';
import passwordGen from '../assets/password-generator.png';
import guessGame from '../assets/guess-game.png';
import codingQuizz from '../assets/coding-quizz.png';
import weather from '../assets/weather.png';
import movieReviews from '../assets/movie-reviews.png';
import bookshare from '../assets/bookshare.png';



const Content = () => {
  useEffect(() => {
    const form = document.getElementById('contact-form');
    const messageInput = document.getElementById('message');
    const emailInput = document.getElementById('email');
    const messageNotification = document.getElementById('message-notification');
    const emailNotification = document.getElementById('email-notification');

    form.addEventListener('submit', (e) => {
      let isValid = true;

      if (messageInput.value.trim() === '') {
        e.preventDefault();
        messageNotification.style.display = 'block';
        isValid = false;
      } else {
        messageNotification.style.display = 'none';
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        e.preventDefault();
        emailNotification.style.display = 'block';
        isValid = false;
      } else {
        emailNotification.style.display = 'none';
      }

      if (!isValid) {
        e.preventDefault();
      }
    });
  }, []);

  return (
    <>
      <section>
        <div id="profile-container">
          <div>
            <div id="profile">
              <img src={profilePic} className="profile-picture" alt="Profile Picture" />
            </div>
          </div>
          <div className="profile">
            <div id="profile-header">
              <h1><u>Personal Profile</u></h1>
            </div>
            <br />
            <div id="profile-list">
              <h3>
                <ul>
                  <li>Born and raised in South Africa</li>
                  <li>Am a naturalized American</li>
                  <li>Have a certificate in coding through UT Austin</li>
                  <li>Accrued numerous transferable skills</li>
                  <li>Extensive Project Management experience</li>
                  <li>BA in communication; MA in counseling</li>
                  <li>German and Turkish international experience</li>
                  <li>Am an avid and competitive cyclist</li>
                </ul>
              </h3>
            </div>
          </div>
        </div>
      </section>

    <div id="container">
      <section id="portfolio">
        <div id="password-generator" class="rotate-container">
          <div class="rotate-card">
            <div class="rotate-card-inner">
              <div class="rotate-card-front">
                <img src={passwordGen} class="password-generator" alt="Password Generator" />
              </div>
              <div class="rotate-card-back">
                <div>
                  <h1>Password Generator</h1>
                  <ul class="password-list">
                    <li>Building on HTML & CSS with introduction to JavaScript</li>
                    <li>Purpose was to build a password generator app</li>
                    <li>I added the copy to clipboard option</li>
                    <li>I also changed CSS design of starter code provided</li>
                  </ul>
                  <h4><a id="weblink" href="https://waynefenwick.github.io/Password-Generator/" target="_blank" rel="noreferrer">Visit the Web</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div id="password-generator" class="rotate-container">
          <div class="rotate-card">
            <div class="rotate-card-inner">
              <div class="rotate-card-front">
                <img src={guessGame} class="password-generator" alt="Password Generator" />
              </div>
              <div class="rotate-card-back">
                <div>
                  <h1>JavaScript Guess Game</h1>
                  <ul class="password-list">
                    <li>JavaScript has a lot of components</li>
                    <li>Goal was to improve knowledge of JavaScript</li>
                    <li>Built this game with JavaScript user interaction</li>
                    <li>Helped improve CSS techniques</li>
                  </ul>
                  <h4><a id="weblink" href="https://waynefenwick.github.io/Guess-Game/" target="_blank" rel="noreferrer">Visit the Web</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div id="password-generator" class="rotate-container">
          <div class="rotate-card">
            <div class="rotate-card-inner">
              <div class="rotate-card-front">
                <img src={codingQuizz} class="password-generator" alt="Password Generator" />
              </div>
              <div class="rotate-card-back">
                <div>
                  <h1>Coding Quizz</h1>
                  <ul class="password-list">
                    <li>Building on HTML & CSS with introduction to JavaScript</li>
                    <li>Purpose was to build a password generator app</li>
                    <li>I added the copy to clipboard option</li>
                    <li>I also changed CSS design of starter code provided</li>
                  </ul>
                  <h4><a id="weblink" href="https://waynefenwick.github.io/Coding-Quiz-Challenge/" target="_blank" rel="noreferrer">Visit the Web</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div id="password-generator" class="rotate-container">
          <div class="rotate-card">
            <div class="rotate-card-inner">
              <div class="rotate-card-front">
                <img src={weather} class="password-generator" alt="Password Generator" />
              </div>
              <div class="rotate-card-back">
                <div>
                  <h1>Weather App</h1>
                  <ul class="password-list">
                  <li>First challenge integrating API data with deeper JavaScript coding</li>
                  <li>Goal was to create a weather app where a user could select their own city</li>
                  <li>Fully functional with data retrieval and localstorage</li>
                  <li>Still needs tweaks on CSS styling and HTML structure </li>
                  </ul>
                  <h4><a id="weblink" href="https://waynefenwick.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">Visit the Web</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div id="password-generator" class="rotate-container">
          <div class="rotate-card">
            <div class="rotate-card-inner">
              <div class="rotate-card-front">
                <img src={movieReviews} class="password-generator" alt="Password Generator" />
              </div>
              <div class="rotate-card-back">
                <div>
                  <h1>Movie Reviews</h1>
                  <ul class="password-list">
                  <li>First project with other cohorts</li>
                  <li>My focus was on HTML and CSS</li>
                  <li>Involved API integration with further Javascript development</li>
                  <li>Good exprience related to team building in coding context</li>
                  </ul>
                  <h4><a id="weblink" href="https://fersill53.github.io/movie-reviews-and-gifs/" target="_blank" rel="noreferrer">Visit the Web</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div id="password-generator" class="rotate-container">
          <div class="rotate-card">
            <div class="rotate-card-inner">
              <div class="rotate-card-front">
                <img src={bookshare} class="password-generator" alt="Password Generator" />
              </div>
              <div class="rotate-card-back">
                <div>
                  <h1>BookShare</h1>
                  <ul class="password-list">
                  <li>Second team project with other cohorts</li>
                  <li>Introduction to handlebars</li>
                  <li>Involved MySQL, Node.js, Express, ORM and MVC</li>
                  <li>Gained experience in back-end coding including database operations</li>
                  </ul>
                  <h4><a id="weblink" href="https://fathomless-stream-98788-44df48fe7ade.herokuapp.com/" target="_blank" rel="noreferrer">Visit the Web</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


      <section id="contact" class="contact">
        <div>
          <h1>Contact Me</h1>
          <form id="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" />
              <div className="notification" id="email-notification">
                Invalid email address.
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5"></textarea>
              <div className="notification" id="message-notification">
                Please enter a message.
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </section>

      <section id="proficiencies" className="proficiencies">
        <div className="resume-container">
          <h1>My Resume</h1>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" download>Download Resume (PDF)</a>
          <iframe
            src="https://waynefenwick.github.io/Resume/"
            title="Wayne Fenwick Resume"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Content;
