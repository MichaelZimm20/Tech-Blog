// import Router 
const router = require('express').Router();

// import api routes and prefix
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');


// use api routes 
router.use('/users', userRoutes);
router.use('/posts', postRoutes);



// export router 
module.exports = router;