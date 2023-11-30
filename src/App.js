import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import HolidayReminder from './HolidayReminder';
import ReminderList from './ReminderList';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>事项提醒应用</h1>
      </header>
      <DateTimeDisplay />
      <HolidayReminder />
      <ReminderList />
    </div>
  );
}

export default App;