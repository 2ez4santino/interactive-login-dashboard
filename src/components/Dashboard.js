import React from 'react';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="card">
      <h1>Welcome, {user}!</h1>
      <p>Success! You are logged in.</p>
      <button onClick={onLogout} className="btn-primary" style={{backgroundColor: '#e74c3c'}}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;