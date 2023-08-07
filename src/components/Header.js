import React from 'react';

const Header = () => {
  return (
<header>
  <div id="top-header" class="flex-container">
    <div class="header-left-column">
      <h1 id="name">WAYNE FENWICK</h1>
      <nav class="nav-container" id="navbar">
        <ul>
          <li><a href="#">About Me</a></li>
          <li class="portfolio-list" id="portfolio-dropdown">
            <b><a href="#">Portfolio</a></b>
            <ul class="portfolio-titles">
              <li><a href="#bootcamp-practice">Bootcamp Practice</a></li>
              <li><a href="#password-generator">Password Generator</a></li>
              <li><a href="#weather-dashboard">Weather Dashboard</a></li>
              <li><a href="#movie-reviews">Movie reviews</a></li>
              <li><a href="#bookshare">Bookshare</a></li>
            </ul>
          </li>
          <li><a href="https://waynefenwick.github.io/Resume/" target="_blank">Contact</a></li>
          <li><a href="https://waynefenwick.github.io/Resume/" target="_blank">Resume</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

  );
};

export default Header;

