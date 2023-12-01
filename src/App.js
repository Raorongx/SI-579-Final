import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import HolidayReminder from './HolidayReminder';
import ReminderList from './ReminderList';
import FireworkDisplay from './FireworkDisplay';
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
      <FireworkDisplay /> {/* 根据条件触发显示 */}
    </div>
  );
}

export default App;

