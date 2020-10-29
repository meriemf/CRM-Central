import React , { useState, useEffect} from 'react';
import axios from 'axios';
import ClientList from './ClientList';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 5em;
  margin-left: 7em;
  margin-right: 20em;
  margin-bottom: 5em;
`;

const AddProject = (props) => {
  
  const [project, setProject] = useState({
    name:'',
    // number:'',
    start_date:'',
    end_date:'',
    assigned_to:'',
    type:'',
    project_stage:'',
    payment_received:'',
    payment_date:'',
    // client_id:''
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


  const getClients = async()=>{
    const response = await axios.get(`/clients`);
    console.log("console log of getClients", response); 
    setClients(response.data);
   }
  
  const handleChange = (e) => {
    console.log([e.target.name], e.target.value)
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    //Submit Project
    console.log(project);
    submitProject();
  }

  const submitProject=()=>{ 
    axios.post(`/projects`, project)
    .then((res)=>{
    alert("Project Added!!");
    props.history.push(`/projects`)
    },
    (error)=> {
      console.log(error);
    });
    }; 
  const onCancel = () => {

    props.history.push('/projects');
  };

  return(
    <Wrapper>
      <h2 className="display-7">Add Project</h2>
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
        defaultValue={project.name}
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
        defaultValue={project.start_date}
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
        defaultValue={project.end_date}
        onChange={handleChange}
        required />
      </div>


   

      {/* assigned_to */}
      <div className ="form-group">
        <label htmlFor="assigned_to">Assigned To</label>
        <input 
        type="text"
        className="form-control"
        name="assigned_to"
        placeholder="Contractor Name"
        defaultValue={project.assigned_to}
        onChange={handleChange}
        required />
      </div>

      {/* type */}
      <div className ="form-group">
        <label htmlFor="type">Project Type</label>
        <select 
        type="text"
        className="form-control"
        name="type"
        defaultValue={project.type}
        onChange={handleChange}
        required >
          <option value="Select">Select....</option>
          <option value="Quality Review">Quality Review</option>
          <option value="Course Revision">Course Revision</option>
          <option value="Instructional Design">Instructional Design</option>
        </select>
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
        defaultValue={project.project_stage}
        onChange={handleChange}
        required >
          <option value="Select">Select....</option>
          <option value="Consulattion">Consulation</option>
          <option value="Contract Sent">Contract Sent</option>
          <option value="Contract Signed">Contract Signed</option>
          <option value="Work In Progress">Work In Progress</option>
          <option value="Project Completed">Project Completed</option>
        </select>
      </div>
      {/* payment recevied */}

      <div className ="form-group">
        <label htmlFor="payment_received">Payment Status</label>
        <select 
        type="text"
        className="form-control"
        name="payment_received"
        defaultValue={project.payment_received}
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
        defaultValue={project.payment_date}
        onChange={handleChange}
         />
      </div>

      <div className ="form-group">
        <label htmlFor="first_name">Client Name</label>
        <div></div>
        <select onChange={handleChange} name="client_id"
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
      ))}
    </select>
      </div>


      
      <button
      type="submit"
      variant="primary"
      className="btn btn-info"
      title="Submit">
        Submit
      </button>
      &nbsp; &nbsp; &nbsp; 
      <button
          type="cancel"
          variant="primary"
          className="btn btn-danger"
          title="Cancel"
          onClick={()=>{ onCancel()}}> Cancel 
      </button>

    </form>
    </Wrapper>
  )
}

export default AddProject;