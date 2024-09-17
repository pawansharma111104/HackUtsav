import React, { useState } from 'react';
import './FAQ.css';
import Header from '../Header/Header';

const FAQItem = ({ question, answer, id, isOpen, onToggle }) => (
  <div className="faq-item">
    <div className="faq-question" onClick={() => onToggle(id)}>
      <h5>{question}</h5>
      <span className="toggle-icon">{isOpen ? '-' : '+'}</span>
    </div>
    <div className={`faq-answer ${isOpen ? 'open' : ''}`}>

      <p>{answer}</p>
    </div>
  </div>
);

const FAQSection = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <div className="faq-section">
      <h3 className="section-title">{title}</h3>
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          id={index}
          isOpen={openIndex === index}
          onToggle={handleToggle}
        />
      ))}
    </div>
    
  );
};

const FAQ = () => {
  const registrationAndEventDetails = [
    { question: "Who can participate in HackUtsav?", answer: "HackUtsav is open to undergraduate (UG), postgraduate (PG), and PhD scholars from universities across India. All team members can be from different branches, but must be from the same college. " },
    { question: "What are the rules for team size?", answer: "Including the team leader, under or equal to 3 members would be allowed per team" },
    { question: "Can I join remotely in HackUstav?", answer: "No, HackUtsav will be held exclusively, offline at The NorthCap University, Gurugram. The event spans two days, from 15th October 2024 to 16th October 2024." },
    { question: "Is there a participation fee?", answer: "Yes, the registration fee is ₹500 for both NCU and non-NCU students. It includes access to the hackathon, workshops, and networking sessions." },
  ];

  const participationAndVenue = [
    { question: "Are there any prizes for the winners?", answer: "Yes, the top three overall winners will receive: 1st Prize: ₹25,000 2nd Prize: ₹20,000 3rd Prize: ₹15,000 Additionally, there are theme-specific prizes of ₹10,000 for each theme" },
    { question: "Will there be accommodation for outstation participants?", answer: "Yes, free lodging is available for the first 100 teams. For others, accommodation is provided at a nominal charge of ₹500 per participant." },
    { question: " What is the duration of the hackathon?", answer: "HackUtsav is a 36-hour hackathon that starts on 15th October 2024 at 12:00 AM and concludes on 16th October 2024 at 6:00 PM." },
    { question: "How many teams will be selected after the first round of idea submission?", answer: "Only the top 5-6 teams will be selected after the first round of idea submission to proceed to the final hackathon event."}
  ];

  return (
    <>
    <Header></Header>
    <section className="faq">
      <div className="container">
        <div className="section-title">
          <h1>FAQ's</h1>
        </div>
        <div className="faq-content">
          <FAQSection title="Registration & Event Details" items={registrationAndEventDetails} />
          <FAQSection title="Participation & Venue" items={participationAndVenue} />
        </div>
      </div>
    </section>
    </>
  );
};

export default FAQ;