const express = require("express");
const router = express.Router();

const { createBlog, getAllBlog, getById, updateById, deleteById } = require("../Controllers/blog.controller");
const { signup, login } = require("../Controllers/auth.controller");
const { authMiddleware } = require("../Middlewares/auth.middleware");
const {SignupValidator, loginValidator} = require("./validators")


router.post("/signup",SignupValidator,signup);
router.post("/login",loginValidator ,login)


router.post("/create", authMiddleware , createBlog);
router.get("/all",authMiddleware,getAllBlog)
router.get("/byId/:id",authMiddleware,getById);
router.put("/update/:id",authMiddleware,updateById);
router.delete("/delete/:id",authMiddleware,deleteById)


module.exports = router