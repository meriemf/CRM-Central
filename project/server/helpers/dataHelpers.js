// const getPostsByUsers = (usersPosts) => {
//   const postsByUsers = {};

//   // for (let post of usersPosts) {
//   //   if (!postsByUsers[post.user_id]) {
//   //     postsByUsers[post.user_id] = {
//   //       userId: post.user_id,
//   //       firstName: post.first_name,
//   //       lastName: post.last_name,
//   //       email: post.email,
//   //       posts: [],
//   //     };
//   //   }


//   for (let post of usersPosts) {
//     if (!postsByUsers[post.client_id]) {
//       postsByUsers[post.client_id] = {
//         userId: post.client_id,
//         firstName: post.first_name,
//         lastName: post.last_name,
//         email: post.email,
//         projects: [],
//       };
//     }


//     // postsByUsers[post.user_id].posts.push({
//     //   title: post.title,
//     //   content: post.content,
//     // });
    
//     postsByUsers[post.client_id].projects.push({
//       title: post.type,
//       content: post.assigned_to,
//     });

//   }

//   return Object.values(postsByUsers);
// };

// module.exports = {
//   getPostsByUsers,
// };


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
  console.log(result);
  return result;
};

module.exports = {
  getProjectsByClients,
};