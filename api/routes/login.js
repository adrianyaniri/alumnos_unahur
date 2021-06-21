const express = require('express');
const router = express.Router();
const {loginUp, loginIn } = require('../controllers/login.controller')

router.post("/", loginUp)
router.post("/loginIn",loginIn)

module.exports = router;