import React, { useState } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <header>
      <div>
        <h1 id="top-header">___ WAYNE FENWICK ___</h1>
      </div>
      <div id="nav-container">
        <ul id="nav-list">
          <li>
            <a
              className={`link ${activeLink === 0 ? 'active' : ''}`}
              href="#profile-container"
              onClick={() => handleLinkClick(0)}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              className={`link ${activeLink === 1 ? 'active' : ''}`}
              href="#container"
              onClick={() => handleLinkClick(1)}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              className={`link ${activeLink === 2 ? 'active' : ''}`}
              href="#contact"
              onClick={() => handleLinkClick(2)}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              className={`link ${activeLink === 3 ? 'active' : ''}`}
              href="#proficiencies"
              onClick={() => handleLinkClick(3)}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
