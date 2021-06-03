var mongoose = require('mongoose');

var AttributeSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  type: { type: String, default: '' },
  parent: { type: String, default: '' },
  timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('AttributeSchema', AttributeSchema)