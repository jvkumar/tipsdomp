// Define all routes in this file

module.exports = function(app) {
  //Load all controllers here
  var UserController = require('../controllers/users');
  //var PlaceController = require('../controllers/places');
  //var TipController = require('../controllers/tips');

  //debugger;
  
  // middleware to use for all requests
  app.use(function(req, res, next) {
    next();
  });

  // Route definition starts
  app.post('/users', UserController.create);
};