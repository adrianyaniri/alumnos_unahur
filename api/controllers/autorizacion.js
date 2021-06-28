const models = require('../models');
const bcrypt = require('bcrypt');
const authConfig = require('../config/authConfig');

// Login de usuario
const signIn = (req, res) => {
    res.json('signIN')
}

const signUp = (req, res) => {

    let password = bcrypt.hashSync(req.body.password, authConfig.rounds)

    models.usuario
        .create({
            name: req.body.nombre,
            password: password,
            email: req.body.email
        })
        .then( async usuario => {

           let token = "token"
            console.log(token)
            res.status(201).json({
                nombre: usuario.name,
                password: password
            })
        })
        .catch(err => {
            res.status(500).json(err)
        });
}


module.exports = {signIn, signUp}
