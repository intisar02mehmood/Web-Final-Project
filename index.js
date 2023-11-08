const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use port 3000 by default

// Serve static files (HTML, CSS, images)
app.use(express.static(__dirname));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Add more routes for other sections as needed

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
