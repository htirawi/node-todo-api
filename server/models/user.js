var mongoose = require('mongoose');

// create mongoose model
var User = mongoose.model('User', {
  // proprties of the model
  email: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  }
});

// var newUser = new User ({
//   email: 'aloneheart8@hotmail.com',
// });
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc,undefined,2));
// }, (error) => {
//   console.log(error);
// })
module.exports = {User};
