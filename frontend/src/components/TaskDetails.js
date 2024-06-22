import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios.get(`/api/tasks/${id}`)
      .then(response => setTask(response.data))
      .catch(error => console.error('Error fetching task:', error));
  }, [id]);

  if (!task) return <p>Loading...</p>;

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskDetails;
