const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors')

const server = express();

const User = require('./api/users/user-model')

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));



server.get('/', (req, res) => {
    res.json("welcome to the heroku app!!!");
});

server.get('/api/users', (req, res) => {
    User.find(req.query)
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

server.post('/api/register', (req, res) => {
    let user = req.body
    User.addNewUser(user)
        .then(newUser => {
            if(!newUser) {
                res.status(400).json({message: "needs use and password"})
            } else {
                res.status(201).json(newUser);
            }
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

module.exports = server; 
