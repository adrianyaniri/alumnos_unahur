const models = require('../models');

const getProfesor = (req, res) =>{

    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);

    models.profesor
        .findAll({
            attributes: ['id','nombre','id_materia'],
            include:[
                {
                    as:'Materia_Relacionada',
                    model:models.materia,
                    attributes: ['id','nombre']
                }
            ],
            offset:(page - 1) * limit,
            limit: limit
        })
        .then(profesor => res.send(profesor))
        .catch( () => res.sendStatus(500));
}


const postProfesor = (req, res) =>{
    models.profesor
        .create({
            nombre: req.body.nombre,
            id_materia:req.body.id_materia
        })
        .then(profesor => res.status(200).send({ id:profesor.id }))
        .catch(error =>{
            if(error === "SequelizeUniqueConstraintError: Validation error"){
                res.send(400).send("Bad request")
            }
            else{
                res.sendStatus(500)
            }
        })
}
const findProfesor = (id, {onSuccess, onNotFound, onError}) => {
    models.profesor
        .findOne({
            attributes: ["id", "nombre", "id_materia"],
            where: {id}
        })
        .then(profesor => (profesor ? onSuccess(profesor) : onNotFound()))
        .catch(() => onError())
}
const getProfesorId = (req, res) =>{
    findProfesor(req.params.id, {
        onSuccess: profesor => res.send(profesor),
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    })
}

const updateProfesor = (req, res) =>{
    const onSuccess = profesor =>
        profesor
            .update(
                { nombre: req.body.nombre, id_materia: req.body.id_materia},
                { fields: ['nombre', 'id_materia']}
            )
            .then( () => res.sendStatus(200))
            .catch( error =>{
                (error === "SequelizeUniqueConstraintError: Validation error")
                    ? res.sendStatus(400).send("Bad request ")
                    : res.sendStatus(500)
            });
    findProfesor(req.params.id,{
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError:() => res.sendStatus(500)
    });
}

const deleteProfesor = (req, res) =>{
    const onSuccess = profesor =>
        profesor
            .destroy()
            .then( () => res.sendStatus(200))
            .catch( () => res.sendStatus(500));
    findProfesor(req.params.id, {
        onSuccess,
        onNotFound: () => res.sendStatus(400),
        onError: () => res.sendStatus(500)
    })
}

module.exports = { postProfesor ,getProfesor , getProfesorId,deleteProfesor , updateProfesor }