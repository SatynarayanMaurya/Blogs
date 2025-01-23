const express = require("express")
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000
const database = require("./Config/connectDB")
const routes = require("./Routes/routes")
const cookieParser = require("cookie-parser")

database.connect();

app.use(express.json())
app.use(cookieParser())
app.use(routes)
app.get("/",(req,res)=>{
    res.send("Hello")
})
app.listen(port,()=>{
    console.log("APP is running")
})



