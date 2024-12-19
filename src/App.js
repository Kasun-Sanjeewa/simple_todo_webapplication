
import axios from 'axios';
import './App.css';
import Task from './Components/Task';
import TodoList from './Components/TodoList';
import { useEffect, useState } from 'react';

function App() {


  const [taskData, setTask] = useState([]);
  const [selectData, setData] = useState({})
  const [isEdit, setIsEdit] = useState(false);

  //Add Task

  useEffect(() => {
    getTask();
  }, []);

  const getTask = () => {
    axios.get('http://localhost:3001/api/getTask')
      .then(Response => {
        setTask(Response.data.response);
      })
      .catch(err => {
        console.error("Axios Error : ", err);
      })
  }




  //Add Task

  const addTask = (data) => {

    setIsEdit(true);
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
        getTask();
      })
      .catch(err => {
        console.error("Axios Error : ", err);
      })
  }


  //Update Task

  const updateTask = (dataa) => {

    setIsEdit(true);


    const payload = {
      _id: dataa._id,
      task: dataa.task,
      date: dataa.selectedDate,
      time: dataa.selectedTime,
      catogory: dataa.selectCatogory,
      priority: dataa.selectPriority,
    }

    axios.put('http://localhost:3001/api/updateTask', payload)
      .then(() => {
        getTask();
        setIsEdit(false)

      })
      .catch(err => {
        console.error("Axios Error : ", err);
      })
  }

  //Delete Task

  const deleteTask = (deleteData) => {
    // Show confirmation dialog
    const isConfirmed = window.confirm("Are you sure you want to delete this task?");

    // If user confirms, proceed with deletion
    if (isConfirmed) {
      axios
        .delete(`http://localhost:3001/api/deleteTask`, { params: { _id: deleteData._id } }) // Use `params` instead of `data`
        .then(() => {
          getTask(); // Refresh the task list after deletion
        })
        .catch((err) => {
          console.error("Axios Error: ", err);
        });
    } else {
      console.log("Task deletion was canceled.");
    }
  };




  return (
    <div>
      <TodoList addTask={addTask} selectData={selectData} isEdit={isEdit} updateTask={updateTask} />
      <Task taskData={taskData} data={data => {
        setData(data);
        setIsEdit(true);
      }} deleteData={deleteTask} />
    </div>
  );
}

export default App; 
