import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 4em;
  margin-left: 8em;
  margin-right: 20em;
  margin-bottom: 5em;
`;
function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;
  return [year, month, day].join('-');
}
const EditProject = (props) => {

const { id } = props.match.params;

const [project, setProject] = useState ({
 
  name:'',
  start_date:'',
  end_date:'',
  assigned_to:'',
  type:'',
  project_stage:'',
  payment_received:'',
  payment_date:'',
  client_id:'',
  courses_number:0,
  project_value:0,
});
const [clients, setClients] = useState([]    
  );
  useEffect(() => {
    Promise.all([
      axios.get('/clients'),
      console.log(clients)
    ]).then((all) => {
      setClients(all[0].data);   
   });
   
  }, []);
useEffect (() => {
  const getProject = () => {  
  axios.get(`/projects/${id}/edit`)
   //axios.get(`/clients/${id}`)
   .then (
     res=> {
     //  console.log(res.data.name);
    //if (res.data.name) {
    if (res.data.id) {
    
      setProject(res.data);
      console.log(res.data);
    
    } else {
      alert('project not found');
    }
   });
 };
    getProject();
}, [id]);
const handleChange = (event) => {
 // console.log("handle change function");
  setProject ({
  ...project, // save the previous state
  [event.target.name] : event.target.value 
  });

 };
 const SaveProject= () => {
  axios.put(`/projects/${id}/edit`, project)
   .then (res => {
    //console.log("save project",res);
     console.log("props",props);
     props.history.push('/projects');
   }   
  );
  };
 const handleSubmit = (event)=> {
   event.preventDefault();
   if (project.end_date < project.start_date) {
    alert("End date must be greater than start date");
  } else {
    SaveProject();
  }
 };
 
console.log(project);
const onCancel = () => {

  props.history.push('/projects');
};
return (
<Wrapper>
<h2 className="display-7">Edit Project</h2>
<br/>
<form onSubmit = {handleSubmit}>
    
       {/* number */}
       {/* <div className ="form-group">
        <label htmlFor="number">Number</label>
        <input 
        type="text"
        className="form-control"
        name="number"
        placeholder="Enter project number"
        defaultValue={project.number}
        onChange={handleChange}
        required />
      </div> */}

      {/* name */}
      <div className ="form-group">
        <label htmlFor="name">Project Name</label>
        <input 
        type="text"
        className="form-control"
        name="name"
        placeholder="Enter project name"
        value={project.name}
        onChange={handleChange}
        required />
      </div>
      {/* start_date */}
      <div className ="form-group">
        <label htmlFor="start_date">Start Date</label>
        <input 
        type="date"
        className="form-control"
        name="start_date"
        placeholder="Start Date"
        value={formatDate(new Date(project.start_date))}
        onChange={handleChange}
        required />
      </div>

      {/* end_date */}
      <div className ="form-group">
        <label htmlFor="end_date">End Date</label>
        <input 
        type="date"
        className="form-control"
        name="end_date"
        placeholder="End Date"
        value={formatDate(new Date(project.end_date))}
        onChange={handleChange}
        required />
      </div>
      <div className ="form-group">
        <label htmlFor="assigned_to">Assigned To</label>
        <input 
        type="text"
        className="form-control"
        name="assigned_to"
        placeholder="Contractor Name"
        value={project.assigned_to}
        onChange={handleChange}
        required />
      </div>
      <div className ="form-group">
        <label htmlFor="type">Project Type</label>
        <select 
        type="text"
        className="form-control"
        name="type"
        value={project.type}
        onChange={handleChange}
        required >
          <option value="Select">Select....</option>
          <option value="Quality Review">Quality Review</option>
          <option value="Instructional Design">Instructional Design</option>
        </select>
      </div>
      <div className ="form-group">
        <label htmlFor="courses_number">Courses Number</label>
        <input 
        type="text"
        className="form-control"
        name="courses_number"
        //placeholder=""
        value={project.courses_number}
        onChange={handleChange}
         />
      </div>
      {/* client */}
      {/* <div className ="form-group">
        <label htmlFor="client">Client Name</label>
        <input 
        type="text"
        className="form-control"
        name="client"
        placeholder="Enter Client Name"
        defaultValue={project.client}
        onChange={handleChange}
        required />
      </div> */}

      <div className ="form-group">
        <label htmlFor="type">Project Stage</label>
        <select 
        type="text"
        className="form-control"
        name="project_stage"
        value={project.project_stage}
        onChange={handleChange}
        required >
          <option value="Select">Select....</option>
          <option value="Consulation">Consultation</option>
          <option value="Contract Sent">Contract Sent</option>
          <option value="Contract Signed">Contract Signed</option>
          <option value="Work In Progress">Work In Progress</option>
          <option value="Project Completed">Project Completed</option>
        </select>
      </div>
       {/* project value */}
       <div className ="form-group">
        <label htmlFor="project_value">Project Value (CAD$)</label>
        <input 
        type="text"
        className="form-control"
        name="project_value"
        //placeholder="Contractor Name"
        value={project.project_value}
        onChange={handleChange}
        />
      </div>
      <div className ="form-group">
        <label htmlFor="hst">HST (CAD$)</label>
        <input 
        type="text"
        className="form-control"
        name="hst"
        value  = {Math.round((project.project_value * 0.13) * 100) / 100}
        //placeholder="Contractor Name"
        //defaultValue={project.}
        onChange={handleChange}
        />
      </div>
      <div className ="form-group">
        <label htmlFor="total_price">Total Price (CAD$)</label>
        <input 
        type="number"
        className="form-control"
        name="total_price"
        //placeholder="Contractor Name"
        //defaultValue={project.project_value}
        value = {Math.round((parseFloat(project.project_value * 0.13) + parseFloat(project.project_value))* 100) / 100}
        onChange={handleChange}
        />
      </div>

      {/* payment recevied */}
      <div className ="form-group">
        <label htmlFor="payment_received">Payment Status</label>
        <select 
        type="text"
        className="form-control"
        name="payment_received"
        value={project.payment_received}
        onChange={handleChange}
        required >
          <option value="Select">Select....</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* payment_date */}
      <div className ="form-group">
        <label htmlFor="payment_date">Payment Date</label>
        <input 
        type="date"
        className="form-control"
        name="payment_date"
        placeholder="Payment Date"
        value={formatDate(new Date(project.payment_date))}
        onChange={handleChange}
         />
      </div>

      <div className ="form-group">
        <label htmlFor="first_name">Client Name</label>
        <div></div>
        {/* <select onChange={handleChange} name="client_id"
        type="text"
        className="form-control">
        <option value="Select">Select....</option>
      {clients.map(client => (
        <option
          key={client.id}
          value={client.id}
        >
          {client.first_name}
        </option>
      ))} */}


<select onChange={handleChange} name="client_id"
        type="text"
        className="form-control"
        value = {project.client_id}
         >
        <option value="Select">Select....</option>
      {clients.map(client => (
        <option
          key={client.id}
          value={client.id}
        >
          {client.first_name}
        </option>
      ))}

    </select>
      </div>      
      <button
      type="submit"
      variant="primary"
      className="btn btn-success"
      title="Submit">
        Submit
      </button>
      &nbsp; &nbsp; &nbsp; 
      <button
          type="cancel"
          variant="primary"
          className="btn btn-secondary"
          title="Cancel"
          onClick={()=>{ onCancel()}}> Cancel 
      </button>
  </form>
  </Wrapper>
);

}


export default withRouter(EditProject);