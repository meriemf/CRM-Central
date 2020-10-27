import React from 'react';
import { Link } from 'react-router-dom'; 

const ClientItem = ({id, first_name, last_name, email, region, tweeter_username, onDelete}) => {
return (
<tr> 
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
        </button></td>

</tr>
);
  
}


export default ClientItem;
