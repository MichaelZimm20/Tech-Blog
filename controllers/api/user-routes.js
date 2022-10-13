// import Router 
const router = require('express').Router();

// import models 
const { User, Post, Comment } = require('../../models');

//============================= API ROUTES =============================//

// GET, get all users 
router.get('/', (req, res) => {
    User.findAll({})
        .then(allUserData => res.json(allUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
});

// GET, get users by ID 
router.get('/:id', (req, res) => {
    User.findOne({
        where: { id: req.params.id }
    })
        .then(singleUserData => {
            if (!singleUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(singleUserData)

        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});


// exports routes 
module.exports = router;