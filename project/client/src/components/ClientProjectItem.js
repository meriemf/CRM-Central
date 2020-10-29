import React from 'react';
import moment from 'moment';



const ClientProjectItem = ({id, name, number, start_date, end_date, assigned_to, type, payment_received, payment_date, client_id}) => {
  return (
   
        <tr>
        <td className="col-2">{name}</td>
        <td className="col-4">{type}</td>
        <td className="col-6">{id}</td>
        <th className="col-8">{moment(start_date).format('DD/MM/YYYY')}</th>
        
       </tr>
   
    
  );

}


export default ClientProjectItem;