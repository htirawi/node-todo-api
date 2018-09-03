
var mongoose = require('mongoose');

// create mongoose model
var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tanks', schema);


module.exports = {Tank};
