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

// POST, create a new user 
router.post('/', (req,res) => {
    // expecting { username: 'MZimm20', password: 'password' } // password is a min of 8 characters.
    User.create({ 
        username: req.body.username,
        password: req.body.password
    })
    .then(createUserData => res.json(createUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});






// exports routes 
module.exports = router;