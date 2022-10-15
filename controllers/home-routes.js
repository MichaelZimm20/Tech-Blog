const router = require('express').Router();

// import models 
const { Post, User , Comment } = require('../models');

//============================= HOMEPAGE ROUTES =============================//

// GET, get all comments from a user 
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
        .then(dbPostData => {     
            const posts = dbPostData.map(post => post.get({ plain: true }))
            // render homepage handlebars to display html
            res.render('homepage', { posts });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err)
        });
   
    
});



// export router
module.exports = router;