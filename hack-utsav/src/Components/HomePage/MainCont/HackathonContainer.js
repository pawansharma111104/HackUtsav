import React from 'react';
import './cont.css';
import { FaWhatsapp, FaDiscord, FaInstagram } from 'react-icons/fa';

const HackathonContainer = () => {
  return (
    <div className="hackathon-container">
      <div className="left-section">
        <img
          src="https://res.cloudinary.com/dv0pitmjz/image/upload/v1727717409/HackUtsav_poster_xiyufz.jpg"
          alt="Hackathon"
          className="hackathon-image"
        />
      </div>

      <div className="right-section">
        <h2 className="event-subtitle">Innovate, Create & Compete</h2>
        <p className="hackathon-description">
          Join the technical hackathon and push the limits of your mind! Code, innovate, and create something amazing.
        </p>
        <div className="button-group">
          <button
            className="register-btn"
            onClick={() => window.open('https://forms.gle/nineQAgsR7nnR9S3A', '_blank')}
          >
            REGISTER NOW
          </button>
        </div>
        <div className="community-btns">
          <button
            className="whatsapp-btn"
            onClick={() => window.open('https://chat.whatsapp.com/D0M5uGMPrTeB09UvIZuIWi', '_blank')}
          >
            <FaWhatsapp className="icon" /> 
          </button>
          <button
            className="discord-btn"
            onClick={() => window.open('https://discord.gg/NBXg2gsyCX', '_blank')}
          >
            <FaDiscord className="icon" /> 
          </button>
          <button
            className="instagram-btn"
            onClick={() => window.open('https://www.instagram.com', '_blank')}
          >
            <FaInstagram className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HackathonContainer;