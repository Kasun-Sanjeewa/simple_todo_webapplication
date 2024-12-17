import './ToDoList.css'
import { useState, useEffect } from 'react';

export default function TodoList({ addTask }) {

    const [task, setTast] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectCatogory, setSelectCatogory] = useState('')
    const [selectPriority, setSelectPriority] = useState('')


    useEffect(() => {
        const currentData = new Date().toISOString().split('T')[0];
        setSelectedDate(currentData)
    }, [])


    useEffect(() => {
        const currentTime = new Date().toTimeString().split(' ')[0].substring(0, 5);
        setSelectedTime(currentTime);
    }, []);



    const taskHandle = (event) => {
        setTast(event.target.value)
    }


    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    }

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };


    const handleCatogory = (event) => {
        setSelectCatogory(event.target.value);
    }

    const handlePriority = (event) => {
        setSelectPriority(event.target.value);
    }


    return (
        <>
            <div className='nav-bar'>
                <div className='logo'>
                    <i className="fa-solid fa-clipboard-list" />
                </div>
                <div>
                    <h1>ToDo List</h1>
                    <p>Execute Your Plan here</p>
                </div>
            </div>
            <h1 className="subtitle">Todo-List</h1>

            <div className="container">
                <div className="js-add-grid" id="add-todo">
                    <input
                        type='text'
                        id='task' name='task' value={task}
                        placeholder="Add a new task here...."
                        className="js-name-input"
                        onChange={taskHandle}
                    />

                    <input type="date" className="js-date-input" value={selectedDate} onChange={handleDateChange} />
                    <input type="time" className="js-time-input" value={selectedTime} onChange={handleTimeChange} />
                    <select className="js-category-input" value={selectCatogory} onChange={handleCatogory}>
                        <option value="">Select Category</option>
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                        <option value="shopping">Shopping</option>
                        <option value="other">Other</option>
                    </select>
                    <select className="js-priority-input" value={selectPriority} onChange={handlePriority}>
                        <option value="">Select Priority</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <div className="js-actions-wrapper">
                        <button className="js-add-button" title="Add tasks" onClick={() => {
                            addTask(
                                {
                                    task,
                                    selectedDate,
                                    selectedTime,
                                    selectCatogory,
                                    selectPriority
                                }
                            );

                            setTast('');
                            setSelectCatogory('');
                            setSelectPriority('');
                        }}>
                            <i className="fa-solid fa-add"></i> &nbsp; Add tasks
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}
