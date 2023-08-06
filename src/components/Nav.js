import React from 'react';

const Nav = () => {
  return (
    <nav class="nav-container" id="navbar">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="https://www.linkedin.com/in/wayne-fenwick-904449b3/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/waynefenwick" target="_blank">Github</a></li>
            <li><a href="https://waynefenwick.github.io/Resume/" target="_blank">Resume</a></li>
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
        </ul>
    </nav>
  );
};

export default Nav;

