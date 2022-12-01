import React from 'react'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import { useEffect } from 'react';



const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/Login');
  }, [navigate]);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );

};

export default App;
