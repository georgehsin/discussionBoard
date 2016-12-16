console.log('topics controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
var mongoose = require('mongoose')
var Post = mongoose.model('Posts');
var Topic = mongoose.model('Topics');

function PostsController(){
  this.index = function(req,res){
    //your code here
    Post.find({}, function(err, results){

      res.json(results);
    })
  };
  this.create = function(req,res){
    //your code here
    Topic.findOne({_id: req.params.id}, function(err, topic){
        // data from form on the front end
        // console.log(user)
        // console.log(user._id)
        var post = new Post(req.body);
        //  set the reference like this:
        // console.log(topic)
        post._topics = topic._id;
        // now save both to the DB
        topic.posts.push(post);
        // console.log(user)
        // console.log(user.topics[0])
        post.save(function(err){
                topic.save(function(err){
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
  this.delete = function(req,res){
    //your code here
    Post.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      }else{
        res.json({message: "Topic deleted!"});
      }
    })
  };
  this.show = function(req,res){
    //your code here
    Topic.findOne({_id: req.params.id})
      .populate('posts')
      .exec(function(err, results) {
      res.json(results);
    })
  };
}
module.exports = new PostsController(); // what does this export?