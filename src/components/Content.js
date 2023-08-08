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
                  <li>KEYWORDS: console.log, variable, array, functions, methods</li>
                  <li>PURPOSE: build a password generator app</li>
                  <li>INITIATIVE: added the copy to clipboard option</li>
                  <li>GOING BEYOND: changed CSS design of starter code provided</li>
                </ul>
                <div class="card-links">
                <h4><a id="weblink" href="https://waynefenwick.github.io/Password-Generator/" target="_blank" rel="noreferrer">Visit the Web</a></h4>
                <a href="https://github.com/waynefenwick/Password-Generator" target="_blank" rel="noreferrer">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
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
                    <li>KEYWORDS: flex-box, responsive, typography, wire-frame, forms</li>
                    <li>PURPOSE: increase html and css knowledge</li>
                    <li>INITIATIVE: personally style my first portfolio</li>
                    <li>GOING BEYOND: added more components than challenge presented</li>
                  </ul>
                  <div class="card-links">
                <h4><a id="weblink" href="https://waynefenwick.github.io/Guess-Game/" target="_blank" rel="noreferrer">Visit the Web</a></h4>
                <a href="https://github.com/waynefenwick/Guess-Game" target="_blank" rel="noreferrer">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
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
                    <li>KEYWORDS: DOM, timer, event listener, bubbling, storage</li>
                    <li>PURPOSE: Understand APIs, Local storage, java functions</li>
                    <li>INITIATIVE: personal design styling</li>
                    <li>GOING BEYOND: added an extra two questions for the quizz</li>
                  </ul>
                  <div class="card-links">
                <h4><a id="weblink" href="https://waynefenwick.github.io/Coding-Quiz-Challenge/" target="_blank" rel="noreferrer">Visit the Web</a></h4>
                <a href="https://github.com/waynefenwick/Coding-Quiz-Challenge" target="_blank" rel="noreferrer">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
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
                    <li>KEYWORDS: fetch, API, JSON, parse, network</li>
                    <li>PURPOSE: learn how 3rd Party APIs work</li>
                    <li>INITIATIVE: personal design styling of a weather app</li>
                    <li>GOING BEYOND: extensive commitment of time</li>
                  </ul>
                  <div class="card-links">
                <h4><a id="weblink" href="https://waynefenwick.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">Visit the Web</a></h4>
                <a href="https://github.com/waynefenwick/Weather-Dashboard" target="_blank" rel="noreferrer">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
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
                    <li>KEYWORDS: teamwork, css framework, interactive, README</li>
                    <li>PURPOSE: API intergration backed by full functionality</li>
                    <li>INITIATIVE: styling and design</li>
                    <li>GOING BEYOND: Extra time on styling</li>
                  </ul>
                  <div class="card-links">
                <h4><a id="weblink" href="https://fersill53.github.io/movie-reviews-and-gifs/" target="_blank" rel="noreferrer">Visit the Web</a></h4>
                <a href="https://github.com/Fersill53/movie-reviews-and-gifs" target="_blank" rel="noreferrer">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
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
                    <li>KEYWORDS: handlebars, MySQL, Node.js, Express</li>
                    <li>PURPOSE: Use Node.js and Express.js to create a RESTful API</li>
                    <li>INITIATIVE: create design and folderstructure of project</li>
                    <li>GOING BEYOND: Prepping presentation and showing some leadership</li>
                  </ul>
                  <div class="card-links">
                <h4><a id="weblink" href="https://fathomless-stream-98788-44df48fe7ade.herokuapp.com/" target="_blank" rel="noreferrer">Visit the Web</a></h4>
                <a href="https://github.com/waynefenwick/BookShare" target="_blank" rel="noreferrer">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
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
