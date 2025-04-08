const User = require('../models/user.model');


function findAll() {
  const result = User.find();
  return result;
}

function findOne(username) {
  const result = User.find({username: username});
  return result;
}

module.exports = { findAll, findOne };