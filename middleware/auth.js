const jwt = require('jsonwebtoken');


module.exports = (req,res,next) => {
    try {
        const token = req.headers.authorization;
        if(!token){
            res.status(401).send({message:"u must logged in"})
        }
        const decoded = jwt.verify(token,process.env.secretKey);
        req.userData = decoded;
        next();

    } catch (error){
        return res.status(401).json({message:"u must logged in"});
    }
}