/**
 * Using express in node js to create an HTTP Server
 */
const express = require('express');// Import the Express framework

const app = express();// Create an instance of the Express application

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');// Send response when this route is accessed
});

// Start & listen to the server on 1245 port
app.listen(1245, () => {
  console.log('Server listening on port 1245');// Log a message when the server starts
});


// module export
module.exports = app;
