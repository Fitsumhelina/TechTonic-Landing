import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaTelegram, FaInstagram, FaLinkedin ,FaTiktok } from 'react-icons/fa'; // Importing icons
import './../scss/Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yhkebfv', 'template_hrv7avi', e.target, 'Q2UM1RdCJVGhG1DA6796V')
      .then((result) => {
        alert('Message sent successfully!');
      }, (error) => {
        alert('Failed to send message, please try again later.');
      });

    e.target.reset(); // Reset the form fields after submission
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>TechTonic Tribe</h2>
        <p>
          We believe in a <strong>modern, Educated & Informed</strong> society that lives 
          with updated technology. Support the amazing work of our company.
        </p>
        <div className="footer-info">
          <p><strong>Headquarters:</strong></p>
          <p>Debre Berhan University </p>
          <p>Ethiopia, Debre Berhan</p>
          <p><strong>Phone:</strong> (251) 9660887276</p>
          <p><strong>Email:</strong> techtonic.inbox@gmail.com</p>
        </div>
        <div className="social-icons">
          <a href="#"><FaTelegram/></a>
          <a href="#"><FaInstagram/></a>
          <a href="#"><FaLinkedin/></a>
          <a href="#"><FaTiktok/></a>
        </div>
      </div>
      <div className="footer-right">
        <h2>CONTACT US</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message..."
            onChange={handleChange}
            required
          />
          <button type="submit">SEND</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
