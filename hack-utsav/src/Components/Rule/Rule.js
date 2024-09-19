// src/Rules.js
import React from 'react';
import './Rule.css';
import { FaGavel, FaCalendarAlt, FaUsers, FaClipboardList, FaCode, FaHandshake } from 'react-icons/fa'; // Importing icons
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ChatBot from '../Chatbot/ChatBot';

const Rules = () => {
  return (
    <>
      <Header />
      
      <div className="rules-container">
      <section className="intro-section">
        <h1>Hackउत्सव Rules</h1>
        <p>Where tech enthusiasts converge to tackle the world’s most pressing issues.</p>
      </section>
        {/* General Rules */}
        <section className="rules-section general-rules">
          <h1><FaGavel className="icon" /> General Rules</h1>
          <ul>
            <li><strong>Eligibility:</strong> The hackathon is open to all registered participants. Each team can have a maximum of 3 members, including the team leader. Participants can be from any educational institution or professional background, provided they are registered for the hackathon.</li>
            <li><strong>Team Formation:</strong> Teams must be formed and registered before the hackathon starts. Once the hackathon begins, changes in team composition will not be allowed. Each participant can only be part of one team. Each team must pay a sum of Rs 600 to participate in the hackathon.</li>
            <li><strong>Communication:</strong> All official communication will be done via email and the designated communication platform (Discord, WhatsApp). It is the responsibility of the teams to stay updated on any announcements or changes during the hackathon.</li>
          </ul>
        </section>

        {/* Round 1: Elimination Round */}
        <section className="rules-section round-one">
          <h1><FaCalendarAlt className="icon" /> Round 1: Elimination Round</h1>
          <ul>
            <li><strong>Submission:</strong> Teams are required to submit their solutions in the provided PPT template. Submissions must include a clear description of the idea, approach, and solution to the problem statement. The deadline for submission will be strictly enforced. Late submissions will not be accepted. Teams must also present their idea with their ppt for 15 minutes. No extra time will be granted for any team.</li>
            <li><strong>Evaluation Criteria:</strong> Creativity and innovation in addressing the problem statement. Practicality and feasibility of the proposed solution. Clarity and organization of the presentation.</li>
            <li><strong>Presentation:</strong> All teams will present their solution to the judging panel during the elimination round. Presentations must be concise and adhere to the time limit provided by the organizers. Failure to present within the time allotted may result in disqualification.</li>
            <li><strong>Advancement:</strong> Based on the evaluation, the top 5 teams from each theme will advance to Round 2. The decision of the judges is final and binding.</li>
          </ul>
        </section>

        {/* Round 2: Implementation Round */}
        <section className="rules-section round-two">
          <h1><FaCode className="icon" /> Round 2: Implementation Round</h1>
          <ul>
            <li><strong>Prototype Development:</strong> In Round 2, teams are required to develop a working prototype of their solution. The prototype can be in the form of a web app, CLI tool, library package, API, or mobile app. Teams are allowed to use open-source APIs and online resources, but plagiarism is strictly prohibited.</li>
            <li><strong>Mentorship:</strong> Throughout Round 2, mentors and industry experts will be available to provide guidance and feedback. Teams should use this mentorship opportunity to improve their solution and address any technical challenges.</li>
            <li><strong>Final Presentation:</strong> The top 5 teams from each theme will present their working prototype to the judging panel. Each team will have a set time to demonstrate the functionality and effectiveness of their prototype. Teams must be prepared to answer questions from the judges regarding their project’s technical implementation, use cases, and future potential.</li>
            <li><strong>Evaluation Criteria:</strong> Functionality and robustness of the working prototype. Technical complexity and innovation. Potential impact and scalability of the solution. Quality of the presentation and demonstration.</li>
            <li><strong>Disqualification:</strong> Any form of plagiarism or direct copying of existing projects will lead to immediate disqualification. Teams found violating any of the hackathon rules or engaging in unethical practices will also be disqualified.</li>
            <li><strong>Judging and Results:</strong> Judges' decisions will be based on the criteria mentioned above. The final results will be announced after all teams have completed their presentations. The judges' decisions are final and cannot be challenged.</li>
          </ul>
        </section>

        {/* General Code of Conduct */}
        <section className="rules-section code-of-conduct">
          <h1><FaHandshake className="icon" /> General Code of Conduct</h1>
          <ul>
            <li><strong>Respect and Professionalism:</strong> All participants are expected to maintain a high level of professionalism and respect toward fellow participants, mentors, and judges. Harassment or discriminatory behavior will not be tolerated and may result in disqualification.</li>
            <li><strong>Collaboration and Integrity:</strong> While collaboration within teams is encouraged, all work must be original. Teams are encouraged to brainstorm and innovate but must not infringe on others' intellectual property or ideas.</li>
            <li><strong>Confidentiality:</strong> Participants must not disclose any confidential or proprietary information during or after the hackathon without permission.</li>
          </ul>
        </section>
      </div>
      <ChatBot></ChatBot>
      <Footer></Footer>
    </>
  );
};

export default Rules;
