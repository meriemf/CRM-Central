
// const express = require('express');
// const router = express.Router();

// module.exports = ({ getUsers, getUserByEmail, addUser, EditClient, deleteClients, getSingleUser }) => {
 
//   router.get('/', (req, res) => {
//     console.log("inside api users");
//     getUsers()
//       .then((clients) => res.json(clients))
//       .catch((err) => res.json({ error: err.message }));
//   });

//   router.get ('/:id/edit', (req, res) => {
//   console.log('inside the route');
//     const id = req.params.id; 
//    getSingleUser(id)
//    .then ((client)=> res.json(client))
//    .catch ((err) => res.json({error: err.message }));
//   }
//   );

//   router.post('/', (req, res) => {
//     console.log("response post", res);
//     const {first_name, last_name, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made} = req.body;

//     getUserByEmail(email)
//       .then(user => {

//         if (user) {
//           res.json({msg: 'Sorry, a user account with this email already exists'});
//         } else {
//           return addUser(first_name, last_name, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made)
//         }

//       })
//       .then(newUser => res.json(newUser))
//       .catch(err => res.json({error: err.message}));

//    });
// //edit user

//   router.put ('/:id/edit', (req, res) => {
//     //console.log(req.body);
//     const id = req.params.id; 
//     const {first_name, last_name, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made} = req.body;
//     EditClient(first_name, last_name, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made, id)
//   .then ( (result) => { res.send({msg:'client updated'})})
//   .catch ((err) => { res.send ({msg: err})})
//   }); 

//    router.put('/:id', (req, res) => {

//     //console.log(req.body);
//     const id = req.params.id; 
//     deleteClients(id)
//    // .then(users => res.json(users))
//     .then(clients => res.json(clients))
//     .catch((err) => res.json({ err }));
//   });



//    return router;
// };

const express = require('express');
const router = express.Router();

module.exports = ({ getUsers, getUserByEmail, addUser, EditClient, deleteClients, getSingleUser, getClientProjects }) => {
 
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



   //delete a client
  //  const deleteClients = () => {
  //   const query = {
  //       text: 'DELETE FROM clients WHERE id= $1::integer'
  //   };
  //   return db
  //       .query(query)
  //       .then((result) => result.rows)
  //       .catch((err) => err);
  // };
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

