import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

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
        <a href='https://forms.gle/nineQAgsR7nnR9S3A' target='_blank' className='join-link'>Join</a>
        <a href='https://docs.google.com/presentation/d/1K8h6JBvCYgv3Ok57XZ_QUnfn3M497Z9H/edit?usp=drive_link&ouid=104494209996104943327&rtpof=true&sd=true' target='_blank' download className='download-link'>Submission Template</a>
      </div>
    </header>
  );
};

export default Header;
