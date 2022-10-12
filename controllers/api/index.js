// import Router 
const router = require('express').Router();

// import api routes and prefix
const userRoutes = require('./user-routes.js');

// use api routes 
router.use('/users', userRoutes);

// export router 
module.exports = router;