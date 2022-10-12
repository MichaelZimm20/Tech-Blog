// import Router 
const router = require('express').Router();

// import models 
const { User, Post, Comment } = require('../../models');

//============================= API ROUTES =============================//

// GET, get all users 
router.get('/', (req,res) => {
    User.findAll({})
    .then(allUserData => res.json(allUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
});


// exports routes 
module.exports = router;