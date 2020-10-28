
module.exports = (db) => {
  const getUsers = () => {
    const query = {
      // text: 'SELECT * FROM users',
      text: `SELECT * FROM clients WHERE client_status='A'`
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };


  const EditClient = (first_name, last_name, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made, id) => {
    const query = {

      text: `UPDATE clients SET first_name =$1, last_name=$2, email=$3, department=$4,client_type=$5,work_type=$6,region=$7,position_title=$8,tweeter_username=$9, initial_contact_made=$10 WHERE id = $11`,

      values: [first_name, last_name, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made, id],
    };
    
    return db
    .query(query)
    .then((result) => result.rows)
    .catch((err) => err);
  };

  const getSingleUser = (id) => {
    const query = {
      text: `SELECT * FROM clients WHERE id= $1 and client_status='A'`,
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

  const addUser = (first_name, last_name, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made) => {
    const query = {
      text: `INSERT INTO clients (first_name, last_name, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
      values: [first_name, last_name, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made],
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const deleteClients = (id) => {
    const query = {

        // text: 'DELETE FROM clients WHERE id= $1::integer',
        text:`UPDATE clients SET client_status='T' WHERE id=$1`,

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

  const addProject = (name, start_date, end_date, assigned_to,type,payment_received,payment_date,client_id) => {
      const query = {
          text: `INSERT INTO projects (name, start_date, end_date, assigned_to, type,payment_received, payment_date,client_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *` ,
          values: [name, start_date, end_date, assigned_to, type, payment_received, payment_date, client_id]
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