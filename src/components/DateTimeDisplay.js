// DateTimeDisplay.js
import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = date => {
    // Converting to Eastern Time Zone (you can adjust the time zone as needed)
    const localTime = date.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
    return `${date.toLocaleDateString('en-US')} ${localTime}`;
  };

  const greeting = () => {
    // Here you can add logic to show specific greetings for holidays or events
    return "Have a great day!";
  };

  return (
    <div className="datetime-display">
      <div>{formatTime(currentTime)}</div>
      <div>{greeting()}</div>
    </div>
  );
};

export default DateTimeDisplay;


