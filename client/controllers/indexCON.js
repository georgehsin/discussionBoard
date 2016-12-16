myApp.controller('indexCON', function($scope, $location, usersFactory, topicsFactory, $rootScope) {

	var index = function(){
        usersFactory.index(function(data){
            $scope.users = data
            console.log($scope.users)
        })
        topicsFactory.index(function(data){
            $scope.topics = data
            console.log($scope.topics)
        })
    }	

    index()

    $scope.addTopic = function(){
    	topicsFactory.create($rootScope.loggedUser._id ,$scope.newtopic, function(){
        })
        index()
    }

    $scope.user = $rootScope.loggedUser
});