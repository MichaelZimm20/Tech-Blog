// import Model class and DataTypes objects 
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// creates a Post model
class Post extends Model {}

// define table columns and configs
Post.init(
    {
        // define id column
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // define the title column
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // define an post_url column
        post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // verfiying the string is a url 
                isURL: true
            }
        },
         // define an user_id column
         user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);




module.exports = Post;