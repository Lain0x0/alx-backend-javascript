/**
 * Create an HTTP Server using node js
 */
const { createServer } = require('http');

// Create an HTTP server
const app = createServer((req, res) => {
  // Set the response status code to (200)
  res.statusCode = 200;

  // Set the response header to indicate plain text content
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body with the text `Helllo Holberton School`
  res.end('Hello Holberton School!');
});

// listening on port 1245
app.listen(1245, () => {
  // Custom log message that show server is running
  console.log('Server running at http://localhost:1245/');
});

// Export the server instance for use in other modules
module.exports = app;
