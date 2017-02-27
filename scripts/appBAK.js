/*jshint unused: vars */
//define(['angular', 'controllers/main', 'controllers/about',]/*deps*/, function (angular, MainCtrl, AboutCtrl)/*invoke*/ {
// 'use strict';
/**
 * @ngdoc overview
 * @name sampleAngularJsProjectApp
 * @description
 * # sampleAngularJsProjectApp
 *
 * Main module of the application.
 */
var myApp = angular.module('sampleAngularJsProjectApp', [ 'ui.router' ]);
/*.config(function ($urlRouterProvider) {
 $urlRouterProvider
 .when('/', {
 templateUrl: 'views/main.html',
 controller: 'MainCtrl',
 controllerAs: 'main'
 })
 .when('/about', {
 templateUrl: 'views/about.html',
 controller: 'AboutCtrl',
 controllerAs: 'about'
 })
 .otherwise({
 redirectTo: '/'
 });*/
myApp.config([ "$urlRouterProvider", "$stateProvider",
		function($urlRouterProvider, $stateProvider) {

			$stateProvider.state({
				name : "main",
				url : "/",
				templateUrl : "views/main.html"
			});
		} ]);
// });
