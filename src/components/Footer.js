import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
        {/* GitHub */}
        <a
          href="https://waynefenwick.github.io/React-Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/wayne-fenwick-904449b3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        {/* Third platform (e.g., Twitter) */}
        <a
          href="https://twitter.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter fa-2x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

