const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    // we want to go ahead and finishing the routing to get all the posts
    try {
        const findPost = await Post.findAll({
            where: {
                userId: req.session.userID
            }
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

router.get("/new", withAuth, (req, res) => {
    // for showing new posts to the user

})

router.get("/edit/:id", withAuth, async (res, req) => {
    // To be able to find posts by primary key and render the edit post on the dashboard
    try {
        const editPost = await Post.findByPk(
            req.params.id
        )
        const alteredPost = editPost.get();
        res.render({
            layout: 'dashboard',
            alteredPost
        });
    } catch (err) {
        res.status(400).json(err);
    }
})


module.exports = router;