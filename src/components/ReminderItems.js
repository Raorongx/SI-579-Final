import React, { useState, useEffect } from 'react';
import AddReminderForm from './AddReminderForm';
import Countdown from './Countdown';
import Confetti from 'react-confetti';

const ReminderItems = () => {
  const [reminders, setReminders] = useState([]);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const storedReminders = localStorage.getItem('reminders');
    if (storedReminders) {
      const parsedReminders = JSON.parse(storedReminders);
      setReminders(parsedReminders);

      const today = new Date().toLocaleDateString('en-US', { timeZone: 'America/New_York' });
      const hasReminderToday = parsedReminders.some(reminder => 
        new Date(reminder.date + 'T00:00:00').toLocaleDateString('en-US', { timeZone: 'America/New_York' }) === today
      );

      if (hasReminderToday) {
        setShowAnimation(true);
        setTimeout(() => setShowAnimation(false), 2000); // Hide animation after 2 seconds
      }
    }
  }, []);

  const addReminder = (newReminder) => {
    const updatedReminders = [...reminders, newReminder];
    setReminders(updatedReminders);
    localStorage.setItem('reminders', JSON.stringify(updatedReminders));

    const today = new Date().toLocaleDateString('en-US', { timeZone: 'America/New_York' });
    if (new Date(newReminder.date + 'T00:00:00').toLocaleDateString('en-US', { timeZone: 'America/New_York' }) === today) {
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 2000); // Hide animation after 2 seconds
    }
  };

  const deleteReminder = (index) => {
    const newReminders = reminders.filter((_, i) => i !== index);
    setReminders(newReminders);
    localStorage.setItem('reminders', JSON.stringify(newReminders));
  };

  return (
    <div className="reminder-items-container">
      {showAnimation && <Confetti />}
      <div className="add-reminder-form-container">
        <AddReminderForm onAdd={addReminder} />
      </div>
      <div className="reminders-list-container">
        {reminders.map((reminder, index) => (
          <div key={index} className="reminder-item">
            <div>{reminder.text} - {reminder.date}</div>
            <Countdown targetDate={reminder.date} />
            <button onClick={() => deleteReminder(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReminderItems;
