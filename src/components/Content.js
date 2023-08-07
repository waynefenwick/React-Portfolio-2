import React from 'react';
import profilePic from '../assets/Profile-Pic.png';
import passwordGen from '../assets/password-generator.png';


const Content = () => {
  return (
    <><section>
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
          <h4><a id="weblink" href="https://waynefenwick.github.io/Password-Generator/" target="_blank">Visit the Web</a></h4>
        </div>
      </div>
    </section></>
  );
};

export default Content;
