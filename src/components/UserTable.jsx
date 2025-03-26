// src/components/UserTable.jsx

import React from 'react';

function UserTable({ users, handleEditClick, handleDeleteUser }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>ID</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Email</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Org</th>
          <th style={{ border: '1px solid #ccc', padding: '8px' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            {/* Only display first 5 characters of the MongoDB ID */}
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>
              {user._id.substring(0, 5)}
            </td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{user.name}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{user.email}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>{user.organization}</td>
            <td style={{ border: '1px solid #ccc', padding: '8px' }}>
              <button onClick={() => handleEditClick(user)} style={{ marginRight: '5px' }}>
                Edit
              </button>
              <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
