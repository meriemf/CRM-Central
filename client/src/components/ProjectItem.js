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
      <td scope="row"><i className="fas fa-tasks"></i></td>
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
          className="btn btn-outline-success btn-sm rounded-0"
          role="button"
          aria-pressed="true" 
          data-toggle="tooltip"
          data-placement="top"
          title="Edit"
          ><i className="fa fa-edit"></i>
        </Link>
        &nbsp;
        <button
          className="btn btn-outline-danger btn-sm rounded-0"
          data-toggle="tooltip"
          data-placement="top"
          title="Delete"
          type="button"
          onClick={()=>{if (window.confirm('Are you sure you wish to delete this project?')) onDelete(id)}}><i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  );

}


export default ProjectItem;