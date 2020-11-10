const express = require('express');
const router = express.Router();


module.exports = ({ getDashboardData }) => {

  router.get('/', (req, res) => {
    console.log("inside the get request");
    getDashboardData()
      .then((data) => (res.json(data)))
      .catch((err) => res.json({ error: err.message }));
  });



return router;
};
