var myApp = angular.module('myApp', [
    'ngRoute',
    'myControllers'
]);

// myApp.config(['$routeProvider', function($routeProvider) {
//     $routeProvider. 
//     when('/index', {
//         templateUrl: 'partials/list.html',
//         controller: 'ListController'
//     }). 
//     otherwise({
//         redirectTo: '/index'
//     });
// }]);