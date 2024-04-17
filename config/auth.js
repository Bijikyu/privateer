// Middleware to authenticate and decode JWT tokens in HTTP requests
const jwt = require('jsonwebtoken'); // Require the jsonwebtoken package
const SECRET = process.env.SECRET; // Retrieve the secret key from environment variables

// Middleware function to verify the JWT token in the request
module.exports = function(req, res, next) {
  let token = req.get('Authorization') || req.query.token; // Get the token from the Authorization header or query parameter
  if (token) { // Check if the token exists
    token = token.replace('Bearer ', ''); // Remove the 'Bearer ' prefix from the token if present
    jwt.verify(token, SECRET, function(err, decoded) { // Verify the token using the secret key
      if (err) { // If there is an error during verification
        return next(err); // Pass the error to the next middleware
      } else { // If the token is successfully verified
        req.user = decoded.user; // Attach the decoded user information to the request object
        return next(); // Proceed to the next middleware
      }
    });
  } else { // If no token is provided
    next(); // Proceed to the next middleware without authentication
  }
};