const models = require('../models');

const getAlumno = (req, res) => {
    models.alumno
        .findAll({
            attributes: ["id", "nombre","email","id_carrera","id_materia"]
        })
        .then(carreras => res.send(carreras))
        .catch(() => res.sendStatus(500));
}


module.exports = getAlumno