const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    // fill out the rest of the belongsTo relationship
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    // fill out the rest of the hasMany relationship
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongTo(User, {
    // fill out the rest of the belongsTo relationship
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Comment,
    Post
};