const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig');


const auth = (req,res, next) => {

    if(!req.headers.authorization) {
        res.status(401).json({msg:'acceso denegado'})
    }
    else {
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, authConfig.secret, (error,encode) => {
            error ? res.status(500).json({msg: 'error al decodificar token'}) : next()
        })
    }
}


module.exports = auth;