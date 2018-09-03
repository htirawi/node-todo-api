// server.js file only responsible for routes
// put space between local imports and library imports
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var{Tank} = require('./models/tank');

var app = express();
const port = process.env.PORT || 3000;

// middlewarde if it's from 3rd party middleware we just access something from the library
// if writing custom middleware it will be a function

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.get('/', (req,res) => {
//   res.send("Hello tirawi");
// })

app.post('/todos', (req,res) => {
  var todo = new Todo ({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  },(error) => {
    res.status(400).send(error)
  });
});



// app.post('/tanks', (req,res) => {
//   var tank = new Tank ({
//     name: req.body.name
//   });
//   tank.save().then((doc) => {
//     res.send(doc);
//   },(error) => {
//     res.status(200).send(error)
//   })
// })

app.get('/todos', (req,res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    });
  }, (error) => {
    res.status(400).send(error);
  });
});


app.get('/todos/:id' , (req,res) => {
  var id = req.params.id;

  if(!ObjectId.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((error) =>
  {
    res.status(400).send()
  });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

app.delete('/todos/:id', (req,res) => {
  var id = req.params.id;

  if(!ObjectId.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndDelete(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((error) =>
  {
    res.status(400).send()
  });

});


app.patch('/todos/:id', (req,res) => {
  var id = req.params.id;
  var body = _.pick(req.body,['text','completed']);

  if(!ObjectId.isValid(id)){
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt= new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;

  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new:true}).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((error) => {
    res.status(400).send();
  })
})

module.exports={app};
