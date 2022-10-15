// import Router 
const router = require('express').Router();

// import models 
const { Comment } = require('../../models');


//============================= USER Comment API ROUTES =============================//


// GET, get all comments from a user 
router.get('/', (req, res) => {
    Comment.findAll()
        .then(allUserCommentData => res.json(allUserCommentData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        })
});


// POST, create a new comment by user 
router.post('/', (req,res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
    })
        .then(createPostData => res.json(createPostData))
            .catch(err => {
                console.log(err)
                res.status(400).json(err);
            });
});

// DELETE, delete a comment from a ppst 
router.delete('/:id', (req,res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deleteUserComment => {
        if (!deleteUserComment) {
            res.status(404).json({ message: ' No user was found by this ID !' });
            return;
        }
        res.json(deleteUserComment);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})


// exports routes 
module.exports = router;