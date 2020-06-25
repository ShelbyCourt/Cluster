const bcrypt = require('bcrypt');

module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body

        console.log('Username:' + username);
        console.log('Password:' + password);

        const user = await db.check_user(username)

        if(!user[0]) {
            return res.status(404).send('Username does not exist')
        } else {
            const authenticated = bcrypt.compareSync(password, user[0].password)
            if(authenticated) {
                req.session.user = {
                    userId: user[0].id,
                    username: user[0].username,
                    email: user[0].email,
                    languages: user[0].languages,
                    profilePicture: user[0].profile_pic
                }
                res.status(200).send(req.session.user)
            } else {
                res.status(403).send('Username or password is incorrect')
            }
        }
    },


    register: async (req, res) => {
        const db = req.app.get('db');
        const { username, email, password, languages } = req.body;

        console.log('Username:' + username);
        console.log('Password:' + password);
        
        const existingUser = await db.check_user(username)

        if(existingUser[0]) {
            return res.status(409).send('Username already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await db.register_user( username, email, hash, languages )

        console.log('username' + username)

        req.session.user = {
            userId: newUser[0].user_id,
            username: newUser[0].username,
            email: newUser[0].email,   
            languages: newUser[0].languages         
        }
        res.status(200).send(req.session.user)
    },


    logout: (req, res) => {
        req.session.destroy();
        return res.sendStatus(200);
    }

    

}