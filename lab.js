const HTTP_PORT = process.env.PORT || 3000;
 
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hello world!");
});

app.listen(HTTP_PORT);