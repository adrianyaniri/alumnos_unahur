const express = require("express");
const router = express.Router();
const auth = require('../middlewares/auth');
const {getMateria,postMateria, getMateriaId, updateMateria, deleteMateria } = require('../controllers/materia.controller')

router.get("/", getMateria);
router.get("/:id", getMateriaId);
router.post("/",auth, postMateria);
router.put("/:id",auth,updateMateria );
router.delete("/:id",auth, deleteMateria);


module.exports = router;