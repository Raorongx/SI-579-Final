import React from 'react';
import DateTimeDisplay from './components/DateTimeDisplay';
import HolidayReminder from './components/HolidayReminder';
import ReminderList from './components/ReminderList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left-panel">
        <DateTimeDisplay />
      </div>
      <div className="right-panel">
        <HolidayReminder />
        <ReminderList />
      </div>
    </div>
  );
}

export default App;

