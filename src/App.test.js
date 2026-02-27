import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

const App = () => {
  // Requirement: State Management (using useState)
  const [user, setUser] = useState(null);

  // Requirement: Modern Syntax (Arrow Functions)
  const handleLogin = (username) => {
    setUser(username); // When user is set, Dashboard will show
  };

  const handleLogout = () => {
    setUser(null); // When null, LoginForm will show
  };

  return (
    <div className="App">
      {/* Requirement: Conditional Rendering (Auth Check) */}
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;