import React from 'react';

const Header = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.getElementById('top-header').offsetHeight;
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    }
  };
  

  return (
    <header>
      <div>
        <h1 id="top-header">WAYNE FENWICK</h1>
      </div>
      <ul id="nav-container">
  <li><a className="clicked" href="#">About Me</a></li>
  <li><a className="clicked" href="#container">Portfolio</a></li>
  <li><a className="clicked" href="#contact">Contact</a></li>
  <li><a className="clicked" href="#proficiencies">Resume</a></li>
</ul>
    </header>
  );
};

export default Header;




