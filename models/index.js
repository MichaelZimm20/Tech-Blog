const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');


// create associations 

// user can create many posts 
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// many posts can belond to a single user 
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// comments can belong to users, when user comments on posts 
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// comments go under posts, so a comment would belong to it
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

// a user can make many comments under any post
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// a post can have many comments from various users 
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});


module.exports = { User, Post, Comment };