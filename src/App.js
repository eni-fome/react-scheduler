import React, {useState } from 'react';
import  GoogleCalendar from './components/Calender/GoogleCalender';
import TaskForm from './components/Events/TaskForm';
import { GoogleLogin } from '@react-oauth/google';




function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleLoginSuccess = (response) => {
    console.log('Login success:', response);
    setLoggedIn(true);
    GoogleCalendar.init();
  };

  const handleLoginFailure = (error) => {
    console.error('Login failed:', error);
  };

  const handleTaskSubmit = (task) => {
    console.log('Task submitted:', task);

    // Placeholder: Integrate Google Calendar API and replace this function
    pushTaskToGoogleCalendar(task);

    // update the task state
    setTasks([...tasks, task]);

  };

  const pushTaskToGoogleCalendar = (task) => {
    // Placeholder: Implement Google Calendar API integration
    console.log('Task pushed to Google Calendar:', task);
    // Add your logic to push the task to the user's Google Calendar
  };

  return (
    <div className="App">
      <h1>Scheduler</h1>
      {isLoggedIn ? (
        <>
        <TaskForm onTaskSubmit={handleTaskSubmit} />
        <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} | Start: {task.start} | End: {task.end}
          </li>
        ))}
      </ul>
        </>
      ) : (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      )}
    </div>
  );
}

export default App;
