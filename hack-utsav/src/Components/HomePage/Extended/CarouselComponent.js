import React from 'react';

const CarouselComponent = () => {
  const carouselContainerStyle = {
    // backgroundColor: 'black', // Black background
    backgroundColor: '#103C2C',
    height: '4vw', // Adjust height dynamically based on viewport width
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden', // Ensures text doesn’t overflow the container
    
  };

  const scrollContainerStyle = {
    display: 'flex',
    whiteSpace: 'nowrap', // Prevent line breaks
  };

  const textStyle = {
    display: 'inline-block',
    fontSize: '3vw', // Relative font size for responsiveness
    color: '#fff', // White text for contrast with the black background
    fontWeight: 'bold',
    paddingLeft: '10px',
    fontFamily: 'Afacad Flux',
    animation: 'marquee 10s linear infinite', // Animation for continuous scrolling
  };

  const emojis = '🚀🎉'; // Emojis for highlighting the message
  const text = `${emojis} Registration extended to 05/10/2024`;
  const infiniteText = Array(10).fill(text); // Create an array of 10 text elements

  return (
    <div style={carouselContainerStyle}>
      <div style={scrollContainerStyle}>
        {/* Text content to scroll */}
        {infiniteText.map((item, index) => (
          <div key={index} style={textStyle}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
