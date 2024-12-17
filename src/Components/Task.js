import React from 'react'
import './ToDoList.css'

export default function Task({ taskData }) {

    const render = taskData.map((task) => {
        return <div className='taskContainer' key={task.selectedDate}>{task.task}</div>
    })
    return (
        <div>{render}</div>
    )
} 