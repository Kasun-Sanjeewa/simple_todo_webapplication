
import axios from 'axios';
import './App.css';
import Task from './Components/Task';
import TodoList from './Components/TodoList';
import { useState } from 'react';

function App() {

  const [taskData, setTaskData] = useState([]);


  //Add Task

  const addTask = (data) => {
    setTaskData((prevTasks) => [...prevTasks, data]);

    const payload = {
      task: data.task,
      date: data.selectedDate,
      time: data.selectedTime,
      catogory: data.selectCatogory,
      priority: data.selectPriority,
    }

    axios.post('http://localhost:3001/api//addTask', payload)
      .then(() => {
        window.alert("Task Added")
      })
      .catch(err => {
        console.error("Axios Error : ", err);
      })
  }


  return (
    <div>
      <TodoList addTask={addTask} />
      <Task taskData={taskData} />
    </div>
  );
}

export default App;
