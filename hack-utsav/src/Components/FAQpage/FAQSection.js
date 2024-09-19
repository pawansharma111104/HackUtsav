import React, { useState } from 'react';
import './FAQ.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ChatBot from '../Chatbot/ChatBot';
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
    { question: "Who is eligible to participate in the hackathon?", answer: "The hackathon is open to all registered participants, including students and professionals from any background. Make sure to register before the deadline to participate." },
    { question: "Where will the Hackathon be conducted? Can I join remotely?", answer: "The hackathon will be conducted offline at The NorthCap University, Gurugram only. All teams must be present on campus at 9:00 AM on 15th October 2024 for their registration." },
    { question: "How many rounds of the hackathon will there be?", answer: "Two rounds of the hackathon will be conducted: the Ideation Round and the Implementation Round. Top 5 teams from each theme will qualify for the 1st Round and then move on to the Implementation Round, which will occur from 3:00 PM on 15th October to 6:00 PM on 16th October." },
    { question: "Are there any restrictions on the type of prototype we can develop?", answer: "No, teams are free to develop any form of working prototype, including web apps, CLI tools, system apps, APIs, or mobile applications. The use of open-source APIs is also encouraged. However, plagiarizing projects will result in disqualification." },
  ];

  const participationAndVenue = [
    { question: "Are there any prizes for the winners?", answer: "Yes, each theme (5 SDG themes and 1 Student Innovation) will have a winning team reward of ₹10,000 each. Additionally, there are 3 overall prizes for the entire hackathon: 1st Prize: ₹25,000, 2nd Prize: ₹20,000, and 3rd Prize: ₹15,000." },
    { question: "Is there a participation fee?", answer: "Yes, each team must pay a fee of ₹600 for their participation." },
    { question: "Will food and refreshments be provided?", answer: "Yes, all participants will be provided with 2 lunches, 1 dinner, and evening and overnight refreshments during the hackathon. Participants can bring additional snacks if needed." },
    { question: "Is lodging provided for Round 2 participants?", answer: "Yes, lodging for 30 teams will be provided during the 2nd Round of the hackathon, which will occur overnight at the university." },
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
    <ChatBot></ChatBot>
    <Footer></Footer>
    </>
  );
};

export default FAQ;
