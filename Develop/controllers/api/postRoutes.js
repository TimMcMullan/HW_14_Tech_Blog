const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    // Create a post
    try{
        const newPost = await Post.create({
            ...req.body,
            userId: req.session.userId
        });
        
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/:id", withAuth, async (req, res) => {
    // Update a post
    try{
        const updatePost = await Post.update(
            req.body,{
            userId: req.session.userId
            });
        
        res.status(200).json(updatePost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete("/:id", withAuth, async (req, res) => {
    // Delete the post
    try {
        const deletePost = await Post.destroy(
            { where: {usesrId: req.session.userId}          
            });
            res.status(200).json(deletePost);
    }  catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;