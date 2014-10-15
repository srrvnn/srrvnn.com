var myControllers = angular.module('myControllers', []);

myControllers.controller('ListController', ['$scope', '$http', function ($scope, $http) {

  $http.get('data/data.json').success(function (data) {
    $scope.links = data;
  });  

}]);