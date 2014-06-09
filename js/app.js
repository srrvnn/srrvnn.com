var myApp = angular.module('myApp', [
    'ngRoute',
    'myControllers'
]);

myApp.config(['$routeProvider', function($routeProvider) {
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
}]);