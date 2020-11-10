const getProjectsByClients = (clientsProjects) => {
  const projectsByClients = {};

  for (let project of clientsProjects) {
      if (!projectsByClients[project.client_id]) {
          projectsByClients[project.client_id] = {
              clientId: project.client_id,
              firstName: project.first_name,
              lastName: project.last_name,
              email: project.email,
              projects: [],
          };
      }

      projectsByClients[project.client_id].projects.push({
          type: project.type,
          assined_to: project.assined_to,
      });

  }

  const result = Object.values(projectsByClients);

  return result;
};

module.exports = {
  getProjectsByClients,
};