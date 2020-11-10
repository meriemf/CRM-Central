import React , { useState, useEffect} from 'react';
import axios from 'axios';
import ClientList from './ClientList';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 6em;
  margin-left: 8em;
  margin-right: 20em;
  margin-bottom: 5em;
`;

const AddProject = (props) => {
  const [state, setState] = useState ({
   
   selectedFile: null,
  });
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
    courses_number:0,
    project_value:0,
  
  });

  

  const [clients, setClients] = useState([]    
  );
  useEffect(() => {
    Promise.all([
      axios.get('/clients'),
    ]).then((all) => {
      setClients(all[0].data);   
   });
   
  }, []);

  
  const handleChange = (e) => {
    console.log([e.target.name], e.target.value)
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.end_date < project.start_date) {
      alert("End date must be greater than start date");
    } else {
      submitProject();
      fileUploadHandler();
    }
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
  const fileSelectedHandler = (event) => {
  console.log(event.target.files[0]);
  setState (event.target.files[0]);
  };

  const fileUploadHandler = () => {
   const fd = new FormData();
   fd.append ('invoice', state.selectedFile) 
   axios.post ('localhost:3002/', fd)
        .then ((res) => {
          console.log(res);
        });
  };

  return(
    <Wrapper>
      <h2 className="display-7">Add Project</h2>
    <form onSubmit = {handleSubmit}>


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
        value={project.start_date}
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
        value={project.end_date}
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
        value={project.assigned_to}
        onChange={handleChange}
        />
      </div>

      {/* type */}
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
          <option value="Course Revision">Course Revision</option>
          <option value="Instructional Design">Instructional Design</option>
        </select>
      </div>

      <div className ="form-group">
        <label htmlFor="courses_number">Courses Number</label>
        <input 
        type="text"
        className="form-control"
        name="courses_number"
        placeholder="0"
        value={project.courses_value}
        onChange={handleChange}
         />
      </div>
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
          <option value="Consulattion">Consulation</option>
          <option value="Contract Sent">Contract Sent</option>
          <option value="Contract Signed">Contract Signed</option>
          <option value="Work In Progress">Work In Progress</option>
          <option value="Project Completed">Project Completed</option>
        </select>
      </div>

      {/* project value */}
      <div className ="form-group">
        <label htmlFor="project_value">Project Value (CAD$) </label>
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
        <input readOnly
        type="text"
        className="form-control"
        name="hst"
        value  = {Math.round((project.project_value * 0.13) * 100) / 100}
        onChange={handleChange}
        />
      </div>
      <div className ="form-group">
        <label htmlFor="total_price">Total Price (CAD$)</label>
        <input readOnly
        type="text"
        className="form-control"
        name="total_price"
        value = {Math.round((parseFloat(project.project_value * 0.13) + parseFloat(project.project_value))* 100) / 100}
        onChange={handleChange}
        />
      </div>
        

      <div className ="form-group">
        <label htmlFor="invoice" onClick ={fileUploadHandler}>Invoice</label>
        <input 
        type="file"
        className="form-control"
        name="invoice"
        onChange={fileSelectedHandler}
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
        value={project.payment_date}
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
  )
}

export default AddProject;