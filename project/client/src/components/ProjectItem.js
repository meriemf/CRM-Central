import React from 'react';
import moment from 'moment';



const ProjectItem = ({
  id, 
  name,  
  start_date, 
  end_date,
  assigned_to,
  type, 
  payment_received, 
  payment_date}) => {
  return (
    <tr> 
        <th scope="row">{id}</th>
        <td>{name}</td>
        {/* <td>{number}</td> */}
        <td>{moment(start_date).format('DD/MM/YYYY')}</td>
        <td>{moment(end_date).format('DD/MM/YYYY')}</td>
        <td>{assigned_to}</td>
        <td>{type}</td>
        <td>{payment_received}</td>
        <td>{moment(payment_date).format('DD/MM/YYYY')}</td>
        {/* <td>{client_id}</td> */}
        <th>Edit | Delete</th>
    </tr>
  );

}


export default ProjectItem;