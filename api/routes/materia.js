const express = require("express");
const router = express.Router();
const {getMateria,postMateria, getMateriaId, updateMateria, deleteMateria } = require('../controllers/materia.controller')

router.get("/", getMateria);
router.post("/", postMateria);
router.get("/:id", getMateriaId);
router.put("/:id",updateMateria );
router.delete("/:id", deleteMateria);


module.exports = router;