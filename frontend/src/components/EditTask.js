import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditTask = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    axios.get(`/api/tasks/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setDueDate(response.data.dueDate);
      })
      .catch(error => console.error('Error fetching task:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = { title, description, dueDate };
    axios.put(`/api/tasks/${id}`, updatedTask)
      .then(response => console.log('Task updated:', response.data))
      .catch(error => console.error('Error updating task:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Task</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTask;
