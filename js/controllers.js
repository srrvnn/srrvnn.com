var myControllers = angular.module('myControllers', []);

myControllers.controller('LinksController', ['$scope', '$http', function ($scope, $http) {

	$scope.links = [		
	    {
	        "name":"GitHub",
	        "href":"http://github.com/srrvnn",
	        "tags":["programming","opensource","leisure","technical","resume","code","samples"]
	    },
	    {
	        "name":"Quora",
	        "href":"http://www.quora.com/Saravanan-Ganesh",
	        "tags":["forum","write","blog"]
	    },
	    {
	        "name":"Stackoverflow",
	        "href":"http://stackoverflow.com/users/1700816/srrvnn",
	        "tags":["code","technical"]
	    },
	    {
	        "name":"Medium",
	        "href":"https://medium.com/@srrvnn",
	        "tags":["writing","bookmarks"]
	    },
	    {
	        "name":"Twitter",
	        "href":"http://twitter.com/srrvnn",
	        "tags":["social","writing","tweet","hi","hello","follow"]
	    },
	    {
	        "name":"LinkedIn",
	        "href":"http://www.linkedin.com/in/srrvnn",
	        "tags":["social","technical","resume"]
	    },
	    {
	        "name":"Wordpress",
	        "href":"http://srrvnn.wordpress.com",
	        "tags":["blog","technical","code"]
	    },
	    {
	        "name":"Facebook",
	        "href":"http://facebook.com/srrvnn",
	        "tags":["social","life","friend"]
	    },
	    {
	        "name":"Email",
	        "href":"mailto:srrvnn@live.com",
	        "tags":["contact","email","outlook","message","gmail","mail"]
	    },
	    {
	        "name":"Resume",
	        "href":"https://onedrive.live.com/redir?resid=8CDD6272DC7CE21E%2199484",
	        "tags":["resume","job","about"]
	    }
  	];

  	$scope.pages = [

  		{
  			"date":"05/14/2014",
  			"title":"	Working on his own hackathon project: ListentoMuse",
  			"url":"http://listentomuse.us"
  		},
  		{
  			"date":"05/14/2014",
  			"title":"Reading: Getting Started with Web Audio API",
  			"url":"http://www.html5rocks.com/en/tutorials/webaudio/intro/"
  		},
  		{
  			"date":"05/14/2014",
  			"title":"Reading: CSS Sprites: What They Are, Why They’re Cool, and How To Use Them",
  			"url":"http://css-tricks.com/css-sprites/"	
  		},
  		{
  			"date":"05/14/2014",
  			"title":"Reading: Differences Between jQuery .bind() vs .live() vs .delegate() vs .on()",
  			"url":"http://www.elijahmanor.com/differences-between-jquery-bind-vs-live-vs-delegate-vs-on/"	
  		},
  		{
  			"date":"05/14/2014",
  			"title":"Reading: A Pure CSS3 Cycling Slideshow jQuery",
  			"url":"http://www.smashingmagazine.com/2012/04/25/pure-css3-cycling-slideshow/"	  			
  		}
  	];

  // $http.get('data/data.json').success(function (data) {
  //   $scope.links = data;
  // });

}]);