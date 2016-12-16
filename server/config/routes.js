console.log('routes');
// WE NEED TO ADD a few lines of code up here!

var mongoose = require('mongoose');
var Topics = mongoose.model('Topics');
var topics = require('../controllers/topics.js');

var Posts = mongoose.model('Posts');
var posts = require('../controllers/posts.js');

var Users = mongoose.model('Users');
var users = require('../controllers/users.js');



// What is this 'friends' object we are referencing below??
module.exports = function(app){
  app.get('/users', users.index);
  app.post('/users', users.create);

  app.get('/topics', topics.index);
  app.post('/topics/:id', topics.create);
  app.get('/topics/:id', topics.show);
  // app.post('/topics', topics.create);
  // app.put('/topics/:id', topics.update);
  // app.delete('/topics/:id', topics.delete);

  app.post('/posts/:id', posts.create);
  app.get('/posts/:id', posts.show);
}