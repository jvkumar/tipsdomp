var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tipsdom_dev');

var schema = new mongoose.Schema({
  full_name: String,
  city: { type: [String], index: true },
  age: Number
});

//+++++++++++ Define all instance methods +++++++++++

// Get list of all adult users
schema.methods.GetAdultUsers = function (callback) {
  return this.model('User').find({ age: { $gte: 18 } }, callback);
}


//+++++++++++ Define all static methods +++++++++++

//Find a user by name
schema.statics.findByName = function (name, callback) {
  return this.find({ name: new RegExp(name, 'i') }, callback);
}

//+++++++++Finally export the model +++++++++++++++
module.exports = mongoose.model('User', schema);