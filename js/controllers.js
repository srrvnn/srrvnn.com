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

myControllers.controller('ResumeController', ['$scope', '$window', '$http', function ($scope, $window, $http) {

	$http.get('data/does.json')
		.success(function (data) {

			for (var iterateLinks = 0; iterateLinks < data.length; iterateLinks++) {

				var link = data[iterateLinks];

				if (link.name === 'Resume') {

			  		$window.location.replace(link.href);
				}
			}

  		});
}]);