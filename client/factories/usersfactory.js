console.log('Users Factory');
myApp.factory('usersFactory', ['$http', function($http) {
  // constructor for our factory
  var users = [];
  var users = {};
  

  function UsersFactory(){
    var _this = this;
    this.create = function(user, callback){
        console.log("INSIDE OF FACTORY")
        console.log(user)
        $http.post('/users', user).then(function(returned_data){
            console.log(returned_data.data);
            if (typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        });
    };
    this.index = function(callback){
      //call this method if you want to update or set the friends variable
      $http.get('/users').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback); 
 //But only if you only want to run the callback from the controller.
    };
  }
  console.log(new UsersFactory());
  return new UsersFactory();
}]);