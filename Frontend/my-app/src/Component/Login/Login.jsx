import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Import CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    // Validation (optional)
    if (!email || !password) {
      setErrorMessage('Please enter email and password');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/college/login', {
        email,
        password,
      });
      console.log('Login successful:', response.data);
 
      setErrorMessage(null); // Clear any previous error messages

      if (response.data.token) {  
        localStorage.setItem('token', response.data.token); 
        navigate('/');  
      } else {
        // Handle any other response conditions
        setErrorMessage('Login failed');
      }
    } catch (error) {
      const message = error.response?.data?.msg || 'Login failed';
      setErrorMessage(message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2>Login</h2>
        <form onSubmit={handleSubmitLogin}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;