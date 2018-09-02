var mongoose = require('mongoose');

// create mongoose model
var Todo = mongoose.model('Todo', {
  // proprties of the model
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default:null
  }
});

// var newTodo = new Todo ({
//   text: 'Cook dinner',
//   completed: true
// });
//
// var otherTodo = new Todo({
//   text: 'Something to do'
//
// });

// newTodo.save().then((doc) => {
//   console.log(`Saved todo ${doc}`);
// }, (error) => {
//   console.log('Unable to save todo');
// });

// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc,undefined,2));
// }, (error) => {
//   console.log(error);
// });

module.exports = {Todo};
