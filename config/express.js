var express = require('express');
var bodyParser = require('body-parser');

module.exports = function() {
  var app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
 	//app.set('views', './app/views'); set a config value here

  //Add router
  require('../app/routes/index.js')(app);
  return app;
};