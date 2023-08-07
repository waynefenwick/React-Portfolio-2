import React from 'react';

const Header = () => {
  return (
    <header id="top-header">
      <div className="flex-container">
        <h1>WAYNE FENWICK</h1>
      </div>
      <ul className="nav-container">
        <li><a href="#">About Me</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        <li><a href="https://waynefenwick.github.io/Resume/" target="_blank" rel="noreferrer">Contact</a></li>
        <li><a href="https://waynefenwick.github.io/Resume/" target="_blank" rel="noreferrer">Resume</a></li>
      </ul>
    </header>
  );
};

export default Header;

