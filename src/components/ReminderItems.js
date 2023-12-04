import React, { useState, useEffect } from 'react';
import AddReminderForm from './AddReminderForm';
import Countdown from './Countdown';
import Confetti from 'react-confetti';

const ReminderItems = () => {
  const [reminders, setReminders] = useState([]);
  const [showAnimation, setShowAnimation] = useState(false);

  const reminderSoundUrl = process.env.PUBLIC_URL + '/2254694745.mp3';

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

        new Audio(reminderSoundUrl).play();
        setTimeout(() => setShowAnimation(false), 150000); 
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

      new Audio(reminderSoundUrl).play();
      setTimeout(() => setShowAnimation(false), 150000); 
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
      {showAnimation && <Confetti />}
      {showAnimation && <Confetti />}
      {showAnimation && <Confetti />}
      {showAnimation && <Confetti />}
      {showAnimation && <Confetti />}
      {showAnimation && <Confetti />}
      <div className="add-reminder-form-container">
        <AddReminderForm onAdd={addReminder} />
      </div>
      <div className="reminders-list-container">
        {reminders.map((reminder, index) => (
          <div key={index} className="reminder-item">
            <div>{reminder.text} - {reminder.date} - Category: {reminder.category}</div>
            <Countdown targetDate={reminder.date} />
            <button onClick={() => deleteReminder(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReminderItems;

export default ReminderItems;
