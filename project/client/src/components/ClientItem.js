
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import ProjectItem from './ProjectItem';
import axios from 'axios';

const ClientItem = ({id, first_name, last_name, email, region, tweeter_username, onDelete}) => {
const [isOpen, setIsOpen] = useState(false);
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
const clientProjects = projects.map((project) => <ProjectItem
    key = {project.id}
    id = {project.id}
    name = {project.name}
    start_date = {project.start_date}
    end_date = {project.end_date}
    type = {project.type}
    />
)
return (
<div className="collapsible"> 
<tr className="toggle" onClick ={()=> setIsOpen(!isOpen)} >  
    <th scope="row">{id}</th>
    <td>{first_name}</td>
    <td>{last_name}</td>
    <td>{email}</td>
    <td>{region}</td>
    <td>{tweeter_username}</td>
    {/* <th>Edit | Delete</th> */}
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
            onClick={()=>{ onDelete(id)}}> Delete
        </button>
    </td>
{isOpen && 
<div>
        <ul>
             {clientProjects}
        </ul>
</div>}
</tr>
</div>

);
  
}


export default ClientItem;
