// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import  Navbar  from './components/Navbar';
//import  ClientList  from './components/ClientList';
//import AddClient from './components/AddClient';

import Routes from './components/Routes';


import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import themeDefault from "./themeDefault";


function App() {
  return (

  <Router>
    <MuiThemeProvider theme={themeDefault}>
      <div className="container-fluid">       
       <Navbar />
       <Routes />
      </div>
    </MuiThemeProvider>
  </Router>

    
  );
}

export default App;
