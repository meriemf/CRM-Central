import React , { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 6em;
  margin-left: 8em;
  margin-right: 20em;
  margin-bottom: 5em;
`;


const AddClient = (props) => {
      
  const [client,setClient] = useState({
      first_name:'',
      last_name:'',
      phone_number:'',
      email:'',
      department:'',
      client_type:'',
      work_type:'',
      region:'',
      position_title:'',
      tweeter_username:'',
      initial_contact_made:'',
      notes:'',
  },
  
  );

  const handleChange = (e) => {
   setClient ({
   ...client, // save the previous state
   [e.target.name] : e.target.value 
   });
  };

  const handleSubmit = (event)=> {
    event.preventDefault();
    SaveClient();
  }
  const SaveClient=()=>{ axios.post(`/clients`,client)
    .then(
      (res)=>{
     props.history.push('/clients');
     }, 
     (error) => {
       console.log(error);
     });
    };
  const onCancel = () => {

    props.history.push('/clients');
  };
  
  return(
    <Wrapper>
      <h2 className="display-7">Add Client</h2>
  <form onSubmit = {handleSubmit}>
    <div className ="form-group">
      <label htmlFor="name">First Name</label>
      <input 
      type="text"
      className="form-control"
      name="first_name"
      placeholder="Enter first name"
      value={client.first_name}
      onChange={handleChange}
      required />
    </div>

    <div className ="form-group">
      <label htmlFor="lastName">Last Name</label>
      <input 
      type="text"
      className="form-control"
      name="last_name"
      placeholder="Enter last name"
      value={client.last_name}
      onChange={handleChange}
      required />
    </div>

    <div className ="form-group">
      <label htmlFor="phoneNumber">Phone Number</label>
      <input
      type="text"      
      className="form-control"
      name="phone_number"
      phone_number="phone_number"
      placeholder="Enter phone number"
      value={client.phone_number}
      onChange={handleChange}
      />
    </div>

    <div className ="form-group">
      <label htmlFor="email">Email</label>
      <input 
      type="email"
      className="form-control"
      name="email"
      placeholder="Enter Email"
      // pattern = "[^@\s]+@[^@\s]+" 
      size="30"
      value={client.email}
      onChange={handleChange}
      required />
    </div>

    <div className ="form-group">
      <label htmlFor="department">Department</label>
      <input 
      type="text"
      className="form-control"
      name="department"
      placeholder="Enter Department"
      value={client.department}
      onChange={handleChange}
      required />
    </div>

    <div className ="form-group">
      <label htmlFor="client_type">Client Type</label>
      <select 
      type="text"
      className="form-control"
      name="client_type"
      value={client.client_type}
      onChange={handleChange}
      required >
    <option value="Select" >Select....</option>
    <option value="Potential Client">Potential Client</option>
    <option value="Current Client">Current Client</option></select>
    </div>

    <div className ="form-group">
      <label htmlFor="work_type">Work Type</label>
      <select 
      type="text"
      className="form-control"
      name="work_type"
      value={client.work_type}
      onChange={handleChange}
      required >
   <option value="Select" >Select....</option> 
  <option value="Educational Institution">Educational Institution</option> 
  <option value="Business">Business</option></select>
    </div>

    <div className ="form-group">
      <label htmlFor="region">Region</label>
      <input 
      type="text"
      className="form-control"
      name="region"
      placeholder="Enter Region"
      value={client.region}
      onChange={handleChange}
      required />
    </div>

    <div className ="form-group">
      <label htmlFor="positionTitle">Position Title</label>
      <input 
      type="text"
      className="form-control"
      name="position_title"
      placeholder="Enter Position Title"
      value={client.position_title}
      onChange={handleChange}
      required />
    </div>

    <div className ="form-group">
      <label htmlFor="tweeterUserName">Twitter</label>
      <input 
      type="text"
      className="form-control"
      name="tweeter_username"
      placeholder="Enter Tweeter handle"
      value={client.tweeter_username}
      onChange={handleChange}
      required />
    </div>


    <div className ="form-group">
      <label htmlFor="initial_contact_made">Initial Contact Done</label>
      <select 
      type="text"
      className="form-control"
      name="initial_contact_made"
      value={client.initial_contact_made}
      onChange={handleChange}
      required >
    <option value="Select" >Select....</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option></select>
    </div>

    <div className ="form-group">
      <label htmlFor="note">Notes</label>
      <textarea 
      type="text"
      className="form-control"
      name="notes"
      placeholder="Enter notes"
      value={client.notes}
      onChange={handleChange}
       />
    </div>

  <button
        type="submit"
        variant="primary"
        className="btn btn-success"
        data-placement="top">Submit
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

export default AddClient;




