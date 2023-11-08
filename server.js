const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/image'));
// Define a route to serve the HTML form
app.get('/', (req, res) => {
  // Serve the HTML form (the code you provided)
  res.sendFile(__dirname + '/index.html');
});

// Define a route to handle form submissions
app.post('/submit', (req, res) => {
  // Retrieve form data from the request
  const fullName = req.body.fullName;
  const email = req.body.email;
  const question = req.body.question;

  // Load the existing JSON data from the database file
  const data = JSON.parse(fs.readFileSync('database.json'));

  // Add the new submission to the data
  data.submissions.push({
    fullName,
    email,
    question,
  });

  // Write the updated data back to the database file
  fs.writeFileSync('database.json', JSON.stringify(data, null, 2));

  res.json({ message: 'Form submitted successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
