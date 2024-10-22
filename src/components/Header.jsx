import React from 'react';
import { Link } from 'react-scroll';
import '../scss/Header.scss';

function Header() {
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
        <div className="two">
          <Link to="about" spy={true} smooth={true} duration={500}>
            About Us
          </Link>
          <Link to="footer" spy={true} smooth={true} duration={500}>
            Contact Us
          </Link>
          <Link to="https://forms.gle/KasP6dne9LUzCX7A8" spy={true} smooth={true} duration={500}>
            Register
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
