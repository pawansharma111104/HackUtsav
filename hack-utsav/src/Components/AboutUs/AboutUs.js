// src/AboutUs.js
import React from 'react';
import './AboutUs.css';
import { FaRocket, FaUniversity, FaUsers, FaLightbulb, FaNetworkWired, FaCogs } from 'react-icons/fa'; // Importing icons
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
      {/* About NCU Section */}
<section className="ncu-section">
  <h2><FaUniversity className="icon" /> About The Northcap University (NCU)</h2>
  <p>
    <em>The Northcap University (NCU)</em>, located in Gurugram, India, is a premier institution known for its commitment to academic excellence, innovation, and research. Established with the goal of fostering a holistic learning environment, NCU is dedicated to providing world-class education in various fields of engineering, management, law, and applied sciences.
  </p>
  <p>
    NCU has been consistently ranked among the top universities in India, thanks to its highly qualified faculty, state-of-the-art facilities, and industry collaborations. It aims to empower students to be future leaders, innovators, and entrepreneurs, equipped with the skills to make a meaningful impact in the world.
  </p>
  <ul>
    <li>🏛 <strong>Location:</strong> Gurugram, Haryana, India.</li>
    <li>🎓 <strong>Programs:</strong> Undergraduate, Postgraduate, and Doctoral programs in various disciplines.</li>
    <li>🤝 <strong>Industry Collaborations:</strong> NCU maintains strong ties with top companies and industries to provide hands-on learning and internships.</li>
    <li>🌍 <strong>Global Exposure:</strong> With various international partnerships, NCU offers students opportunities for global exchange and collaborative projects.</li>
  </ul>
</section>

      {/* Why Participate */}
      <section className="participate-section">
        <h2><FaUsers className="icon" /> Why Participate?</h2>
        <ul>
          <li>⚙ <strong>Build & Learn:</strong> Dive deep into new technologies and gain hands-on experience.</li>
          <li>🤝 <strong>Collaborate & Network:</strong> Work with like-minded peers and build professional connections.</li>
          <li>🛠 <strong>Showcase Your Skills:</strong> Pitch your project to industry judges.</li>
          <li>🏅 <strong>Win Amazing Prizes:</strong> Compete for cash rewards.</li>
        </ul>
      </section>

      {/* Our Vision */}
      <section className="vision-section">
        <h2><FaLightbulb className="icon" /> Our Vision</h2>
        <p>
          We envision a community of innovators who are not only technically sound but also socially responsible. Hackउत्सव encourages creative thinking, teamwork, and entrepreneurship, preparing students to tackle real-world problems.
        </p>
      </section>

      {/* The Organizers */}
      <section className="organizers-section">
        <h2><FaCogs className="icon" /> The Organizers</h2>
        <p>
        Hackउत्सव is organized by a dedicated team from <em>The Northcap University</em>, in collaboration with <strong>IEEE NCU</strong>, <strong>ACM NCU</strong>, <strong>ICT Academy</strong> and <strong>IIIC NCU</strong>, supported by industry professionals and tech enthusiasts. Our goal is to provide an inclusive and enriching experience for all participants.
        </p>
        <ul>
          {/* <li><strong>Event Coordinators:</strong> [Coordinator Name(s)]</li>
          <li><strong>Student Volunteers:</strong> [Volunteer Team Name]</li>
          <li><strong>Technical Support:</strong> [Tech Support Team Name]</li> */}
        </ul>
      </section>

      {/* Join Us */}
      <section className="join-section">
        <h2><FaRocket className="icon" /> Join Us</h2>
        <p>Be part of something bigger! Join Hackउत्सव and challenge yourself to build the future, one line of code at a time.</p>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2><FaRocket className="icon" /> Find Us</h2>
        <p>Be part of something bigger! Join Hackउत्सव and challenge yourself to build the future, one line of code at a time.</p>
        <a 
          href="https://www.google.com/maps/place/The+NorthCap+University/@28.5036265,77.0472747,17z/data=!3m1!4b1!4m6!3m5!1s0x390d199c98e90ff1:0x8b2aa76c53fb738e!8m2!3d28.5036218!4d77.049855!16s%2Fm%2F0glnr8d?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="https://res.cloudinary.com/ddznylzdr/image/upload/v1726556982/jgq20fql7wtgblwlhrer.png" 
            alt="Map location"
            className="map-image"
          />
        </a>
      </section>

    </div>
    </>
  );
};

export default AboutUs;