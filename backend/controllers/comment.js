import express from "express";
import Comment from "../models/comment.js";

const router = express.Router()

const catcher = (res) => (error) => res.status(400).json({error}) 

 // "/comment/:id" - "create route"
router.post("/:id", async (req, res) => {
   const comment = await Comment.create({comment: req.body.comment,
post: req.params.id}).catch(catcher(res))
   res.json(comment)
})

router.get("/:id", async (req, res) => {
    const comments = await Comment.find({post: req.params.id}).catch(catcher(res))
    res.json(comments)
 })


export default router