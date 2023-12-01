import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import HolidayReminder from './HolidayReminder';
import ReminderList from './ReminderList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left-panel">
        <DateTimeDisplay />
        {/* 可以在这里添加问候语的逻辑 */}
      </div>
      <div className="right-panel">
        <HolidayReminder />
        <ReminderList />
      </div>
    </div>
  );
}

export default App;
