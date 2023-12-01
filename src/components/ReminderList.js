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
        <div key={index} className="reminder-item">
          <div>{reminder.text} - {reminder.date}</div>
          <Countdown targetDate={reminder.date} />
          <button onClick={() => deleteReminder(index)}>Delete</button> {/* Use the function here */}
        </div>
      ))}
    </div>
  );
};

export default ReminderList;
