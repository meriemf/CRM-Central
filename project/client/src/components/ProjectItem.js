import React from 'react';
import { Link } from 'react-router-dom'; 


const ProjectItem = ({id, name, number, start_date, end_date, assigned_to, type, payment_received, payment_date, client_id, onDelete}) => {
  return (
    <tr> 
        <th scope="row">{id}</th>
        <td>{name}</td>
        <td>{number}</td>
        <td>{start_date}</td>
        <td>{end_date}</td>
        <td>{assigned_to}</td>
        <td>{type}</td>
        <td>{client_id}</td>
        <td>{payment_received}</td>
        <td>{payment_date}</td>
        <td> 
        <Link to= {`/projects/${id}/edit`}
        
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
  );

}


export default ProjectItem;