// Finish the rest of this model
const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");
// const { post } = require("../controllers"); check if needed

class Post extends Model {}

Post.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize
    }
);

module.exports = Post;