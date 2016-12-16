console.log('topics controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
var mongoose = require('mongoose')
var Topic = mongoose.model('Topics');
var User = mongoose.model('Users');

function TopicsController(){
  this.index = function(req,res){
    //your code here
    Topic.find({})
      .populate('_users')
      .exec(function(err, results) {
      res.json(results);
    })
  };
  this.create = function(req,res){
    //your code here
    User.findOne({_id: req.params.id}, function(err, user){
        // data from form on the front end
        // console.log(user)
        // console.log(user._id)
        var topic = new Topic(req.body);
        //  set the reference like this:
        // console.log(topic)
        topic._users = user._id;
        // now save both to the DB
        user.topics.push(topic);
        // console.log(user)
        // console.log(user.topics[0])
        topic.save(function(err){
                user.save(function(err){
                     if(err) {
                          console.log('Error');
                     } else {
                          console.log("Topic created");
                          res.redirect('/');
                     }
                 });
         });
    });
  };
  
  this.show = function(req,res){
    //your code here
    Topic.findOne({_id: req.params.id})
      .populate('_users')
      .exec(function(err, results) {
      res.json(results);
    })
  };
}
module.exports = new TopicsController(); // what does this export?