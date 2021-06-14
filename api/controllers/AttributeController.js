var Attribute = require('../models/Attribute');

module.exports = {

  find: function(params, callback) {
    Attribute.find(params, function(err, attributes) {
      if (err) {
        callback(err, null);
        return;
      }

      callback(null, attributes);
    }) 
  },

  findById: function(id, callback) {
    Attribute.findById(id, function(err, attribute) {
      if (err) {
        callback(err, null);
        return;
      }

      callback(null, attribute);
    })
  },

  create: function(params, callback) {
    Attribute.create(params, function(err, attribute) {
      if (err) {
        callback(err, null);
        return;
      }

      callback(null, attribute);
    })
  },

  update: function(id, params, callback) {
    Attribute.findByIdAndUpdate(id, params, { new: true }, function(err, attribute) {
      if (err) {
        callback(err, null);
        return;
      }

      callback(null, attribute);
    })
  },

  destroy: function(id, callback) {
    Attribute.findByIdAndRemove(id, function(err, attribute) {
      if (err) {
        callback(err, null);
        return;
      }

      params = {parentId: id}
      Attribute.find(params, function(err, attributes) {
        if (err) {
          callback(err, null);
          return;
        }

        attributes.forEach(attr => {
          Attribute.findByIdAndRemove(attr._id, function(err) {
            if (err) {
              callback(err, null);
              return;
            }
          })
        });
      }) 

      callback(null, attribute);
    })
  },
}