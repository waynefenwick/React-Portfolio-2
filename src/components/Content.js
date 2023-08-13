import React, { useEffect } from 'react';
import profilePic from '../assets/Profile-Pic.png';
import projects from './projectData'; // Import the projects data

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
    <section id="portfolio">
      {projects.map(project => (
        <div key={project.id} className="rotate-container">
          <div className="rotate-card">
            <div className="rotate-card-inner">
              <div className="rotate-card-front">
                <img src={project.image} className="password-generator" alt={project.title} />
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
                    <h4><a id="weblink" href={project.webLink} target="_blank" rel="noreferrer">Visit the Web</a></h4>
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
    </section>

    <section id="portfolio">
      {projects.map(project => (
        <div key={project.id} className="rotate-container">
          <div className="rotate-card">
            <div className="rotate-card-inner">
              <div className="rotate-card-front">
                <img src={project.image} className="guess-game" alt={project.title} />
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
                    <h4><a id="weblink" href={project.webLink} target="_blank" rel="noreferrer">Visit the Web</a></h4>
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
    </section>


    <section id="portfolio">
      {projects.map(project => (
        <div key={project.id} className="rotate-container">
          <div className="rotate-card">
            <div className="rotate-card-inner">
              <div className="rotate-card-front">
                <img src={project.image} className="guess-game" alt={project.title} />
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
                    <h4><a id="weblink" href={project.webLink} target="_blank" rel="noreferrer">Visit the Web</a></h4>
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
    </section>


    <section id="portfolio">
      {projects.map(project => (
        <div key={project.id} className="rotate-container">
          <div className="rotate-card">
            <div className="rotate-card-inner">
              <div className="rotate-card-front">
                <img src={project.image} className="coding-quizz" alt={project.title} />
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
                    <h4><a id="weblink" href={project.webLink} target="_blank" rel="noreferrer">Visit the Web</a></h4>
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
    </section>

    <section id="portfolio">
      {projects.map(project => (
        <div key={project.id} className="rotate-container">
          <div className="rotate-card">
            <div className="rotate-card-inner">
              <div className="rotate-card-front">
                <img src={project.image} className="weather" alt={project.title} />
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
                    <h4><a id="weblink" href={project.webLink} target="_blank" rel="noreferrer">Visit the Web</a></h4>
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
    </section>

    <section id="portfolio">
      {projects.map(project => (
        <div key={project.id} className="rotate-container">
          <div className="rotate-card">
            <div className="rotate-card-inner">
              <div className="rotate-card-front">
                <img src={project.image} className="movie-reviews" alt={project.title} />
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
                    <h4><a id="weblink" href={project.webLink} target="_blank" rel="noreferrer">Visit the Web</a></h4>
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
    </section>

    <section id="portfolio">
      {projects.map(project => (
        <div key={project.id} className="rotate-container">
          <div className="rotate-card">
            <div className="rotate-card-inner">
              <div className="rotate-card-front">
                <img src={project.image} className="bookshare" alt={project.title} />
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
                    <h4><a id="weblink" href={project.webLink} target="_blank" rel="noreferrer">Visit the Web</a></h4>
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
    </section>


      <section id="contact" class="contact">
        <div>
        <h1 id="contactMe">
      Contact Me
      <span class="orange-icon">(</span><i class="fas fa-exclamation-triangle orange-icon"></i><span class="orange-icon">)</span>
    </h1>
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
          <h1>Proficiencies</h1>
            <div class="proficiency-box">
              <b><ul class="proficiency-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bulldogging</li>
                <li>Project Management</li>
                <li>UI/UX</li>
                <li>Debugging</li>
              </ul></b>
            </div>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" download>Download Resume (PDF)</a>
            <iframe src="https://waynefenwick.github.io/Resume/" title="Wayne Fenwick Resume"></iframe>
        </div>
      </section>
    </>
  );
};

export default Content;
