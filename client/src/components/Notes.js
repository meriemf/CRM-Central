import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteItem from './NoteItem';
import '../css/Notes.css';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 6em;
  margin-left: 8em;
  margin-right: 2em;
  margin-bottom: 5em;
`;

const Notes = () => {

//set default value of client to array  
const [clients, setClients] = useState([]);
useEffect(() => {
  Promise.all([
    axios.get('/clients'),
  ]).then((all) => {
    setClients(all[0].data);   
 });
}, []);


 const clients_list = clients.map((client) => 
 
 <NoteItem
 key = {client.id}
 id = {client.id}
 first_name = {client.first_name}
 last_name = {client.last_name}
 email = {client.email}
 department = {client.department}
 client_type ={client.client_type}
 />
 )
 
return (
  <Wrapper>
  <h2 className="display-7">Clients Notes</h2> 
  <table className="table table-striped">
  <thead text-align="left">
    <tr>
       <th scope="col">id</th>
       <th scope="col">First Name</th>
       <th scope="col">Last Name</th>
       <th scope="col">Email</th>
       <th scope="col">Department</th>
       <th scope="col">Client Type</th>
    </tr>
  </thead>
  <tbody text-align="left">
     {clients_list}
  </tbody>
</table>
</Wrapper>
);

}


export default Notes;