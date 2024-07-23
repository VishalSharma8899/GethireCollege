import React, { useState } from 'react';
import axios from 'axios';
import './style.css'; // Import CSS
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // Add email state
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  
  const handleSubmitRegistration = async (e) => {
    e.preventDefault();

    // Validation (optional)
    if (!username || !password || !email) {
      setErrorMessage('Please enter username, email, and password');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/college/signup', {
        username,
        email,
        password,
      });

      console.log( 'register', response.data);

      setUsername('');
      setEmail(''); // Clear email input
      setPassword('');
      setErrorMessage(null); // Clear error message
      // Redirect to login page or display success message
    } catch (error) {
      console.error('Registration error:', error.response.data);
      setErrorMessage(error.response.data.msg || 'Registration failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2>Registration</h2>
        <form onSubmit={handleSubmitRegistration}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Use setEmail correctly
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>

      
    </div>
  );
};

export default Login;
