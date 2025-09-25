import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/user')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users</h1>
      <UserForm setUsers={setUsers} />
      <ul>
        {users.map(u => <li key={u.id}>{u.name} - {u.role}</li>)}
      </ul>
    </div>
  );
}

export default App;

