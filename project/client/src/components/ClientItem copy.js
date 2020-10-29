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
<div className="accordion" id="accordionExample">
  {/* <div className="card"> */}
    <div className="table table-striped" id="headingOne" >
      <h2 className="mb-0">
        <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <tr className="toggle " > 
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
                                
                                className="btn btn-info mr-1 "
                                role="button"
                                aria-pressed="true" 
                                > Edit
                                </Link>
                                <button
                                className="btn btn-danger mr-1"
                                type="button"
                                onClick={()=>{if (window.confirm('Are you sure you wish to delete this client?')) onDelete(id)}}> Delete
                                </button>
                            </td>
                                {/* {isOpen && <div><ul> {clientProjects} </ul>
                            </div>} */}
                        </tr>
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
         {clientProjects}
      </div>
    </div>
  {/* </div> */}
  
</div>



/* <tr classNameName="toggle" onClick ={()=> setIsOpen(!isOpen)}> 
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
    {/* <th>Edit | Delete</th> */
    
//     <td> 
//         <Link to= {`/clients/${id}/edit`}
        
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
//         {isOpen && <div><ul> {clientProjects} </ul>
// </div>}
//</tr>





);
  
}


export default ClientItem;

