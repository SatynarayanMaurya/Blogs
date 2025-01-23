const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.authMiddleware = async(req,res,next)=>{
    try{
        const token = req.cookies.token || req.header("Authorization").split(" ")[1];

        try{
            const decode =  jwt.verify(token, process.env.JWT_SECRET)
            req.user = decode;
            next();
        }
        catch(error){
            return res.status(401).json({
                success:false,
                message:"Invalid token",
                errorMessage:error.message
            })
        }
        
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Server Error in auth middleware",
            errorMessage:error.message
        })
    }
}