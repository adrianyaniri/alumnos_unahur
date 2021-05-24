const express = require('express');
const router = express.Router();
const {getAlumno, postAlumno } = require('../controllers/alumno.controller')


router.get('/', getAlumno);
router.post('/',postAlumno);

module.exports = router;