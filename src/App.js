
import './App.css';
import Task from './Components/Task';
import TodoList from './Components/TodoList';
import { useState } from 'react';

function App() {

  const [taskData, setTaskData] = useState([]);

  const addTask = (data) => {
    setTaskData((prevTasks) => [...prevTasks, data]);
  }
  return (
    <div>
      <TodoList addTask={addTask} />
      <Task taskData={taskData} />
    </div>
  );
}

export default App;
