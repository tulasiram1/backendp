const express = require('express');

const app = express();

app.use(express.json());

app.post('/', (req, res, next) => {
    // console.log(req.body);
    // console.log(req.headers);
    console.log(req.body);
    console.log(req.get('mode'));
    console.log(req.get('Content-Type'));
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({ status: 'success' });
});


app.get('/', (req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).json({ status: 'success' });
});


module.exports = app;