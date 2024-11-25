import React, { useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for signing up, ${email}!`);
      setEmail('');
    }
  };

  return (
    <div className=" footer-wrapper ">
      <footer className="  footer mb-20">
        <div className="footer-content">
          <div className="logo-container">
            <Link to="/" className="logo">
            <span>CINEMAGEM</span>
            </Link>
          </div>
          <div className="links text-sm">

          </div>
          <form onSubmit={handleSubmit} className="email-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              className="email-input"
            />
            <button type="submit" className="signup-btn text-sm lg:text=base bg-gradient-to-r from-blue-500 to-purple-500">Sign Up</button>
          </form>
        </div>
        <p className='text-center text-sm lg:mt-10 mt-5 lg:my-15 '>Dive into a world of captivating stories. </p>
        <p className='text-center my-10 text-sm '>&copy; 2023 CINEMAGEM. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
