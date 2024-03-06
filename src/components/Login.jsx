import React from 'react';
import '../components/Login.css';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



    const handleSubmit = async (e) => {
        console.log({email,password})
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8080/api/auth/user/login', { email, password });
          console.log('Login successful:', response.data);
        } catch (error) {
          console.error('Login failed:', error.response.data);
        }
      };
    return (
        
            <form onSubmit={handleSubmit}>
            <div className="login">
                <div className="container">
                    <h1>Log in</h1>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}required />
                    <input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} required /><br />

                    <a href="#">Forgot password?</a>
                    <button type='submit'>log in</button>
                    
                </div>
            </div>
            </form>
           
        
    );
};

export default Login;