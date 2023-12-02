// Countdown.js
import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(date) {
    const difference = +new Date(date) - +new Date();
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
  }

  const renderTimeLeft = () => {
    return Object.keys(timeLeft).length > 0 ? (
      Object.keys(timeLeft).map(interval => (
        <span key={interval}>
          {timeLeft[interval]} {interval}{" "}
        </span>
      ))
    ) : (
      <span>Time is up!</span>
    );
  };

  return <div>{renderTimeLeft()}</div>;
};

export default Countdown;

