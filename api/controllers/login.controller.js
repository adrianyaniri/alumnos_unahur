const models = require('../models');
const bcrypt = require('bcrypt');
const authConfig = require('../config/authConfig')

const loginUp = (req,res) =>{

    let password = bcrypt.hashSync(req.body.password,authConfig.rounds);

    models.usuario
        .create({
            name: req.body.name,
            password: password,
            email: req.body.email
        })
        .then( usuario => res.status(201).send({id:usuario.id, pass:usuario.password}))
        .catch(error => {
            if (error === "SequelizeUniqueConstraintError: Validation error"){
                res.status(400).send('Bad request: existe otro alumno con ese nombre')
            }
            else{
                res.sendStatus(500).send('el email ya esta registrado')
            }
        });
}

const loginIn = (req,res) => {

    let {email, password} = req.body

    models.usuario
        .findOne({
            where:{
                email: email
            }
        })
        .then(usuario => {
            if(!usuario){
                res.status(400).send("error de ingreso ")
            }
            else{
               if( bcrypt.compare(password, usuario.password)){
                   return
               }
               else {
                   res.status(400).send('error de contraseña')
               }
            }
        })
        .catch(error => {
            res.status(500).json(error)
        })
}

module.exports = {loginUp, loginIn }