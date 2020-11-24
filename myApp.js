var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// add a /json path that serves json data
app.get('/json', function (req, res) {
  process.env.MESSAGE_STYLE === 'uppercase'
    ? res.json({ message: 'HELLO JSON' })
    : res.json({ message: 'Hello json' });
});

module.exports = app;
