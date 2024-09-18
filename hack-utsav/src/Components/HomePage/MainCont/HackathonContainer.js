import React from 'react';
import { FaWhatsapp, FaDiscord } from 'react-icons/fa'; // Import icons
import './cont.css';


const HackathonContainer = () => {
  return (
    <div className="hackathon-container">
      <div className="left-section">
        {/* Add image in left section */}
        <img src="https://res.cloudinary.com/dvhislzt0/image/upload/v1726653273/mrgadfwbwb7r9opn23ob.jpg" alt="Hackathon" className="hackathon-image" />
        {/* <h1 className="hackathon-title">HACKउत्सव 1.O 2024</h1> */}
      </div>
      
      <div className="right-section">
      
        <h2 className="event-subtitle">Innovate, Create & Compete</h2>
        {/* <p className="hackathon-date">15-16 October 2024</p> */}
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
        {/* Community buttons below the register button */}
        <div className="community-btns">
          <button
            className="whatsapp-btn"
            onClick={() => window.open('https://chat.whatsapp.com/D0M5uGMPrTeB09UvIZuIWi', '_blank')}
          >
            <FaWhatsapp className="icon" /> WhatsApp
          </button>
          <button
            className="discord-btn"
            onClick={() => window.open('https://discord.gg/PDm9eG6B', '_blank')}
          >
            <FaDiscord className="icon" /> Discord
          </button>
          </div>
        
      </div>
    </div>
  );
};

export default HackathonContainer;
