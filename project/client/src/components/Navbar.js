import React from 'react';

const Navbar = () => {

  return (
    
    // <nav className = "navbar navbar-light bg-dark ">
    
    //   <a className = "navbar-brand" href="https://www.elmacademicconsultants.com/">eLM Education Consultants </a>
    //   <button className = "navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className = "navbar-toggler-icon"></span>
    //   </button>
    //   <div className = "collapse navbar-collapse" id="navbarText">
    //     <span className = "navbar-text">
    //       <ul className = "navbar-nav mr-auto">
    //         <li className = "nav-item active">
    //           <a className = "nav-link" href="#">Dashboard  <span className="sr-only">(current)</span></a>
    //         </li>
    //         <li className = "nav-item">
    //           <a className = "nav-link" href="/">Home</a>
    //         </li>
    //         <li className = "nav-item">
    //           <a className = "nav-link" href="/clients">Clients</a>
    //         </li>
    //         <li className = "nav-item">
    //           <a className = "nav-link" href="/projects">Projects</a>
    //         </li>
    //         <li className = "nav-item">
    //           <a className = "nav-link" href="#">Invoices</a>
    //         </li>
    //       </ul>
    //     </span>
    //   </div> 
    // </nav>

/* <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-link" href="#">Features</a>
      <a class="nav-link" href="#">Pricing</a>
      <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
    </div>
  </div>
</nav> */
  <nav className = "navbar navbar-dark bg-dark">
   
 <a className = "navbar-brand" href="https://www.elmacademicconsultants.com/">eLM Education Consultants </a>
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
        <a className = "nav-link" href="/">Home</a>
      </li>
      <li className = "nav-item">
        <a className = "nav-link" href="/clients">Clients</a>
      </li>
      <li className = "nav-item">
        <a className = "nav-link" href="/projects">Projects</a>
      </li>
      <li className = "nav-item">
        <a className = "nav-link" href="/invoices">Invoices</a>
      </li>
    </ul>
    </span>
  </div> 
  </nav>
  );
};


export default Navbar;