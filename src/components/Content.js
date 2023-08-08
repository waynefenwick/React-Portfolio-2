import React, { useEffect } from 'react';
import profilePic from '../assets/Profile-Pic.png';
import passwordGen from '../assets/password-generator.png';

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

      <div id="portfolio" class="container">

      <section>
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

      <section>
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

      <section>
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

      <section>
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

      <section>
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

      <section>
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
