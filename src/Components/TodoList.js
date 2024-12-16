import React from 'react';
import './ToDoList.css'

export default function TodoList() {
    return (
        <>
            <div className='nav-bar'>
                <div className='logo'>
                    <i class="fa-solid fa-clipboard-list" />
                </div>
                <div>
                    <h1>ToDo List</h1>
                    <p>Execute Your Plan here</p>
                </div>
            </div>
            <h1 className="subtitle">Todo-List</h1>

            <div class="container">
                <div class="js-add-grid" id="add-todo">
                    <input
                        type="text"
                        placeholder="Add a new task here...."
                        class="js-name-input"
                    />

                    <input type="date" class="js-date-input" min="" />
                    <input type="time" class="js-time-input" />
                    <select class="js-category-input">
                        <option value="">Select Category</option>
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                        <option value="shopping">Shopping</option>
                        <option value="other">Other</option>
                    </select>
                    <select class="js-priority-input">
                        <option value="">Select Priority</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <div class="js-actions-wrapper">
                        <button class="js-add-button" title="Add tasks">
                            <i class="fa-solid fa-add"></i> &nbsp; Add tasks
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}
