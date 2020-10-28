var express = require('express');
var router = express.Router();


module.exports = ({getProjects, addProject}) => {
  /* GET projects listing. */

  router.get('/', (req, res) => {

    getProjects()
    .then((projects) => res.json(projects))
    .catch((err) => res.json({ err }));

  });

  router.post('/', (req, res) => {
    console.log("inside post request",res)
    const {name, start_date, end_date, assigned_to,type,payment_received,payment_date} = req.body;

      addProject(name, start_date, end_date, assigned_to,type,payment_received,payment_date)
      .then(newProject => res.json(newProject))
      .catch(err => res.json({error: err.message}));

   })

  return router;

}
