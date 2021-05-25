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
const findCatedra = (id, {onSuccess, onNotFound, onError}) => {
    models.catedra
        .findOne({
            attributes: ["id", "nombre", "id_materia"],
            where: {id}
        })
        .then(catedra => (catedra ? onSuccess(catedra) : onNotFound()))
        .catch(() => onError())
}
const getCatedraId = (req, res) =>{
    findCatedra(req.params.id, {
        onSuccess: catedra => res.send(catedra),
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    })
}

const deleteCatedra = (req, res) =>{
    const onSuccess = catedra =>
        catedra
            .destroy()
            .then( () => res.sendStatus(200))
            .catch( () => res.sendStatus(500));
    findCatedra(req.params.id, {
        onSuccess,
        onNotFound: () => res.sendStatus(400),
        onError: () => res.sendStatus(500)
    })
}

module.exports = { postCatedra ,getCatedra , getCatedraId, deleteCatedra }