const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const authConfig = require('../config/authConfig');

// encripta la contraseña
const encriptar = password => bcrypt.hashSync(password, authConfig.rounds);

//Genera el token que se le muestra al usuario
const generarToken = usuario =>
    jwt.sign(
        {id: usuario.id ,email: usuario.email}, authConfig.secret,{
            expiresIn: authConfig.expire
        })

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

    let password = encriptar( req.body.password )

    models.usuario
        .create({
            name: req.body.nombre,
            password: password,
            role: req.body.role,
            email: req.body.email
        })
        .then(usuario => {
            res.status(201).json({
                nombre: usuario.name,
                token: generarToken(usuario)
            })
        })
        .catch(err => {
            res.status(500).json(err)
        });
}

module.exports = {signIn, signUp}
