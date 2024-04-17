// This module defines controller functions for handling CRUD operations on Privateer model instances
const Privateer = require('../../models/privateer'); // Require the Privateer model

module.exports = { // Export the controller functions
  index, // Function to list all privateers
  show, // Function to show a single privateer
  create, // Function to create a new privateer
  delete: deleteOne, // Function to delete a privateer
  update // Function to update a privateer
};

// Function to list all privateers associated with the logged-in user
async function index(req, res) {
  console.log("hitting index function", req.user ); // Log the current user information
  const privateers = await Privateer.find({createdBy: req.user._id}); // Find all privateers created by the logged-in user
  console.log(privateers); // Log the retrieved privateers
  res.status(200).json(privateers); // Send the privateers as a JSON response with status 200
}

// Function to show a single privateer by its ID
async function show(req, res) {
  const privateer = await Privateer.findById(req.params.id); // Find the privateer by the ID provided in the request parameters
  res.status(200).json(privateer); // Send the privateer as a JSON response with status 200
}

// Function to create a new privateer with the logged-in user as the creator
async function create(req, res) {
  console.log("hitting create function", req.user ); // Log the current user information
  req.body.createdBy = req.user._id // Set the createdBy field to the logged-in user's ID
  const privateer = await Privateer.create(req.body); // Create a new privateer with the request body data
  console.log(privateer); // Log the newly created privateer
  res.status(201).json(privateer); // Send the privateer as a JSON response with status 201
}

// Function to delete a privateer by its ID
async function deleteOne(req, res) {
  const deletedPrivateer = await Privateer.findByIdAndRemove(req.params.id); // Find the privateer by ID and remove it
  res.status(200).json(deletedPrivateer); // Send the deleted privateer as a JSON response with status 200
}

// Function to update a privateer by its ID
async function update(req, res) {
  const updatedPrivateer = await Privateer.findByIdAndUpdate(req.params.id, req.body, {new: true}); // Find the privateer by ID, update it with request body data, and return the updated document
  res.status(200).json(updatedPrivateer); // Send the updated privateer as a JSON response with status 200
}