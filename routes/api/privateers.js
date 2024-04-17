// This module defines the routes for the privateers API endpoints.
var express = require('express'); // Require the express module
var router = express.Router(); // Create a new Router instance
var privateersCtrl = require('../../controllers/api/privateers'); // Require the privateers controller

router.use(require('../../config/auth')); // Use the authentication configuration for all routes

// Routes for the privateers API
/* GET /api/privateers */
router.get('/', privateersCtrl.index); // Define a GET route for the index action of privateers
router.get('/:id', privateersCtrl.show); // Define a GET route for the show action of a single privateer by id
router.post('/', privateersCtrl.create); // Define a POST route for creating a new privateer
router.delete('/:id', privateersCtrl.delete); // Define a DELETE route for deleting a privateer by id
router.put('/:id', privateersCtrl.update); // Define a PUT route for updating a privateer by id

module.exports = router; // Export the router for use in other modules