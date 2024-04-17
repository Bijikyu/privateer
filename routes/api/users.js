// This module defines routes for user authentication including signup and login.

const express = require('express'); // require the express module
const router = express.Router(); // create a new router object to handle routes
const usersCtrl = require('../../controllers/api/users'); // require the users controller module from the specified path

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup); // define a POST route for user signup that calls the signup method in the users controller
router.post('/login', usersCtrl.login); // define a POST route for user login that calls the login method in the users controller

module.exports = router; // export the router object for use in other modules