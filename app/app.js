// var dataApp = angular.module('dataApp', 
// 		  ['ngRoute']);
angular.module('dataApp', ['ngCookies', 'ngResource', 'ngRoute','dataApp.main','dataApp.name']);
angular.module('dataApp.main', []);
angular.module('dataApp.name', []);
angular.module('dataApp').config(['$routeProvider',
    function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'partials/main.html'});
	$routeProvider.when('/name', {templateUrl: 'partials/name.html'});
	
    }
]);

//Setting HTML5 Location Mode
angular.module('dataApp').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);
