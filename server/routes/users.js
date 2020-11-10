const express = require('express');
const router = express.Router();
const { getPostsByUsers } = require('../helpers/dataHelpers');

module.exports = ({ getUsers, getUsersPosts }) => {
  /* GET users listing. */
  router.get('/', (req, res) => {
    getUsers()
      .then((users) => res.json(users))
      .catch((err) => res.json({ error: err.message }));
  });

  router.get('/posts', (req, res) => {
    getUsersPosts()
      .then((usersPosts) => {
        const formattedPosts = getPostsByUsers(usersPosts);
        res.json(formattedPosts);
      })
      .catch((err) => res.json({ error: err.message }));
  });
  return router;
};
