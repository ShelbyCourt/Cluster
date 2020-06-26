require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const authCtrl = require('./Controllers/authController');
const resourceCtrl = require('./Controllers/resourceController');
const userCtrl = require('./Controllers/userController');

const app = express();

app.use(express.json());
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET
    })
);

//  ENDPOINTS HERE
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.post('/auth/logout', authCtrl.logout)

app.post('/api/resources', resourceCtrl.addNewResource)
app.get('/api/resources', resourceCtrl.getUserResources)
app.get('/api/oneresource', resourceCtrl.getOneResource)
app.put('/api/resources', resourceCtrl.updateResource)
app.delete('/api/resources', resourceCtrl.deleteResource)

// app.put('/api/users', userCtrl.updateUser)





massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('What are you looking at? My db?!')
    app.listen( SERVER_PORT, () => console.log(`Allons-y sur server port ${SERVER_PORT}`))
}).catch( err => console.log( err ));


