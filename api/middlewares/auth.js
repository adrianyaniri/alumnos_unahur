
const auth = (req,res, next) => {

    if(! req.headers.authorization) {
        res.status(401).json({msg:'acceso denegado'})
    }
    else {
        next()
    }

}


module.exports = auth;