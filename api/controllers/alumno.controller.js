const models = require('../models');

const getAlumno = (req, res) => {

    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);

    models.alumno
        .findAll({
            attributes: ["id", "nombre","email","id_carrera","id_materia"],
            include:[
                {
                    as:'Carrera_Relacionada',
                    model:models.carrera,
                    attributes:['nombre','id']
                },
                {
                    as:'Materia_Relacionada',
                    model: models.materia,
                    attributes:['nombre','id']
                }
            ],
            offset: (page -1) * limit,
            limit: limit

        })
        .then(alumno => res.send(alumno))
        .catch(() => res.sendStatus(500));
}

const postAlumno = (req,res) =>{
    models.alumno
        .create({
            nombre: req.body.nombre,
            apellido:req.body.apellido,
            email: req.body.email,
            id_carrera: req.body.id_carrera,
            id_materia: req.body.id_materia,
            })
        .then(alumno => res.status(201).send({id:alumno.id}))
        .catch(error => {
            if (error === "SequelizeUniqueConstraintError: Validation error"){
                res.status(400).send('Bad request: existe otro alumno con ese nombre')
            }
            else{
                console.log(`Error al intentar insertar en la base de datos: ${error}`)
                res.sendStatus(500)
            }
        });
}

const findAlumno = (id, {onSuccess, onNotFound, onError}) => {
    models.alumno
        .findOne({
            attributes: ["id", "nombre","apellido", "id_carrera","id_materia"],
            where: {id}
        })
        .then(materia => (materia ? onSuccess(materia) : onNotFound()))
        .catch(() => onError())
}

const getAlumnoId = (req,res) =>{
    findAlumno(req.params.id, {
        onSuccess: alumno => res.send(alumno),
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
}

const updateAlumno = (res,req) => {
    const onSuccess = alumno =>
        alumno
            .update(
                {
                    nombre: req.body.nombre,
                    apellido:req.body.apellido,
                    email: req.body.email,
                    id_materia: req.body.id_materia,
                    id_carrera: req.body.id_carrera
                } ,
                { fields: ["nombre","apellido","email","id_materia",'id_carrera']
                })
            .then( ()=> res.sendStatus(200))
            .catch( error => {
                if (error ==="SequelizeUniqueConstraintError: Validation error" ){
                    res.status(400).send('error no existe id')
                }
                else {
                    console.log(`error al actualizar la base de datos: ${error}`)
                    res.sendStatus(500)
                }
            });
    findAlumno(req.params.id, {
        onSuccess,
        onNotFound: () => res.sendStatus(404),
        onError: () => res.sendStatus(500)
    });
}

const deleteAlumno = (req,res) =>{
    const onSuccess = alumno =>
        alumno
            .destroy()
            .then( () => res.sendStatus(200))
            .catch( () => res.sendStatus(500));
    findAlumno(req.params.id, {
        onSuccess,
        onNotFound: () => res.sendStatus(400),
        onError:() => res.sendStatus(500)
     })
}

module.exports = { getAlumno, postAlumno, getAlumnoId, deleteAlumno , updateAlumno }