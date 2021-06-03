var mongoose = require('mongoose');

var ValueSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  value: { type: String, default: '' },
  parent: { type: String, default: '' },
  timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('ValueSchema', ValueSchema)