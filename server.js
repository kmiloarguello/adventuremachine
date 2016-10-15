var express = require("express");

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index')
});

app.get('/about-me', function (req, res) {
  res.render('index')
});

app.listen(process.env.PORT, process.env.IP);