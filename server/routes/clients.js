const express = require('express');
const router = express.Router();

module.exports = ({ getUsers, getUserByEmail, addUser, EditClient, deleteClients, getSingleUser, getClientProjects, addClientNotes, addNotesEditClient, getClientNotes }) => {
 
  router.get('/', (req, res) => {
    console.log("inside api users");
    getUsers()
      .then((clients) => res.json(clients))
      .catch((err) => res.json({ error: err.message }));
  });

  router.get ('/:id/edit', (req, res) => {
    const id = req.params.id; 
   getSingleUser(id)
   .then ((client)=> res.json(client))
   .catch ((err) => res.json({error: err.message }));
  }
  );
  router.get ('/:id/notes', (req, res) => {
     const id = req.params.id;
     console.log("id",id); 
     getClientNotes(id)
     .then ((client)=> res.json(client))
     .catch ((err) => res.json({error: err.message }));
    }
    );
  //list of project of a specific client

  router.get ('/:id/projects', (req, res) => {
    const id = req.params.id; 
    console.log("req params",req.params);
     getClientProjects(id)
     .then ((client)=> res.json(client))
     .catch ((err) => res.json({error: err.message }));
    }
    );

    router.post('/', (req, res) => {

    const {first_name, last_name, phone_number, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made, notes} = req.body;
    console.log(req.body);
    getUserByEmail(email)
      .then(user => {

        if (user) {
          res.json({msg: 'Sorry, a user account with this email already exists'});
        } else {
          return (
            addUser(first_name, last_name, phone_number, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made) 
          )          
        }
       })
      .then(newUser => {

       console.log("before adding the notes");
       addClientNotes(notes)
        res.json(newUser)
      })
      .catch(err => res.json({error: err.message}));
   
   });

   //edit user

  router.put ('/:id/edit', (req, res) => {
    //console.log(req.body);
    const id = req.params.id; 
    const {first_name, last_name, phone_number, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made, notes} = req.body;
    EditClient(first_name, last_name, phone_number, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made, id)
   .then ( (result) => { 
    console.log("inside the res", result)
    addNotesEditClient(notes, id)
    res.send({msg:'client updated'})})
  .catch ((err) => { res.send ({msg: err})})
  }); 

 
  router.delete('/:id', (req, res) => {

    console.log(req.body);
    const id = req.params.id; 
    deleteClients(id)
   // .then(users => res.json(users))
    .then(clients => res.json(clients))
    .catch((err) => res.json({ err }));
  });
   return router;
};

