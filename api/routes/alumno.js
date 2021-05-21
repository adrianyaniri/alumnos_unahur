const express = require('express');
const router = express.Router();
const getAlumno = require('../controllers/alumno.controller')


router.get('/', getAlumno);

module.exports = router;