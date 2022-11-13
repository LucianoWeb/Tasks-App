import React, { useState } from 'react'
import Header from './components/Header';
import TasksForm from './components/TasksForm';
import TasksList from './components/TasksList';

const App = () => {

  const [tasks, setTasks] = useState([])   

  return (
    <div className="container">
      <Header />
      <TasksForm tasks ={tasks} setTasks={setTasks}/>
      <TasksList tasks = {tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;