// let's you to connect to mongo server
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');


//Destructuring
// var user = {name:'Hussein', age:30};
// var {name} = user;
// console.log(name);

// here we pull of MongoClient property from mongodb libray
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);


// Method 1

// mongodb://ip:port/db name to connect to
MongoClient.connect('mongodb://localhost:27017/TodoApp' , { useNewUrlParser: true } , (err,client) => {
  if(err){
    return console.log('Unable to connect to Database server');
  }
  console.log('Connected to Database server');
  // pass reference to database that we looking for
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: ' Something to to',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert ', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined,2));
  // });


  // db.collection('Users').insertOne({
  //   name: 'Hussein Tirawi',
  //   age: 30,
  //   location: 'Amman'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert ', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined,2));
  //   // console.log(result.ops[0]._id.getTimestamp());
  //   // console.log(result.ops[0]._id);
  //   // console.log(result.ops[0]._id.generate());
  //
  //
  // });

  client.close();
});




// Method 2

// // Connection URL
// // in production it maybe aws url or heroku url
// const url = 'mongodb://localhost:27017';
//
// // Database Name
// const dbName = 'myproject';
//
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//
//   client.close();
// });
