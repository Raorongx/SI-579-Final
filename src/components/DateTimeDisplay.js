import React, { useState, useEffect } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

// RealTimeClock Component
const RealTimeClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { timeZone: 'America/New_York' });
  };

  return (
    <div className="clock-container">
      <div className="date-display">{formatDate(currentTime)}</div>
      <Clock value={currentTime} />
    </div>
  );
};

// Reminder Component
const Reminder = ({ reminders }) => {
  const remindersTooltip = () => {
    return reminders.map(reminder => `${reminder.text} on ${reminder.date}`).join('\n');
  };

  const greeting = () => {
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

  return <div title={remindersTooltip()}>{greeting()}</div>;
};

// DateTimeDisplay Component
const DateTimeDisplay = ({ reminders }) => {
  return (
    <div className="datetime-display">
      <RealTimeClock />
      <Reminder reminders={reminders} />
    </div>
  );
};

export default DateTimeDisplay;
