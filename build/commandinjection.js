//added to trigger the dast workflow
const express = require('express');
const app = express();
const { exec } = require('child_process');

app.get('/ping', (req, res) => {
    const host = req.query.host;
    exec(`ping -c 4 ${host}`, (error, stdout, stderr) => {
        if (error) {
            res.send(`Error: ${stderr}`);
        } else {
            res.send(`Result: ${stdout}`);
        }
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
