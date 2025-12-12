const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/data',(req, res) => {
    console.log(req.body);
    res.send(`Data recieved!`);
});

app.listen(5500, () => {
    console.log('Server running on http://localhost:5500');
});