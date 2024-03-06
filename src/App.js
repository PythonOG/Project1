import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Login from './components/Login.jsx';
// import Register from './components/Register.jsx';
import Login1 from './Login1';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login1" component={Login1} />
        <Route path="/login" component={Login} /> 
      </Routes>
    </Router>
  );
};

export default App;
