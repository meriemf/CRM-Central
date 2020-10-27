var express = require('express');
var router = express.Router();


module.exports = ({getProjects, addProject}) => {
  /* GET projects listing. */

  router.get('/', (req, res) => {

    getProjects()
    .then(projects => res.json(projects))
    .catch((err) => res.json({ err }));

  });

  router.post('/', (req, res) => {
    console.log("inside post request")
    const {name, start_date, end_date, assigned_to} = req.body;

      addProject(name, start_date, end_date, assigned_to)
      .then(newProject => res.json(newProject))
      .catch(err => res.json({error: err.message}));

   })

  return router;

}