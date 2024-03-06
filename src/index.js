import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserRegistrationForm from './UserRegistartion';
import Login from './components/Login';
// import Register from './components/Register';
import Login1 from './Login1.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/* <App></App> */}
    <UserRegistrationForm></UserRegistrationForm>
    {/* <Login></Login> */}
    {/* <Register /> */}
    {/* <Login1></Login1> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
