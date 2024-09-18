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
        <Link to="/meettheteam" className="link">MEET THE TEAM</Link>
        <Link to="/about" className="link">ABOUT US</Link>
        <Link to="/theme" className="link">THEME</Link>
        <Link to="/rule" className="link">RULE</Link>
        <Link to="/faq" className="link">FAQ</Link>
        <a href='https://forms.gle/nineQAgsR7nnR9S3A' target='_blank' className='join-link'>Join</a>
        <a href='https://docs.google.com/presentation/d/1CQVY0F532o_f4U-pCgpNCSpoduhN7fYL/edit?usp=sharing&ouid=115905983523881154148&rtpof=true&sd=true' target='_blank' download className='download-link'>Submission Template</a>
      </div>
    </header>
  );
};

export default Header;
