const models = require('../models');

const getAlumno = (req, res) => {
    models.alumno
        .findAll({
            attributes: ["id", "nombre","email","id_carrera","id_materia"],
            include:[
                {
                    as:'Carrera_Relacionada',
                    model:models.carrera,
                    attributes:['nombre']
                },
                {
                    as:'Materia_Relacionada',
                    model: models.materia,
                    attributes:['nombre']
                }
            ]

        })
        .then(carreras => res.send(carreras))
        .catch(() => res.sendStatus(500));
}
const postAlumno = (req,res) =>{
    models.alumno
        .create({ nombre: req.body.nombre,
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
                res.sendStatus(500)
            }
        });
}

module.exports = { getAlumno, postAlumno }