const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/config");

class Comment extends Model {}

Comment.init(
    // finish this Comment Model
    {
        body: {
                type: DataTypes.STRING,
                allowNull: false,
        },
    },
    {
        sequelize
    }
);

module.exports = Comment;