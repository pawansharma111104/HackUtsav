import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <h1 className="logo">Hackउत्सव</h1>
      </div>
      <div className="right">
        <Link to="/" className="link">HOME</Link>
        <Link to="/about" className="link">ABOUT US</Link>
        <Link to="/theme" className="link">THEME</Link>
        <Link to="/faq" className="link">FAQ</Link>
        {/* Use Link for routing */}
        {/* <Link to="/join" className="join-link">JOIN</Link> */}
        <a href='https://forms.gle/nineQAgsR7nnR9S3A' target='blank' className='join-link'>Join</a>
      </div>
    </header>
  );
};

export default Header;
