var myApp = angular.module('myApp', ['ngRoute']);

    //  use the config method to set up routing:
    myApp.config(function ($routeProvider) {
        $routeProvider
        .when('/',{
            templateUrl: 'partials/login.html',
            controller: 'loginCON'
        })
        .when('/index',{
            templateUrl: 'partials/index.html',
            controller: 'indexCON'
        })
        .when('/topic/:id',{
            templateUrl: 'partials/topic.html',
            controller: 'topicCON'
        })
        .when('/user/:id',{
            templateUrl: 'partials/user.html',
            controller: 'userCON'
        })
        .otherwise({
          redirectTo: '/'
        });
    });

myApp.run( function($rootScope, $location) {

    // register listener to watch route changes
    $rootScope.$on( "$locationChangeStart", function(event, next, current) {
        if ( $rootScope.loggedUser == null ) {
            console.log('please log in');
            $location.url( "/" );
        }
        else if ( next.templateUrl == "partials/login.html" && $rootScope.loggedUser != null) {
                    console.log('already logged in');
                    $location.url( "/new" );
        }
        else {
                // not going to #login, we should redirect now
                    console.log('pass');
        }
    })
})
