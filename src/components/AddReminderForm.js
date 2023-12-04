import React, { useState } from 'react';

const AddReminderForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Personal');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !date) {
      alert('Please fill in all fields!');
      return;
    }

    onAdd({ text, date, category });

    setText('');
    setDate('');
    setCategory('Personal');
  };

  return (
    <div className="add-reminder-form">
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Reminder Content</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What do you need to remember?"
            required
          />
        </div>
        <div className="form-field">
          <label>Reminder Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Work">Work</option>
            <option value="Academic">Academic</option>
            <option value="Personal">Personal</option>
            <option value="Health">Health</option>
          </select>
        </div>
        <button type="submit">Add Reminder</button>
      </form>
    </div>
  );
};

export default AddReminderForm;

