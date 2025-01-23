const mongoose = require("mongoose")
require("dotenv").config();


exports.connect = ()=>{
    mongoose.connect(process.env.DB_URL)
    .then(()=>console.log("Data base connection successful"))
    .catch((error)=>{
        console.log("Data base connection failed : ",error)
        process.exit(1)
    })
}