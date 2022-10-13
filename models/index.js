const User = require('./User');
const Post = require('./Post');


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
})

module.exports = { User, Post };