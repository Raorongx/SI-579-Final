import React, { useState } from 'react';

const AddReminderForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !date) {
      alert('Please fill in something at least！');
      return;
    }
    if (typeof onAdd === 'function') {
      onAdd({ text, date });
    } else {
      console.error('onAdd is not a function');
    }
    
    setText('');
    setDate('');
  };

  return (
    <div className="add-reminder-form"> {/* Added class here */}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Remind me of?"
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
        <button type="submit">Add a reminder</button>
      </form>
    </div>
  );
};

export default AddReminderForm;

