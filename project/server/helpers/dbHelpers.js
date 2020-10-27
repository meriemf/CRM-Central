
module.exports = (db) => {
  const getUsers = () => {
    const query = {
      // text: 'SELECT * FROM users',
      text: 'SELECT * FROM clients',
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };


  const EditClient = (first_name, last_name, email, tweeter_username, id) => {
    const query = {

      text: `UPDATE clients SET first_name =$1, last_name=$2, email=$3, tweeter_username=$4 WHERE id = $5`,

      values: [first_name, last_name, email, tweeter_username, id],
    };
    
    return db
    .query(query)
    .then((result) => result.rows)
    .catch((err) => err);
  };

  const getSingleUser = (id) => {
    const query = {
      text: 'SELECT * FROM clients WHERE id= $1',
      values: [id],
    };
    return db 
    .query (query)
    .then((result) => result.rows[0])
    .catch((err) => err);
  }
  const getUserByEmail = (email) => {
    const query = {
      text: `SELECT * FROM clients WHERE email = $1`,
      values: [email],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addUser = (first_name, last_name, email, tweeter_username) => {
    const query = {
      text: `INSERT INTO clients (first_name, last_name, email, tweeter_username) 
             VALUES ($1, $2, $3, $4)`,
      values: [first_name, last_name, email, tweeter_username],
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const deleteClients = (id) => {
    const query = {
        text: 'DELETE FROM clients WHERE id= $1::integer',
        values: [id],
    };
    return db
        .query(query)
        .then((result) => result.rows)
        .catch((err) => err);
  };
  const getClientsProjects = () => {
    const query = {
        text: `SELECT clients.id as client_id, first_name, last_name, email, projects.id as project_id, type, assigned_to
    FROM clients
    INNER JOIN projects
    ON clients.id = projects.client_id`
    }

    return db.query(query)
        .then(result => result.rows)
        .catch(err => err);

}
const getProjects = () => {
  const query = {
      text: 'SELECT * FROM projects',
  };

  return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addProject = (name, start_date, end_date, assigned_to) => {
      const query = {
          text: `INSERT INTO projects (name, start_date, end_date, assigned_to) VALUES ($1, $2, $3, $4) RETURNING *` ,
          values: [name, start_date, end_date, assigned_to]
      }

      return db.query(query)
          .then(result => result.rows[0])
          .catch(err => err);
  }
  return {
    getUsers,
    getUserByEmail,
    addUser,
    EditClient,
    deleteClients,
    getSingleUser,
    addProject,
    getProjects,
    getClientsProjects
  };
};