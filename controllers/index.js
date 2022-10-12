// import Router 
const router = require('express').Router();

// import routes 
const apiRoutes = require('./api/');

// use routes 
router.use('/api', apiRoutes);


router.use((req,res) => {
    res.status(404).end()
})
// export router
module.exports = router;
