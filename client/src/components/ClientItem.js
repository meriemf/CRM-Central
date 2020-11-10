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
      setProjects(all[0].data);   
   });
  }, []);
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
        <td scope="row" style={{columnWidth: "20px"}}><i className="fas fa-user"></i></td>
        <td style={{columnWidth: "70px"}}>{first_name}</td>
        <td style={{columnWidth: "70px"}}>{last_name}</td>
        <td style={{columnWidth: "200px"}}>{email}</td>
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
          ><i className="fa fa-edit"></i>
          </Link>
          &nbsp;
          <button
          className="btn btn-outline-danger btn-sm rounded-0"
          data-toggle="tooltip"
          data-placement="top"
          title="Delete"
          type="button"
          onClick={()=>{if (window.confirm('Are you sure you wish to delete this client?')) onDelete(id)}}><i className="fa fa-trash"></i>
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
                <th scope="col" style={{columnWidth: "200px"}}>Start Date</th>
                <th scope="col" style={{columnWidth: "200px"}}>End Date</th>
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
 }
export default ClientItem;

