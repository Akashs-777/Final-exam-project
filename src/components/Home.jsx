// src/components/Home.jsx

import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import UserTable from './UserTable';

function Home() {
  // Renamed state variables to avoid conflicts with globals.
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userOrganization, setUserOrganization] = useState('');
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [editingUserId, setEditingUserId] = useState(null);

  // Helper function to update both state and localStorage
  const updateUsers = (newUsers) => {
    setUsers(newUsers);
    localStorage.setItem('users', JSON.stringify(newUsers));
  };

  // Create a new user (locally)
  const handleCreateUser = (e) => {
    e.preventDefault();
    const newUser = {
      _id: Date.now().toString(), // using timestamp as a simple id
      name: userName,
      email: userEmail,
      organization: userOrganization,
    };
    updateUsers([...users, newUser]);
    // Clear form fields
    setUserName('');
    setUserEmail('');
    setUserOrganization('');
  };

  // Edit: load user's data into the form for updating
  const handleEditClick = (user) => {
    setEditingUserId(user._id);
    setUserName(user.name);
    setUserEmail(user.email);
    setUserOrganization(user.organization);
  };

  // Update an existing user
  const handleUpdateUser = (e) => {
    e.preventDefault();
    const updatedUsers = users.map((user) =>
      user._id === editingUserId
        ? { ...user, name: userName, email: userEmail, organization: userOrganization }
        : user
    );
    updateUsers(updatedUsers);
    // Clear form and reset editing state
    setUserName('');
    setUserEmail('');
    setUserOrganization('');
    setEditingUserId(null);
  };

  // Delete a user
  const handleDeleteUser = (userId) => {
    const filteredUsers = users.filter((user) => user._id !== userId);
    updateUsers(filteredUsers);
  };

  return (
    <div style={{ width: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Final Exam - Your Name</h1>
      <UserForm
        name={userName}
        setName={setUserName}
        email={userEmail}
        setEmail={setUserEmail}
        organization={userOrganization}
        setOrganization={setUserOrganization}
        editingUserId={editingUserId}
        handleCreateUser={handleCreateUser}
        handleUpdateUser={handleUpdateUser}
      />

      <h2 style={{ marginTop: '30px' }}>User List - Your Name - SID</h2>
      <UserTable
        users={users}
        handleEditClick={handleEditClick}
        handleDeleteUser={handleDeleteUser}
      />
    </div>
  );
}

export default Home;
