const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  try {
    if (!users[userId]) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.send({ user: users[userId] });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Server error' });
  }
});

const users = {
  '1': { id: 1, name: 'John Doe' },
  '2': { id: 2, name: 'Jane Doe' }
};