```javascript
// This module provides functions to interact with the privateers API, handling CRUD operations.

import tokenService from './tokenService'; // Imports the tokenService module for authentication token handling.

const BASE_URL = '/api/privateers'; // Sets the base URL for the privateers API.

// Function to create a new privateer entry using a POST request.
export function create(priv) {
  return fetch(BASE_URL, { // Initiates a fetch request to the BASE_URL.
    method: 'POST', // Specifies the method as POST.
    headers: { // Sets the headers for the request.
        'Content-type': 'application/json', // Indicates the content type as JSON.
        'Authorization': 'Bearer ' + tokenService.getToken() // Adds the Authorization header with the bearer token.
    },
    body: JSON.stringify(priv) // Converts the privateer object to a JSON string for the request body.
  }).then(res => res.json()); // Parses the response to JSON.
}

// Function to retrieve all privateer entries using a GET request.
export function getAll() {
    return fetch(BASE_URL, { // Initiates a fetch request to the BASE_URL.
      headers: { // Sets the headers for the request.
        'Authorization': 'Bearer ' + tokenService.getToken() // Adds the Authorization header with the bearer token.
      },
    }).then(res => res.json()); // Parses the response to JSON.
}

// Function to update an existing privateer entry using a PUT request.
export function update(priv) {
  return fetch(`${BASE_URL}/${priv._id}`, { // Initiates a fetch request to the privateer's specific URL.
    method: 'PUT', // Specifies the method as PUT.
    headers: {'content-type': 'application/json'}, // Indicates the content type as JSON.
    body: JSON.stringify(priv) // Converts the updated privateer object to a JSON string for the request body.
  }).then(res => res.json()); // Parses the response to JSON.
}

// Function to delete a privateer entry using a DELETE request.
export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, { // Initiates a fetch request to the privateer's specific URL with the given ID.
    method: 'DELETE' // Specifies the method as DELETE.
  }).then(res => res.json()); // Parses the response to JSON.
}

// Default export object containing all the CRUD functions.
export default {
  create, // Exports the create function.
  getAll, // Exports the getAll function.
  update, // Exports the update function.
  deleteOne // Exports the deleteOne function.
};