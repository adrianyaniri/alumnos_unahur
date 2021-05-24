const models = require('../models');

const getProfesor = (req, res) =>{
    models.profesor
        .findAll({
            attributes:["id","nombre","id_materia"],
            include:[
                {
                    as:'Materia_Relacionada',
                    model: models.materia,
                    attributes:[ 'nombre']
                }
            ]

        })
        .then( profesor => res.send( profesor ))
        .catch( () => res.sendStatus(500) );
}


const postProfesor = (req, res) =>{
    models.profesor
        .create({
            nombre: req.body.nombre,
            id_materia : req.body.id_materia
        })
        .then(profesor => res.sendStatus(201).send({id:profesor.id}))
        .catch( error => {
            if (error === "SequelizeUniqueConstraintError: Validation error"){
                res.status(400).send("Bad request: ")
            }
            else{
               res.sendStatus(500)
            }
        });
}


module.exports = { getProfesor, postProfesor };