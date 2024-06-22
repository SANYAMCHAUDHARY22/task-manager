import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import EditTask from './components/EditTask';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
        <Route path="/edit/:id" element={<EditTask />} />
      </Routes>
    </div>
  );
};

export default App;
