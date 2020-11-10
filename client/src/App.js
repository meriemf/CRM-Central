

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
//import  Navbar  from './components/Navbar';
import NavigationBar from './components/NavigationBar'
import Sidebar from './components/Sidebar';

import Routes from './components/Routes';

function App() {
  return (

  <Router>
      <div className="container-fluid" style = {{padding:0}} >       
       <NavigationBar />
       <Sidebar />
       <Routes />
      </div>
  </Router>

    
  );
}

export default App;
