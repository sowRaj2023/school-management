import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTeacher = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'subject') setSubject(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user_id = 1; // Assume user_id is set after login
      await axios.post('https://myapp-3-m27w.onrender.com/api/teachers', { name, subject, user_id });
      navigate('/teachers');
    } catch (err) {
      console.error('Error adding teacher:', err);
    }
  };

  return (
    <div className="add-teacher">
      <h2>Add Teacher</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleChange} required />
        </div>
        <div>
          <label>Subject:</label>
          <input type="text" name="subject" value={subject} onChange={handleChange} required />
        </div>
        <button type="submit">Add Teacher</button>
      </form>
    </div>
  );
};

export default AddTeacher;
