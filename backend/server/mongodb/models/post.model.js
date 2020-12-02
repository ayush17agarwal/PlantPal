const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  image: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    default: '',
  },
  caption: {
    type: String,
    required: false,
    trime: true,
    default: '',
  },
  likes: [],
  comments: [],
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
