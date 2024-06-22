import React from 'react';
import { Link } from 'react-router-dom';

const Task = ({ task }) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <Link to={`/tasks/${task.id}`}>View Details</Link>
      <Link to={`/edit/${task.id}`}>Edit</Link>
      <button>Delete</button>
    </div>
  );
};

export default Task;
