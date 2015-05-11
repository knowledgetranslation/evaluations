/* General express stuff */

var path = require("path");
var Account = require(path.resolve("./js/models/account"));
var passport = require("passport");

module.exports = function(app) {

  app.get("/login", function(req, res) {
    res.render('login', { user: req.user, title: 'Hey', message: 'Hello there!', messages: {1:'one',2:'two',3:'three'}});
  });

  app.post('/login',
    passport.authenticate('local',
      {
        successRedirect: '/dashboard',
        failureRedirect: '/login'
      }
    )
  );

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  app.post('/register', function(req, res, next) {
    Account.register(new Account({ username: req.body.username, firstname: req.body.firstName, lastname: req.body.lastName }), req.body.password, function(err, account) {
        if (err) {
            console.log(err);
            return res.render('register', { account : account });
        }
        passport.authenticate('local', function(err, user, info) {
          if (err) { return next(err); }
          if (!user) { return res.redirect('/login'); }
          req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.redirect('/dashboard');
          });
        })(req, res, next);
    });
  });
};