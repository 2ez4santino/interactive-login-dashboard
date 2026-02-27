import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Requirement: Stop page refresh
    
    // Auth Check: Conditional Logic
    if (username === 'alfonso' && password === 'password123') {
      onLogin(username);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="card">
      <h2>Project Gatekeeper</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username</label>
          <input 
            type="text" 
            // Requirement: Template Literals for Feedback
            className={`input ${error ? 'border-red' : 'border-gray'}`}
            value={username} 
            onChange={(e) => setUsername(e.target.value)} // Requirement: Controlled Component
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            className={`input ${error ? 'border-red' : 'border-gray'}`}
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        {error && <p className="error-message">Invalid credentials</p>}
        <button type="submit" className="btn-primary">Log in</button>
      </form>
    </div>
  );
};

export default LoginForm;