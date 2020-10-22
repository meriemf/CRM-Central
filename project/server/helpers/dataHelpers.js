const getPostsByUsers = (usersPosts) => {
  const postsByUsers = {};

  // for (let post of usersPosts) {
  //   if (!postsByUsers[post.user_id]) {
  //     postsByUsers[post.user_id] = {
  //       userId: post.user_id,
  //       firstName: post.first_name,
  //       lastName: post.last_name,
  //       email: post.email,
  //       posts: [],
  //     };
  //   }


  for (let post of usersPosts) {
    if (!postsByUsers[post.client_id]) {
      postsByUsers[post.client_id] = {
        userId: post.client_id,
        firstName: post.first_name,
        lastName: post.last_name,
        email: post.email,
        projects: [],
      };
    }


    // postsByUsers[post.user_id].posts.push({
    //   title: post.title,
    //   content: post.content,
    // });
    
    postsByUsers[post.client_id].projects.push({
      title: post.type,
      content: post.assigned_to,
    });

  }

  return Object.values(postsByUsers);
};

module.exports = {
  getPostsByUsers,
};