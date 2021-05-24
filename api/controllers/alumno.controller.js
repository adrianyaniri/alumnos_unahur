const models = require('../models');

const getAlumno = (req, res) => {
    models.alumno
        .findAll({
            attributes: ["id", "nombre","email","id_carrera","id_materia"]
        })
        .then(carreras => res.send(carreras))
        .catch(() => res.sendStatus(500));
}
const postAlumno = (req, res) =>{
    models.alumno
        .create({
            nombre: req.body.nombre,
            email: req.body.email,
            id_carrera: req.body.id_carrera,
            id_materia: req.body.id_materia
        })
        .then(alumno => res.sendStatus(201).send({ id: alumno.id }))
        .catch(error => {
            (error === "SequelizeUniqueConstraintError: Validation error"
                ? res.sendStatus(400).send("'Bad request: existe otra carrera con el mismo nombre'")
                : res.sendStatus(500) )
        })
}

module.exports = { getAlumno, postAlumno }