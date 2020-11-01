import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import ClientProjectItem from './ClientProjectItem'; 
import axios from 'axios';

const ClientItem = ({id, first_name, last_name, email,department,client_type,work_type, region,position_title, tweeter_username,initial_contact_made, onDelete}) => {
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
  const clientProjects = projects.map((project) =>
    <ClientProjectItem
    key = {project.id}
    id = {project.id}
    name = {project.name}
    start_date = {project.start_date}
    end_date = {project.end_date}
    type = {project.type}
    />
  )
  return (
    <>
      <tr className="accordion-toggle collapsed" id={`accordion${id}`} data-toggle="collapse" data-parent={`#accordion${id}`} href={`#collapseTwo${id}`}>
        {/* <td className="expand-button"></td> */}
        {/* <th scope="row">{id}</th> */}
        <td scope="row" style={{columnWidth: "20px"}}>{id}</td>
        <td style={{columnWidth: "70px"}}>{first_name}</td>
        <td style={{columnWidth: "70px"}}>{last_name}</td>
        <td style={{columnWidth: "100px"}}>{email}</td>
        <td style={{columnWidth: "80px"}}>{department}</td>
        <td style={{columnWidth: "80px"}}>{client_type}</td>
        <td style={{columnWidth: "100px"}}>{work_type}</td>
        <td style={{columnWidth: "80px"}}>{region}</td>
        <td style={{columnWidth: "80px"}}>{position_title}</td>
        <td style={{columnWidth: "100px"}}>{tweeter_username}</td>
        <td style={{columnWidth: "100px"}}>{initial_contact_made}</td>
        <td style={{columnWidth: "200px"}}> 
          <Link to= {`/clients/${id}/edit`}
          className="btn btn-outline-success btn-sm rounded-0"
          role="button"
          aria-pressed="true" 
          data-toggle="tooltip"
          data-placement="top"
          title="Edit"
          ><i class="fa fa-edit"></i>
          </Link>
          &nbsp;
          <button
          className="btn btn-outline-danger btn-sm rounded-0"
          data-toggle="tooltip"
          data-placement="top"
          title="Delete"
          type="button"
          onClick={()=>{if (window.confirm('Are you sure you wish to delete this client?')) onDelete(id)}}><i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
      
      <tr className="hide-table-padding">
        {/* <td></td> */}
        <td colSpan="8">
          <div id={`collapseTwo${id}`} className="collapse in p-3">
            <table>
              <thead>
              <tr>
                <th scope="col" style={{columnWidth: "200px"}}>Name</th>
                <th scope="col" style={{columnWidth: "200px"}}>Type</th>
                {/* <th scope="col">Client</th> */}
                <th scope="col" style={{columnWidth: "200px"}}>Start Date</th>
              </tr>
              </thead>
              <tbody style={{backgroundColor: "#ecede3"}}>
                {clientProjects}
              </tbody>
            </table>
          </div>
        </td>
      </tr>
    </>
  );


// <>
// <tr className="accordion-toggle collapsed" id={`accordion${id}`} data-toggle="collapse" data-parent={`#accordion${id}`} href={`#collapseTwo${id}`}>
//   {/* <td className="expand-button"></td> */}
//     <th scope="row">{id}</th>
//     <td>{first_name}</td>
//     <td>{last_name}</td>
//     <td>{email}</td>
//     <td>{department}</td>
//     <td>{client_type}</td>
//     <td>{work_type}</td>
//     <td>{region}</td>
//     <td>{position_title}</td>
//     <td>{tweeter_username}</td>
//     <td>{initial_contact_made}</td>
//     <td> 
//          <Link to= {`/clients/${id}/edit`}
//          className="btn btn-info mr-1"
//          role="button"
//          aria-pressed="true" 
//         > Edit
//         </Link>
//         <button
//         className="btn btn-danger mr-1"
//         type="button"
//         onClick={()=>{if (window.confirm('Are you sure you wish to delete this client?')) onDelete(id)}}> Delete
//         </button>
//     </td>
// </tr>
// <tr className="hide-table-padding">
// <td></td>
// <td colSpan="4">



// //  <tr classNameNameName="toggle" onClick ={()=> setIsOpen(!isOpen)}> 
// //     <th scope="row">{id}</th>
// //     <td>{first_name}</td>
// //     <td>{last_name}</td>
// //     <td>{email}</td>
// //     <td>{department}</td>
// //     <td>{client_type}</td>
// //     <td>{work_type}</td>
// //     <td>{region}</td>
// //     <td>{position_title}</td>
// //     <td>{tweeter_username}</td>
// //     <td>{initial_contact_made}</td>
    
// //      <td> 
// //          <Link to= {`/clients/${id}/edit`}
        
// //          classNameName="btn btn-success mr-1"
// //          role="button"
// //          aria-pressed="true" 
// //         > Edit
// //         </Link>
// //         <button
// //         classNameName="btn btn-success mr-1"
// //         type="button"
// //         onClick={()=>{if (window.confirm('Are you sure you wish to delete this client?')) onDelete(id)}}> Delete
// //         </button>
// //     </td>
// //         {isOpen && <div><ul> {clientProjects} </ul></div>}
// //   </tr>

 }
export default ClientItem;

