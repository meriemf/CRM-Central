import React from 'react';
import { Link } from 'react-router-dom'; 

const ClientItem = ({id, first_name, last_name, email,department,client_type,work_type, region,position_title, tweeter_username,initial_contact_made, onDelete}) => {
return (
<tr> 
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
        </button></td>

</tr>
);
  
}


export default ClientItem;
