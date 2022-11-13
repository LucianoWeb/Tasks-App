import React from 'react';
import '../styles/TaskList.css';
import Task from './Task';

const TasksList = ({ tasks, setTasks }) => {

    const toggleCompleted = (id) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed }
            }
            return task;
        }))
    }
    const changeTask = (id, newText) => {
        setTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, text: newText }
            }
            return task;
        }))
    }
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => {
            if (task.id !== id) {
                return task
            }
            return;
        }))
    }
    return (
        <ul className="tasks-list">
            {tasks.length > 0 ? tasks.map((task) => {
            
                 return <Task key={task.id} toggleCompleted={toggleCompleted} task={task} deleteTask={deleteTask} changeTask={changeTask} />
            }
            )
                :
                <div className="tasks-list-msg">~ There's not any task added ~</div>
            }
        </ul>
    );
}
export default TasksList;