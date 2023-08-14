import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  useEffect(() => {
    // Set 'About Me' as active by default when the component mounts
    setActiveLink(0);
  }, []);

  return (
    <header>
      <div id="header-content">
        <div id="name">
          <h1>WAYNE FENWICK</h1>
        </div>
        <div id="nav">
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
                href="#portfolio-container"
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
      </div>
    </header>
  );
};

export default Header;