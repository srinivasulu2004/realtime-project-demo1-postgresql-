import React, { useState } from 'react';
import axios from 'axios';

function UserForm({ setUsers }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/user', { name, role });
      setUsers(prev => [...prev, res.data]);
      setName('');
      setRole('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <input value={role} onChange={e => setRole(e.target.value)} placeholder="Role" required />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;

