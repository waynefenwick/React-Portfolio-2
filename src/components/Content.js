import React, { useEffect } from 'react';
import projects from '../projectData'; // Import the projects data
import profilePic from '../assets/Profile-Pic.png'; // Adjust the path as needed

// Still working on Form
const Content = () => {
  useEffect(() => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const emailInput = document.getElementById('email');
    const messageNotification = document.getElementById('message-notification');
    const emailNotification = document.getElementById('email-notification');
  
    const resetFormFields = () => {
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    };
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      let isValid = true;
  
      if (messageInput.value.trim() === '') {
        messageNotification.style.display = 'block';
        isValid = false;
      } else {
        messageNotification.style.display = 'none';
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailNotification.style.display = 'block';
        isValid = false;
      } else {
        emailNotification.style.display = 'none';
      }
  
      if (isValid) {
        // Display thank you message
        const thankYouMessage = document.createElement('div');
        thankYouMessage.textContent = 'Thank you! I will be back in contact with you!';
        thankYouMessage.classList.add('thank-you-message');
        form.appendChild(thankYouMessage);
  
        // Reset form fields after 3 seconds
        setTimeout(() => {
          thankYouMessage.remove();
          resetFormFields();
        }, 3000);
      }
    });
  }, []);
  
  return (
    <>
      <section id="profile-container">
        <div class="profile">
          <img src={profilePic} className="profile-picture" alt="Profile Picture" />
        </div>
        <div className="personal-profile">
          <br />
          <div id="profile-list">
            <div id="profile-header">
              <h1><u>Personal Profile</u></h1>
            </div>
            <h3>
              <ul>
                <li class="flip-trigger">Born and raised in South Africa</li>
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
      </section>

      <section id="portfolio-container">
        <div className="portfolio">
          {projects.map(project => (
            <div key={project.id} className="rotate-container">
              <div className="rotate-card">
                <div className="rotate-card-inner">
                  <div className="rotate-card-front">
                    <img src={project.image} className={project.imageClassName} alt={project.title } id="password-generator" />
                  </div>
                  <div className="rotate-card-back">
                    <div>
                      <h1>{project.title}</h1>
                      <ul className="password-list">
                        <li><b>KEYWORDS:</b> {project.keywords.join(', ')}</li>
                        <li><b>PURPOSE:</b> {project.purpose}</li>
                        <li><b>INITIATIVE:</b> {project.initiative}</li>
                        <li><b>GOING BEYOND:</b> {project.goingBeyond}</li>
                      </ul>
                      <div className="card-links">
                        <h4><a href={project.webLink} target="_blank" rel="noreferrer">Visit the Web</a></h4>
                        <a href={project.githubLink} target="_blank" rel="noreferrer">
                          <i className="fab fa-github fa-2x"></i>
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact-container">
          <div className="contact">
            <div>
              <h1 id="contactMe">
                Contact Me{' '}
                <span className="orange-icon">(</span>
                <i className="fas fa-exclamation-triangle orange-icon"></i>
                <span className="orange-icon">)</span>
              </h1>
              <form id="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" required />
                  <div className="notification" id="email-notification">
                    Invalid email address.
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea className="form-control" id="message" rows="5" required></textarea>
                  <div className="notification" id="message-notification">
                    Please enter a message.
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>


        <section id="proficiencies-container">
          <div className="proficiencies">
          <h1 id="profTitle">Proficiencies</h1>
          <div id="proficiency-box">
            <b><ul id="proficiency-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bulldogging</li>
              <li>Project Management</li>
              <li>UI/UX</li>
              <li>Debugging</li>
            </ul></b>
          </div>
          </div>
        </section>

        <section id="resume">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" download id="downloadBtn">Download Resume (PDF)</a>
          <iframe src="https://waynefenwick.github.io/Resume/" title="Wayne Fenwick Resume"></iframe>
        </section>
    </>
  );
};

export default Content;
