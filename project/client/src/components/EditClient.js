import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


const EditClient = (props) => {

const { id } = props.match.params;
const [client, setClient] = useState ({
 
 first_name: '',
 last_name: '',
 email: ''  

});

useEffect (() => {
  const getClient = () => {  
   axios.get(`/clients/${id}/edit`)
   //axios.get(`/clients/${id}`)
   .then (
     res=> {
     //  console.log(res.data.name);
    //if (res.data.name) {
    if (res.data.id) {
   //   console.log(res.data);
      setClient(res.data);
    
    } else {
      alert('client not found');
    }
   });
 };
    getClient();
}, [id]);

const handleChange = (event) => {
  console.log("handle change function");
  setClient ({
  ...client, // save the previous state
  [event.target.name] : event.target.value 
  });

 };
 const SaveClient= () => {
  axios.put(`/clients/${id}/edit`, client)
   .then (res => {
    console.log("save client",res);
    //if (res.data.name) {
     // if (res.data.id) {
     console.log("props",props);
     // props.history.push('/clients');
     props.history.push('/clients');
   //}
  } 
  
  );
  };
 const handleSubmit = (event)=> {
   event.preventDefault();
   
   console.log(client);
    SaveClient();
 };

const onCancel = () => {

  props.history.push('/clients');
};
return (

<form onSubmit = {handleSubmit}>
    <div className ="form-group">
      <label htmlFor="name">First Name</label>
      <input 
      type="text"
      className="form-control"
      name="first_name"
      placeholder="Enter first name"
      defaultValue={client.first_name}
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
      defaultValue={client.last_name}
      onChange={handleChange}
      required />
    </div>
    <div className ="form-group">
      <label htmlFor="email">Email</label>
      <input 
      type="text"
      className="form-control"
      name="email"
      placeholder="Enter Email"
      defaultValue={client.email}
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
      defaultValue={client.department}
      onChange={handleChange}
      required />
    </div>

    {/* <div className ="form-group">
      <label htmlFor="clientType">Client Type</label>
      <select 
      type="text"
      className="form-control"
      name="clientType"
      // placeholder="Enter Department"
      defaultValue={client.clientType}
      onChange={handleChange}
      required >
   <option value="Select" selected>Select....</option>
  <option value="Select">Select....</option>
  <option value="Potential Client">Potential Client</option>
  <option value="Current Client">Current Client</option></select>
    </div> */}
{/* 
    <div className ="form-group">
      <label htmlFor="workType">Work Type</label>
      <select 
      type="text"
      className="form-control"
      name="workType"
      // placeholder="Select Work type"
      
       defaultValue={client.clientType}
       onChange={handleChange}
      required >
   <option value="Select" selected>Select....</option> 
   <option value="Select">Select....</option>

 <option value="Educational Institution" selected>Educational Institution</option>
  <option value="Educational Institution">Educational Institution</option> 
  <option value="Business">Business</option></select>
    </div> */}


    <div className ="form-group">
      <label htmlFor="tweeterUserName">Tweeter handle</label>
      <input 
      type="text"
      className="form-control"
      name="tweeter_username"
      placeholder="Enter Tweeter handle"
      defaultValue={client.tweeter_username}
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
      defaultValue={client.position_title}
      onChange={handleChange}
      required />
    </div>

  <button
          type="submit"
          variant="primary"
          className="btn btn-primary"
          title="Submit"> Submit
  </button>
  
  <button
          type="cancel"
          variant="primary"
          className="btn btn-primary"
          title="Cancel"
          onClick={()=>{ onCancel()}}> Cancel 
  </button>
  </form>

);

}


export default withRouter(EditClient);