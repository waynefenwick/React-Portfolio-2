import React, { useEffect } from 'react';
import projects from '../projectData';
import profilePic from '../assets/Profile-Pic.png';

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
          <div className="profile-picture">
            <img src={profilePic} id="picture" alt="Profile Picture" />
          </div>
              <div className="profile-personal">
                <br />
                <div id="profile-list">
                  <h1 id="profile-header"><u>Personal Profile</u></h1>
                  <h3>
                    <ul class="profile-list">
                      <li>
                        <span>Born and raised in </span>
                        <span id="highlight" className="drop-down-trigger">
                          South Africa
                        </span>
                          <ul class="drop-down">
                            <li>Born in Germiston</li> 
                            <li>Raised in Johannesburg</li> 
                            <li>Attended boys High School</li> 
                            <li>Earned Service above Self award</li> 
                            <li>Involved in the sports of cricket, rugby, swimming & water polo</li>
                            <li>Played water polo for my state</li>
                          </ul>
                      </li>
                      <li>
                        <span>Am a </span>
                        <span id="highlight" className="drop-down-trigger">
                        naturalized American
                        </span>
                        <ul class="drop-down">
                            <li>Became a naturalized American in 1998</li> 
                            <li>Have lived in Alabama, Georgia, Florida & Texas</li> 
                            <li>Worked for 6 companys</li> 
                            <li>Have worked in sales, leadership and management roles</li>
                          </ul>
                      </li>
                      <li>
                        <span>UT Austin and a </span>
                        <span id="highlight" className="drop-down-trigger">
                        Certificate in coding
                        </span>
                        <ul class="drop-down">
                            <li>Completed a course in Full-Stack coding</li> 
                            <li>Strengths are in HTML and CSS in particular</li> 
                            <li>Learned about front end, mid and back end coding</li> 
                            <li>Database knowledge is in MySQL, NoSql & MongoDB</li>
                            <li>Experience in node.js, express, OOP, ORM, MVC</li>  
                            <li>Aquired knowledge in React, MERN and State</li>
                            <li>Learned to utilize NPM libraries</li>
                          </ul>
                      </li>
                      <li>
                        <span>Accrued numerous </span>
                        <span id="highlight" className="drop-down-trigger">
                        transferable skills
                        </span>
                        <ul class="drop-down">
                            <li>Strong communication skills</li> 
                            <li>Extensive team leadership experience</li> 
                            <li>Solid knowledge in project management</li> 
                            <li>Self-disciplined and highly task-oriented</li> 
                            <li>Self-motivated to finish the job</li>
                            <li>Highly focused on quality over quantity</li>
                          </ul>
                      </li>
                      <li>
                        <span>Extensive experience in </span>
                        <span id="highlight" className="drop-down-trigger">
                        Project Management
                        </span>
                        <ul class="drop-down">
                            <li>Managed up to 30 individual projects</li> 
                            <li>Projects have ranged from small to large</li> 
                            <li>Extensive problem solving to ensure success in project starts</li> 
                            <li>Have eraned several in-house certifications</li> 
                            <li>Focused on customer relations for successful projects</li>
                            <li>Always supportive of team members to get projects completed</li>
                          </ul>
                      </li>
                      <li>
                        <span>University </span>
                        <span id="highlight" className="drop-down-trigger">
                        BA and MA Degrees
                        </span>
                        <ul class="drop-down">
                            <li>BA in Communications and Public Relations-Univeristy of Mobile</li> 
                            <li>MA in Counseling-Luther Rice Seminary</li> 
                            <li>Graduated Magna Cum Laude</li> 
                            <li>Completed with a 3.98 GPA</li> 
                            <li>Consistently on the Dean's List</li>
                          </ul>
                      </li>
                      <li>
                        <span>German & Turkish </span>
                        <span id="highlight" className="drop-down-trigger">
                        international experience
                        </span>
                        <ul class="drop-down">
                            <li>Worked in Berlin Germany for 13 years</li> 
                            <li>Extensive international experience</li> 
                            <li>Exposed to numerous cultures in an international city</li> 
                            <li>Learned to speak German and minimal Turkish</li> 
                          </ul>
                      </li>
                      <li>
                        <span>Am an avid and competitive </span>
                        <span id="highlight" className="drop-down-trigger">
                        cyclist
                        </span>
                        <ul class="drop-down">
                            <li>Been cycling for 10 years</li> 
                            <li>Am very competative</li> 
                            <li>Always looking to be the best on segments</li> 
                            <li>Learned to try-and-try-again...until success</li> 
                            <li>Learned to strategically research, plan and implement success</li>
                            <li>Love my bike and take excellent care of it</li>
                          </ul>
                      </li>
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

      <section id="resume-container">
        <div className="resume">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" download id="downloadBtn">Download Resume (PDF)</a>
          <iframe src="https://waynefenwick.github.io/Resume/" title="Wayne Fenwick Resume"></iframe>
        </div>
      </section>
    </>
  );
};

export default Content;
