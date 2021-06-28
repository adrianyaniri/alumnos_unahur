const models = require('../models');
const bcrypt = require('bcrypt');
const authConfig = require('../config/authConfig');

// Login de usuario
const signIn = (req, res) => {

    let { email, password } = req.body;

    models.usuario.findOne({
        where:{
            email: email
        }
    })
        .then(usuario => {
            if(! usuario) { res.status(404).json('usuario no encontrado ')}
            else {
                bcrypt.compareSync( password, usuario.password ) ? res.json(password) : res.status(401).json('contraseña invalida')
            }

        })
        .catch(err => {
            res.status(500).json(err)
        })
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
            res.status(201).json({
                id: usuario.id,
                nombre: usuario.name
            })
        })
        .catch(err => {
            res.status(500).json(err)
        });
}


module.exports = {signIn, signUp}
