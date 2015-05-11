/* General express stuff */

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render('index', {user: req.user});
  });

  app.get("/dashboard", function(req, res) {
    res.render('dashboard', {user: req.user});
  });

  app.get("/register", function(req, res) {
    console.log(req.user);
    res.render('register');
  });

  app.get("/form", function(req, res) {
    console.log(req.user);
    res.render('peerInput');
  });

  app.get("/selfEvaluation", function(req, res) {
    console.log(req.user);
    res.render('selfEvaluation');
  });

  app.get("/peerInput", function(req, res) {
    console.log(req.user);
    res.render('peerInput');
  });

  app.get("/performanceAppraisal", function(req, res) {
    console.log(req.user);
    res.render('performanceAppraisal');
  });
};