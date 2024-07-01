// server.js
const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    // Insecurely fetching user data by ID
    const user = database.getUserById(userId);
    res.send(`User Data: ${JSON.stringify(user)}`);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
