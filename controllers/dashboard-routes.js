// import express router, models, and sequelize connection 
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User , Comment } = require('../models');

// protecting routes with middleware and ensuring a user is loggedIn
const withAuth = require('../utils/auth');

//============================= DASHBOARD ROUTES =============================//


// GET, render dashboard handlebar
router.get('/', withAuth, (req,res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
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
        // serialize data
        const posts = dbPostData.map(post => post.get({ plain: true }))
        // render homepage handlebars to display html
        res.render('dashboard', { 
            posts,
            loggedIn: true 
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

// GET, to render the edit-post data 
router.get('/edit/:id', withAuth, (req, res) => {
    Post.findByPk(req.params.id, {
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
        if(dbPostData) {
            // serialize data
            const post = dbPostData.get({ plain: true });
            // render homepage handlebars to display html
            res.render('edit-post', { 
                post,
                loggedIn: true 
            });
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
    
});


// export router
module.exports = router;