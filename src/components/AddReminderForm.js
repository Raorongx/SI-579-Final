// AddReminderForm.js
import React, { useState } from 'react';

const AddReminderForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ text, date });
    setText('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="提醒内容"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">添加提醒</button>
    </form>
  );
};

export default AddReminderForm;
