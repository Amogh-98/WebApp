// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Set up middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Set up a route for the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Set up a route to handle form submissions
app.post('/greet', (req, res) => {
    const name = req.body.name || 'Guest';
    res.send(`<h1>Hello, ${name}!</h1><a href="/">Back to Home</a>`);
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
