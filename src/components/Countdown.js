import React, { useState, useEffect } from 'react';
import FireworkDisplay from './FireworkDisplay';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const updatedTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(updatedTimeLeft);
      if (Object.keys(updatedTimeLeft).length === 0 && !isCompleted) {
        setIsCompleted(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, targetDate, isCompleted]);

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
    return Object.keys(timeLeft).map(interval => {
      if (!timeLeft[interval]) {
        return null;
      }
      return (
        <span key={interval}>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    });
  };

  return (
    <div>
      {isCompleted ? (
        <FireworkDisplay />
      ) : (
        <div>
          Countdown: {renderTimeLeft()}
        </div>
      )}
    </div>
  );
};

export default Countdown;
