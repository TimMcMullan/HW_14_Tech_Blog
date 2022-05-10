const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get("/", async (req, res) => {
    // get all posts for the homepage
    try {
        const findPost = await Post.findAll({
        });
        const getPost = findPost.map((getPost) =>
            getPost.get());
        res.render({
            layout: 'dashboard',
            getPost
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/post/:id", async (req, res) => {
    // get a single post
    try {
        const getPost = await Post.findByPk(
            req.params.id, {
                include: [User, {
                    model: Comment
                }]
            }
        )
        const otherPost = getPost.get();
        res.render({
            otherPost
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/login", (req, res) => {
    // login
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    } res.render ('login')
});

router.get("/signup", (req, res) => {
    // signup
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    } res.render ('signup')
});

module.exports = router;