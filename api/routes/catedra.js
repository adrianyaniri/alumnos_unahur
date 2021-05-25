const express = require('express');
const router = express.Router();
const { getCatedra, postCatedra, getCatedraId, deleteCatedra } = require('../controllers/catedra.controller')

router.get('/',getCatedra );
router.post('/', postCatedra );
router.get('/:id', getCatedraId );
router.delete('/:id', deleteCatedra )


module.exports = router;