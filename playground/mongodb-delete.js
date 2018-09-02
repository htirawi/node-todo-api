// here we pull of MongoClient property from mongodb libray
const {MongoClient, ObjectID} = require('mongodb');


// mongodb://ip:port/db name to connect to
MongoClient.connect('mongodb://localhost:27017/TodoApp' , { useNewUrlParser: true } , (err,client) => {
  if(err){
    return console.log('Unable to connect to Database server');
  }
  console.log('Connected to Database server');
  // pass reference to database that we looking for
  const db = client.db('TodoApp');


//deleteMany
// db.collection('Todos').deleteMany({text:"Walk in street"}).then((result) => {
//   console.log(result);
// });

//deleteOne
// db.collection('Todos').deleteOne({text:"Hello World"}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete ( best one)
// db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
//   console.log(result);
// })


//Challenge

// deleteMany
// db.collection('Users').deleteMany({name:'Hussein'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete
db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5b8bca8169c8c9a65d26ae40')
}).then((result) => {
  console.log(JSON.stringify(result,undefined,2));
})

// client.close();
});
