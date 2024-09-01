import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'grade') setGrade(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user_id = 1; // Assume user_id is set after login
      await axios.post('https://myapp-3-m27w.onrender.com/api/students', { name, grade, user_id });
      navigate('/students');
    } catch (err) {
      console.error('Error adding student:', err);
    }
  };

  return (
    <div className="add-student">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleChange} required />
        </div>
        <div>
          <label>Grade:</label>
          <input type="text" name="grade" value={grade} onChange={handleChange} required />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
