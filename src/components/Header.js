import React from 'react';

const Header = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.getElementById('top-header').offsetHeight;
      const scrollToPosition = section.offsetTop - headerHeight;
      window.scrollTo({ top: scrollToPosition });
    }
  };

  return (
    <header id="top-header">
      <div className="flex-container">
        <h1>WAYNE FENWICK</h1>
      </div>
      <ul className="nav-container">
        <li><a href="#">About Me</a></li>
        <li><a onClick={() => handleScrollToSection('portfolio-row')}>Portfolio</a></li>
        <li><a onClick={() => handleScrollToSection('contact')}>Contact</a></li>
        <li><a onClick={() => handleScrollToSection('proficiencies')}>Resume</a></li>
      </ul>
    </header>
  );
};

export default Header;




