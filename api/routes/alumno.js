const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const {getAlumno, postAlumno, getAlumnoId,deleteAlumno, updateAlumno } = require('../controllers/alumno.controller')


router.get('/',getAlumno);
router.get('/:id',getAlumnoId);
router.post('/',auth, postAlumno);
router.delete('/:id', auth,deleteAlumno );
router.put('/:id',auth, updateAlumno );

module.exports = router;