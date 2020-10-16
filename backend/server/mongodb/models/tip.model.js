const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TipSchema = new Schema({
  tip_info: {
    type: String,
    required: true,
    trim: true,
    default: '',
  },
  region: {
    type: String,
    required: true,
    enum: ['Forest', 'Grassland', 'Tundra', 'Desert', 'Ice Sheet', 'NONE'],
    default: 'NONE',
  },
  likes: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Tip = mongoose.model('Tip', TipSchema);

module.exports = Tip;
