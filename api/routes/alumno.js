const express = require('express');
const router = express.Router();
const {getAlumno, postAlumno, getAlumnoId,deleteAlumno, updateAlumno } = require('../controllers/alumno.controller')


router.get('/', getAlumno);
router.get('/:id',getAlumnoId);
router.post('/',postAlumno);
router.delete('/:id', deleteAlumno );
router.put('/:id', updateAlumno );

module.exports = router;