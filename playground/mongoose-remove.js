const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//   console.log(result);
// });


//Todo.findOneAndRemove
//Todo.findByIdAndRemove

// Todo.findByIdAndRemove('5b8d16c8bd39ab526ea5a005').then((todo) => {
//   console.log(todo);
// });


Todo.findOneAndRemove({_id:'5b8d1719bd39ab526ea5a02e'}).then((todo) => {
  console.log(todo);
});
