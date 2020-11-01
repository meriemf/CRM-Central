import React from 'react';
import { Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { 
    background-color: #362F07;
    overflow: hidden;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
   }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    &:hover { color: white; }
  }
  .form-right {
    position: fixed;
    right: 5%;
  }
`;
function NavigationBar () {
  return (
  <Styles>
    <Navbar>
      <Navbar.Brand href="https://www.elmacademicconsultants.com/">eLM Academic Consultants</Navbar.Brand>
      <Form className="form-right">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
    </Navbar>
  </Styles>
  )
}

export default NavigationBar