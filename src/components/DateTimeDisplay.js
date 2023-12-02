import React, { useState, useEffect } from 'react';

const DateTimeDisplay = ({ reminders }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = date => {
    const localTime = date.toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
    return `${date.toLocaleDateString('en-US')} ${localTime}`;
  };

  const remindersTooltip = () => {
    return reminders.map(reminder => `${reminder.text} on ${reminder.date}`).join('\n');
  };

  const greeting = () => {
    const today = new Date().toLocaleDateString('en-US');
    const nextReminder = reminders
      .filter(reminder => new Date(reminder.date) > new Date())
      .sort((a, b) => new Date(a.date) - new Date(b.date))[0];

    if (nextReminder) {
      const daysUntilNext = Math.ceil((new Date(nextReminder.date) - new Date()) / (1000 * 60 * 60 * 24));
      return `There are ${daysUntilNext} days remaining for your next to-do item.`;
    } else {
      return "No upcoming reminders.";
    }
  };

  return (
    <div className="datetime-display">
      <div>{formatTime(currentTime)}</div>
      <div title={remindersTooltip()}>{greeting()}</div>
    </div>
  );
};

export default DateTimeDisplay;
