var Value = require('../models/Value');

module.exports = {

  find: function(params, callback) {
    Value.find(params, function(err, values) {
      if (err) {
        callback(err, null);
        return;
      }

      callback(null, values);
    }) 
  },

  findById: function(id, callback) {
    Value.findById(id, function(err, value) {
      if (err) {
        callback(err, null);
        return;
      }

      callback(null, value);
    })
  },

  create: function(params, callback) {
    Value.create(params, function(err, value) {
      if (err) {
        callback(err, null);
        return;
      }

      callback(null, value);
    })
  },

  update: function(id, params, callback) {
    Value.findByIdAndUpdate(id, params, { new: true }, function(err, value) {
      if (err) {
        callback(err, null);
        return;
      }

      callback(null, value);
    })
  },

  destroy: function(id, callback) {
    Value.findByIdAndRemove(id, function(err) {
      if (err) {
        callback(err, null);
        return;
      }

      callback(null, null);
    })
  },
}