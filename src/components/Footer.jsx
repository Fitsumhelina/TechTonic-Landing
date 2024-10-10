import React from 'react';
import './../scss/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>TechTonic Tribe </h2>
        <p>
          We believe in <strong>modern, Educated & Inforemed </strong> Socity, Lives 
          with The Updated Technology. Support the amazing work of our company.
        </p>
        <div className="footer-info">
          <p><strong>Headquarters:</strong></p>
          <p>Debre Berhan Universty </p>
          <p>Ethiopia, Debre Berhan</p>
          <p><strong>Phone:</strong> (91) 9660887276</p>
          <p><strong>Email:</strong> dotclass8075@gmail.com</p>
        </div>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-google"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="footer-right">
        <h2>CONTACT US</h2>
        <form>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <textarea placeholder="Message..."></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
