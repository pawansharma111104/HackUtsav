// src/AboutUs.js
import React from 'react';
import './AboutUs.css';
import { FaRocket, FaUsers, FaLightbulb, FaNetworkWired, FaCogs } from 'react-icons/fa'; // Importing icons
import Header from '../Header/Header';

const AboutUs = () => {
  return (
    <>
    <Header></Header>
    <div className="about-us-container">
      {/* Main Heading */}
      <section className="intro-section">
        <h1>About Hackउत्सव</h1>
        <p>🚀 Empowering Innovation. Building the Future.</p>
      </section>

      {/* Our Mission */}
      <section className="mission-section">
        <h2><FaLightbulb className="icon" /> Our Mission</h2>
        <p>
          At <strong>Hackउत्सव</strong>, we believe in the power of innovation and collaboration. Our hackathon provides a platform where students from all technical and creative backgrounds can come together, think outside the box, and build solutions that address real-world problems.
        </p>
        <p>Whether you're a coder, designer, or entrepreneur, Hackउत्सव is the space for you to innovate, create, and push boundaries.</p>
      </section>

      {/* What is Hack Mahotsav */}
      <section className="hack-section">
        <h2><FaNetworkWired className="icon" /> What is Hackउत्सव?</h2>
        <p>
        Hackउत्सव is an annual hackathon hosted by <em>The Northcap University</em>, aimed at fostering creativity, problem-solving, and hands-on learning. Over two exciting days, participants will form teams to ideate, build, and pitch their innovative projects.
        </p>
        <ul>
          <li>⏱ <strong>Duration:</strong> 36 hours of non-stop innovation.</li>
          <li>👥 <strong>Participants:</strong> Hundreds of students from various colleges and departments.</li>
          <li>🎓 <strong>Workshops & Mentorship:</strong> Learn from and engage with industry leaders.</li>
          <li>🏆 <strong>Prizes:</strong> Exciting rewards for the top-performing teams.</li>
          <li>💡 <strong>Themes:</strong> AI, Blockchain, IoT, and more cutting-edge topics.</li>
        </ul>
      </section>

      {/* Why Participate */}
      <section className="participate-section">
        <h2><FaUsers className="icon" /> Why Participate?</h2>
        <ul>
          <li>⚙ <strong>Build & Learn:</strong> Dive deep into new technologies and gain hands-on experience.</li>
          <li>🤝 <strong>Collaborate & Network:</strong> Work with like-minded peers and build professional connections.</li>
          <li>🛠 <strong>Showcase Your Skills:</strong> Pitch your project to industry judges.</li>
          <li>🏅 <strong>Win Amazing Prizes:</strong> Compete for cash rewards, gadgets, and internships.</li>
        </ul>
      </section>

      {/* Our Vision */}
      <section className="vision-section">
        <h2><FaLightbulb className="icon" /> Our Vision</h2>
        <p>
          We envision a community of innovators who are not only technically sound but also socially responsible. Hack Mahotsav encourages creative thinking, teamwork, and entrepreneurship, preparing students to tackle real-world problems.
        </p>
      </section>

      {/* The Organizers */}
      <section className="organizers-section">
        <h2><FaCogs className="icon" /> The Organizers</h2>
        <p>
        Hackउत्सव is organized by a dedicated team from <em>The Northcap University</em>, supported by industry professionals and tech enthusiasts. Our goal is to provide an inclusive and enriching experience for all participants.
        </p>
        <ul>
          <li><strong>Event Coordinators:</strong> [Coordinator Name(s)]</li>
          <li><strong>Student Volunteers:</strong> [Volunteer Team Name]</li>
          <li><strong>Technical Support:</strong> [Tech Support Team Name]</li>
        </ul>
      </section>

      {/* Join Us */}
      <section className="join-section">
        <h2><FaRocket className="icon" /> Join Us</h2>
        <p>Be part of something bigger! Join Hackउत्सव and challenge yourself to build the future, one line of code at a time.</p>
      </section>
    </div>
    </>
  );
};

export default AboutUs;