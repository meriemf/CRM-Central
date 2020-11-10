import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectItem from './ProjectItem';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 6em;
  margin-left: 8em;
  margin-right: 2em;
  margin-bottom: 5em;
`;

const ProjectList = () => {

  //set default value of client to array
    
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('/projects'),
      ]).then((all) => {
      setProjects(all[0].data);
    });
  }, []);

  const getProjects = async()=>{
    const response = await axios.get(`/projects`);
    setProjects(response.data);
   }
  const handleDelete =(id) => {
  
    axios.delete(`/projects/${id}`)
    .then( res=> {
      if(res.status !== 200) {
        alert("Not able to delete project");
      }
      else {
        getProjects();
      }
    })
  }
  const projects_list = projects.map((project) =>
    
    <ProjectItem
    key = {project.id}
    id = {project.id}
    name = {project.name}
    start_date = {project.start_date}
    end_date = {project.end_date}
    assigned_to = {project.assigned_to}
    type = {project.type}
    project_stage = {project.project_stage}
    payment_received = {project.payment_received}
    payment_date = {project.payment_date}
    onDelete={handleDelete}
    />
  )


  return (
    <Wrapper>
    <h2 className="display-7">Projects</h2>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Number</th>
          <th scope="col">Project Name</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
          <th scope="col">Assigned To</th>
          <th scope="col">Type</th>
          <th scope="col">Project Stage</th>
          <th scope="col">Payment Recevied</th>
          <th scope="col">Payment Date</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      
      <tbody style={{backgroundColor: "#ecede3"}}>
        {projects_list}
      </tbody>
    </table>
    </Wrapper>
  );

}


export default ProjectList;