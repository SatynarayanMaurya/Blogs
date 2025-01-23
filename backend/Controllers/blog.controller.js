const User = require("../Models/user.model")
const Blog = require("../Models/blog.model")

exports.createBlog = async(req ,res)=>{
    try{
        const {title, content} = req.body;
        const userId = req.user.userId;
        if(!title || !content ) {
            return res.status(401).json({
                success:false,
                message:"Please provide title and content of blog."
            })
        }

        const createBlog = await Blog.create({user:userId,title,content})
        await User.findByIdAndUpdate({_id:userId},{$push:{blogs:createBlog._id}},{new:true})
        return res.status(200).json({
            success:true,
            message:"Blog created successfully",
            createBlog,
        })

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Server Error while creating blog",
            errorMessage:error.message
        })
    }
}

exports.getAllBlog = async(req,res)=>{
    try{
        const getAllBlog = await Blog.find({});
        return res.status(200).json({
            success:true,
            message:"All blogs fetched successfully",
            getAllBlog
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Server Error while getting all the blogs",
            errorMessage:error.message
        })
    }
}

exports.getById = async(req,res)=>{
    try{
        const {id} = req.params;
        if(!id){
            return res.status(401).json({
                success:false,
                message:"Blog id not found"
            })
        }
        const result = await Blog.findOne({_id:id})
        return res.status(200).json({
            success:true,
            message:"Single Blog fetched successfully",
            result
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Server Error while getting blog using id",
            errorMessage:error.message
        })
    }
}

exports.updateById = async(req,res)=>{
    try{
        const {id} = req.params;
        const {title,content} = req.body;
       
        if(!id){
            return res.status(401).json({
                success:false,
                message:"Blog id not found"
            })
        }
        if(!title && !content){
            return res.status(401).json({
                success:false,
                message:"Please provide title or content that you want to update"
            })
        }

        const result = await Blog.findByIdAndUpdate({_id:id},{title:title && title,content : content&& content},{new:true})
        return res.status(200).json({
            success:true,
            message:"Blog updated ",
            result
        })

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Server Error in updating the blog",
            errorMessage:error.message
        })
    }
}

exports.deleteById = async(req,res)=>{
    try{
        const {id} = req.params;
        const userId = req.user.userId
        if(!id){
            return res.status(401).json ({
                success:false,
                message:"Blog id not found",
            })
        }
        await User.findByIdAndUpdate({_id:userId},{$pull:{blogs:id}},{new:true})
         await Blog.findByIdAndDelete({_id:id},{new:true})
        return res.status(200).json({
            success:true,
            message:"Blog deleted"
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"Server Error while deleting the blog",
            errorMessage:error.message
        })
    }
}