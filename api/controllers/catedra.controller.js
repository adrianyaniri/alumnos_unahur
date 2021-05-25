const models = require('../models');

const getCatedra = (req, res) =>{
    models.catedra
        .findAll({
            attributes: ['id','nombre','id_materia'],
            include:[
                {
                    as:'Materia_Relacionada',
                    model:models.materia,
                    attributes: ['id','nombre']
                }
            ]
        })
        .then(catedra => res.send(catedra))
        .catch( () => res.sendStatus(500));
}


const postCatedra = (req, res) =>{
    models.catedra
        .create({
            nombre: req.body.nombre,
            id_materia:req.body.id_materia
        })
        .then(catedra => res.status(200).send({ id:catedra.id }))
        .catch(error =>{
            if(error === "SequelizeUniqueConstraintError: Validation error"){
                res.send(400).send("Bad request")
            }
            else{
                res.sendStatus(500)
            }
        })
}

module.exports = { postCatedra ,getCatedra }