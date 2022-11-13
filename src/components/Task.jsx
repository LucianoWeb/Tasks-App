import React, { useState } from 'react';
import { CheckCircleFill, CircleFill, PencilSquare, TrashFill } from 'react-bootstrap-icons';
import '../styles/Task.css'

const Task = ({ task, changeTask, toggleCompleted , deleteTask}) => {

    const [editTask, setEditTask] = useState(false);
    const [newTask, setNewTask] = useState(task.text);

    const handleSubmit = (e) =>{
        e.preventDefault();
        changeTask(task.id, newTask)
        setEditTask(false);
    }
    
    return (
        <li className='task'>

            <div className='task-flex'>
              
                {task.completed ?  <CheckCircleFill className='task-icon' onClick={()=> toggleCompleted(task.id)}/> : <CircleFill className='task-icon' onClick={()=> toggleCompleted(task.id)}/> }
         
                {editTask ?
                    <form className='form-edit-task' onSubmit={handleSubmit}>
                        <input type="text" className="form-edit-task-input" 
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        />
                        <button type='submit' className='form-edit-task-button'>Update</button>
                    </form>
                    : 
                    task.text
                }
            </div>
            <div className="task-icons-group">
                <PencilSquare className='task-icon' onClick={()=> setEditTask(!editTask)} />
                <TrashFill className='task-icon' onClick={() => deleteTask(task.id)} />
            </div>
        </li>
    );
}

export default Task;