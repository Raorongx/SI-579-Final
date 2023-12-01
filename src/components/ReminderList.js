// ReminderList.js
import React, { useState } from 'react';
import AddReminderForm from './AddReminderForm';

const ReminderList = () => {
  const [reminders, setReminders] = useState([]);

  // 添加提醒事项
  const addReminder = reminder => {
    setReminders([...reminders, reminder]);
  };

  // 删除提醒事项
  const deleteReminder = index => {
    const newReminders = reminders.filter((_, i) => i !== index);
    setReminders(newReminders);
  };

  return (
    <div className="reminder-list">
      <AddReminderForm onAdd={addReminder} />
      {reminders.map((reminder, index) => (
        <div key={index}>
          {reminder.text} - {reminder.date}
          <button onClick={() => deleteReminder(index)}>删除</button>
        </div>
      ))}
    </div>
  );
};

export default ReminderList;

