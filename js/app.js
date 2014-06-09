var myApp = angular.module('myApp', [
    'ngRoute',
    'myControllers'
]);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider.
    when('/', {
        templateUrl: 'partials/intro.html',
        controller: 'LinksController'
    }).
    when('/resume', {
        template: '<div></div>',
        controller: 'ResumeController'
    }).
    otherwise({
        redirectTo: '/'
    });

    // enable html5Mode for pushstate ('#'-less URLs)
    // $locationProvider.html5Mode(true);

}]);