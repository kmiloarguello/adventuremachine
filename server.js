var express = require("express");
var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Adventure Machine' });
});

app.get('/about-me', function (req, res) {
  res.render('index', { title: 'About Camilo' });
});

app.get('/adventure', function (req, res) {
  res.render('index', { title: 'What is it?' });
});

app.listen(process.env.PORT, process.env.IP);