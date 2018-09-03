const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b8cee2ffc8e283e841cd64cf';
//
// if(!ObjectId.isValid(id)){
//   console.log('Object ID is not valid');
// }

//
// Todo.find({
//   _id : id
// }).then((todos) => {
//   console.log('Todos',JSON.stringify(todos,undefined,2));
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo) => {
//   console.log('Todo',JSON.stringify(todo,undefined,2));
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log("ID NOT FOUND");
//   }
//   console.log('TodoById',JSON.stringify(todo,undefined,2));
// }).catch((error) => console.log(error));


//challenge
User.findById('5b8bf8f1e9ce4622446fafcf').then((user) => {
  if(!user){
    return console.log("USER NOT FOUND");
  }
  console.log('UserEmailById',JSON.stringify(user.email,undefined,2))
},(error) => {
  console.log(error);
});
