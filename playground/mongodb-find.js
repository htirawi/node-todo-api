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

//   db.collection('Todos').find({
//     _id: new ObjectID('5b8bae3194396c08748b87e4')
//   }).toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs,undefined,2));
//   }, (err) => {
//     console.log('Unable to fetch todos',err);
//   });
//
//   // client.close();
// });


// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log('Unable to fetch todos',err);
// });
//
// // client.close();
// });


db.collection('Users').find({name:"Hussein"}).toArray().then((docs) => {
  console.log(JSON.stringify(docs,undefined,2));
}, (err) => {
  console.log('Unable to fetch todos',err);
});

// client.close();
});
