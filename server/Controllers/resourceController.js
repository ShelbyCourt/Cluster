module.exports = {
    addNewResource: async (req, res) => {
        db = req.app.get('db');
        const { userId } = req.session.user
        const { resource_url, language, category, title } = req.body

        // console.log(language);

        const newResource = await db.add_new_resource(resource_url, language, category, title, userId);
        console.log(language);
        return res.status(200).send(newResource);
    },

    getUserResources: async (req, res) => {
        db = req.app.get('db');
        // const { userId } = req.session.user
        // const { resource_url, title, description, category } = req.body

        const userResources = await db.get_user_resources( [req.session.user.id]);
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
    },

    deleteResource: async (req, res) => {
        db = req.app.get('db');
        const { resourceId } = req.query

        await db.delete_resource( resourceId )
        return res.status(200).send('Resource deleted')
    }



}