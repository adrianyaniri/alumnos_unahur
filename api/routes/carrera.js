const express = require("express");
const router = express.Router();
const { getCarrera,postCarrera,getCarreraId , updateCarrera,deleteCarrera } = require('../controllers/carrera.controller')

router.get("/",getCarrera);
router.post("/",postCarrera);
router.get("/:id",getCarreraId);
router.put("/:id", updateCarrera);
router.delete("/:id", deleteCarrera );

module.exports = router;
