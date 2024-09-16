import React from 'react';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <h1 className="logo">Hackउत्सव</h1>
      </div>
      <div className="right">
        <a href="#home" className="link">HOME</a>
        <a href="#about" className="link">ABOUT US</a>
        <a href="#theme" className="link">THEME</a>
        <a href="#faq" className="link">FAQ</a>
        <button className="join-button">JOIN</button>
      </div>
    </header>
  );
};

export default Header;
