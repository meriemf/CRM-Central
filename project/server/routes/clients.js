
const express = require('express');
const router = express.Router();

module.exports = ({ getUsers, getUserByEmail, addUser, EditClient, deleteClients, getSingleUser }) => {
 
  router.get('/', (req, res) => {
    console.log("inside api users");
    getUsers()
      .then((clients) => res.json(clients))
      .catch((err) => res.json({ error: err.message }));
  });

  router.get ('/:id/edit', (req, res) => {
  console.log('inside the route');
    const id = req.params.id; 
   getSingleUser(id)
   .then ((client)=> res.json(client))
   .catch ((err) => res.json({error: err.message }));
  }
  );

  router.post('/', (req, res) => {
    console.log("response post", res);
    const {first_name, last_name, email, tweeter_username} = req.body;

    getUserByEmail(email)
      .then(user => {

        if (user) {
          res.json({msg: 'Sorry, a user account with this email already exists'});
        } else {
          return addUser(first_name, last_name, email, tweeter_username)
        }

      })
      .then(newUser => res.json(newUser))
      .catch(err => res.json({error: err.message}));

   });
//edit user

  router.put ('/:id/edit', (req, res) => {
    //console.log(req.body);
    const id = req.params.id; 
    const {first_name, last_name, email, tweeter_username} = req.body;
    EditClient(first_name, last_name, email, tweeter_username, id)
  .then ( (result) => { res.send({msg:'client updated'})})
  .catch ((err) => { res.send ({msg: err})})
  }); 

   router.delete('/:id', (req, res) => {

    //console.log(req.body);
    const id = req.params.id; 
    deleteClients(id)
   // .then(users => res.json(users))
    .then(clients => res.json(clients))
    .catch((err) => res.json({ err }));
  });



   return router;
};
