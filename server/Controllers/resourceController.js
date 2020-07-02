module.exports = {
  addNewResource: async (req, res) => {
    db = req.app.get("db");
    const { title, resource_url, category, language } = req.body;
    const { userId } = req.session.user;
    console.log("user id = " + userId);
    // console.log(language);

    const newResource = await db.add_new_resource(
      title,
      resource_url,
      category,
      language,
      userId
    );
    console.log(language);
    return res.status(200).send(newResource);
  },

  getUserResources: async (req, res) => {
    db = req.app.get("db");
    const { userId } = req.session.user;
    const { title, resource_url, category } = req.body;
    const { search } = req.query;

    // console.log('category = ' + category)

    // const userResources = await db.get_user_resources( [req.session.user.id]);
    const userResources = await db.get_user_resources(
      title,
      resource_url,
      // description,
      category,
      userId
    );
    // console.log('userResources =' + userResources);
    if (search) {
      const filteredResources = userResources.filter((resource) => {
        if (resource.title.toLowerCase().includes(search.toLowerCase)) {
          return resource;
        }
        if (resource.resource_url.includes(search)) {
          return resource;
        }
        // if (resource.description.includes(search)) {
        //   return resource;
        // }
        if (resource.category.includes(search)) {
          return resource;
        }
      });
      return res.status(200).send(filteredResources);
    }

    return res.status(200).send(userResources);
  },

  getOneResource: async (req, res) => {
    db = req.app.get("db");
    const { resourceId } = req.query;

    const oneResource = await db.get_one_resource(resourceId);
    return res.status(200).send(oneResource);
  },

  updateResource: async (req, res) => {
    db = req.app.get("db");
    const { title, resource_url, description, notes, category } = req.body;
    const { resourceId } = req.query;

    const updatedResource = await db.update_resource(
      title,
      resource_url,
      description,
      notes,
      category,
      resourceId
    );
    return res.status(200).send(updatedResource);
  },

  getResourceCategory: async (req, res) => {
    db = req.app.get("db");
    // console.log(req.session.user)
    const { userId } = req.session.user;
    const { category } = req.query;
    // console.log('category = ' + category)
    // console.log(userId, typeof userId)

    const catResources = await db.get_resource_category([userId, category]);
    // console.log(catResources);
    return res.status(200).send(catResources);
  },

  deleteResource: async (req, res) => {
    db = req.app.get("db");
    const { resourceId } = req.query;

    await db.delete_resource(resourceId);
    return res.status(200).send("Resource deleted");
  },
};
