const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to devops app using docker and jenkins");
});

app.listen(3000,() => console.log('app is running at 3000'));