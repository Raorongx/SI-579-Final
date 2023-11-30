// ReminderList.js
import React, { useState } from 'react';
import AddReminderForm from './AddReminderForm';
import Countdown from './Countdown';

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
        <div key={index}>
          {reminder.text} - {reminder.date}
          <Countdown targetDate={reminder.date} />
          <button onClick={() => deleteReminder(index)}>删除</button>
        </div>
      ))}
    </div>
  );
};

export default ReminderList;
