const jwt = require('jsonwebtoken');
const config = require('../../config/env');
const secret = config.jwt.secret;

function verificaJWT(req, res, next){
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({auth: false, message: "No token provided."});

    jwt.verify(token, secret, function(err, decoded) {
        if(err) return res.status(500).json({auth: false, message: "Failed to authenticate token."});

        req.userId = decoded.id;
        next();
    })
}

module.exports = verificaJWT;