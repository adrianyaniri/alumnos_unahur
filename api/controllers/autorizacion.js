const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
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
            if( !usuario ) { res.status(404).json('usuario no encontrado ')}
            else {
                if (bcrypt.compareSync( password, usuario.password )){

                    let token = jwt.sign({usuario: usuario}, authConfig.secret, {
                        expiresIn: authConfig.expire
                        });
                    res.json({
                        token
                    })
                }
                else {
                    res.status(404).json({ msg: 'contrasseña invalida ' })
                }
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

            let token = jwt.sign({ usuario: usuario }, "secret",{
                expiresIn: "1d"
            })
            res.status(201).json({
                nombre: usuario.name,
                token: token
            })
        })
        .catch(err => {
            res.status(500).json(err)
        });
}


module.exports = {signIn, signUp}
