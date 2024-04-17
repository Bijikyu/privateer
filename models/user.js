// This file defines the User model using Mongoose and includes methods for password hashing and validation.

const mongoose = require('mongoose'); // Require the mongoose library for MongoDB interactions
const bcrypt = require('bcrypt'); // Require the bcrypt library for password hashing
const Schema = mongoose.Schema; // Reference to the Schema constructor from mongoose

const SALT_ROUNDS = 6; // Define the number of rounds to use for bcrypt salt generation

// Define the user schema with fields and enable timestamps for created and updated times
const userSchema = new Schema({ 
    name: String, // Define a name field as a String
    email: String, // Define an email field as a String
    company: String, // Define a company field as a String
    password: String // Define a password field as a String
}, { 
    timestamps: true // Enable automatic creation of createdAt and updatedAt fields
});

// Middleware to hash the password before saving a user document
userSchema.pre('save', function(next) {
    const user = this; // 'this' refers to the instance of the user document being saved
    if (!user.isModified('password')) return next(); // If the password hasn't changed, proceed without hashing
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) { // Hash the password using bcrypt
      if (err) return next(err); // If an error occurs, pass it to the next middleware
      user.password = hash; // Replace the plain-text password with the hash
      next(); // Continue with saving the user document
    });
});

// Method to compare a candidate password with the user's hashed password
userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb); // Use bcrypt to compare the passwords
  };
  
// Set a toJSON method on the schema to customize the JSON representation of user documents
userSchema.set('toJSON', {
    transform: function(doc, ret) { // Define a transform function to modify the JSON output
      delete ret.password; // Remove the password field from the JSON output
      return ret; // Return the modified JSON object
    }
});

module.exports = mongoose.model('User', userSchema); // Export the User model for use elsewhere in the application