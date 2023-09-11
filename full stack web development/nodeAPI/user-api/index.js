const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Sample user data
let users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

// Function to check if a name already exists
const isNameDuplicate = (name) => {
  return users.some((user) => user.name.toLowerCase() === name.toLowerCase());
};

// API endpoints

// Get all user names as an array
app.get('/users', (req, res) => {
  res.json(users);
});

// Add a new user
app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required.' });
  }

  if (isNameDuplicate(name)) {
    return res.status(409).json({ error: 'Name already exists.' });
  }

  const newUser = {
    id: users.length + 1,
    name,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// Get a user by ID
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }
  res.json(user);
});

// Update a user by ID
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Name is required.' });
  }

  if (isNameDuplicate(name)) {
    return res.status(409).json({ error: 'Name already exists.' });
  }

  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  user.name = name;
  res.json(user);
});

// Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== parseInt(id));
  res.sendStatus(204);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});