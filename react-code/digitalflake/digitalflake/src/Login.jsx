import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // Import your custom CSS
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleForgotPasswordClick = () => {
    navigate('/forgetpassword');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8010/login', {
        username:email,
        password,
      });

      console.log('Login successful:', response.data);
      navigate("/homepage");
      
    } catch (error) {
      console.error('Login failed:', error.response.data);
    }
  };

  return (
    <div className="container mt-5" style={{ marginRight: '400px' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Login Page</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    UserName:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
              <div className="mt-3">
      <button onClick={handleForgotPasswordClick}>Forgot Password?</button>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
