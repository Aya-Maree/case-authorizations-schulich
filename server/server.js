const express = require('express');
const { connect } = require('./db');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`);
    const { client, db } = await connect();
});