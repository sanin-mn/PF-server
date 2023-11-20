const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
    console.log("Inside jwt Middleware");
    const token = req.headers['authorization'].split(" ")[1]
    try{
    const jwtResponse = jwt.verify(token,"superSecretKey123")
    console.log(jwtResponse);
    req.payload = jwtResponse.userId
    next()
    }catch(err){
        res.status(401).json("Authorisation failed !!! Please login")
    }
}

module.exports = jwtMiddleware