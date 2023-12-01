import React, { useState, useEffect } from 'react';
import FireworkDisplay from './FireworkDisplay';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = (date) => {
    const difference = +new Date(date) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return {};
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(updatedTimeLeft);
      if (Object.keys(updatedTimeLeft).length === 0 && !isCompleted) {
        setIsCompleted(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  useEffect(() => {
    if (Object.keys(timeLeft).length === 0 && !isCompleted) {
      setIsCompleted(true);
    }
  }, [timeLeft]);

  return (
    <div>
      {isCompleted ? (
        <FireworkDisplay />
      ) : (
        Object.keys(timeLeft).map(interval => (
          <span key={interval}>
            {timeLeft[interval]} {interval}{" "}
          </span>
        ))
      )}
    </div>
  );
};

export default Countdown;
