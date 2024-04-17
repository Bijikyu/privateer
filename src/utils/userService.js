// This module handles user authentication, including signup, login, logout, and fetching the current user.

import tokenService from './tokenService'; // Imports the tokenService for handling JWT tokens

const BASE_URL = '/api/users/'; // Sets the base URL for the user API

// Function to handle user signup
function signup(user) {
  return fetch(BASE_URL + 'signup', { // Initiates a POST request to the signup endpoint
    method: 'POST', // Specifies the method as POST
    headers: new Headers({'Content-Type': 'application/json'}), // Sets the content type header to application/json
    body: JSON.stringify(user) // Converts the user object to a JSON string for the request body
  })
  .then(res => { // Handles the response from the fetch call
    if (res.ok) return res.json(); // If response is ok, parse it as JSON
    throw new Error('Email already taken!'); // If not ok, throw an error with a message
  })
  .then(({token}) => tokenService.setToken(token)); // Extracts the token from the response and sets it using tokenService
}

// Function to get the current user from the token
function getUser() {
  return tokenService.getUserFromToken(); // Calls getUserFromToken method from tokenService to decode and return the user
}

// Function to handle user logout
function logout() {
  tokenService.removeToken(); // Calls removeToken method from tokenService to clear the token
}

// Function to handle user login
function login(creds) {
  return fetch(BASE_URL + 'login', { // Initiates a POST request to the login endpoint
    method: 'POST', // Specifies the method as POST
    headers: new Headers({'Content-Type': 'application/json'}), // Sets the content type header to application/json
    body: JSON.stringify(creds) // Converts the credentials object to a JSON string for the request body
  })
  .then(res => { // Handles the response from the fetch call
    if (res.ok) return res.json(); // If response is ok, parse it as JSON
    throw new Error('Bad Credentials!'); // If not ok, throw an error with a message
  })
  .then(({token}) => tokenService.setToken(token)); // Extracts the token from the response and sets it using tokenService
}

// Exports the functions for use in other parts of the application
export default {
  signup, // Exports the signup function
  getUser, // Exports the getUser function
  logout, // Exports the logout function
  login // Exports the login function
};