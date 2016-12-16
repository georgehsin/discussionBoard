console.log('users controller');
// WE NEED TO ADD A FEW lines of code here!
// How does a controller talk to mongoose and get a model?
// Build out the methods in the friendsControllers below
var mongoose = require('mongoose')
var Users = mongoose.model('Users');

function UsersController(){
  this.index = function(req,res){
    //your code here
    Users.find({}, function(err, results){

      res.json(results);
    })
  };
  this.create = function(req,res){
    //your code here
    Users.create(req.body, function(err, result){
      if(err){
        console.log(err)
      }else{
        console.log('friend was created')
        res.json(result)
      }
    })
  };
}
  
module.exports = new UsersController(); // what does this export?