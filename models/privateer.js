const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const privateerSchema = new Schema({
  product: {
      type: String, 
      required: true
    },
  bounty: {
      type: Number, 
      default: 1,
    },
  canon: {
      type: String,
    }
},{
  timestamps: true
});

module.exports = mongoose.model('Privateer', privateerSchema);