import React from 'react';



const Navbar = () => {

  return (
    
  <nav className = "navbar navbar-dark bg-dark">
   
 <a className = "navbar-brand" href="#">eLM Education Consultants </a>
   <button className = "navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className = "navbar-toggler-icon"></span>
   </button>
   <div className = "collapse navbar-collapse" id="navbarText">
    <span className = "navbar-text">
    <ul className = "navbar-nav mr-auto">

      <li className = "nav-item active">
        <a className = "nav-link" href="#">Dashboard  <span className="sr-only">(current)</span></a>
      </li>
      <li className = "nav-item">
        <a className = "nav-link" href="#">Home</a>
      </li>
      <li className = "nav-item">
        <a className = "nav-link" href="#">Clients</a>
      </li>
      <li className = "nav-item">
        <a className = "nav-link" href="#">Projects</a>
      </li>
      <li className = "nav-item">
        <a className = "nav-link" href="#">Invoices</a>
      </li>
    </ul>
    </span>
  </div> 
  </nav>
  );
}


export default Navbar;

