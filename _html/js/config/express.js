var sass = require('node-sass-middleware');
var static = require("express-static");
var cookieParser = require('cookie-parser');
var compress = require('compression');
var bodyParser = require('body-parser');
var path = require('path');
var session = require("express-session");
var mongoose = require('mongoose');
var MongoStore = require("connect-mongo")(session);
var package = require(path.resolve('./package.json'));

module.exports = function(app) {
  mongoose.connect("mongodb://localhost/" + package.name);

  app.use(
    sass({
      src: './public/sass',
      dest: './public/css',
      debug: true,
      //outputStyle: 'compressed',
      prefix: '/css'
    })
  );

  app.use(static(path.resolve("./public")));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(compress());
  app.set('view engine', 'jade');

  /* Mongoose express stuff */

  app.use(session({
      secret: 'big ol secret',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({mongooseConnection: mongoose.connection})
  }));
};