const { route } = require("../../../.Main/controllers/api");

const router = require("express").Router();

// Finish the required pathing for these variables
// const userRoutes = ;
const userRoutes = require('./userRoutes');
router.use('/user', userRoutes)
// const postRoutes = ;
const postRoutes = require('./postRoutes');
router.use('/post', postRoutes)
// const commentRoutes = ;
const commentRoutes = require('./commentRoutes');
router.use('/comment', commentRoutes)

// write the rest of the router.use routes

module.exports = router;