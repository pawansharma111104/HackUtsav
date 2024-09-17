import React, { useState, useEffect } from 'react';
import './Count.css';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-10-10T23:59:59'); // 15th October 2024, 9:00 AM
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="countdown">
      <h2>!!Registration Until!!</h2>
      <div className="time-left">
        <div className="time-section">
          <span>{timeLeft.days || '0'}</span>
          <p>Days</p>
        </div>
        <div className="time-section">
          <span>{timeLeft.hours || '0'}</span>
          <p>Hours</p>
        </div>
        <div className="time-section">
          <span>{timeLeft.minutes || '0'}</span>
          <p>Minutes</p>
        </div>
        <div className="time-section">
          <span>{timeLeft.seconds || '0'}</span>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;