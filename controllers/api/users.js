// This module provides authentication functionality, including login and signup operations using JWT for user sessions.

const User = require('../../models/user'); // Require the User model from the models directory
const jwt = require('jsonwebtoken'); // Require the jsonwebtoken package for creating JWT tokens

const SECRET = process.env.SECRET; // Assign the environment variable SECRET to a constant for JWT signing

// Asynchronous function to handle user login
async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email}); // Find a user by email in the database
    if (!user) return res.status(401).json({err: 'bad credentials'}); // If user not found, return 401 Unauthorized
    user.comparePassword(req.body.password, (err, isMatch) => { // Compare the provided password with the stored hash
      if (isMatch) {
        const token = createJWT(user); // If password matches, create a JWT token for the user
        return res.json({ token }); // Send the JWT token to the client
      } else {
        return res.status(401).json({err: 'bad credentials'}); // If password does not match, return 401 Unauthorized
      }
    });
  } catch (err) {
    res.status(400).json(err); // Catch any errors and return 400 Bad Request
  }
}

// Asynchronous function to handle user signup
async function signup(req, res) {
    const user = new User(req.body); // Create a new User instance with the request body data
    try {
      await user.save(); // Save the new user to the database
      const token = createJWT(user); // Create a JWT token for the new user
      res.json({ token }); // Send the JWT token to the client
    } catch (err) {
      res.status(400).json(err); // Catch any errors and return 400 Bad Request
    }
}

// Function to create a JWT token for a user
function createJWT(user) {
    return jwt.sign(
      {user}, // data payload containing the user object
      SECRET, // Secret key for signing the JWT
      {expiresIn: '24h'} // Set the expiration time for the JWT to 24 hours
    );
}

module.exports = {
  signup, // Export the signup function for use in other modules
  login // Export the login function for use in other modules
};