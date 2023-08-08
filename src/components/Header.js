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
      <div>
        <h1>WAYNE FENWICK</h1>
      </div>
      <ul class="nav-container">
        <li><a class="clicked" href="#">About Me</a></li>
        <li><a class="clicked" onClick={() => handleScrollToSection('portfolio')}>Portfolio</a></li>
        <li><a class="clicked" onClick={() => handleScrollToSection('contact')}>Contact</a></li>
        <li><a class="clicked" onClick={() => handleScrollToSection('proficiencies')}>Resume</a></li>
      </ul>
    </header>
  );
};

export default Header;




