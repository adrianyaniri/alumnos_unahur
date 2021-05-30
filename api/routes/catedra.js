const express = require('express');
const router = express.Router();
const { getCatedra, postCatedra, getCatedraId, deleteCatedra, updateCatedra } = require('../controllers/catedra.controller')

router.get('/',getCatedra );
router.post('/', postCatedra );
router.get('/:id', getCatedraId );
router.delete('/:id', deleteCatedra );
router.put('/:id',updateCatedra);


module.exports = router;