import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* About HackUtsav */}
        <div className="footer-about">
          <h3>Hackउत्सव</h3>
          <p>Hackउत्सव is an annual hackathon organized by NorthCap University, fostering innovation and creativity among students. Be part of this exciting event and showcase your technical skills!</p>
          <p><strong>Event Dates:</strong> October 15-16, 2024</p>
        </div>

        
        {/* University Map Section */}
        <div className="footer-map">
          <h3>Our Location</h3>
          <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61471.18778817078!2d77.0472747!3d28.5036265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d199c98e90ff1%3A0x8b2aa76c53fb738e!2sThe%20NorthCap%20University!5e0!3m2!1sen!2sin!4v1703058597594!5m2!1sen!2sin"
    width="300"
    height="200"

    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    title="University Map"
  ></iframe>
        </div>

        {/* Contact Us Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>📞 +91 93545 08072 (Madhur)</p>
          <p>📞 +91 99719 95290 (Raman)</p>
          <p>📧 hackutsav@ncuindia.edu</p>
        </div>
      </div>

      {/* Follow Us Section - moved to bottom-left */}
      <div className="footer-follow">
         
          <div className="social-icons"> <h3>Follow Us</h3>
            <a href="https://www.instagram.com/hackutsav_ncu/" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>


      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2024-25 Hackउत्सव. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;