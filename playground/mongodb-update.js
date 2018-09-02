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


//findOneAndUpdate

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5b8bd0a269c8c9a65d26afb3')
// }, {
//   $set: {
//     completed:false
//   }
// },
//   {
//     returnOriginal: false
//   }).then((result) => {
//     console.log(result);
//   });


db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5b8bd70769c8c9a65d26b13d')
}, {
  $inc: {
    age:10
  }
},
  {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });


  // client.close();
});
