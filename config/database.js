// This file/module is responsible for setting up and connecting to a MongoDB database using Mongoose.

const mongoose = require('mongoose'); // Require the mongoose library

// Connect to the MongoDB database using the connection string from environment variables
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true, // Use the new URL parser instead of the deprecated one
  useUnifiedTopology: true, // Enable the new topology engine as the old one is deprecated
  useCreateIndex: true, // Use createIndex() instead of ensureIndex() for index creation
  useFindAndModify: false // Make findOneAndUpdate() and findOneAndRemove() use native findOneAndUpdate() rather than findAndModify()
});

const db = mongoose.connection; // Get the default connection to the MongoDB database

// Listen for the 'connected' event and log the connection details
db.once('connected', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`); // Log the database name and host information upon successful connection
});