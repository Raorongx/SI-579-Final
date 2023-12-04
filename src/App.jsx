import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import DateTimeDisplay from './components/DateTimeDisplay';
import HolidayCountdown from './components/HolidayCountdown';
import ReminderItems from './components/ReminderItems';

const App = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    // Load reminders from local storage or other sources
    const storedReminders = localStorage.getItem('reminders');
    if (storedReminders) {
      setReminders(JSON.parse(storedReminders));
    }
  }, []);

  // 修改：将addReminder函数移至ReminderItems组件
  return (
    <div className='container'>
      <Router>
        <nav>
          <ul>
            <li><Link to="/date-time">Date & Time</Link></li>
            <li><Link to="/reminder-items">Reminder Items</Link></li>
            <li><Link to="/holiday-countdown">Holiday Countdown</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/date-time" element={<DateTimeDisplay reminders={reminders} />} />
          <Route path="/reminder-items" element={<ReminderItems reminders={reminders} setReminders={setReminders} />} />
          <Route path="/holiday-countdown" element={<HolidayCountdown />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
