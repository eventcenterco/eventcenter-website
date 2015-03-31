var express = require('express');
var app = express();

app.use('/', function(req, res, next) {
  if(req.path != '/') {
    next();
  } else {
    res.redirect('/es/');
  }
});

app.use('/', express.static(__dirname + '/'));
app.listen(process.env.PORT || 5000);
