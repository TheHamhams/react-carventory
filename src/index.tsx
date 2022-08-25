import React from 'react';
import ReactDOM from 'react-dom/';
import './index.css';
import { Home, NavBar, Profile, Cars, SignIn } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import {store} from './redux/store'

let tempUsername = 'Temp Username' 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Routes>
      
        <Route path='/' element={[<NavBar />, <Home />]} />

        <Route path='/profile' element={[<NavBar />, <Profile username={tempUsername}/>]} />

        <Route path='/cars' element={[<NavBar />, <Cars />]} />

        <Route path='/signin' element={[<NavBar />, <SignIn />]} />

      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


