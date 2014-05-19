var myControllers = angular.module('myControllers', []);

myControllers.controller('LinksController', ['$scope', '$http', function ($scope, $http) {

	$http.get('data/links.json').success(function (data) {
	  $scope.does = data;
  });

  $http.get('data/pages.json').success(function (data) {
    $scope.doing = data;
  });

}]);