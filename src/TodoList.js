import React, { useState } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editingIndex, setEditingIndex] = useState(-1);
    const [editingText, setEditingText] = useState('');

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
        setTasks(updatedTasks);
    };

    const editTask = (index) => {
        setEditingIndex(index);
        setEditingText(tasks[index]);
    };

    const saveTask = (index) => {
        const updatedTasks = tasks.map((task, taskIndex) => 
            taskIndex === index ? editingText : task
        );
        setTasks(updatedTasks);
        setEditingIndex(-1);
        setEditingText('');
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input 
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
            />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {editingIndex === index ? (
                            <>
                                <input 
                                    type="text" 
                                    value={editingText} 
                                    onChange={(e) => setEditingText(e.target.value)} 
                                />
                                <button onClick={() => saveTask(index)}>Save</button>
                            </>
                        ) : (
                            <>
                                {task}
                                <button onClick={() => editTask(index)}>Edit</button>
                                <button onClick={() => deleteTask(index)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
