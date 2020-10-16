const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    default: '',
  },
  reply: {
    type: String,
    required: true,
    trim: true,
    default: '',
  },
  likes: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
