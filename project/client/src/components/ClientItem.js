import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import ClientProjectItem from './ClientProjectItem'; 
import axios from 'axios';

const ClientItem = ({id, first_name, last_name, email,department,client_type,work_type, region,position_title, tweeter_username,initial_contact_made, onDelete}) => {
const [projects, setProjects] = useState([]);
useEffect(() => {
    Promise.all([
      axios.get(`/clients/${id}/projects`),
    ]).then((all) => {
      console.log(all);
      setProjects(all[0].data);   
   });
  }, []);
  console.log("projects", projects);
  const clientProjects = projects.map((project) => <ClientProjectItem
      key = {project.id}
      id = {project.id}
      name = {project.name}
      start_date = {project.start_date}
      end_date = {project.end_date}
      type = {project.type}
      />
  )
return (


<>
<tr className="accordion-toggle collapsed" id={`accordion${id}`} data-toggle="collapse" data-parent={`#accordion${id}`} href={`#collapseTwo${id}`}>
<td className="expand-button"></td>
    <th scope="row">{id}</th>
    <td>{first_name}</td>
    <td>{last_name}</td>
    <td>{email}</td>
    <td>{department}</td>
    <td>{client_type}</td>
    <td>{work_type}</td>
    <td>{region}</td>
    <td>{position_title}</td>
    <td>{tweeter_username}</td>
    <td>{initial_contact_made}</td>
    <td> 
         <Link to= {`/clients/${id}/edit`}
         className="btn btn-success mr-1"
         role="button"
         aria-pressed="true" 
        > Edit
        </Link>
        <button
        className="btn btn-success mr-1"
        type="button"
        onClick={()=>{if (window.confirm('Are you sure you wish to delete this client?')) onDelete(id)}}> Delete
        </button>
    </td>
</tr>
<tr className="hide-table-padding">
<td></td>

<td colSpan="4">

  <div id={`collapseTwo${id}`} className="collapse in p-3">
    <table>
      <thead>
      <tr>
       <th scope="col">Name</th>
       <th scope="col">Type</th>
       <th scope="col">Client</th>
       <th scope="col">start_date</th>
    </tr>
      </thead>
      <tbody>
       
     {clientProjects}
      </tbody>
    </table>
  </div>

</td>
</tr>
</>








//  <tr classNameNameName="toggle" onClick ={()=> setIsOpen(!isOpen)}> 
//     <th scope="row">{id}</th>
//     <td>{first_name}</td>
//     <td>{last_name}</td>
//     <td>{email}</td>
//     <td>{department}</td>
//     <td>{client_type}</td>
//     <td>{work_type}</td>
//     <td>{region}</td>
//     <td>{position_title}</td>
//     <td>{tweeter_username}</td>
//     <td>{initial_contact_made}</td>
    
//      <td> 
//          <Link to= {`/clients/${id}/edit`}
        
//          classNameName="btn btn-success mr-1"
//          role="button"
//          aria-pressed="true" 
//         > Edit
//         </Link>
//         <button
//         classNameName="btn btn-success mr-1"
//         type="button"
//         onClick={()=>{if (window.confirm('Are you sure you wish to delete this client?')) onDelete(id)}}> Delete
//         </button>
//     </td>
//         {isOpen && <div><ul> {clientProjects} </ul></div>}
//   </tr>





);
  
}


export default ClientItem;