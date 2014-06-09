var myControllers = angular.module('myControllers', []);

myControllers.controller('LinksController', ['$scope', '$http', function ($scope, $http) {

	$http.get('data/does.json')
		.success(function (data) {

	  		$scope.does = data;
  		});

  	$http.get('https://rawgit.com/srrvnn/d508227369c65bc95348/raw/learn.json')
		.success(function (data) {

			$scope.doing = data;
		});
}]);

myControllers.controller('ResumeController', ['$scope', function ($scope) {

	window.location.replace("http://srrvnn.name/docs/SaravananGanesh_Resume.pdf");

}]);