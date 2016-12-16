myApp.controller('topicCON', function($scope, $location, usersFactory, postsFactory, topicsFactory, $rootScope, $routeParams) {
    console.log('IN TOPIC controller')
	
    var index = function(){
        topicsFactory.show($routeParams.id, function(data){
            $scope.topic = data
            console.log($scope.topic)
        })
        postsFactory.show($routeParams.id, function(data){
            console.log($routeParams.id)
            console.log(data)
            $scope.posts = data
        })
    }

    index()

    $scope.addAnswer= function(){
        postsFactory.create($routeParams.id , $scope.newanswer, function(){
        })
        index()
    }

    $scope.user = $rootScope.loggedUser
});