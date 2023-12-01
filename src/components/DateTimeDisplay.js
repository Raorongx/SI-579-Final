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
    // 转换为西五区时间
    const localTime = date.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
    return `${date.toLocaleDateString()} ${localTime}`;
  };

  return (
    <div className="datetime-display">
      <div>{formatTime(currentTime)}</div>
      {/* 你可以在这里添加问候语的逻辑 */}
    </div>
  );
};

export default DateTimeDisplay;

