import React from 'react';



const ProjectItem = ({id, name, number, start_date, end_date, assigned_to, type, payment_received, payment_date, client_id}) => {
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
        <th>Edit | Delete</th>
    </tr>
  );

}


export default ProjectItem;