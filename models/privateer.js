const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const privateerSchema = new Schema({
  booty: {
      type: String, 
      required: true
  },
  bounty: {
      type: Number, 
      default: 1,
  },
  canon: {
      type: String,
  },
  createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  }
},{
  timestamps: true
});

module.exports = mongoose.model('Privateer', privateerSchema);  