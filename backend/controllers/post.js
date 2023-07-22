import express from "express";
import Post from "../models/post.js";
import Comment from "../models/comment.js"

const router = express.Router()

const catcher = (res) => (error) => res.status(400).json({error}) 


// "/post" - "index route"
router.get("/", async (req, res) => {
   const posts = await Post.find({}).catch(catcher(res))
   console.log(posts)
   res.json(posts)
})

// "/post/:id" - "show route"
router.get("/:id", async (req, res) => {
    const post = await Post.findById(req.params.id).catch(catcher(res))
    const comments = await Comment.find({post: req.params.id}).catch(catcher(res))
    res.json({post, comments})
 })

// "/post" - "create route"
router.post("/", async (req, res) => {
    const post = await Post.create(req.body).catch(catcher(res))
    res.json(post)
 })

// "/post/:id" - "update route"
router.put("/:id", async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body).catch(catcher(res))
    res.json(post)
 })

// "/post/:id" - "delete route"
router.delete("/:id", async (req, res) => {
    const post = await Post.findByIdAndRemove(req.params.id).catch(catcher(res))
    res.json(post)
    const comment = await Comment.findByIdAndRemove({post: req.params.id}).catch(catcher(res))
    res.json(comment)
    
 })


export default router