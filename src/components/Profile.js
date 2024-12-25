// copilot:ignore
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);

        }
    })

  return (
    <div>
      {users.map((user, index) => (
        <div key={index} style={{ backgroundColor: '#e2e8f0', padding: '20px', borderRadius: '8px' }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{user.name}</h1>
          <p style={{ fontSize: '1rem', color: '#333' }}>{user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default Profile