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
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User, 
                    attributes: ['username']
                }
            },
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


// GET, get single users' post
router.get('/:id', (req, res) => {
    Post.findOne({
        where: { id: req.params.id },
        attributes: ['id', 'title', 'posted_note', 'created_at'],

        // JOIN tables 
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
        .then(singleUserPostData => {
            if(!singleUserPostData) {
                res.status(404).json({ message: ' No post found with this user ID! '});
                return;
            }
            res.json(singleUserPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});


// POST, create a new user post
router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        posted_note: req.body.posted_note,
        user_id: req.body.user_id
    })
        .then(createUserPostData => res.json(createUserPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
});


// PUT, update user post
router.put('/:id', (req, res) => {
    Post.update(
        {
            title: req.body.title,
            posted_note: req.body.posted_note,
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(updateUserPost => {
            if (!updateUserPost) {
                res.status(404).json({ message: ' No post was found by this ID !' });
                return;
            }
            res.json(updateUserPost);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// DELETE, delete a user's post
router.delete('/:id', (req,res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deleteUserPost => {
        if (!deleteUserPost) {
            res.status(404).json({ message: ' No post was found by this ID !' });
            return;
        }
        res.json(deleteUserPost);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
 


// exports routes 
module.exports = router;