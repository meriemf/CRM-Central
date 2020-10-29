import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientItem from './ClientItem';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 4em;
  margin-left: 5em;
  // margin-right: 5em;
  margin-bottom: 5em;
`;

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
  console.log(id);
  axios.delete(`/clients/${id}`)
  .then( res=> {
    console.log("delete res", res);
    if(res.status !== 200) {
      alert("Not able to delete client");
    }
    else {
      alert("client deleted");
      getClients();
    }
  })
};
 const clients_list = clients.map((client) => 
 
 <ClientItem
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
/*<div className="table-responsive">*/
  <Wrapper>
  <h1 className="display-7">Clients</h1> 
  <table className="table table-striped">
  <thead>
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
  </thead>
  <tbody>
     {clients_list}
  </tbody>
</table>
</Wrapper>
/*</div>*/
);

}


 export default ClientList;
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
//   console.log("handle delete", id);
//   axios.put(`/clients/${id}`)
//   .then( res=> {
//     console.log("res", res);
//     if(res.status !== 200) {
//       alert("Not able to delete client");
//     }
//     else {
//       getClients();
//       alert("client deleted");
      
//     }
//   })
// }

// const clients_list = clients.map((client) => 

// <div id="accordion">
//   <div class="card">
//     <div class="card-header" id="headingOne">
//       <h5 class="mb-0">
//         <button class="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                   <ClientItem
//             key = {client.id}
//             id = {client.id}
//             first_name = {client.first_name}
//             last_name = {client.last_name}
//             email = {client.email}
//             department = {client.department}
//             client_type ={client.client_type}
//             work_type ={client.work_type}
//             region = {client.region}
//             position_title = {client.position_title}
//             tweeter_username = {client.tweeter_username}
//             initial_contact_made ={client.initial_contact_made}
//             onDelete={handleDelete}
//             />
//         </button>
//       </h5>
//     </div>

//     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
//       <div class="card-body">
//         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//       </div>
//     </div>
//   </div>
// </div>


//  )


// return (
// <table className="table table-striped " >
//   <thead className = "accordion">
//     <div>
//     <tr>
//       <th scope="col">id</th>
//       <th scope="col">First Name</th>
//       <th scope="col">Last Name</th>
//       <th scope="col">Email</th>
//       <th scope="col">Department</th>
//       <th scope="col">Client Type</th>
//       <th scope="col">Work Category</th>
//       <th scope="col">Region</th>
//       <th scope="col">Position Title</th>
//       <th scope="col">Tweeter_Username</th>
//       <th scope="col">Initial Contact Done</th>
//       <th scope="col">Actions</th>
//     </tr>
//     </div>
//   </thead>
//   <tbody>
//      {clients_list}
//   </tbody>
// </table>
// );

// }


// export default ClientList;