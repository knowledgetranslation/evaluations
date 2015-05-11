var package = require('./package.json');

var express = require("express");
var app = express();

require('./js/config/express')(app);
require('./js/config/authentication')(app);
require('./js/routes/authentication')(app);
require('./js/routes/general')(app);

var server = app.listen(1234, function() {
  console.log("listening");
});