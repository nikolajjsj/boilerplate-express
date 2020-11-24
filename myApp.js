var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// add a /json path that serves json data
app.get('/json', function (req, res) {
  console.log(process.env.message);
  const message =
    process.env.MESSAGE_STYLE === 'uppercase' ? 'HELLO JSON' : 'Hello json';

  res.json({ message: message });
});

module.exports = app;
