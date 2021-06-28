const express = require('express');
const router = express.Router();
const { getProfesor, postProfesor, deleteProfesor, getProfesorId, updateProfesor } = require('../controllers/profesor.controller')

router.get('/',getProfesor );
router.post('/', postProfesor);
router.get('/:id', getProfesorId );
router.delete('/:id', deleteProfesor);
router.put('/:id',updateProfesor);


module.exports = router;