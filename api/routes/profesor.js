const express = require('express');
const router = express.Router();
const { getProfesor, postProfesor} = require('../controllers/profesor.controller')


router.get('/',getProfesor);
router.post('/', postProfesor);


module.exports = router;