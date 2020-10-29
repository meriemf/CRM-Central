// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ClientItem from './ClientItem';

// const ClientList = () => {

// //set default value of client to array
  
// const [clients, setClients] = useState([]);
// useEffect(() => {
//   Promise.all([
//     axios.get('/clients'),
//   ]).then((all) => {
//     setClients(all[0].data);   
//  });
// }, []);

// const getClients = async()=>{
//  const response = await axios.get(`/clients`);
//  console.log("console log of getClients", response); 
//  setClients(response.data);
// }
// const handleDelete =(id) => {
  
//   axios.delete(`/clients/${id}`)
//   .then( res=> {
//     console.log("res", res);
//     if(res.status !== 200) {
//       alert("Not able to delete client");
//     }
//     else {
//       alert("client deleted");
//       getClients();
//     }
//   })
// }

// const clients_list = clients.map((client) => <ClientItem
//   key = {client.id}
//   id = {client.id}
//   first_name = {client.first_name}
//   last_name = {client.last_name}
//   email = {client.email}
//   region = {client.region}
//   tweeter_username = {client.tweeter_username}
//   onDelete={handleDelete}
//   />
//  )


// return (
//   <table className="table table-striped">
//   <thead>
//     <tr>
//       <th scope="col">id</th>
//       <th scope="col">First Name</th>
//       <th scope="col">Last Name</th>
//       <th scope="col">Email</th>
//       <th scope="col">Region</th>
//       <th scope="col">Tweeter_Username</th>
//       <th scope="col">Actions</th>
//     </tr>
//   </thead>
  
//   <tbody>
//      {clients_list}
//   </tbody>
// </table>
// );

// }


// export default ClientList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientItem from './ClientItem';

const ClientList = () => {

//set default value of client to array
  
const [clients, setClients] = useState([]);
useEffect(() => {
  Promise.all([
    axios.get('/clients'),
  ]).then((all) => {
    setClients(all[0].data);   
 });
}, []);

const getClients = async()=>{
 const response = await axios.get(`/clients`);
 console.log("console log of getClients", response); 
 setClients(response.data);
}
const handleDelete =(id) => {
  console.log("handle delete", id);
  axios.put(`/clients/${id}`)
  .then( res=> {
    console.log("res", res);
    if(res.status !== 200) {
      alert("Not able to delete client");
    }
    else {
      getClients();
      alert("client deleted");
      
    }
  })
}

const clients_list = clients.map((client) => <ClientItem
  key = {client.id}
  id = {client.id}
  first_name = {client.first_name}
  last_name = {client.last_name}
  email = {client.email}
  department = {client.department}
  client_type ={client.client_type}
  work_type ={client.work_type}
  region = {client.region}
  position_title = {client.position_title}
  tweeter_username = {client.tweeter_username}
  initial_contact_made ={client.initial_contact_made}
  onDelete={handleDelete}
  />
 )


return (
<table className="table table-striped " >
  <thead className = "accordion">
    <div>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Department</th>
      <th scope="col">Client Type</th>
      <th scope="col">Work Category</th>
      <th scope="col">Region</th>
      <th scope="col">Position Title</th>
      <th scope="col">Tweeter_Username</th>
      <th scope="col">Initial Contact Done</th>
      <th scope="col">Actions</th>
    </tr>
    </div>
  </thead>
  <tbody>
     {clients_list}
  </tbody>
</table>
);

}


export default ClientList;