import React from 'react';
import moment from 'moment';
import{ Link } from 'react-router-dom';


const ProjectItem = ({
  id, 
  name,  
  start_date, 
  end_date,
  assigned_to,
  type, 
  project_stage,
  payment_received, 
  payment_date,
  onDelete
   
 }) => {
  return (
    <tr> 
      <td scope="row">{id}</td>
      <td>{name}</td>
      {/* <td>{number}</td> */}
      <td>{moment(start_date).format('DD/MM/YYYY')}</td>
      <td>{moment(end_date).format('DD/MM/YYYY')}</td>
      <td>{assigned_to}</td>
      <td>{type}</td>
      <td>{project_stage}</td>
      <td>{payment_received}</td>
      <td>{moment(payment_date).format('DD/MM/YYYY')}</td>
      <td> 
        <Link to= {`/projects/${id}/edit`}
            className="btn btn-success"
            role="button"
            aria-pressed="true" 
            > Edit          
        </Link>
        <button
            className="btn btn-secondary"
            type="button"
            onClick={()=>{if (window.confirm('Are you sure you wish to delete this project?')) onDelete(id)}}> Delete
        </button>
      </td>
    </tr>
  );

}


export default ProjectItem;




