import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import ClientProjectItem from './ClientProjectItem'; 
import axios from 'axios';
//import Collapsible from 'react-collapsible';

const ClientItem = ({id, first_name, last_name, email,department,client_type,work_type, region,position_title, tweeter_username,initial_contact_made, onDelete}) => {
//const [isOpen, setIsOpen] = useState(false);
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
<tr class="accordion-toggle collapsed" id={`accordion${id}`} data-toggle="collapse" data-parent={`#accordion${id}`} href={`#collapseTwo${id}`}>
    <td class="expand-button"></td>
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
<tr class="hide-table-padding">
<td></td>

<td colspan="4">

    <div id={`collapseTwo${id}`} class="collapse in p-3">
     {clientProjects}


    </div>

</td>
</tr>
</>








//  <tr classNameName="toggle" onClick ={()=> setIsOpen(!isOpen)}> 
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
        
//          className="btn btn-success mr-1"
//          role="button"
//          aria-pressed="true" 
//         > Edit
//         </Link>
//         <button
//         className="btn btn-success mr-1"
//         type="button"
//         onClick={()=>{if (window.confirm('Are you sure you wish to delete this client?')) onDelete(id)}}> Delete
//         </button>
//     </td>
//         {isOpen && <div><ul> {clientProjects} </ul></div>}
//   </tr>





);
  
}


export default ClientItem;

