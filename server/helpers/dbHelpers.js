module.exports = (db) => {

  const getDashboardData = () => {
    //const output = [];
    const query1 = { // quality reviews in progress

      text: `SELECT COUNT(*) FROM projects WHERE type='Quality Review' and project_stage ='Work In Progress' and project_status = 'A'`
        
    };
    const query2 = { // quality reviews completed
      text: `SELECT COUNT(*) FROM projects WHERE type='Quality Review' and project_stage ='Project Completed' and project_status = 'A';`
    };

    const query3 = {   //current projects
      text: `SELECT COUNT(*) FROM projects WHERE project_stage='Work In Progress' and project_status = 'A'`

    };
    
    const query4 = {   //completed projects
      text: `SELECT COUNT(*) FROM projects WHERE project_stage='Project Completed' and project_status = 'A'`

       };
    const query5 = {   //upcoming
      text: `SELECT COUNT(*) FROM projects WHERE project_stage='Contract Signed' and project_status = 'A'`

    };
     
    const query6 = {   //revenue in progress

      text: `SELECT SUM(project_value) FROM projects WHERE project_stage='Work In Progress' and project_status = 'A'`
    };
    const query7 = {   //revenue completed

      text: `SELECT SUM(project_value) FROM projects WHERE project_stage='Project Completed' and project_status = 'A'`
    };

 const promisesArray=[db.query(query1), db.query(query2), db.query(query3), db.query(query4), db.query(query5), db.query(query6), db.query(query7)];

 return Promise.all(promisesArray)
 .then (result => {

  return result;
 })
  }
  const getUsers = () => {
    const query = {
      text: `SELECT * FROM clients WHERE client_status='A' order by id`
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };


  const EditClient = (first_name, last_name, phone_number, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made, id) => {
    const query = {

      text: `UPDATE clients SET first_name =$1, last_name=$2, phone_number=$3, email=$4, department=$5,client_type=$6,work_type=$7,region=$8,position_title=$9,tweeter_username=$10, initial_contact_made=$11 WHERE id = $12`,

      values: [first_name, last_name, phone_number, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made, id],
    };
    
    return db.query(query)
      .then((result) => result.rows)
      .catch((err) => err);
    
  };

  const getClientNotes = (id) => {

    const query = {

      text: `SELECT * FROM  client_notes where client_id = $1`,
      values: [id],
    };
    return db.query(query)
    .then((result) => result.rows)
    .catch((err) => err);

  }

  const addNotesEditClient = (notes, id) => {
    const query = {

      text: `INSERT INTO client_notes (notes, date, client_id) VALUES ($1, now(), $2)`,
      values: [notes, id],
    };
    return db.query(query)
    .then((result) => result.rows)
    .catch((err) => err);

  }
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
      text: `SELECT * FROM clients WHERE email = $1 and client_status = 'A'`,
      values: [email],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };
  const addClientNotes = (notes) => {
    const query = {

      text: `INSERT INTO client_notes (notes, date, client_id) 
      VALUES ($1, now(), (select max(id) from clients))`,
     
      values: [notes],
    };
    return db.query(query)
    .then((result) => result.rows)
    .catch((err) => err);

  }

  const addUser = (first_name, last_name, phone_number, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made) => {
    const query = {
      text: `INSERT INTO clients (first_name, last_name, phone_number, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
      values: [first_name, last_name, phone_number, email, department, client_type, work_type, region, position_title, tweeter_username, initial_contact_made],
    };
    
  return db.query(query)
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

    const getClientProjects = (id) => {
    const query = {
        text: `SELECT clients.id as client_id, first_name, last_name, phone_number, email, projects.start_date as start_date, projects.end_date as end_date, projects.name as name, projects.id as id, projects.type as type
    FROM clients
    INNER JOIN projects
    ON clients.id = projects.client_id
    WHERE clients.id = $1`,
    values:[id],
    };
    return db.query(query)
        .then(result => result.rows)
        .catch(err => err);

}

const getProjects = () => {
  const query = {
      text: `SELECT * FROM projects WHERE project_status='A'`,
  };

  return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addProject = (name, start_date, end_date, assigned_to,type, project_stage, payment_received,payment_date, client_id, courses_number, project_value) => {
      const query = {
          text: `INSERT INTO projects (name, start_date, end_date, assigned_to, type, project_stage, payment_received, payment_date,client_id, courses_number, project_value) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *` ,
          values: [name, start_date, end_date, assigned_to, type, project_stage, payment_received, payment_date, client_id, courses_number, project_value]
      }

      return db.query(query)
          .then(result => result.rows[0])
          .catch(err => err);
  }

  const EditProject = (name, start_date, end_date, assigned_to, type, project_stage, payment_received, payment_date, client_id, courses_number, project_value, id) => {
    const query = {

      text: `UPDATE projects SET name =$1, start_date=$2, end_date=$3, assigned_to=$4,type=$5, project_stage=$6, payment_received=$7,payment_date=$8,client_id=$9, courses_number=$10, project_value=$11 WHERE id=$12`,

      values: [name, start_date, end_date, assigned_to, type, project_stage, payment_received, payment_date, client_id, courses_number, project_value, id],
    };
    
    return db
    .query(query)
    .then((result) => result.rows)
    .catch((err) => err);
  };
  
  const deleteProject = (id) => {
    const query = {

        text:`UPDATE projects SET project_status='T' WHERE id=$1`,

        values: [id],
    };
    return db
        .query(query)
        .then((result) => result.rows)
        .catch((err) => err);
  };
  const getSingleProject = (id) => {
    const query = {
      text: `SELECT * FROM projects WHERE id= $1 and project_status='A'`,
      values: [id],
    };
    return db 
    .query (query)
    .then((result) => result.rows[0])
    .catch((err) => err);
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
    getClientProjects,
    EditProject,
    deleteProject,
    getSingleProject,
    addClientNotes,
    addNotesEditClient,
    getDashboardData,
    getClientNotes
  };
};