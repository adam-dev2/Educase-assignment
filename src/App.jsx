import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
