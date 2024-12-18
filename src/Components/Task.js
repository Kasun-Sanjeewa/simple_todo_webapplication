import React from 'react';
import './ToDoList.css';

export default function Task({ taskData }) {
    const render = taskData.map((task) => {
        const formattedDate = new Date(task.date).toISOString().split('T')[0];
        return (
            <div className='taskContainer' key={task._id}>
                <div className='task-item'>
                    <input type="checkbox" className='task-checkbox' />
                    <div className='task-name'><strong>{task.task}</strong></div>
                    <span className='category-tag'>{task.catogory}</span>
                    <span className='priority-tag'>{task.priority}</span>
                </div>
                <div className='task-date'>{formattedDate}</div>
                <div className='task-time'>{task.time}</div>
                <div className='task-actions'>
                    <button className='delete-btn'>✖</button>
                    <button className='edit-btn'>✏️</button>
                </div>
            </div>
        );
    });

    return <div className='task-list'>{render}</div>;
}
