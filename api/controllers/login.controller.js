const models = require('../models');
const bcrypt = require('bcrypt')


const loginIn = (req,res) => {

    let password = bcrypt.hashSync(req.body.password, 10)

    models.usuario
        .create({
            name:req.body.name,
            password:password,
            email:req.body.email
        })
        .then( usuario => res.status(200).send({id:usuario.id}))
        .catch(error => {
            if (error === "SequelizeUniqueConstraintError: Validation error"){
                res.status(400).send("Bag request")
            }
            else{
                console.log('error al intentar ingresar a la db')
                res.sendStatus(500)
            }
        })
}


module.exports = loginIn;