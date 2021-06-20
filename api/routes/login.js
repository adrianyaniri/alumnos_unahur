const express = require('express');
const router = express()

const loginIn = require('../controllers/login.controller')


router.post('/',loginIn);

module.exports = router;