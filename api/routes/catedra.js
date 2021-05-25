const express = require('express');
const router = express.Router();
const { getCatedra, postCatedra} = require('../controllers/catedra.controller')

router.get('/',getCatedra );
router.post('/', postCatedra );


module.exports = router;