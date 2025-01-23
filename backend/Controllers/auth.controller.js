const User = require("../Models/user.model")
const { validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.signup = async(req,res)=>{

    try{
        const error = validationResult(req);
        if(!error.isEmpty()){
                        return res.status(401).json({
                            success:false,
                            message:" Error",
                            error:error
                        })
        }
        const {name,email,password} = req.body;

        const existingUser = await User.findOne({email:email})
        if(existingUser){
            return res.status(401).json({
                success:false,
                message:"User already registered"
            })
        }

        // Hash the password 
        const hashPassword = await bcrypt.hash(password,10);

        const createUser = await User.create({name,email,password:hashPassword})
        return res.status(200).json({
            success:true,
            message:"User Registered",
            createUser
        })

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Server Error while signup",
            errorMessage:error.message
        })
    }
}

exports.login = async(req,res)=>{
    try{
        const error = validationResult(req);
        if(!error.isEmpty()){
            return res.status(401).json({
                success:false,
                message:"Error",
                error:error
            })
        } 

        const {email,password} = req.body;
        const existingUser = await User.findOne({email:email})
        if(!existingUser){
            return res.status(401).json({
                success:false,
                message:"User is not registered"
            })
        }

        // compare the password 
        const checkPassword = await bcrypt.compare(password,existingUser.password)

        if(checkPassword){

            const token =  jwt.sign(
                {
                    userId :existingUser._id,
                    email:existingUser.email
                },
                process.env.JWT_SECRET,
                {
                    expiresIn:"24h" 
                }
            )

            const options = {
                expires: new Date(Date.now() + 24*3600*1000),
                Credential:true
            }

            return res.cookie("token",token,options).status(200).json({
                success:true,
                message:"User logged in successfully",
                token
            })
        }
        else{
            return res.status(401).json({
                success:false,
                message:"Password is incorrect"
            })
        }
    }
    catch(error){
        return res.status(500).json({
            successs:false,
            message:"Server error while Login",
            errorMessage:error.message
        })
    }
}


