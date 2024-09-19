import React, { useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);  // Initialize as false to keep it minimized

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : 'closed'}`}>
      {isOpen && (
        <iframe
          src="https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=cfcad009-d6c2-47cc-b834-3e8c60021c97"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Chat Bot"
        ></iframe>
      )}
      <button className="chatbot-toggle" onClick={toggleChatBox}>
        {isOpen ? '-' : '+'}
      </button>
    </div>
  );
};

export default ChatBot;
