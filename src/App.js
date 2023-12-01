import React from 'react';
import DateTimeDisplay from './components/DateTimeDisplay';
import HolidayReminder from './components/HolidayReminder';
import ReminderList from './components/ReminderList';
import FireworkDisplay from './components/FireworkDisplay';
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

