var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(function (req, res, next) {
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

app.get(
  '/now',
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

app.get('/:word/echo', function (req, res) {
  res.json({ echo: req.params.word });
});

app
  .route('/name')
  .get(function (req, res) {
    const { first: firstName, last: lastName } = req.query;
    res.json({ name: `${firstName} ${lastName}` });
  })
  .post(function (req, res) {});

module.exports = app;
