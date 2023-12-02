import React, { useState, useEffect } from 'react';
import AddReminderForm from './AddReminderForm';
import Countdown from './Countdown';
import Confetti from 'react-confetti'; // Assuming you have an animation component like Confetti

const ReminderItems = () => {
  const [reminders, setReminders] = useState([]);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const storedReminders = localStorage.getItem('reminders');
    if (storedReminders) {
      const parsedReminders = JSON.parse(storedReminders);
      setReminders(parsedReminders);

      const today = new Date().toLocaleDateString('en-US');
      const hasReminderToday = parsedReminders.some(reminder => new Date(reminder.date).toLocaleDateString('en-US') === today);
      setShowAnimation(hasReminderToday);
    }
  }, []);

  const addReminder = (newReminder) => {
    const updatedReminders = [...reminders, newReminder];
    setReminders(updatedReminders);
    localStorage.setItem('reminders', JSON.stringify(updatedReminders));

    const today = new Date().toLocaleDateString('en-US');
    if (new Date(newReminder.date).toLocaleDateString('en-US') === today) {
      setShowAnimation(true);
    }
  };

  const deleteReminder = (index) => {
    const newReminders = reminders.filter((_, i) => i !== index);
    setReminders(newReminders);
    localStorage.setItem('reminders', JSON.stringify(newReminders));
  };

  return (
    <div className="reminder-items">
      {showAnimation && <Confetti />}
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

export default ReminderItems;
