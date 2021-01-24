'use strict';
const User = require('../models/user.model');
exports.findById = function(req, res) {
    User.findById(req.params.id, function(err, user) {
      if (err)
      res.send(err);
      res.json(user);
    });
  };
    