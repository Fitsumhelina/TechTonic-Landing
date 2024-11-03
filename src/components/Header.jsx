import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../scss/Header.scss';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="one">
          <Link to="home" spy={true} smooth={true} duration={500}>
            <img
              src="https://media.licdn.com/dms/image/v2/D4E0BAQFtoH7AFayJWw/company-logo_200_200/company-logo_200_200/0/1703627777248/techtonic_tribe_logo?e=1735776000&v=beta&t=k4OrPdu23X5RfbMtxD92Wt_-75jKkqtwccqFhyn4Tbo"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className={isMobileMenuOpen ? 'open' : ''}></span>
          <span className={isMobileMenuOpen ? 'open' : ''}></span>
          <span className={isMobileMenuOpen ? 'open' : ''}></span>
        </div>
        <div className={`two ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="about" spy={true} smooth={true} duration={500}>
            About Us
          </Link>
          <Link to="footer" spy={true} smooth={true} duration={500}>
            Contact Us
          </Link>
          <a href="https://forms.gle/6EvSes7cFgoeGt349" target="_blank" rel="noopener noreferrer">
            Register
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
