module.exports = {
    addNewResource: async (req, res) => {
        db = req.app.get('db');
        const { title, resource_url, description, notes, category, language } = req.body
        const { user_id } = req.session.user;
        console.log('user id = ' + user_id)
        // console.log(language);

        const newResource = await db.add_new_resource(title, resource_url, description, notes, category, language, user_id);
        console.log(language);
        return res.status(200).send(newResource);
    },

    getUserResources: async (req, res) => {
        db = req.app.get('db');
        const { user_id } = req.session.user;
        const { resource_url, title, description, category } = req.body;
        console.log('category = ' + category)

        // const userResources = await db.get_user_resources( [req.session.user.id]);
        const userResources = await db.get_user_resources( resource_url, title, description, category, user_id )
        console.log('userResources =' + userResources);
        return res.status(200).send(userResources);
        
    },

    getOneResource: async (req, res) => {
        db = req.app.get('db');
        const { resourceId } = req.query

        const oneResource = await db.get_one_resource(resourceId)
        return res.status(200).send(oneResource);
    },

    updateResource: async (req, res) => {
        db = req.app.get('db');
        const { title, resource_url, description, notes, category } = req.body;
        const { resourceId } = req.query;

        const updatedResource = await db.update_resource( title, resource_url, description, notes, category, resourceId )
        return res.status(200).send(updatedResource);        
    },

    getResourceCategory: async (req, res) => {
        db = req.app.get('db');
        const { user_id } = req.session.user;
        const { category } = req.query;

        const catResources = await db.get_resource_category([user_id, category])
        console.log(catResources);
        return res.status(200).send(catResources);
    },

    deleteResource: async (req, res) => {
        db = req.app.get('db');
        const { resourceId } = req.query

        await db.delete_resource( resourceId )
        return res.status(200).send('Resource deleted')
    }



}