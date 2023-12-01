// AddReminderForm.js
import React, { useState } from 'react';

const AddReminderForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !date) {
      alert('请填写提醒内容和日期！');
      return;
    }
    onAdd({ text, date });
    setText('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="提醒内容"
          required
        />
      </div>
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">添加提醒</button>
    </form>
  );
};

export default AddReminderForm;

