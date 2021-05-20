const models = require('../models')

const getCarrera = (req, res) => {
     models.carrera
        .findAll({
            attributes: ["id", "nombre"]
        })
        .then(carreras => res.send(carreras))
        .catch(() => res.sendStatus(500));
}

module.exports =  getCarrera;