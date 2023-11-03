import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const history = useHistory();

  const handleSignup = () => {
    history.push('/signup');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic here
    history.push('/home');
  };

  return (
    <div className='bg-secondary p-2 text-dark bg-opacity-10 main'>
      <div>.</div>
      <div className='title'>
        <h1>WELCOME TO NEWSWAVE</h1>
        <div>If you're not registered yet, please <button style={{paddingBottom: 9, width: 85, height: 41}} type='button' className="btn btn-link" onClick={handleSignup}>Sign Up</button> here</div>
      </div>
      <form onSubmit={handleSubmit} className="p-4 container bg-dark p-2 text-dark bg-opacity-10" style={{width: '40rem'}}>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <hr/>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <hr/>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <div>.</div>
    </div>
  );
};

export default LoginForm;
