var express = require('express');
var app = express();

console.log('Hello World');

const path = '/views/index.html';

app.get('/', (req, res) => res.send(path));

module.exports = app;
