console.log('Topics Factory');
myApp.factory('topicsFactory', ['$http', function($http) {
  // constructor for our factory
  var users = [];
  var user = {};
  

  function TopicsFactory(){
    var _this = this;
    this.create = function(id, topic, callback){
        console.log("INSIDE OF FACTORY")
        console.log(topic)
        $http.post('/topics/' +id, topic).then(function(returned_data){
            console.log(returned_data.data);
            if (typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        });
    };
    this.update = function(id ,newfriend, callback){ // what parameters do we need?
      $http.put('/topics/' +id, newfriend).then(function(returned_data){
            console.log(returned_data.data);
            if (typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        })
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/topics').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback); 
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id ,callback){// what parameters do we need?
        $http.delete('/topics/' +id).then(function(returned_data){
            console.log(returned_data.data);
            if (typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        })
    };
    this.show = function(id ,callback){// what parameters do we need?
        $http.get('/topics/' +id).then(function(returned_data){
            console.log(returned_data.data);
            if (typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        })
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(users);
    };
    this.getFriend = function(callback){
        callback(user);
    };
  }
  console.log(new TopicsFactory());
  return new TopicsFactory();
}]);