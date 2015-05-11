var path = require("path");
var LocalStrategy = require("passport-local").Strategy;
var Account = require(path.resolve("./js/models/account"));
var passport = require("passport");

module.exports = function(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(Account.authenticate()));
  passport.serializeUser(Account.serializeUser());
  passport.deserializeUser(Account.deserializeUser());
};