// TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onTaskSubmit }) => {
  const [taskName, setTaskName] = useState('');
  const [startHour, setStartHour] = useState('12');
  const [startMinute, setStartMinute] = useState('00');
  const [startPeriod, setStartPeriod] = useState('AM');
  const [endHour, setEndHour] = useState('12');
  const [endMinute, setEndMinute] = useState('00');
  const [endPeriod, setEndPeriod] = useState('AM');
  const [repeat, setRepeat] = useState(false);
  const [repeatFrequency, setRepeatFrequency] = useState('daily');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const task = {
      name: taskName,
      start: `${startHour}:${startMinute} ${startPeriod}`,
      end: `${endHour}:${endMinute} ${endPeriod}`,
      repeat: repeat,
      repeatFrequency: repeatFrequency,
    };

    // Pass the task data to the parent component
    onTaskSubmit(task);

    // Clear the form fields
    setTaskName('');
    setStartHour('12');
    setStartMinute('00');
    setStartPeriod('AM');
    setEndHour('12');
    setEndMinute('00');
    setEndPeriod('AM');
    setRepeat(false);
    setRepeatFrequency('daily');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Task Name:
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
      </label>

      <label>
        Start Time:
        <select value={startHour} onChange={(e) => setStartHour(e.target.value)}>
          {/* Add hours as needed */}
          <option value="12">12</option>
          {/* Add more hours as needed */}
        </select>
        <span>:</span>
        <select value={startMinute} onChange={(e) => setStartMinute(e.target.value)}>
          <option value="00">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
        </select>
        <select value={startPeriod} onChange={(e) => setStartPeriod(e.target.value)}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </label>

      <label>
        End Time:
        <select value={endHour} onChange={(e) => setEndHour(e.target.value)}>
          {/* Add hours as needed */}
          <option value="12">12</option>
          {/* Add more hours as needed */}
        </select>
        <span>:</span>
        <select value={endMinute} onChange={(e) => setEndMinute(e.target.value)}>
          <option value="00">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
        </select>
        <select value={endPeriod} onChange={(e) => setEndPeriod(e.target.value)}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </label>

      <label>
        Repeat:
        <input type="checkbox" checked={repeat} onChange={() => setRepeat(!repeat)} />
      </label>

      {repeat && (
        <label>
          Repeat Frequency:
          <select value={repeatFrequency} onChange={(e) => setRepeatFrequency(e.target.value)}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            {/* Add more repeat frequency options as needed */}
          </select>
        </label>
      )}

      <button type="submit">Submit Task</button>
    </form>
  );
};

export default TaskForm;
