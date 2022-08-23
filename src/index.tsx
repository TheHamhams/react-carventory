import React from 'react';
import ReactDOM from 'react-dom/';
import './index.css';
import { Home, NavBar, Profile, Cars } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
      
        <Route path='/' element={[<NavBar />, <Home />]} />

        <Route path='/profile' element={[<NavBar />, <Profile />]} />

        <Route path='/cars' element={[<NavBar />, <Cars />]} />

      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);


