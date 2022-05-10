const router = require("express").Router();
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboardRoutes.js');
const homeRoutes = require('./homeRoutes.js');

// finish the required routes
// const apiRoutes =
router.use('/api', apiRoutes);
// const homeRoutes =
router.use('/', homeRoutes);
// const dashboardRoutes =
router.use('/dashboard', dashboardRoutes);


module.exports = router;