module.exports = {
    addNewResource: async (req, res) => {
        db = req.app.get('db');
        const { userId } = req.query
        const { resource_url, language, category, title } = req.body;

        // console.log(language);

        await db.add_new_resource(resource_url, language, category, title, userId);
        console.log(language);
        return res.sendStatus(200);
    },

    getAllResources: async (req, res) => {
        db = req.app.get('db');
    },

    getOneResource: async (req, res) => {
        db = req.app.get('db');
    },

    updateResource: async (req, res) => {
        db = req.app.get('db');
    },

    deleteResource: async (req, res) => {
        db = req.app.get('db');
    }



}