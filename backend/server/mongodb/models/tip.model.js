const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const climates = [
  'Tropical wet',
  'Tropical wet and dry',
  'Semiarid',
  'Desert (arid)',
  'Mediterranean',
  'Humid subtropical',
  'Marine West Coast',
  'Humid continental',
  'Subarctic',
  'Tundra',
  'Icecap',
  'Highland',
  'NONE'
];

const TipSchema = new Schema({
  tip_info: {
    type: String,
    required: true,
    trim: true,
    default: '',
  },
  climate: {
    type: String,
    required: true,
    enum: climates,
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
