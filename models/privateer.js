// This file defines the Privateer model using Mongoose, which represents a collection in the MongoDB database.

const mongoose = require('mongoose'); // Require the mongoose library to interact with MongoDB
const Schema = mongoose.Schema; // Reference to the Schema constructor from mongoose

// Define the schema for the Privateer model with its fields and options
const privateerSchema = new Schema({
  booty: {
      type: String, // Defines a 'booty' field of type String
      required: true // Makes the 'booty' field required
  },
  bounty: {
      type: Number, // Defines a 'bounty' field of type Number
      default: 1, // Sets the default value for 'bounty' to 1
  },
  canon: {
      type: String, // Defines a 'canon' field of type String
  },
  createdBy: {
      type: Schema.Types.ObjectId, // Defines a 'createdBy' field as an ObjectId reference
      ref: 'User' // Establishes a reference to the 'User' model
  }
},{
  timestamps: true // Enables automatic creation of createdAt and updatedAt timestamps
});

// Export the Privateer model, which will be a collection in the database
module.exports = mongoose.model('Privateer', privateerSchema);  