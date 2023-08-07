import React, { useEffect } from 'react';
import profilePic from '../assets/Profile-Pic.png';
import passwordGen from '../assets/password-generator.png';

const Content = () => {
  useEffect(() => {
    const form = document.getElementById('contact-form');
    const messageInput = document.getElementById('message');
    const messageNotification = document.getElementById('message-notification');

    form.addEventListener('submit', (e) => {
      if (messageInput.value.trim() === '') {
        e.preventDefault();
        messageNotification.style.display = 'block';
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
      <section id="portfolio-row" className="portfolio">
        <div className="portfolio-row" id="password-generator">
          <img src={passwordGen} className="password-generator" alt="Password Generator" />
          <div className="portfolio-right-column">
            <h1>Password Generator</h1>
            <ul className="portfolio-list">
              <li>Building on HTML & CSS with introduction to JavaScript</li>
              <li>Purpose was to build a password generator app</li>
              <li>I added the copy to clipboard option</li>
              <li>I also changed CSS design of starter code provided</li>
            </ul>
            <h4><a id="weblink" href="https://waynefenwick.github.io/Password-Generator/" target="_blank" rel="noreferrer">Visit the Web</a></h4>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="container">
          <h1>Contact Me</h1>
          <form id="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" />
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
    </>
  );
};

export default Content;
