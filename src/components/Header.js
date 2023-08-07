import React from 'react';

const Header = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="flex-container">
        <h1>WAYNE FENWICK</h1>
      </div>
      <ul className="nav-container">
        <li><a href="#">About Me</a></li>
        <li><a className="portfolio-link" onClick={() => handleScrollToSection('portfolio-row')}>Portfolio</a></li>
        <li><a href="https://waynefenwick.github.io/Resume/" target="_blank" rel="noreferrer">Contact</a></li>
        <li><a href="https://waynefenwick.github.io/Resume/" target="_blank" rel="noreferrer">Resume</a></li>
      </ul>

    </header>
  );
};

export default Header;


