User = require("../models/users.js")
exports.create = function(req, res) {
  var user = new User(req.body);
  //debugger;
  user.save(function(err, new_user) {
    res.json({ message: 'Successful user creation.'+ new_user });
  });
  
};