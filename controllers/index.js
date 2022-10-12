// import Router 
const router = require('express').Router();

// import routes 
const apiRoutes = require('./api/');

// use routes 
router.use('/api', apiRoutes);

// export router
module.exports = router;
