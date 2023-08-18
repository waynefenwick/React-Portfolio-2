import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({});

  const handleLinkClick = (index, event) => {
    setActiveLink(index);
    if (index === 1) {
      const linkPosition = event.target.getBoundingClientRect();
      let topPosition = linkPosition.bottom + window.scrollY + 10 + 'px';
  
      // Add a media query for smaller screens (adjust the max-width as needed)
      if (window.innerWidth <= 768) {
        // Adjust the top position for smaller screens
        topPosition = linkPosition.bottom + 10 + 'px';
      }
  
      setPopupPosition({
        top: topPosition,
        left: linkPosition.left + -12 + 'px',
      });
  
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Show for 3 seconds
    }
  };
  
  useEffect(() => {
    // Set 'About Me' as active by default when the component mounts
    setActiveLink(0);
  }, []);

  return (
    <header id="header-container">
      <div className="header">
        <div className="name">
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
                onClick={(event) => handleLinkClick(1, event)}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className={`link ${activeLink === 2 ? 'active' : ''}`}
                href="#contact-container"
                onClick={() => handleLinkClick(2)}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className={`link ${activeLink === 3 ? 'active' : ''}`}
                href="#proficiencies-container"
                onClick={() => handleLinkClick(3)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      {showPopup && (
        <div id="popup" style={popupPosition}>
          <p>Tap a Box</p>
        </div>
      )}
    </header>
  );
};

export default Header;
