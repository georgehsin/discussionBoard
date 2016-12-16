myApp.controller('loginCON', function($scope, $location,usersFactory, $rootScope) {

    $scope.login = function (){
        $rootScope.loggedUser = $scope.user
		usersFactory.create($scope.user, function(data){
			$rootScope.loggedUser = data
			$rootScope.userid = data._id
			console.log($rootScope.loggedUser._id)
        })
        $location.url('/index')
    }
});