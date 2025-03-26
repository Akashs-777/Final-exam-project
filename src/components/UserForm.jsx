// src/components/UserForm.jsx

import React from 'react';

function UserForm({
  name,
  setName,
  email,
  setEmail,
  organization,
  setOrganization,
  editingUserId,
  handleCreateUser,
  handleUpdateUser
}) {
  const isEditing = Boolean(editingUserId);

  return (
    <form onSubmit={isEditing ? handleUpdateUser : handleCreateUser}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px' }}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', marginBottom: '10px' }}
        />
      </div>
      <div>
        <label>Organization:</label>
        <input
          type="text"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          style={{ width: '100%', marginBottom: '10px' }}
        />
      </div>

      <button type="submit" style={{ width: '100%', padding: '10px' }}>
        {isEditing ? 'Update' : 'Save'}
      </button>
    </form>
  );
}

export default UserForm;
