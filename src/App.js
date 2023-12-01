import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddReminderForm from './components/AddReminderForm';
import DateTimeDisplay from './components/DateTimeDisplay';
import HolidayReminder from './components/HolidayReminder';
import ReminderList from './components/ReminderList';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/add-reminder">Add Reminder</Link></li>
          <li><Link to="/date-time">Date & Time</Link></li>
          <li><Link to="/holiday-reminder">Holiday Reminder</Link></li>
          <li><Link to="/reminder-list">Reminder List</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/add-reminder" element={<AddReminderForm />} />
        <Route path="/date-time" element={<DateTimeDisplay />} />
        <Route path="/holiday-reminder" element={<HolidayReminder />} />
        <Route path="/reminder-list" element={<ReminderList />} />
      </Routes>
    </Router>
  );
};

export default App;