import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          {/* Add more navigation links for other sections */}
        </ul>
      </nav>
      <h1>Developer's Name</h1>
    </header>
  );
};

export default Header;

