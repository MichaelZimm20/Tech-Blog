// import Router 
const router = require('express').Router();

// import models 
const { Post, User , Comment } = require('../../models');

//============================= USER POST API ROUTES =============================//

// GET, get all users posts
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({ 
        attributes: ['id', 'title', 'posted_note', 'created_at'],

        // JOIN tables 
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
        })
        .then(allUserPostData => res.json(allUserPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});

























// exports routes 
module.exports = router;