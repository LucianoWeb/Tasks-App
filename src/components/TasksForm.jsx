import React, { useState } from 'react'
import { PlusCircleFill } from 'react-bootstrap-icons';
import '../styles/TasksForm.css';
import { v4 as uuidv4 } from 'uuid';


const TasksForm = ({ tasks, setTasks }) => {

    const [inputTask, setInputTask] = useState('')

    const handleInput = (e) => {
        setInputTask(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        setTasks([...tasks, {
            id: uuidv4(),
            text: inputTask,
            completed: false
        }])
        setInputTask('')
    }

    return (
        <form className="form-tasks" onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-tasks-input"
                placeholder='Write a task'
                value={inputTask}
                onChange={(e) => handleInput(e)} />
            <button
                className="form-tasks-button"
                type='submit'>
                <PlusCircleFill />
            </button>
        </form>
    );
}

export default TasksForm;