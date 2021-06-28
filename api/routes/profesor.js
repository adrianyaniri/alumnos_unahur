const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { getProfesor, postProfesor, deleteProfesor, getProfesorId, updateProfesor } = require('../controllers/profesor.controller')

router.get('/',getProfesor );
router.get('/:id',auth, getProfesorId );
router.post('/',auth, postProfesor);
router.delete('/:id',auth,deleteProfesor);
router.put('/:id',auth,updateProfesor);


module.exports = router;