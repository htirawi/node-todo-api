// server.js file only responsible for routes
// put space between local imports and library imports

var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

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
  })
})

app.listen(3000, () => {
  console.log('Listening to port 3000');
})
