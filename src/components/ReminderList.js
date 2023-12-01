// ReminderList.js
import React, { useState } from 'react';
import AddReminderForm from './AddReminderForm';
import Countdown from './Countdown'; // Assuming you have Countdown component

const ReminderList = () => {
  const [reminders, setReminders] = useState([]);

  const addReminder = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  const deleteReminder = (index) => {
    const newReminders = reminders.filter((_, i) => i !== index);
    setReminders(newReminders);
  };

  return (
    <div className="reminder-list">
      <AddReminderForm onAdd={addReminder} />
      {reminders.map((reminder, index) => (
        <div key={index} className="reminder-item">
          <div>{reminder.text} - {reminder.date}</div>
          <Countdown targetDate={reminder.date} />
          <button onClick={() => deleteReminder(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ReminderList;


