var express = require('express');
var router = express.Router();


module.exports = ({getProjects, addProject, EditProject, deleteProject, getSingleProject}) => {
  /* GET projects listing. */

  router.get('/', (req, res) => {

    getProjects()
    .then((projects) => res.json(projects))
    .catch((err) => res.json({ err }));

  });

  router.get ('/:id/edit', (req, res) => {
      const id = req.params.id; 
     getSingleProject(id)
     .then ((project)=> res.json(project))
     .catch ((err) => res.json({error: err.message }));
    }
    );

  router.post('/', (req, res) => {
    const {name, start_date, end_date, assigned_to,type, project_stage, payment_received,payment_date,client_id, courses_number, project_value} = req.body;

      addProject(name, start_date, end_date, assigned_to,type, project_stage, payment_received,payment_date,client_id, courses_number, project_value)
      .then(newProject => res.json(newProject))
      .catch(err => res.json({error: err.message}));

   })

   router.put ('/:id/edit', (req, res) => {

    const id = req.params.id;
    const {name, start_date, end_date, assigned_to, type, project_stage, payment_received, payment_date, client_id, courses_number, project_value} = req.body;
    EditProject(name, start_date, end_date, assigned_to, type, project_stage, payment_received, payment_date, client_id, courses_number, project_value, id)
  .then ( (result) => { res.send({msg:'project updated'})})
  .catch ((err) => { res.send ({msg: err})})
  }); 

  router.delete('/:id', (req, res) => {

    const id = req.params.id; 
    deleteProject(id)
    .then(project => res.json(project))
    .catch((err) => res.json({ err }));
  });

  return router;

}