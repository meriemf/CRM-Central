const express = require('express');
const router = express.Router();


module.exports=({getDashboardData})=>{

  router.get('/', (req, res) => {
    console.log("inside dashboard request");
    getDashboardData()
      .then((data) => console.log(res.json(data)))
      .catch((err) => res.json({ error: err.message }));
  });

  return router;

}


