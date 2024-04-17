// This is an Express server configuration file for a Single Page Application (SPA).
// It sets up middleware, static file serving, API routes, and a catch-all route for client-side routing.

const express = require('express'); // Require the express module to create an Express application
const path = require('path'); // Require the path module for working with file and directory paths
const favicon = require('serve-favicon'); // Require the serve-favicon middleware to serve a favicon
const logger = require('morgan'); // Require the morgan logger middleware for HTTP request logging

const app = express(); // Create an instance of an Express application

require('dotenv').config(); // Load environment variables from a .env file into process.env
require('./config/database'); // Require the database configuration file which connects to the database

const privateersRouter = require('./routes/api/privateers'); // Require the privateers API router

app.use(logger('dev')); // Use morgan logger middleware with the 'dev' format for logging requests
app.use(express.json()); // Use middleware to parse JSON bodies of incoming requests

// Serve the favicon and static files from the 'build' directory
app.use(favicon(path.join(__dirname, 'build', 'privateer.ico'))); // Serve the favicon using serve-favicon middleware
app.use(express.static(path.join(__dirname, 'build'))); // Serve static files from the 'build' directory

app.use(require('./config/auth')); // Use the authentication configuration middleware

// API routes configuration
app.use('/api/users', require('./routes/api/users')); // Use the users API router
app.use('/api/privateers', privateersRouter); // Use the privateers API router

// Catch-all route for SPA client-side routing
app.get('/*', function(req, res) { // Define a catch-all route to serve the SPA's index.html for any path
  res.sendFile(path.join(__dirname, 'build', 'index.html')); // Send the index.html file when any route is hit
});

// Server configuration
const port = process.env.PORT || 3001; // Set the port to the environment variable PORT or default to 3001

app.listen(port, function() { // Start the server listening on the specified port
  console.log(`Express app running on port ${port}`) // Log a message when the server starts successfully
});