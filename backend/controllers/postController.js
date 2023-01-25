const { response } = require("express")
const db = require("../models")

const Post = db.posts


const createPost = async (req, res)=>{
    const data = {
        name: req.body.name,
        message: req.body.message
    }

    const r = await Post.create(data)
    res.status(200).json(r)
}
const allposts = async (req, res)=>{
    const data = await Post.findAll({})
    res.json(data)
}

const post  = async (req, res)=>{
    const id = req.params.id

    const p = await Post.findOne({where: {id:id}})

    res.json(p)
}

const updatePost = async (req, res)=>{
    const id = req.params.id

    const data = {
        name: req.body.name,
        message: req.body.message
    }
    const r = await Post.update(data, {where: {id:id}})
    res.json("Data Updated")
}

const deletePost = async(req, res)=>{
    const id = req.params.id
    await Post.destroy({where: {id:id}})

    res.json("Post Deleted Successfully")
}





module.exports = {
    createPost,
    allposts,
    post,
    updatePost,
    deletePost
}