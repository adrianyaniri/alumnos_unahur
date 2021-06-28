const express = require("express");
const router = express.Router();
const auth = require('../middlewares/auth');
const { getCarrera,postCarrera,getCarreraId , updateCarrera,deleteCarrera } = require('../controllers/carrera.controller')

router.get("/",getCarrera);
router.get("/:id",getCarreraId);
router.post("/",auth,postCarrera);
router.put("/:id",auth, updateCarrera);
router.delete("/:id",auth, deleteCarrera );

module.exports = router;
