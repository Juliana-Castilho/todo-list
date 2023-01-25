import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import './App.css';
import Divider from './components/Divider/Divider';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    },
    
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
      );

      setTasks(data);
    };
    fetchTasks();
  }, [])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [ 
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    
    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  const InitialPage = () => {
    return (
      <>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Divider />
        <div className='incomplete-task'>
          <h3>A fazer</h3>
        </div>
        <Tasks 
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
        <Divider />
        <div className='incomplete-task'>
          <h3>Concluído</h3>
        </div>
        <Tasks 
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      </>
    )
  }

  return(
    <div className='container'>
      <Header />
      <Router>
        <Routes>
        <Route
          path="/"
          exact element={
            <InitialPage />
          }
        />
        <Route path="/:taskTitle" exact element={
            <TaskDetails />
          }
        />
        </Routes>
      </Router>
    </div>
  );
};

export default App;